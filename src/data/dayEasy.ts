/* "If we're tired": how hard each day is on the legs, and what to drop
 * first. Walking distance is our estimate from the route (stops, the walks
 * between them, wandering inside); steps ≈ 1,300 per km. */

import type { Bi } from "./dayAlerts";

export interface DayEasy {
  km: number;
  /** Stairs or steep climbs worth knowing about. */
  climb?: Bi;
  /** Drop these first, in this order. */
  skip: Bi[];
  /** What the light version keeps. */
  keep: Bi;
}

const b = (en: string, he: string): Bi => ({ en, he });

export const dayEasy: Record<number, DayEasy> = {
  3: { km: 2, skip: [b("Everything: tonight is only for sleeping", "הכל: הלילה רק לישון")], keep: b("Train to the hotel, ramen, bed", "רכבת למלון, ראמן, מיטה") },
  4: {
    km: 10,
    skip: [b("Ueno Park: go straight back from Yanaka to the hotel (Chiyoda line from Sendagi)", "פארק אואנו: חוזרים מיאנאקה ישר למלון (קו Chiyoda מ-Sendagi)"), b("The Yanaka cemetery loop: walk only Yanaka Ginza", "הסיבוב בבית הקברות של יאנאקה: רק רחוב יאנאקה גינזה")],
    keep: b("Tsukiji breakfast, Nezu Shrine, Yanaka Ginza, rest, the evening tour", "ארוחת בוקר בצוקיג'י, מקדש נדזו, יאנאקה גינזה, מנוחה, הסיור בערב")
  },
  5: {
    km: 11,
    skip: [b("Daikanyama & Nakameguro: from Omotesando go straight to Shibuya", "דאיקאניאמה ונאקאמגורו: מאומוטסנדו ישר לשיבויה"), b("Cat Street: Omotesando main avenue only", "רחוב Cat Street: רק השדרה הראשית של אומוטסנדו")],
    keep: b("Meiji Jingu, the horseback archery (only today), Shibuya at dusk", "מייג'י ג'ינגו, הקשתות על סוסים (רק היום), שיבויה בשקיעה")
  },
  6: {
    km: 5,
    skip: [b("Hakone Shrine: drive straight to the hotel from Owakudani", "מקדש האקונה: מאוואקודאני נוסעים ישר למלון"), b("Owakudani, if the ropeway is closed or the queue is long", "אוואקודאני, אם הרכבל סגור או שהתור ארוך")],
    keep: b("Open-Air Museum, onsen at the hotel", "מוזיאון הפסלים הפתוח, אונסן במלון")
  },
  7: {
    km: 6,
    skip: [b("Owakudani", "אוואקודאני"), b("Oshino Hakkai", "אושינו האקאי"), b("The sake brewery tour: just the shop", "הסיור במבשלת הסאקה: רק החנות")],
    keep: b("The Open-Air Museum, Hakone Shrine, an early night", "המוזיאון הפתוח, מקדש האקונה, לילה מוקדם")
  },
  8: {
    km: 6,
    skip: [b("The 05:45 sunrise, if the sky is cloudy: see Fuji from the villa instead", "הזריחה ב-05:45, אם מעונן: רואים את פוג'י מהווילה"), b("Itchiku Kubota Museum", "מוזיאון איצ'יקו קובוטה"), b("The Lake Motosu viewpoint walk: see it from the car park", "ההליכה לתצפית באגם מוטוסו: רואים מהחניון")],
    keep: b("Matsumoto Castle and the birthday dinner", "טירת מצומוטו וארוחת יום ההולדת")
  },
  9: {
    km: 12,
    skip: [b("Myojin: walk only Taisho Pond → Kappa Bridge (≈ 4 km, flat) and take the bus back from there", "מיוג'ין: הולכים רק מבריכת טאישו לגשר קאפה (כ-4 ק\"מ, מישורי) וחוזרים משם באוטובוס")],
    keep: b("Taisho Pond, the river walk, Kappa Bridge, onsen in Hirayu", "בריכת טאישו, ההליכה לאורך הנהר, גשר קאפה, אונסן בהיראיו")
  },
  10: {
    km: 8,
    skip: [b("Hida no Sato folk village", "כפר העם הידה נו סאטו"), b("Takayama Jinya", "טקיאמה ג'ינייה")],
    keep: b("Morning market, Sanmachi old town and a sake tasting", "שוק הבוקר, העיר העתיקה סאנמאצ'י וטעימת סאקה")
  },
  11: {
    km: 6,
    climb: b("Shiroyama viewpoint: a short steep path (or the shuttle bus up)", "תצפית שירויאמה: שביל קצר ותלול (או אוטובוס למעלה)"),
    skip: [b("Fukumitsuya brewery: go straight to return the car", "מבשלת פוקומיצויה: נוסעים ישר להחזיר את הרכב"), b("Walking up to the viewpoint: take the shuttle", "העלייה ברגל לתצפית: לוקחים את האוטובוס")],
    keep: b("Shirakawa-go village and the view from above", "הכפר שיראקאווה-גו והתצפית מלמעלה")
  },
  12: {
    km: 10,
    skip: [b("D.T. Suzuki Museum / Nagamachi", "מוזיאון ד.ט. סוזוקי / נאגאמאצ'י"), b("Kanazawa Castle Park: Kenrokuen only", "פארק טירת קנאזאווה: רק קנרוקואן")],
    keep: b("Omicho breakfast, Kenrokuen, Higashi Chaya", "ארוחת בוקר באומיצ'ו, קנרוקואן, היגאשי צ'איה")
  },
  13: {
    km: 4,
    skip: [],
    keep: b("Gion Shirakawa by lantern light and dinner in Pontocho", "גיון שירקאווה באור הפנסים וארוחת ערב בפונטוצ'ו")
  },
  14: {
    km: 7,
    climb: b("Monkey Park: 20 min uphill path", "פארק הקופים: 20 דק' עלייה"),
    skip: [b("Iwatayama Monkey Park", "פארק הקופים איוואטיאמה"), b("Okochi Sanso (keep the bamboo grove)", "אוקוצ'י סאנסו (משאירים את יער הבמבוק)")],
    keep: b("The open train up, the boat down, the bamboo grove", "הרכבת הפתוחה למעלה, הסירה למטה, יער הבמבוק")
  },
  15: {
    km: 13,
    climb: b("Fushimi Inari: hundreds of steps up the mountain", "פושימי אינרי: מאות מדרגות במעלה ההר"),
    skip: [b("Inari: just the first torii tunnels (≈ 15 min), not up to the viewpoint", "אינרי: רק מנהרות הטוריי הראשונות (כ-15 דק'), לא עד התצפית"), b("Todai-ji", "טודאי-ג'י"), b("Naramachi", "נאראמאצ'י")],
    keep: b("Fushimi Inari early, the deer of Nara and lunch", "פושימי אינרי מוקדם, האיילים של נארה וצהריים")
  },
  16: {
    km: 8,
    skip: [b("Ninenzaka & Sannenzaka (a taxi from the tea ceremony to dinner)", "נינזקה וסאנזקה (מונית מטקס התה לארוחת הערב)")],
    keep: b("Nishiki Market, the tea ceremony in kimono, the last dinner in Gion", "שוק נישיקי, טקס התה בקימונו, ארוחת הערב האחרונה בגיון")
  },
  17: {
    km: 8,
    skip: [b("Nanzen-ji", "ננזן-ג'י"), b("The Philosopher's Path: Ginkaku-ji only, then a taxi", "שביל הפילוסוף: רק גינקאקו-ג'י ואז מונית")],
    keep: b("Hyakumanben market (only on the 15th), the train to Tokyo, Asakusa at night", "השוק בהיאקומנבן (רק ב-15 לחודש), הרכבת לטוקיו, אסקוסה בלילה")
  },
  18: {
    km: 9,
    skip: [b("Kagurazaka", "קאגורזאקה"), b("Koishikawa Korakuen: start late, straight to Nihonbashi", "קויישיקאווה קוראקואן: מתחילים מאוחר וישר לניהונבאשי")],
    keep: b("Depachika food halls in Nihonbashi and Ginza, near the hotel", "אולמות האוכל (דפאצ'יקה) בניהונבאשי ובגינזה, ליד המלון")
  }
};

export const steps = (km: number) => Math.round((km * 1300) / 500) * 500;
