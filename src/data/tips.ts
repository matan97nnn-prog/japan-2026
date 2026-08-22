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
    title: "Kamikochi bans private cars — park at Sawando",
    body:
      "The Kamikochi valley itself is closed to private vehicles to protect it. Park at Sawando and take the shuttle bus or taxi in — reserve a spot ahead of the day if possible, since it's the only way in or out.",
    severity: "warning"
  },
  {
    id: "takkyubin-shipping-plan",
    title: "Takkyubin: three planned luggage shipments",
    body:
      "Big suitcases travel by Takkyubin door-to-door service instead of being carried on every train and drive: (1) da Haus Shinjuku → Ryokan Warabino (Takayama), sent the morning of Nov 4, arriving in 3–4 days; (2) Matsumoto Hotel Kagetsu → Richmond Hotel Premier Kyoto Shijo, sent Nov 6; (3) Richmond Hotel Kyoto → The Gate Hotel Kaminarimon (Tokyo), sent Nov 13 or 14. Keep medications, chargers, a change of clothes and any documents in the bag that travels with you instead.",
    severity: "info"
  },
  {
    id: "jr-pass-nozomi",
    title: "JR Pass covers Hikari and Kodama — never Nozomi",
    body:
      "A 14-day JR Pass is the right call for this trip's long legs — Kanazawa↔Kyoto and Kyoto↔Tokyo, plus some local JR lines. It does not cover the Nozomi Shinkansen class; boarding one with the pass isn't valid. On the Kyoto→Tokyo leg specifically, choose Hikari.",
    severity: "warning"
  },
  {
    id: "nov3-holiday-crowds",
    title: "Nov 3 is Culture Day — a national holiday",
    body:
      "The Nikko day trip lands on Bunka no Hi (Culture Day), a Japanese public holiday. Nikko and the trains to it get significantly busier than a normal weekday — an early departure and reserved seats aren't optional today.",
    severity: "warning"
  },
  {
    id: "onsen-tattoos",
    title: "Onsen & tattoos — check before you go",
    body:
      "Many traditional onsen and ryokan baths still refuse entry to visitors with visible tattoos, a legacy of tattoos' association with organized crime. Some are relaxing the rule or offer private baths as a workaround — ask directly with the Hakone or Takayama ryokan if this applies to anyone in the group.",
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
      "Ryokan, many restaurants, temples and any home all have a genkan (entryway) where shoes come off, often with slippers provided. Wear socks without holes and shoes that slip on and off easily — with three ryokan stays on this trip, you'll be doing this often.",
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
      "Cards and IC cards are widely accepted in cities now, but small izakaya, temple grounds, morning markets and rural spots (Nikko, the Fuji lakes, Takayama, gas stations along the drive) are still often cash-only. 7-Eleven and Japan Post Bank ATMs reliably accept foreign cards for withdrawals.",
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
    title: "Reserve seats ahead — this is peak autumn foliage season",
    body:
      "Early-to-mid November is peak koyo (autumn leaf) season and a busy domestic travel period. Reserve seats a few days ahead for the Tobu train to Nikko, the Thunderbird from Kanazawa to Kyoto, and the Hikari Shinkansen from Kyoto to Tokyo, rather than relying on unreserved cars, which can fill standing-room-only.",
    severity: "warning"
  }
];
