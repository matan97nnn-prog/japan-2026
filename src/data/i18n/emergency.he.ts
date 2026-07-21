import type { EmergencyContact, EmergencyGroup } from "../types";

type EmergencyHEItem = Partial<Pick<EmergencyContact, "label" | "value" | "detail">>;

interface EmergencyHEGroup extends Partial<Pick<EmergencyGroup, "title">> {
  items?: EmergencyHEItem[];
}

/** Indexed by group order (0..n) — items in same order as the English data. */
export const emergencyHE: EmergencyHEGroup[] = [
  {
    title: "יפן — מספרי חירום",
    items: [
      { label: "משטרה", detail: "אנגלית מוגבלת — דברו לאט, או אמרו 'English please'" },
      { label: "כיבוי אש ואמבולנס", detail: "אנגלית מוגבלת זמינה" },
      {
        label: "מוקד תיירים של יפן (אנגלית, 24/7)",
        detail: "מוקד תיירים לחירום, אסונות וסיוע כללי באנגלית"
      },
      {
        label: "Japan Helpline (אנגלית, 24/7)",
        detail: "קו סיוע חירום ללא מטרות רווח באנגלית עבור מבקרים"
      }
    ]
  },
  {
    title: "בתי חולים — טוקיו",
    items: [
      {
        label: "בית החולים הבינלאומי סנט לוקס",
        value: "9-1 Akashi-cho, Chuo City, Tokyo",
        detail: "בית חולים גדול עם מחלקה לחולים בינלאומיים וצוות דובר אנגלית"
      },
      {
        label: "המרפאה הרפואית-כירורגית של טוקיו",
        value: "32 Mori Bldg, 3-4-30 Shiba-koen, Minato City, Tokyo",
        detail: "מרפאה פרטית דוברת אנגלית, פופולרית בקרב תושבים זרים ותיירים"
      }
    ]
  },
  {
    title: "בתי חולים — קיוטו / נארה",
    items: [
      {
        label: "בית החולים היפני של הצלב האדום — קיוטו דאיצ'י",
        value: "15-749 Honmachi, Higashiyama Ward, Kyoto",
        detail: "בית חולים גדול עם מיון, קרוב למרכז קיוטו"
      },
      {
        label: "בית החולים של אוניברסיטת נארה לרפואה",
        value: "840 Shijo-cho, Kashihara, Nara",
        detail: "בית החולים האוניברסיטאי הראשי המשרת את אזור נארה"
      }
    ]
  },
  {
    title: "בתי חולים — אוסקה / הימג'י",
    items: [
      {
        label: "המרכז הרפואי הכללי של אוסקה",
        value: "3-1-56 Bandai-Higashi, Sumiyoshi Ward, Osaka",
        detail: "בית חולים ציבורי גדול עם מחלקת מיון מלאה"
      },
      {
        label: "בית החולים של הצלב האדום — הימג'י",
        value: "399 Funakoshi-cho, Himeji, Hyogo",
        detail: "בית החולים הראשי המשרת את הימג'י, כולל מיון"
      }
    ]
  },
  {
    title: "שגרירות ישראל וסיוע קונסולרי",
    items: [
      {
        label: "שגרירות ישראל בטוקיו",
        value: "3 Chome-13-8 Mita, Meguro City, Tokyo"
      },
      {
        label: "טלפון השגרירות"
      },
      {
        label: "מוקד חירום מחוץ לשעות (ישראלים בחו״ל)",
        detail: "חמ״ל משרד החוץ — 24/7"
      },
      {
        label: "אתר השגרירות"
      }
    ]
  }
];
