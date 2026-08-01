/**
 * One-shot Gemini `generateContent`. Optionally attaches the Google
 * Search tool — only the REST path supports that; Gemini Live cannot
 * use the same tool bundle, which is why "Italian voice" and "web search"
 * are separate actions in the UI.
 *
 * Docs: https://ai.google.dev/gemini-api/docs/google-search
 */

import type { ChatTurn } from "./chatHistory";

// gemini-2.5-flash-lite returns a hard 404 for newer API keys
// ("no longer available to new users" — confirmed via a live error
// from a real key, not a guess). gemini-2.5-flash isn't restricted
// that way, so it goes first; gemini-2.0-flash still resolves (just
// quota-limited on free tier) so it's a reasonable second attempt.
const MODELS_TO_TRY = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.5-flash-lite"] as const;

const MAX_REST_HISTORY_TURNS = 40;

function extractTextFromCandidate(candidate: unknown): string {
  if (!candidate || typeof candidate !== "object") return "";
  const c = candidate as { content?: { parts?: unknown[] } };
  const parts = c.content?.parts;
  if (!Array.isArray(parts)) return "";
  const chunks: string[] = [];
  for (const p of parts) {
    if (!p || typeof p !== "object") continue;
    if ((p as { thought?: boolean }).thought === true) continue;
    const text = (p as { text?: string }).text;
    if (typeof text === "string" && text.length) chunks.push(text);
  }
  return chunks.join("\n").trim();
}

export interface GroundedReplyParams {
  apiKey: string;
  systemInstruction: string;
  userMessage: string;
  signal?: AbortSignal;
  /** When true, attach `google_search` so the model may query the web. */
  useGoogleSearch?: boolean;
  /** Prior completed turns (same chat). Current `userMessage` is appended last. */
  history?: ChatTurn[];
}

/**
 * Returns the model's plain-text reply. Search metadata is ignored
 * for v1 — we keep the bubble simple; sources can be added later.
 */
export async function generateGroundedReply(params: GroundedReplyParams): Promise<string> {
  const useSearch = params.useGoogleSearch === true;
  let lastErr = "No model accepted the request.";

  const prior = (params.history ?? []).slice(-MAX_REST_HISTORY_TURNS);
  const contents: Array<{ role: string; parts: { text: string }[] }> = prior.map(
    m => ({ role: m.role, parts: [{ text: m.text }] })
  );
  contents.push({
    role: "user",
    parts: [{ text: params.userMessage }]
  });

  for (const model of MODELS_TO_TRY) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(params.apiKey)}`;
    const body: Record<string, unknown> = {
      systemInstruction: { parts: [{ text: params.systemInstruction }] },
      contents,
      generationConfig: {
        temperature: 0.45,
        maxOutputTokens: 1200
      }
    };
    if (useSearch) {
      body.tools = [{ google_search: {} }];
    }

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: params.signal
      });
    } catch (e) {
      lastErr = e instanceof Error ? e.message : String(e);
      console.warn(`[Gemininio] ${model} network error:`, lastErr);
      continue;
    }

    const raw = await res.text();
    if (!res.ok) {
      lastErr = raw.slice(0, 400) || `HTTP ${res.status}`;
      console.warn(`[Gemininio] ${model} HTTP ${res.status}:`, lastErr);
      continue;
    }

    let json: unknown;
    try {
      json = JSON.parse(raw);
    } catch {
      lastErr = "Invalid JSON from Gemini.";
      console.warn(`[Gemininio] ${model} bad JSON:`, raw.slice(0, 400));
      continue;
    }

    const root = json as {
      candidates?: unknown[];
      error?: { message?: string };
    };
    if (root.error?.message) {
      lastErr = root.error.message;
      console.warn(`[Gemininio] ${model} API error:`, lastErr);
      continue;
    }

    const candidate = root.candidates?.[0];
    const text = extractTextFromCandidate(candidate);
    if (text) return text;

    const block = candidate as { finishReason?: string } | undefined;
    lastErr = block?.finishReason
      ? `Model stopped (${block.finishReason}). Try rephrasing.`
      : "Empty reply from model.";
    console.warn(`[Gemininio] ${model} gave no usable text:`, lastErr);
  }

  throw new Error(lastErr);
}

export async function generateChatTitle(apiKey: string, firstMessage: string, lang: "en" | "he"): Promise<string> {
  const prompt =
    lang === "he"
      ? "כתוב כותרת קצרה מאוד (עד 5 מילים) לשיחה שמתחילה במשפט הבא. החזר רק את הכותרת, בלי מירכאות או נקודה בסוף:\n\n"
      : "Write a very short title (max 5 words) for a conversation starting with this message. Return ONLY the title, no quotes, no period:\n\n";

  for (const model of MODELS_TO_TRY) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const body = {
      contents: [{ role: "user", parts: [{ text: prompt + firstMessage }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 20 }
    };

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch {
      continue;
    }

    if (!res.ok) continue;

    let json: unknown;
    try {
      json = await res.json();
    } catch {
      continue;
    }

    const root = json as { candidates?: unknown[]; error?: { message?: string } };
    if (root.error?.message) continue;

    const candidate = root.candidates?.[0];
    const text = extractTextFromCandidate(candidate);
    if (text) {
      const clean = text.replace(/^["']|["']$/g, '').replace(/\.$/, '').trim();
      if (clean) return clean;
    }
  }

  // fallback to a generic title if API fails
  return lang === "he" ? "שיחה חדשה" : "New Chat";
}
