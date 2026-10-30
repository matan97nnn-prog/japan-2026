import type { Page } from "./route";

export const NAV_LABEL: Record<Page | "home" | "more", { en: string; he: string }> = {
  home: { en: "Home", he: "בית" },
  plan: { en: "Plan", he: "התוכנית" },
  map: { en: "Maps", he: "מפות" },
  food: { en: "Food", he: "אוכל" },
  places: { en: "Places", he: "מקומות" },
  stays: { en: "Hotels", he: "מלונות" },
  info: { en: "Tips & info", he: "טיפים ומידע" },
  more: { en: "More", he: "עוד" }
};
