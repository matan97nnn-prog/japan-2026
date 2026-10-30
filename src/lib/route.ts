import { useEffect, useState } from "react";
import { itinerary } from "../data/itinerary";

const MAX_DAY = itinerary.length;

export const PAGES = ["plan", "transit", "map", "food", "places", "stays", "phrases", "info"] as const;
export type Page = (typeof PAGES)[number];

export type Route =
  | { kind: "home" }
  | { kind: "chapter"; day: number }
  | { kind: "page"; page: Page };

export function parseHash(hash: string): Route {
  const m = hash.match(/^#chapter\/(\d+)$/);
  if (m) {
    const day = parseInt(m[1], 10);
    if (day >= 1 && day <= MAX_DAY) return { kind: "chapter", day };
  }
  const p = hash.match(/^#\/(\w+)$/);
  if (p && (PAGES as readonly string[]).includes(p[1])) return { kind: "page", page: p[1] as Page };
  return { kind: "home" };
}

/** Switch tab. Home clears the hash; every tab starts at the top. */
export function navigatePage(page: Page | "home") {
  if (page === "home") {
    history.pushState(null, "", window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = `/${page}`;
  }
  window.scrollTo(0, 0);
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== "undefined" ? parseHash(window.location.hash) : { kind: "home" }
  );
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function navigateChapter(day: number) {
  window.location.hash = `chapter/${day}`;
}

export function navigateHome(opts?: { scrollToTrip?: boolean }) {
  // pushState preserves the chapter in history (so browser forward still works)
  history.pushState(null, "", window.location.pathname + window.location.search);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
  if (opts?.scrollToTrip) {
    setTimeout(() => {
      document.getElementById("trip")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

const REMEMBERED_KEY = "japan:lastChapter";

export function rememberChapter(day: number) {
  try {
    sessionStorage.setItem(REMEMBERED_KEY, String(day));
  } catch {
    /* ignore */
  }
}

export function getRememberedChapter(): number | null {
  try {
    const v = sessionStorage.getItem(REMEMBERED_KEY);
    if (!v) return null;
    const n = parseInt(v, 10);
    return n >= 1 && n <= MAX_DAY ? n : null;
  } catch {
    return null;
  }
}
