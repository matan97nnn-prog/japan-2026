import type { EmergencyGroup } from "./types";

export const emergencyGroups: EmergencyGroup[] = [
  {
    title: "Japan — emergency numbers",
    items: [
      { label: "Police", value: "110", type: "phone", detail: "Limited English — speak slowly, or say 'English please'" },
      { label: "Fire & ambulance", value: "119", type: "phone", detail: "Limited English available" },
      {
        label: "Japan Visitor Hotline (English, 24/7)",
        value: "050-3816-2787",
        type: "phone",
        detail: "Tourist hotline for emergencies, disasters and general help in English"
      },
      {
        label: "Japan Helpline (English, 24/7)",
        value: "0570-000-911",
        type: "phone",
        detail: "Non-profit English-language emergency assistance line for visitors"
      }
    ]
  },
  {
    title: "Hospitals — Tokyo",
    items: [
      {
        label: "St. Luke's International Hospital",
        value: "9-1 Akashi-cho, Chuo City, Tokyo",
        detail: "Major hospital with an international patient department and English-speaking staff",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=35.6683,139.7808"
      },
      {
        label: "Tokyo Medical and Surgical Clinic",
        value: "32 Mori Bldg, 3-4-30 Shiba-koen, Minato City, Tokyo",
        detail: "English-speaking private clinic, popular with foreign residents and travellers",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=35.6564,139.7454"
      }
    ]
  },
  {
    title: "Hospitals — Kyoto / Nara",
    items: [
      {
        label: "Japanese Red Cross Kyoto Daiichi Hospital",
        value: "15-749 Honmachi, Higashiyama Ward, Kyoto",
        detail: "Major hospital with an ER, close to central Kyoto",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=34.9889,135.7770"
      },
      {
        label: "Nara Medical University Hospital",
        value: "840 Shijo-cho, Kashihara, Nara",
        detail: "Main teaching hospital serving the Nara area",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=34.5219,135.7994"
      }
    ]
  },
  {
    title: "Hospitals — Hakone / Fuji / Matsumoto / Takayama",
    items: [
      {
        label: "Hakone Hospital",
        value: "160 Miyanoshita, Hakone, Kanagawa",
        detail: "Small local hospital serving the Hakone area",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=35.2431,139.0472"
      },
      {
        label: "Fuji-Yoshida Municipal Medical Center",
        value: "2-11-1 Kamiyoshida, Fujiyoshida, Yamanashi",
        detail: "Main hospital serving the Fuji Five Lakes area",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=35.4867,138.8064"
      },
      {
        label: "Shinshu University Hospital, Matsumoto",
        value: "3-1-1 Asahi, Matsumoto, Nagano",
        detail: "Major teaching hospital with a full emergency department",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.2274,137.9506"
      },
      {
        label: "Takayama Red Cross Hospital",
        value: "3-11 Tenmancho, Takayama, Gifu",
        detail: "Main hospital serving Takayama and the surrounding area, has an ER",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.1425,137.2542"
      }
    ]
  },
  {
    title: "Hospitals — Kanazawa",
    items: [
      {
        label: "Kanazawa University Hospital",
        value: "13-1 Takaramachi, Kanazawa, Ishikawa",
        detail: "Major teaching hospital with a full emergency department",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.5507,136.6497"
      },
      {
        label: "Kanazawa Municipal Hospital",
        value: "3-7-3 Heiwamachi, Kanazawa, Ishikawa",
        detail: "Public hospital with an ER, close to central Kanazawa",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.5544,136.6486"
      }
    ]
  },
  {
    title: "Israeli embassy & consular help",
    items: [
      {
        label: "Embassy of Israel in Tokyo",
        value: "3 Chome-13-8 Mita, Meguro City, Tokyo",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=35.6363,139.7157"
      },
      {
        label: "Embassy phone",
        value: "+81 3-3264-0911",
        type: "phone"
      },
      {
        label: "After-hours emergency (Israelis abroad)",
        value: "+972 3 6953 0123",
        type: "phone",
        detail: "MFA Situation Room — 24/7"
      },
      {
        label: "Embassy website",
        value: "embassies.gov.il/tokyo",
        type: "website",
        link: "https://embassies.gov.il/tokyo"
      }
    ]
  }
];
