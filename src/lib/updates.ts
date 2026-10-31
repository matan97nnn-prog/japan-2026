import { useEffect, useState } from "react";
import raw from "../data/groupUpdates.json";

/* Updates from the Japan travellers' Facebook group, written by a daily
 * scheduled task (newest last in the file). "Seen" is per device: the
 * bell counts updates newer than the last one opened here. */

export interface GroupUpdate {
  id: string;
  date: string;
  type: "alert" | "closed" | "event" | "tip";
  he: string;
  en?: string;
  day?: number;
  link?: string;
}

const RANK = { alert: 0, closed: 1, event: 2, tip: 3 };

// Newest day first; within a day the important ones first.
export const updates: GroupUpdate[] = [...(raw as GroupUpdate[])].sort(
  (a, b) => b.date.localeCompare(a.date) || (RANK[a.type] ?? 3) - (RANK[b.type] ?? 3) || a.id.localeCompare(b.id)
);

const KEY = "japan-updates-seen-v1";
const EVENT = "japan-updates-seen";

function readSeen(): string {
  try {
    return localStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

export function useSeen(): [string, () => void] {
  const [seen, setSeen] = useState(readSeen);
  useEffect(() => {
    const on = () => setSeen(readSeen());
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);
  const markAll = () => {
    const latest = updates.reduce((m, u) => (u.id > m ? u.id : m), "");
    try {
      localStorage.setItem(KEY, latest);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(EVENT));
  };
  return [seen, markAll];
}

export const isNew = (u: GroupUpdate, seen: string) => u.id > seen;
