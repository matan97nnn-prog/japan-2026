import type { Day, DayDrink, ItalianWord } from "../types";

interface DayHEActivity {
  time?: string;
  title?: string;
  description?: string;
  /** Translatable bits of the inter-activity drive connector. The duration
   *  text ("45 min" ← "45 דק׳") and the helper note both get overridden
   *  per-language. */
  rideToNext?: { duration?: string; note?: string; departAt?: string };
  /** Hebrew label for the activity's EN `link` (URL stays from EN). */
  linkLabel?: string;
}

/** Translatable parts of the per-day end-of-day drink card. The drink's
 *  proper name (e.g. "Junmai sake", "Yuzu highball") stays universal;
 *  only the prose gets translated. */
type DrinkOfTheDayHE = Partial<Pick<DayDrink, "pairing" | "servingNote">>;

/** Translatable fields of the per-day word-of-the-day card. The Japanese
 *  `word` and `example` (romaji) stay as-is; only the meaning + the
 *  example's translation get localized. We also let HE override
 *  `pronounce` so Hebrew speakers can read a Hebrew-letter transliteration. */
type WordOfTheDayHE = Partial<
  Pick<ItalianWord, "pronounce" | "meaning" | "exampleMeaning">
>;

export interface DayHE
  extends Partial<
    Pick<Day, "title" | "subtitle" | "base" | "driveNotes" | "dayTips" | "departureTime" | "rideToFirst">
  > {
  /** Translated activities, in the same order as the English data. */
  activities?: DayHEActivity[];
  /** Translated gear descriptions, positionally aligned with the English
   *  `gear` array. We only translate the human-readable `item` text — the
   *  optional `for: <attraction-id>` reference is universal and stays on
   *  the EN GearItem. The merge in `localizeDay` overlays these strings
   *  onto the EN objects by index. */
  gear?: string[];
  /** Translated parts of each word-of-the-day card (same order as EN). */
  italianWords?: WordOfTheDayHE[];
  /** Translated parts of the end-of-day drink card. */
  drinkOfTheDay?: DrinkOfTheDayHE;
}

