import type { Tip } from "./types";

export const tips: Tip[] = [
  {
    id: "car-pickup-documents",
    title: "Car pickup, Odawara — 3 documents, no exceptions",
    body:
      "Picking up the rental car (Toyota Rent a Car, confirmation #99910376400, at Odawara Station) requires all three: the original Israeli driving license, an International Driving Permit (IDP), and a passport with the Japan entry stamp. Without any one of them, the counter cannot hand over the car. Keep all three together and easy to reach — not buried in a checked bag.",
    severity: "critical"
  },
  {
    id: "car-return-kanazawa",
    title: "Car return is in Kanazawa, not Takayama",
    body:
      "The booked confirmation has the rental car returned at Kanazawa Station (Shinkansen East Exit) by 20:00 on Nov 9 — after driving through Shirakawa-go that day. It stays with the group through both Takayama nights. Some earlier planning notes mention returning it in Takayama instead; that's outdated — go with the actual booking.",
    severity: "critical"
  },
  {
    id: "driving-on-the-left",
    title: "Driving is on the left — and the car has an ETC card built in",
    body:
      "Japan drives on the left, the opposite of Israel — take it slow leaving the Odawara rental lot. The car's built-in ETC card handles expressway tolls automatically; there's no need for cash at toll gates. Full insurance including NOC (no deductible) is already included in the booking.",
    severity: "warning"
  },
  {
    id: "kamikochi-no-private-cars",
    title: "Kamikochi bans private cars — park at Hirayu",
    body:
      "The valley is closed to private cars. Since we continue to Takayama, park at Hirayu (Akandana) and take the bus up (~25 min). Last bus down is around 17:30 — check the timetable. Kamikochi closes for the season on 15 Nov.",
    severity: "warning"
  },
  {
    id: "takkyubin-shipping-plan",
    title: "Takkyubin: send the big suitcases ahead",
    body:
      "Suitcases go door to door so we travel light: (1) Keihan Ginza → fav Hida Takayama, sent the morning of 4.11 (arrives in 2–3 days); (2) from Takayama or Kanazawa → the Kyoto hotel, once chosen; (3) Kyoto → the last Tokyo hotel. Keep medicine, chargers, documents and a change of clothes with you.",
    severity: "info"
  },
  {
    id: "jr-pass-nozomi",
    title: "Shinkansen: Hikari yes, Nozomi no (with a JR Pass)",
    body:
      "If we buy a JR Pass, it covers Hikari and Kodama but not Nozomi — take Hikari from Kyoto to Tokyo. Kanazawa → Kyoto now needs a change at Tsuruga (Shinkansen, then Thunderbird). Compare the pass with single tickets before buying.",
    severity: "warning"
  },
  {
    id: "nov3-holiday-crowds",
    title: "3.11 is Culture Day — a national holiday",
    body:
      "Bunka no Hi celebrates culture and the arts. Meiji Jingu closes its autumn festival with yabusame (horseback archery), usually around 13:00, free. Expect crowds at shrines and Shibuya; Tsukiji market is likely closed. Book Shibuya Sky ahead.",
    severity: "warning"
  },
  {
    id: "onsen-tattoos",
    title: "Onsen & tattoos — check before you go",
    body:
      "Many onsen still refuse visible tattoos. Private (kashikiri) baths are the easy workaround — Hirayu no Mori and several Hakone baths offer them.",
    severity: "warning"
  },
  {
    id: "no-tipping",
    title: "Tipping isn't done — and can cause confusion",
    body:
      "Japan has no tipping culture, in restaurants, taxis or ryokan. Excellent service is simply the standard; leaving cash on the table is likely to have staff chase after you to return it. Pay exactly what's on the bill.",
    severity: "info"
  },
  {
    id: "shoes-off",
    title: "Shoes off indoors — watch for the genkan",
    body:
      "Onsen, many restaurants and temples have a genkan where shoes come off. Socks without holes and shoes that slip on and off easily.",
    severity: "info"
  },
  {
    id: "quiet-trains",
    title: "Trains are for quiet — phones on silent, calls in the vestibule only",
    body:
      "Phone calls on trains are considered rude; switch to 'manner mode' (silent) the moment you board. Talking is fine at a normal volume, but loud conversation and video calls draw stares. If a call is unavoidable, step into the area between cars.",
    severity: "info"
  },
  {
    id: "cash-still-needed",
    title: "Carry cash — not everywhere takes card",
    body:
      "Cards and IC cards are widely accepted in cities now, but small izakaya, temple grounds, morning markets and rural spots (the Fuji lakes, Takayama, Kurama, gas stations along the drive) are still often cash-only. 7-Eleven and Japan Post Bank ATMs reliably accept foreign cards for withdrawals.",
    severity: "warning"
  },
  {
    id: "no-public-bins",
    title: "Public trash cans are rare — carry it until a konbini",
    body:
      "Japan is spotless despite very few public trash bins, a legacy of a 1995 subway attack that led to their removal. Carry wrappers and empty bottles until you pass a convenience store, which almost always has a bin by the entrance.",
    severity: "info"
  },
  {
    id: "reserve-seats-foliage-season",
    title: "Reserve seats — it's autumn foliage season",
    body:
      "Early-to-mid November is busy. Reserve the Kanazawa → Kyoto and Kyoto → Tokyo trains a few days ahead, with luggage space.",
    severity: "warning"
  }
];
