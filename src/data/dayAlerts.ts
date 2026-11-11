/* Per-day heads-ups: what's closed or ends early on that date, and the
 * last train back to the hotel on evenings we rely on transit. Checked
 * against the weekday of each date (Oct 2026); times are approximate. */

export interface Bi {
  en: string;
  he: string;
}

export interface DayAlerts {
  closed?: Bi[];
  lastTrain?: Bi;
}

export const dayAlerts: Record<number, DayAlerts> = {
  4: {
    closed: [
      {
        en: "Monday: the Tokyo National Museum is closed. Ueno today is the park only.",
        he: "יום שני: המוזיאון הלאומי של טוקיו סגור. באואנו היום רק הפארק."
      }
    ],
    lastTrain: {
      en: "After the tour: Oedo line Shinjuku → Tsukijishijo, last train around 00:00. After that a taxi, about ¥5,000 for all four.",
      he: "אחרי הסיור: קו Oedo משינג'וקו ל-Tsukijishijo, רכבת אחרונה בסביבות 00:00. אחרי זה מונית, בערך ¥5,000 לכולנו."
    }
  },
  5: {
    closed: [
      {
        en: "Public holiday (Culture Day): Meiji Jingu, Omotesando and Shibuya are at their busiest. Go early.",
        he: "חג לאומי (יום התרבות): מייג'י ג'ינגו, אומוטסנדו ושיבויה עמוסים במיוחד. להגיע מוקדם."
      }
    ],
    lastTrain: {
      en: "Shibuya → Ginza on the Ginza line (orange), last train around 00:00, then 10 min walk.",
      he: "משיבויה לגינזה בקו Ginza (כתום), רכבת אחרונה בסביבות 00:00, ואז 10 דק' הליכה."
    }
  },
  6: {
    closed: [
      {
        en: "The Owakudani ropeway stops in strong wind or volcanic gas. Check the status in the morning; the road up usually stays open.",
        he: "הרכבל לאוואקודאני נעצר ברוח חזקה או כשיש גזים געשיים. לבדוק בבוקר; הכביש למעלה בדרך כלל פתוח."
      }
    ]
  },
  9: {
    closed: [
      {
        en: "Saturday in Kamikochi: queues for the shuttle. The last bus down to Hirayu leaves around 17:00–17:30 in November; check the board when you arrive.",
        he: "שבת בקמיקוצ'י: יש תורים לאוטובוס. האוטובוס האחרון חזרה להיראיו יוצא בסביבות 17:00–17:30 בנובמבר; לבדוק את הלוח בתחנה כשמגיעים."
      }
    ]
  },
  10: {
    closed: [
      {
        en: "The morning markets wind down by noon. Takayama Jinya closes at 16:30 in November.",
        he: "שוקי הבוקר מתקפלים עד הצהריים. טקיאמה ג'ינייה נסגר ב-16:30 בנובמבר."
      }
    ]
  },
  11: {
    closed: [
      {
        en: "The car must be back at Kanazawa Station by 20:00, when the office closes.",
        he: "את הרכב צריך להחזיר בתחנת קנאזאווה עד 20:00, אז המשרד נסגר."
      }
    ]
  },
  12: {
    closed: [
      {
        en: "Most Higashi Chaya teahouses and shops close around 17:00. The Kanazawa Loop Bus stops around 18:00; after that walk or taxi.",
        he: "רוב בתי התה והחנויות בהיגאשי צ'איה נסגרים בסביבות 17:00. האוטובוס העירוני (Loop Bus) מפסיק בסביבות 18:00; אחר כך ברגל או מונית."
      }
    ]
  },
  14: {
    closed: [
      {
        en: "Gion: no photos in the private lanes off Hanamikoji (signs warn of a fine), and never stop a geiko or maiko for a picture.",
        he: "גיון: אסור לצלם בסמטאות הפרטיות שליד Hanamikoji (יש שלטים על קנס), ולעולם לא לעצור גייקו או מאיקו בשביל תמונה."
      }
    ],
    lastTrain: {
      en: "Pontocho → hotel: Keihan Gion-Shijo → Shichijo, 2 stops, last train around 23:30. A taxi is about ¥1,500.",
      he: "מפונטוצ'ו למלון: Keihan מ-Gion-Shijo ל-Shichijo, 2 תחנות, רכבת אחרונה בסביבות 23:30. מונית בערך ¥1,500."
    }
  },
  15: {
    closed: [
      {
        en: "Sagano Romantic Train: seats sell out in autumn, buy them first thing at Torokko Saga station. Sold out? Go straight to the boat: JR to Kameoka, 10 min walk to the dock.",
        he: "רכבת Sagano Romantic: בסתיו המקומות נגמרים, לקנות ראשון דבר בתחנת Torokko Saga. נגמר? הולכים ישר לסירה: JR לקמאוקה, 10 דק' הליכה לרציף."
      },
      {
        en: "The river boat doesn't sail in high water or heavy rain. If it's cancelled: the train both ways, or the rainy-day option (Uji).",
        he: "הסירה לא יוצאת כשהנהר גבוה או בגשם חזק. אם בוטל: רכבת הלוך וחזור, או האפשרות ליום גשום (אוג'י)."
      }
    ]
  },
  16: {
    closed: [
      {
        en: "Saturday: Kurama and Kibune fill up by noon and the small Eizan train gets crowded. Be on it before 10:00, and check with the hotel that it runs all the way to Kurama.",
        he: "שבת: קוראמה וקיבונה מתמלאות עד הצהריים והרכבת הקטנה של אייזן נדחסת. להיות עליה לפני 10:00, ולוודא עם המלון שהיא נוסעת עד קוראמה."
      }
    ]
  },
  17: {
    closed: [
      {
        en: "The Hyakumanben market only happens on the 15th of the month, so today is the day. Senso-ji's main hall closes at 17:00 and Nakamise shops around 19:00, but the grounds stay open and lit.",
        he: "השוק בהיאקומנבן מתקיים רק ב-15 בחודש, כלומר היום. האולם הראשי בסנסו-ג'י נסגר ב-17:00 והחנויות בנקמיסה בסביבות 19:00, אבל המתחם פתוח ומואר."
      }
    ],
    lastTrain: {
      en: "Asakusa → Shimbashi on the Ginza line (orange), last train around 00:00.",
      he: "מאסקוסה לשימבאשי בקו Ginza (כתום), רכבת אחרונה בסביבות 00:00."
    }
  },
  18: {
    closed: [
      {
        en: "Monday: most Tokyo museums are closed. Today's plan doesn't depend on any of them.",
        he: "יום שני: רוב המוזיאונים בטוקיו סגורים. התוכנית של היום לא תלויה באף אחד מהם."
      }
    ]
  }
};