export const itineraryHE: Record<number, DayHE> = {
  1: {
    title: "תל אביב ← לרנקה",
    subtitle: "לילה אחד בקפריסין לפני הטיסה הארוכה",
    base: "לרנקה",
    activities: [
      {
        title: "טיסת ארקיע נתב\"ג ← לרנקה",
        description: "קפיצה קצרה לקפריסין. מלון בלרנקה ללילה אחד (השם עוד יתווסף)."
      },
      {
        time: "אחר הצהריים",
        title: "טיילת פיניקודס ומבצר לרנקה",
        description: "טיילת עם דקלים מול הים, קפה, והמבצר העות'מאני הקטן בסוף הטיילת.",
        linkLabel: "מפה: שדה התעופה ← פיניקודס ← המבצר"
      }
    ],
    dayTips: ["לבדוק הלילה את שעת הצ'ק-אין של אמירייטס מחר — צ'ק-אין אונליין נפתח 48 שעות לפני"]
  },
  2: {
    title: "לרנקה ← דובאי",
    subtitle: "EK110 ב-16:25, קונקשן לילי לטוקיו",
    base: "בטיסה",
    activities: [
      {
        time: "בוקר",
        title: "בוקר רגוע, צ'ק-אאוט",
        description: "לארוז לטיסה: ביפן 10–18°C בנובמבר, קר יותר בהרים."
      },
      {
        title: "אמירייטס EK110 לרנקה ← דובאי (נחיתה 19:25)",
        description: "לוודא בצ'ק-אין שהמזוודות משודרות עד טוקיו (נריטה)."
      },
      {
        time: "לילה",
        title: "קונקשן בדובאי",
        description: "EK318 לנריטה ממריאה ב-02:55. לבדוק שער וטרמינל בנחיתה."
      }
    ]
  },
  3: {
    title: "נחיתה בטוקיו",
    subtitle: "נריטה 17:20 ← Keihan Tsukiji Ginza Grande",
    base: "טוקיו (גינזה / צוקיג'י)",
    activities: [
      {
        title: "נחיתה בנריטה (EK318)",
        description: "ביקורת גבולות, מזוודות, ואז לקנות/לטעון סוּיקה לכל אחד (או להוסיף לארנק בטלפון).",
        rideToNext: {
          duration: "≈ שעה ורבע",
          note: "Keisei Access Express ישר להיגאשי-גינזה (בלי החלפה) — או מונית מתחנת טוקיו"
        }
      },
      {
        time: "ערב",
        title: "צ'ק-אין — Hotel Keihan Tsukiji Ginza Grande",
        description: "הזמנה 1788608896, שלושה לילות. ארוחה קלה בסביבה ולישון מוקדם."
      }
    ],
    dayTips: [
      "קודי QR של Visit Japan Web מוכנים בכל טלפון לפני הנחיתה",
      "בלי תוכניות הערב — הג'טלג הוא התוכנית היחידה"
    ]
  },
  4: {
    title: "טוקיו הישנה — צוקיג'י, אסקוסה, אואנו",
    subtitle: "ארוחת בוקר סושי, סנסו-ג'י, אואנו — וסיור ערב ב-20:00",
    base: "טוקיו (גינזה / צוקיג'י)",
    activities: [
      {
        title: "ארוחת בוקר בשוק החיצוני של צוקיג'י",
        description: "חמש דקות הליכה מהמלון. יום שני זה היום הבטוח — השוק סגור הרבה פעמים בראשון, בחגים ובחלק מימי רביעי.",
        rideToNext: { duration: "20 דק'", note: "קו היביה ← אואנו" }
      },
      {
        title: "פארק אואנו ורחוב השוק אמיוקו",
        description: "בריכות, מקדשים וצבעי סתיו ראשונים, ואז שוק אמיוקו ההומה מתחת לפסי הרכבת.",
        rideToNext: { duration: "10 דק'", note: "קו גינזה ← אסקוסה" }
      },
      {
        title: "אסקוסה — סנסו-ג'י ונאקאמיסה",
        description: "המקדש העתיק בטוקיו דרך שער הרעם, ואז הליכה לאורך נהר סומידה.",
        rideToNext: { duration: "35 דק'", note: "קו גינזה ← שינג'וקו" }
      },
      {
        title: "סיור ערב בטוקיו (מדריך בעברית)",
        description: "Hebrew Tour Guide Japan, הזמנה 9022, 4 אנשים. נפגשים ב-Gap Store Shinjuku Flagship.",
        linkLabel: "נקודת המפגש בגוגל מפות"
      }
    ],
    dayTips: [
      "לחובבי סומו: מוזיאון הסומו החינמי בריוגוקו קוקוגיקאן פתוח בימי חול 10:00–16:30 — היום מתאים",
      "לאכול ארוחת ערב לפני הסיור, באזור שינג'וקו"
    ]
  },
  5: {
    title: "יום התרבות — מייג'י ג'ינגו, הראג'וקו, שיבויה",
    subtitle: "חג לאומי, עם קשתות רכובים במייג'י ג'ינגו",
    base: "טוקיו (גינזה / צוקיג'י)",
    activities: [
      {
        title: "אומוטסנדו והראג'וקו",
        description: "שדרת אומוטסנדו, ואז רחוב טאקשיטה — עמוס בחג, אז בקצרה.",
        rideToNext: { duration: "10 דק' הליכה" }
      },
      {
        title: "מייג'י ג'ינגו — פסטיבל הסתיו ויאבוסאמה",
        description: "יום התרבות סוגר את פסטיבל הסתיו של המקדש; הקשתים הרכובים יוצאים בדרך כלל בסביבות 13:00 בצד המערבי. חינם. להגיע מוקדם כדי לתפוס מקום.",
        rideToNext: { duration: "20 דק' הליכה" }
      },
      {
        title: "צומת שיבויה ושיבויה סקיי בשקיעה",
        description: "הצומת מגובה הרחוב, ואז הגג הפתוח לשקיעה (להזמין שיבויה סקיי מראש)."
      }
    ],
    dayTips: [
      "יום התרבות (בונקה נו הי) הוא חג לאומי: מוזיאונים פתוחים, מקדשים עמוסים, והרבה מופעים מסורתיים",
      "שוק צוקיג'י כנראה סגור היום — ארוחת בוקר במלון",
      "שעת היאבוסאמה — לאשר ב-meijijingu.or.jp"
    ]
  },
  6: {
    title: "טוקיו ← אודווארה ← האקונה",
    subtitle: "אוספים את הרכב, מתחילים את הרואד טריפ",
    base: "האקונה",
    activities: [
      {
        title: "צ'ק-אאוט, שולחים את המזוודות הגדולות קדימה (טאקיובין)",
        description: "הקבלה שולחת את המזוודות ל-fav Hida Takayama (מגיעות 7.11). נוסעים קל לשלושה לילות.",
        rideToNext: { duration: "≈ 50 דק'", note: "שינקנסן טוקיו ← אודווארה (קודאמה/היקארי ≈ 35 דק')" }
      },
      {
        title: "איסוף הרכב — Toyota Rent a Car, Odawara Shinkansen Exit",
        description: "הזמנה 99910376400, Noah Hybrid, כולל כרטיס ETC. דרכון + רישיון + רישיון בינלאומי. הסניף: 0465-32-0100.",
        rideToNext: { duration: "40 דק'" }
      },
      {
        title: "מוזיאון האוויר הפתוח של האקונה",
        description: "פסלים בגן הררי, עם אמבט רגליים חם.",
        rideToNext: { duration: "20 דק'" }
      },
      {
        title: "אוואקודאני",
        description: "אדי געש וביצים שחורות; בתחילת נובמבר כבר יש פה צבעי סתיו, בגובה.",
        rideToNext: { duration: "25 דק'" }
      },
      {
        title: "אגם אשי והטוריי של מקדש האקונה במים",
        description: "הליכה קצרה לשער שעל שפת האגם, ואז למלון.",
        rideToNext: { duration: "30 דק'" }
      },
      {
        time: "ערב",
        title: "Hakone Yutowa — אונסן וארוחת ערב",
        description: "לילה אחד. אמבטיה, ארוחת ערב, לישון מוקדם."
      }
    ],
    dayTips: ["לא לדחוס את כל הלולאה של האקונה — ביום איסוף הרכב לוקחים בקלות"]
  },
  7: {
    title: "האקונה ← חמשת אגמי פוג'י",
    subtitle: "בריכות מעיינות, נוף הפגודה, מבשלת סאקה",
    base: "קאוואגוצ'יקו",
    activities: [
      {
        title: "יוצאים מהאקונה (אאוטלט גוטמבה — אופציונלי)",
        description: "Gotemba Premium Outlets על הדרך — אפשר לדלג כדי לשמור זמן לפוג'י.",
        rideToNext: { duration: "≈ שעה" }
      },
      {
        title: "אושינו האקאי",
        description: "שמונה בריכות מעיין צלולות ממי השלג של פוג'י, בכפר עם גגות קש.",
        rideToNext: { duration: "20 דק'" }
      },
      {
        title: "פגודת צ'ורייטו",
        description: "כ-400 מדרגות למעלה לנוף הקלאסי של הפגודה ופוג'י.",
        rideToNext: { duration: "15 דק'" }
      },
      {
        title: "מבשלת הסאקה Ide — סיור וטעימות",
        description: "מבשלה משפחתית בקאוואגוצ'יקו, ¥500 כולל טעימות. להזמין עד 16:00 יום לפני.",
        rideToNext: { duration: "10 דק'" }
      },
      {
        time: "ערב",
        title: "Kawaguchiko Urban Resort Villa",
        description: "לילה אחד בווילה. הוטו (אטריות) לארוחת ערב — המנה המקומית."
      }
    ],
    dayTips: [
      "פוג'י מתחבא בעננים עד הצהריים — אם בבוקר בהיר, הולכים קודם לתצפיות",
      "פסטיבל עלי הסתיו של קאוואגוצ'יקו נפתח ב-7.11, אחרי שנעזוב; העצים יהיו חלקית צבעוניים"
    ]
  },
  8: {
    title: "אבא בן 60 — זריחה מול פוג'י, ערב במטסומוטו",
    subtitle: "חמשת האגמים בבוקר, טירה וארוחת יום הולדת",
    base: "מטסומוטו",
    activities: [
      {
        title: "זריחה מול פוג'י בפארק אואישי",
        description: "פוג'י הכי ברור עם שחר. קפה, תמונה משפחתית, והרמת הכוסית הראשונה של היום — מזל טוב אבא!",
        rideToNext: { duration: "5 דק'" }
      },
      {
        title: "מוזיאון איצ'יקו קובוטה",
        description: "קימונו מצוירים כנופים, בבניין ובגן שנבנו במיוחד בשבילם. שקט ויפהפה.",
        rideToNext: { duration: "40 דק'", note: "לאורך אגמי סאיקו ושוג'י" }
      },
      {
        title: "אגמי סאיקו, שוג'י ומוטוסו",
        description: "האגמים המערביים והשקטים. מוטוסו זה נוף הפוג'י שעל שטר ה-¥1,000.",
        rideToNext: { duration: "≈ שעתיים ורבע" }
      },
      {
        title: "טירת מטסומוטו",
        description: "המצודה המקורית מעץ הכי עתיקה ביפן, שחורה מול האלפים. כניסה אחרונה 16:30."
      },
      {
        title: "ארוחת יום הולדת — קאיסקי במטסומוטו",
        description: "הבחירה שלנו: Hikariya Higashi (חדרי טטאמי פרטיים, חומרי גלם מקומיים משינשו). חלופה: Hikariya Nishi בבית עירוני ישן. להזמין מראש ולציין שזה יום הולדת 60."
      }
    ],
    dayTips: [
      "צ'ק-אין ב-Matsumoto Hotel Kagetsu לפני הטירה (לילה אחד, 2 חדרים)",
      "להביא עוגה קטנה או בקבוק מהמבשלה של אתמול לחדר אחרי הארוחה"
    ]
  },
  9: {
    title: "קמיקוצ'י ← טקאיאמה",
    subtitle: "הליכה לאורך הנהר באלפים היפניים, ואז לטקאיאמה",
    base: "טקאיאמה",
    activities: [
      {
        title: "נסיעה להיראיו, חניה, שאטל למעלה",
        description: "אין רכבים פרטיים בקמיקוצ'י. חונים בהיראיו (אקאנדנה) — זה בצד של טקאיאמה — ועולים באוטובוס.",
        rideToNext: { duration: "≈ שעה ורבע + 25 דק' אוטובוס" }
      },
      {
        title: "הליכה בקמיקוצ'י: בריכת טאישו ← גשר קאפה ← מיוג'ין",
        description: "שביל שטוח לאורך הנהר בין עצי לגש מוזהבים לפסגות מושלגות. הולכים כמה שרוצים; 2–3 שעות בסך הכול."
      },
      {
        title: "אוטובוס חזרה להיראיו, טבילה ב-Hirayu no Mori",
        description: "16 אמבטיות בחוץ, ¥500–700, יש גם אמבטיות פרטיות.",
        rideToNext: { duration: "≈ שעה" }
      },
      {
        time: "ערב",
        title: "צ'ק-אין — fav Hida Takayama (2 לילות)",
        description: "המזוודות מטוקיו מחכות לנו. בשר הידה לארוחת ערב."
      }
    ],
    dayTips: [
      "שבת = אוטובוסים עמוסים: לכוון ליציאות הראשונות",
      "בבקרים בהרים יכול להיות קרוב לאפס — שכבות חמות ונעליים טובות",
      "האוטובוס האחרון מקמיקוצ'י להיראיו ≈ 17:30 — לאשר ב-alpico.co.jp"
    ]
  },
  10: {
    title: "טקאיאמה",
    subtitle: "שווקי בוקר, העיר העתיקה, סאקה",
    base: "טקאיאמה",
    activities: [
      {
        title: "שווקי הבוקר מיאגאווה וג'ינאיה-מאה",
        description: "תוצרת מקומית, חמוצים, שיפודי בשר הידה, לאורך הנהר."
      },
      {
        title: "העיר העתיקה סנמאצ'י סוג'י ומבשלות סאקה",
        description: "רחובות סוחרים עם כדורי ארז מעל דלתות המבשלות. ב-Harada וב-Funasaka יש טעימות."
      },
      {
        title: "טקאיאמה ג'ינאיה",
        description: "בית הממשל היחיד מתקופת אדו שנשאר ביפן."
      },
      {
        title: "כפר הידה נו סאטו (אופציונלי)",
        description: "בתי חווה עם גגות קש סביב בריכה — טעימה משירקאווה-גו."
      }
    ],
    dayTips: [
      "שיא השלכת בטקאיאמה — עצי האדר של מקדש היה קרובים לעיר העתיקה",
      "גשר נאקאבאשי מואר בערבים (לא מאושר ל-2026)"
    ]
  },
  11: {
    title: "שירקאווה-גו ← קנאזאווה",
    subtitle: "כפר גגות הקש, ואז מחזירים את הרכב",
    base: "קנאזאווה",
    activities: [
      {
        title: "צ'ק-אאוט, נסיעה לשירקאווה-גו",
        rideToNext: { duration: "≈ 50 דק'" }
      },
      {
        title: "שירקאווה-גו + תצפית שירויאמה",
        description: "כפר אונסק\"ו של בתי חווה עם גגות קש תלולים. עולים לתצפית לנוף של הגלויה.",
        rideToNext: { duration: "≈ שעה ורבע" }
      },
      {
        title: "סיור במבשלת Fukumitsuya (אופציונלי)",
        description: "המבשלה הוותיקה בקנאזאווה. סיור ב-15:00, 90 דק', ¥3,300 — בחורף רק בימי ב'/ו'/ש', אז היום מתאים. להזמין מראש."
      },
      {
        time: "עד 20:00",
        title: "החזרת הרכב — Kanazawa Station East Exit",
        description: "Toyota Rent a Car, Porte Kanazawa Bldg 1F, 2-15-1 Honmachi. לתדלק לפני.",
        linkLabel: "סניף ההחזרה בגוגל מפות"
      },
      {
        time: "ערב",
        title: "מלון בקנאזאווה (2 לילות — טרם סוכם)",
        description: "מוזמן: SOKI Kanazawa; חלופה: the square hotel KANAZAWA. ההחלטה עוד פתוחה."
      }
    ],
    dayTips: ["יום עמוס — אם הכביש איטי, לקצר בשירקאווה-גו ולשמור על החזרת הרכב"]
  },
  12: {
    title: "קנאזאווה, לאט",
    subtitle: "בלי רכב — גנים, הטירה, רובע הגיישות",
    base: "קנאזאווה",
    activities: [
      {
        title: "שוק אומיצ'ו",
        description: "ארוחת בוקר של פירות ים — סרטנים, שרימפס מתוק, קאיסנדון.",
        rideToNext: { duration: "15 דק' הליכה" }
      },
      {
        title: "קנרוקואן וטירת קנאזאווה",
        description: "אחד משלושת הגנים הגדולים של יפן, עם חבלי השלג (יוקיצורי) שעולים על האורנים.",
        rideToNext: { duration: "20 דק' הליכה" }
      },
      {
        title: "רובע הגיישות היגאשי צ'איה",
        description: "בתי תה מעץ וחנויות עלי זהב; מאצ'ה בבית תה."
      },
      {
        title: "מוזיאון המאה ה-21 / רובע הסמוראים נאגאמאצ'י",
        description: "לבחור אחד, או לנוח."
      }
    ],
    dayTips: ["תאורת הלילה של קנרוקואן לא פועלת הערב (רק ב-7, 14, 15…)"]
  },
  13: {
    title: "קנאזאווה ← קיוטו",
    subtitle: "שינקנסן + תאנדרברד, ערב ראשון בקיוטו",
    base: "קיוטו",
    activities: [
      {
        title: "רכבת לקיוטו",
        description: "שינקנסן הוקוריקו עד צורוגה, החלפה לתאנדרברד לקיוטו — כשעתיים ורבע בסך הכול. לשריין מקומות.",
        rideToNext: { duration: "≈ שעתיים ורבע", note: "החלפה אחת בצורוגה" }
      },
      {
        title: "מלון בקיוטו — טרם סוכם",
        description: "מוזמן: Richmond Hotel Premier Kyoto Shijo; חלופה: GLANZ KEI Kyoto Station. ההחלטה עוד פתוחה."
      },
      {
        title: "שוק נישיקי וטיול בגיון",
        description: "שוק האוכל של קיוטו, ואז הסמטאות של גיון בשעת בין ערביים. חלק מדוכני נישיקי סגורים ברביעי."
      },
      {
        title: "מופע תופי טאיקו DRUM TAO (אופציונלי)",
        description: "תיאטרון חדש ליד תחנת קיוטו, כל יום ב-19:00 וב-21:00, כ-50 דק', מ-¥10,000. להזמין אונליין."
      }
    ]
  },
  14: {
    title: "פושימי אינרי והיגאשיאמה",
    subtitle: "מנהרות טוריי, מוזיאון סאקה, קיומיזו, קודאי-ג'י בלילה",
    base: "קיוטו",
    activities: [
      {
        title: "פושימי אינרי, מוקדם",
        description: "הולכים במנהרות הטוריי עד תצפית יוצוצוג'י — אין צורך להגיע לפסגה.",
        rideToNext: { duration: "15 דק'" }
      },
      {
        title: "מוזיאון הסאקה Gekkeikan Okura (פושימי)",
        description: "רובע הסאקה של קיוטו: מוזיאון וטעימות, ¥600.",
        rideToNext: { duration: "30 דק'" }
      },
      {
        title: "קיומיזו-דרה, סאננזאקה וניננזאקה",
        description: "במת העץ מעל עצי האדר, ואז סמטאות האבן העתיקות בירידה.",
        rideToNext: { duration: "10 דק' הליכה" }
      },
      {
        title: "תאורת הלילה בקודאי-ג'י וחורשת הבמבוק",
        description: "גנים מוארים וחורשת במבוק קטנה — הבחירה שלנו ל'מקדש עם הבמבוק'. ¥800, כניסה אחרונה 21:30."
      },
      {
        time: "ערב",
        title: "ארוחת ערב בגיון או בפונטוצ'ו",
        description: "סמטת המסעדות של פונטוצ'ו מעל נהר קאמו."
      }
    ]
  },
  15: {
    title: "מסלול קוראמה ← קיבונה",
    subtitle: "מקדש הררי, שורשי ארזים, כפר על הנהר",
    base: "קיוטו",
    activities: [
      {
        title: "רכבת אייזן לקוראמה",
        description: "מדמאצ'יאנאגי עד התחנה האחרונה, כ-30 דק'. פסל הטנגו הענק מקבל את פניכם.",
        rideToNext: { duration: "≈ 30 דק'" }
      },
      {
        title: "קוראמה-דרה ← שביל השורשים קינונה-מיצ'י ← יורדים לקיבונה",
        description: "≈ 4 ק\"מ, 2–3 שעות עם עצירות. מדרגות אבן ושורשים; קל-בינוני. כניסה למקדש ¥500, מזומן."
      },
      {
        title: "ארוחת צהריים בקיבונה ומקדש קיפונה",
        description: "גרם מדרגות האבן עם הפנסים האדומים; עצי האדר בשיאם בערך באמצע נובמבר.",
        rideToNext: { duration: "20 דק' הליכה + 30 דק' רכבת" }
      },
      {
        time: "ערב",
        title: "ערב חופשי",
        description: "אם הפנסים בקיבונה דולקים (בדרך כלל מתחילת נובמבר, מהשקיעה עד 21:00), כדאי להישאר לחשכה לפני שחוזרים."
      }
    ],
    dayTips: [
      "הרכבל הקטן של קוראמה-דרה היה מושבת בספטמבר — לתכנן לעלות ברגל",
      "נעליים עם אחיזה טובה; המדרגות חלקות אחרי גשם"
    ]
  },
  16: {
    title: "אראשיאמה וטירת ניג'ו בלילה",
    subtitle: "במבוק עם שחר, הנהר, טירה באור",
    base: "קיוטו",
    activities: [
      {
        title: "יער הבמבוק של אראשיאמה",
        description: "לפני ההמונים. אחר כך גן Okochi Sanso.",
        rideToNext: { duration: "5 דק' הליכה" }
      },
      {
        title: "הגן של טנריו-ג'י וגשר טוגצוקיו",
        description: "גן זן מול הגבעות, ואז הגשר ושפת הנהר."
      },
      {
        time: "אחר הצהריים",
        title: "חזרה למרכז — מנוחה, קניות בשיג'ו-קווארמאצ'י"
      },
      {
        title: "טירת ניג'ו — אירוע הלילה NAKED",
        description: "אמנות הקרנה על שער קאראמון וארמון נינומארו, 18:00–22:00. ¥2,400 בסופ\"ש (ו'–א') — להזמין אונליין."
      }
    ]
  },
  17: {
    title: "קיוטו ← טוקיו",
    subtitle: "שוק אומנים (אופציונלי), ואז השינקנסן",
    base: "טוקיו",
    activities: [
      {
        title: "שוק האומנים היאקומנבן (אופציונלי)",
        description: "מתקיים ב-15 בכל חודש במקדש צ'יון-ג'י: כ-450 דוכני מלאכת יד. גינקאקו-ג'י (ביתן הכסף) במרחק 20 דק' אם יש זמן."
      },
      {
        title: "שינקנסן קיוטו ← טוקיו",
        description: "היקארי מכוסה ב-JR Pass (נוזומי לא). לשריין מקומות עם מקום למזוודות.",
        rideToNext: { duration: "≈ 2 שעות ו-40 דק'" }
      },
      {
        time: "ערב",
        title: "מלון בטוקיו — טרם הוחלט",
        description: "מוזמן: The Gate Hotel Kaminarimon (15–17.11). ההחלטה עוד פתוחה."
      }
    ]
  },
  18: {
    title: "טוקיו — יום חופשי",
    subtitle: "אפשרויות: קמאקורה, ניקו, או העיר",
    base: "טוקיו",
    activities: [
      {
        time: "אפשרות",
        title: "טיול יום לקמאקורה",
        description: "הבודהה הגדול, הסדרה, שביל ההליכה של הדאיבוטסו. קו JR יוקוסוקה מטוקיו, כשעה, בלי החלפה. ראו בהערות.",
        rideToNext: { duration: "≈ שעה" }
      },
      {
        time: "אפשרות",
        title: "טיול יום לניקו",
        description: "גשר שינקיו, טושוגו, שביל פסלי הג'יזו בקאנמנגאפוצ'י. רק אם יש כוח — ראו בהערות."
      },
      {
        time: "אפשרות",
        title: "טוקיו: גינזה, ניהונבאשי, שינג'וקו",
        description: "קניות אחרונות, ארוחת ערב עם מופע סומו באסקוסה, או סתם מנוחה."
      }
    ]
  },
  19: {
    title: "יום אחרון / טיסה הביתה",
    subtitle: "טיסה חזרה לדובאי — תאריך ושעה עוד לא נקבעו",
    base: "טוקיו",
    activities: [
      {
        time: "טרם נקבע",
        title: "טיסה הביתה דרך דובאי",
        description: "תאריך החזרה (17 או 18.11) עוד פתוח. כשייקבע: שדה תעופה, טרמינל ואיך מגיעים — יופיעו כאן."
      }
    ]
  }
};
