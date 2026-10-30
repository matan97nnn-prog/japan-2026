import type { Stay } from "../types";

export const staysHE: Record<
  string,
  Partial<
    Pick<
      Stay,
      "name" | "shortDescription" | "description" | "address" | "highlights" | "warnings"
    >
  >
> = {
  "stay-tokyo-ginza": {
    name: "Hotel Keihan Tsukiji Ginza Grande",
    shortDescription: "הוזמן — 3 לילות, הזמנה 1788608896",
    description:
      "הבסיס הראשון בטוקיו, בין גינזה לצוקיג'י. חמש דקות הליכה לשוק צוקיג'י לארוחת בוקר, הליכה לגינזה, ומתחנת היגאשי-גינזה יש רכבת ישירה מנריטה.",
    address: "3-5-4 Tsukiji, Chuo City, Tokyo",
    highlights: [
      "מספר הזמנה 1788608896",
      "שוק צוקיג'י במרחק 5 דקות הליכה",
      "רכבת ישירה מנריטה לתחנת היגאשי-גינזה"
    ]
  },
  "stay-hakone": {
    name: "Hakone Yutowa",
    shortDescription: "הוזמן — לילה אחד, אונסן",
    description: "לילה ראשון של הרואד טריפ: אונסן, ארוחת ערב, שינה מוקדמת.",
    highlights: [
      "בדקו מראש את מדיניות הקעקועים באונסן, אם רלוונטי",
      "את הרכב אוספים באודווארה באותו בוקר"
    ]
  },
  "stay-kawaguchiko": {
    name: "Kawaguchiko Urban Resort Villa",
    shortDescription: "הוזמן — לילה אחד, וילה",
    description: "וילה מרווחת באזור אגם קאוואגוצ'י — בסיס לאגמי פוג'י ולזריחה מול ההר.",
    highlights: [
      "נסיעה קצרה לפארק אואישי ולפגודת צ'וריטו",
      "מרווח יותר מחדר מלון רגיל"
    ]
  },
  "stay-matsumoto": {
    name: "Matsumoto Hotel Kagetsu",
    shortDescription: "הוזמן — 2 חדרים, לילה אחד",
    description: "מלון מרכזי במטסומוטו, הליכה קצרה לטירה ולרחוב נאקאמאצ'י.",
    highlights: [
      "2 חדרים — הליכה לטירת מטסומוטו",
      "ליל יום ההולדת ה-60 של אבא"
    ]
  },
  "stay-takayama": {
    name: "fav Hida Takayama",
    shortDescription: "הוזמן — 2 לילות",
    description:
      "מלון בסגנון דירות ליד תחנת טקאיאמה, הליכה לעיר העתיקה ולשווקי הבוקר. המזוודות שנשלחו מטוקיו ב-4.11 מחכות כאן.",
    address: "טקאיאמה (ליד התחנה)",
    highlights: [
      "הליכה לסנמאצ'י סוג'י ולשוק הבוקר על הנהר",
      "הרכב נשאר איתנו — מחזירים בקנאזאווה ב-9.11"
    ]
  },
  "stay-kanazawa": {
    name: "SOKI Kanazawa",
    shortDescription: "הוזמן — ממתין להחלטה (חלופה: the square hotel KANAZAWA)",
    description: "מלון ליד תחנת קנאזאווה — בסיס לקנרוקואן, לטירה, לשוק אומיצ'ו ולהיגאשי צ'איה.",
    highlights: [
      "הליכה לשוק אומיצ'ו ולהיגאשי צ'איה",
      "את הרכב מחזירים בתחנה — יציאה מזרחית, עד 20:00 ב-9.11"
    ]
  },
  "stay-kyoto": {
    name: "Richmond Hotel Premier Kyoto Shijo",
    shortDescription: "הוזמן — ממתין להחלטה (חלופה: GLANZ KEI Kyoto Station)",
    description: "ארבעה לילות במרכז קיוטו (שיג'ו), הליכה לגיון ולשוק נישיקי, ורכבות נוחות לאראשיאמה, פושימי אינרי וקוראמה.",
    highlights: [
      "4 לילות — לא לדחוס כל ערב",
      "הליכה לשוק נישיקי ולגיון"
    ]
  },
  "stay-tokyo-asakusa": {
    name: "The Gate Hotel Kaminarimon",
    shortDescription: "הוזמן 15–17.11 — ממתין להחלטה",
    description: "שני חדרים ליד שער קמינרימון באסקוסה. אם נשארים כאן ולכמה לילות — תלוי בתאריך החזרה.",
    highlights: [
      "2 חדרים, צעדים מסנסו-ג'י",
      "תאריך החזרה עוד פתוח (17 או 18.11)"
    ]
  }
};
