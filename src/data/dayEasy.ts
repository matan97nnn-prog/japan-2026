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
    climb: b("Chureito: ≈ 400 steps up to the pagoda", "צ'ורייטו: כ-400 מדרגות עד הפגודה"),
    skip: [b("The sake brewery tour: just the shop", "הסיור במבשלת הסאקה: רק החנות"), b("Oshino Hakkai", "אושינו האקאי")],
    keep: b("Chureito early, sunset on the lake", "צ'ורייטו מוקדם, שקיעה באגם")
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
    km: 7,
    skip: [b("Nishiki Market (half closed on Wednesdays anyway)", "שוק נישיקי (ממילא חצי סגור ביום רביעי)")],
    keep: b("Gion Shirakawa at dusk and dinner in Pontocho", "גיון שיראקאווה בשקיעה וארוחת ערב בפונטוצ'ו")
  },
  14: {
    km: 13,
    climb: b("Fushimi Inari: hundreds of steps up the mountain", "פושימי אינרי: מאות מדרגות במעלה ההר"),
    skip: [b("The top of Inari: turn back at the Yotsutsuji viewpoint (≈ 45 min up)", "הפסגה של אינרי: חוזרים מתצפית יוצוצוג'י (כ-45 דק' עלייה)"), b("Tofuku-ji", "טופוקו-ג'י"), b("Kiyomizu-dera", "קיומיזו-דרה")],
    keep: b("Fushimi Inari early, Higashiyama lanes, rest, Kodai-ji lit up (by taxi)", "פושימי אינרי מוקדם, הסמטאות בהיגאשיאמה, מנוחה, קודאי-ג'י מואר (במונית)")
  },
  15: {
    km: 9,
    climb: b("Kurama → Kibune: stairs up to Kurama-dera, then a root-covered trail over the hill", "קוראמה ← קיבונה: מדרגות עד קוראמה-דרה, ואז שביל שורשים מעל הגבעה"),
    skip: [b("Shimogamo Shrine", "מקדש שימוגאמו"), b("The hike itself: take the train to Kibuneguchi and the bus up to Kibune, skip Kurama", "המסלול עצמו: רכבת ל-Kibuneguchi ואוטובוס לקיבונה, בלי קוראמה")],
    keep: b("Kibune village, lunch by the river, Kifune Shrine's lantern steps", "הכפר קיבונה, צהריים ליד הנהר, מדרגות הפנסים של מקדש קיפונה")
  },
  16: {
    km: 11,
    skip: [b("Tenryu-ji & Togetsukyo", "טנריו-ג'י וגשר טוגצוקיו"), b("Gio-ji (keep Jojakko-ji)", "גיו-ג'י (משאירים את ג'וג'אקו-ג'י)")],
    keep: b("Bamboo grove at 07:30, Okochi Sanso, rest, Nijo Castle at night", "יער הבמבוק ב-07:30, אוקוצ'י סאנסו, מנוחה, טירת ניג'ו בלילה")
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
