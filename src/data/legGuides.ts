/* Step-by-step "how exactly do we get there" for every leg that isn't a
 * simple walk or a drive. Keyed "day:leg", where leg is "first" (hotel →
 * first stop), the index of the activity the leg leaves from, or "return"
 * (last stop → hotel).
 *
 * A "ride" step says which line, from where to where, how many stops and
 * the end-station name to look for on the platform sign. Station codes and
 * exits are from the operators' and hotels' own pages where we could find
 * them; anything else says "follow the signs". */

import type { Bi } from "./dayAlerts";

export type Step =
  | { k: "ride"; line: string; from: string; to: string; toward: string; towardJa: string; stops?: number; min?: number; note?: Bi }
  | { k: "walk" | "change" | "exit" | "taxi" | "bus" | "ticket" | "tip"; t: Bi };

export interface LegGuide {
  /** The recommended way, in one line, and why. */
  best: Bi;
  steps: Step[];
  /** The fallback when tired, loaded with bags, or late. */
  alt?: Bi;
}

const b = (en: string, he: string): Bi => ({ en, he });
const walk = (en: string, he: string): Step => ({ k: "walk", t: b(en, he) });
const change = (en: string, he: string): Step => ({ k: "change", t: b(en, he) });
const exit = (en: string, he: string): Step => ({ k: "exit", t: b(en, he) });
const taxi = (en: string, he: string): Step => ({ k: "taxi", t: b(en, he) });
const bus = (en: string, he: string): Step => ({ k: "bus", t: b(en, he) });
const ticket = (en: string, he: string): Step => ({ k: "ticket", t: b(en, he) });
const tip = (en: string, he: string): Step => ({ k: "tip", t: b(en, he) });

const TAXI_KYOTO_SHORT = b(
  "Taxi: for four people a short Kyoto ride (≈ ¥1,200–1,500) costs about the same as four train tickets.",
  "מונית: לארבעה, נסיעה קצרה בקיוטו (בערך ¥1,200–1,500) עולה כמעט כמו ארבעה כרטיסים."
);

export const legGuides: Record<string, LegGuide> = {
  /* ---------- Day 3: Narita → hotel ---------- */
  "3:0": {
    best: b("Keisei Access Express, one train all the way to Higashi-Ginza. Cheapest and no change.", "רכבת Keisei Access Express, רכבת אחת עד Higashi-Ginza. הכי זול ובלי החלפות."),
    steps: [
      ticket("After customs: get Suica cards (or add Suica to the iPhone wallet) and top up ¥3,000 each.", "אחרי המכס: לקנות כרטיסי Suica (או להוסיף Suica לארנק באייפון) ולטעון ¥3,000 לכל אחד."),
      walk("Go down to B1, to the Keisei ticket gates (blue signs 京成線 Keisei Line). Not the JR gates, and not the Skyliner.", "לרדת לקומה B1, לשערים של Keisei (שלטים כחולים 京成線 Keisei Line). לא השערים של JR ולא ה-Skyliner."),
      { k: "ride", line: "keisei", from: "Narita Airport T2", to: "Higashi-Ginza", toward: "Haneda Airport / Nishi-magome", towardJa: "羽田空港・西馬込", min: 70, note: b("Train type アクセス特急 Access Express. Check that 東銀座 Higashi-Ginza is on the screen inside.", "סוג רכבת アクセス特急 Access Express. לוודא שעל המסך בפנים מופיע 東銀座 Higashi-Ginza.") },
      exit("Higashi-Ginza: follow the exit signs toward 築地 Tsukiji / Showa-dori (Google Maps shows the exit number), then ≈ 7 min walk east to the hotel.", "ב-Higashi-Ginza: לפי שלטי היציאה לכיוון 築地 Tsukiji / Showa-dori (גוגל מפות מראה את מספר היציאה), ואז כ-7 דק' הליכה מזרחה למלון."),
      tip("Not every Access Express runs into Tokyo; if the screen doesn't show Higashi-Ginza, wait for the next one (every 20–40 min).", "לא כל Access Express נכנס לטוקיו. אם על המסך לא מופיע Higashi-Ginza, לחכות לבאה (כל 20–40 דק').")
    ],
    alt: b("Tired, with bags: Narita Express to Tokyo Station (≈ 55 min, reserved seats), then a taxi to the hotel (≈ 10 min, ¥1,500).", "עייפים ועם מזוודות: Narita Express לתחנת טוקיו (כ-55 דק', מושבים שמורים), ומשם מונית למלון (כ-10 דק', ¥1,500).")
  },

  /* ---------- Day 4 ---------- */
  "4:0": {
    best: b("Metro, one change at Hibiya. 25 min.", "מטרו, החלפה אחת ב-Hibiya. 25 דק'."),
    steps: [
      walk("From the market walk back to Tsukiji station (H11), 3 min.", "מהשוק חוזרים לתחנת Tsukiji ‏(H11), 3 דק'."),
      { k: "ride", line: "hibiya", from: "Tsukiji H11", to: "Hibiya H08", toward: "Naka-meguro", towardJa: "中目黒", stops: 3, min: 5 },
      change("At Hibiya follow the green C signs to the Chiyoda line (2–3 min underground).", "ב-Hibiya הולכים לפי השלטים הירוקים עם C לקו Chiyoda (2–3 דק' מתחת לאדמה)."),
      { k: "ride", line: "chiyoda", from: "Hibiya C09", to: "Nezu C14", toward: "Kita-senju / Ayase", towardJa: "北千住・綾瀬", stops: 5, min: 11 },
      exit("Nezu exit 1, then 5 min walk to the shrine (signposted).", "יציאה 1 ב-Nezu, ואז 5 דק' הליכה למקדש (יש שלטים).")
    ],
    alt: b("Taxi ≈ 20 min, ≈ ¥2,500.", "מונית כ-20 דק', בערך ¥2,500.")
  },
  "4:3": {
    best: b("Hibiya line from Ueno straight to Tsukiji, no change. Rest before the evening.", "קו Hibiya מאואנו ישר ל-Tsukiji, בלי החלפה. מנוחה לפני הערב."),
    steps: [
      walk("From the park walk down to Ueno station and follow the silver H signs (Hibiya line).", "מהפארק יורדים לתחנת Ueno והולכים לפי השלטים הכסופים עם H (קו Hibiya)."),
      { k: "ride", line: "hibiya", from: "Ueno H18", to: "Tsukiji H11", toward: "Naka-meguro", towardJa: "中目黒", stops: 7, min: 15 },
      exit("Tsukiji exit 3a or 3b: the hotel is 2 min away.", "יציאה 3a או 3b ב-Tsukiji: המלון במרחק 2 דק'.")
    ],
    alt: b("Taxi ≈ 20 min, ≈ ¥2,500.", "מונית כ-20 דק', בערך ¥2,500.")
  },
  "4:4": {
    best: b("Metro, one change at Ginza. 25 min. Leave by 19:20.", "מטרו, החלפה אחת בגינזה. 25 דק'. לצאת עד 19:20."),
    steps: [
      walk("Hotel → Tsukiji station (H11), entrance 3a/3b, 2 min.", "מהמלון לתחנת Tsukiji ‏(H11), כניסה 3a/3b, 2 דק'."),
      { k: "ride", line: "hibiya", from: "Tsukiji H11", to: "Ginza H09", toward: "Naka-meguro", towardJa: "中目黒", stops: 2, min: 3 },
      change("At Ginza follow the red M signs to the Marunouchi line (≈ 4 min walk inside the station).", "בגינזה הולכים לפי השלטים האדומים עם M לקו Marunouchi (כ-4 דק' הליכה בתוך התחנה)."),
      { k: "ride", line: "marunouchi", from: "Ginza M16", to: "Shinjuku-sanchome M09", toward: "Ogikubo", towardJa: "荻窪", stops: 7, min: 13 },
      exit("Shinjuku-sanchome: follow the exit signs to the Gap store / Shinjuku-dori (a few minutes).", "ב-Shinjuku-sanchome: לפי שלטי היציאה לחנות Gap / רחוב Shinjuku-dori (כמה דקות).")
    ],
    alt: b("Taxi ≈ 25 min, ≈ ¥4,000.", "מונית כ-25 דק', בערך ¥4,000.")
  },
  "4:return": {
    best: b("Oedo line, no change, to Tsukijishijo. Last trains around 00:00.", "קו Oedo בלי החלפה עד Tsukijishijo. רכבות אחרונות בסביבות 00:00."),
    steps: [
      walk("Go into Shinjuku station and follow the magenta E signs (Oedo line). It's deep: several escalators down.", "נכנסים לתחנת שינג'וקו והולכים לפי השלטים הסגולים-ורודים עם E (קו Oedo). הקו עמוק: כמה מדרגות נעות למטה."),
      { k: "ride", line: "oedo", from: "Shinjuku E27", to: "Tsukijishijo E18", toward: "Roppongi / Daimon", towardJa: "六本木・大門", min: 25, note: b("The Oedo line is a loop-shaped line: make sure the sign says 六本木 Roppongi, not 都庁前 Tochomae.", "קו Oedo הוא בצורת לולאה: לוודא שעל השלט כתוב 六本木 Roppongi ולא 都庁前 Tochomae.") },
      exit("Tsukijishijo: exit toward 築地 Tsukiji / 新大橋通り Shin-Ohashi-dori, then ≈ 8 min walk to the hotel.", "ב-Tsukijishijo: יציאה לכיוון 築地 Tsukiji / 新大橋通り Shin-Ohashi-dori, ואז כ-8 דק' הליכה למלון.")
    ],
    alt: b("Or Marunouchi line Shinjuku-sanchome → Ginza, then Hibiya line 2 stops to Tsukiji. After midnight: taxi ≈ ¥5,000 (night surcharge after 22:00).", "או קו Marunouchi מ-Shinjuku-sanchome לגינזה, ומשם קו Hibiya שתי תחנות ל-Tsukiji. אחרי חצות: מונית בערך ¥5,000 (תוספת לילה אחרי 22:00).")
  },

  /* ---------- Day 5 ---------- */
  "5:first": {
    best: b("Metro, one change at Hibiya. 30 min.", "מטרו, החלפה אחת ב-Hibiya. 30 דק'."),
    steps: [
      walk("Hotel → Tsukiji station (H11), 2 min.", "מהמלון לתחנת Tsukiji ‏(H11), 2 דק'."),
      { k: "ride", line: "hibiya", from: "Tsukiji H11", to: "Hibiya H08", toward: "Naka-meguro", towardJa: "中目黒", stops: 3, min: 5 },
      change("Follow the green C signs to the Chiyoda line.", "לפי השלטים הירוקים עם C לקו Chiyoda."),
      { k: "ride", line: "chiyoda", from: "Hibiya C09", to: "Meiji-jingumae C03", toward: "Yoyogi-uehara", towardJa: "代々木上原", stops: 6, min: 12 },
      exit("Exit 2 (toward JR Harajuku), then cross the bridge to the big wooden torii, 5 min.", "יציאה 2 (לכיוון JR Harajuku), ואז חוצים את הגשר אל שער הטוריי הגדול מעץ, 5 דק'.")
    ],
    alt: b("Taxi ≈ 25 min, ≈ ¥3,500.", "מונית כ-25 דק', בערך ¥3,500.")
  },
  "5:2": {
    best: b("Fukutoshin line from Meiji-jingumae runs straight on as the Tokyu Toyoko line: get off at Daikanyama and walk down to Nakameguro.", "קו Fukutoshin מ-Meiji-jingumae ממשיך ישר כקו Tokyu Toyoko: יורדים בדאיקאניאמה והולכים ברגל לנאקאמגורו."),
    steps: [
      walk("Go down into Meiji-jingumae station and follow the brown F signs (Fukutoshin line).", "יורדים לתחנת Meiji-jingumae והולכים לפי השלטים החומים עם F (קו Fukutoshin)."),
      { k: "ride", line: "fukutoshin", from: "Meiji-jingumae F15", to: "Daikanyama TY02", toward: "Motomachi-Chukagai / Yokohama", towardJa: "元町・中華街・横浜", min: 8, note: b("Take a local train (各停). Expresses skip Daikanyama. If it's an express, change to a local at Shibuya.", "לעלות על רכבת מקומית (各停). אקספרס לא עוצר בדאיקאניאמה. אם עלינו על אקספרס, מחליפים למקומית בשיבויה.") },
      walk("Daikanyama: wander the lanes, then 10 min downhill to the Meguro river in Nakameguro.", "בדאיקאניאמה: מסתובבים בסמטאות, ואז 10 דק' בירידה לנהר מגורו בנאקאמגורו.")
    ],
    alt: b("Taxi ≈ 15 min, ≈ ¥2,000.", "מונית כ-15 דק', בערך ¥2,000.")
  },
  "5:3": {
    best: b("Tokyu Toyoko line, 2 stops, 4 min.", "קו Tokyu Toyoko, 2 תחנות, 4 דק'."),
    steps: [
      { k: "ride", line: "toyoko", from: "Naka-meguro TY03", to: "Shibuya TY01", toward: "Shibuya", towardJa: "渋谷", stops: 2, min: 4, note: b("Every train goes to Shibuya; some continue onto the Fukutoshin line, also fine.", "כל רכבת מגיעה לשיבויה. חלקן ממשיכות לקו Fukutoshin, גם בסדר.") },
      exit("The platform is deep underground. Follow ハチ公口 Hachiko exit signs up to the scramble crossing (≈ 7 min).", "הרציף עמוק מתחת לאדמה. הולכים לפי השלטים ハチ公口 Hachiko עד מעבר החצייה הגדול (כ-7 דק').")
    ]
  },
  "5:return": {
    best: b("Ginza line, no change, 8 stops to Ginza, then 10 min walk.", "קו Ginza בלי החלפה, 8 תחנות לגינזה, ואז 10 דק' הליכה."),
    steps: [
      walk("In Shibuya follow the orange G signs (Ginza line). Its platform is up on the 3rd floor.", "בשיבויה הולכים לפי השלטים הכתומים עם G (קו Ginza). הרציף שלו למעלה בקומה 3."),
      { k: "ride", line: "ginza", from: "Shibuya G01", to: "Ginza G09", toward: "Asakusa", towardJa: "浅草", stops: 8, min: 16 },
      walk("From Ginza walk east along Harumi-dori to the hotel, ≈ 12 min. Or change to the Hibiya line, 2 stops to Tsukiji.", "מגינזה הולכים מזרחה לאורך Harumi-dori למלון, כ-12 דק'. או מחליפים לקו Hibiya, שתי תחנות ל-Tsukiji.")
    ],
    alt: b("Taxi ≈ 25 min, ≈ ¥4,000.", "מונית כ-25 דק', בערך ¥4,000.")
  },

  /* ---------- Day 6 ---------- */
  "6:first": {
    best: b("Taxi with the bags. The hotel can call one.", "מונית עם המזוודות. המלון יכול להזמין."),
    steps: [
      taxi("Ask for Tokyo Station Yaesu side (東京駅 八重洲口), ≈ 15 min, ≈ ¥1,500.", "לבקש את תחנת טוקיו, צד Yaesu ‏(東京駅 八重洲口), כ-15 דק', בערך ¥1,500.")
    ]
  },
  "6:0": {
    best: b("Tokaido Shinkansen to Odawara: Kodama or a Hikari that stops at Odawara, ≈ 35 min.", "שינקנסן Tokaido לאודווארה: Kodama או Hikari שעוצר באודווארה, כ-35 דק'."),
    steps: [
      ticket("Buy tickets at the JR Central machines (English button) or the ticket office: Tokyo → Odawara. You get two tickets per person; put both into the gate together.", "קונים כרטיסים במכונות של JR Central (כפתור English) או בקופה: Tokyo → Odawara. כל אחד מקבל שני כרטיסים; מכניסים את שניהם יחד לשער."),
      walk("Follow the blue 東海道新幹線 Tokaido Shinkansen signs to platforms 14–19.", "הולכים לפי השלטים הכחולים 東海道新幹線 Tokaido Shinkansen לרציפים 14–19."),
      { k: "ride", line: "shinkansen", from: "Tokyo", to: "Odawara", toward: "Shin-Osaka", towardJa: "新大阪", min: 35, note: b("Check the board says 小田原 Odawara among the stops. Nozomi does NOT stop there. Non-reserved cars: 1–3.", "לבדוק שבלוח מופיע 小田原 Odawara בין העצירות. Nozomi לא עוצר שם. קרונות לא שמורים: 1–3.") },
      exit("Odawara: east exit for Toyota Rent a Car (a few minutes' walk).", "באודווארה: יציאה מזרחית ל-Toyota Rent a Car (כמה דקות הליכה).")
    ]
  },

  /* ---------- Day 9: Kamikochi ---------- */
  "9:0": {
    best: b("Park at Akandana and take the shuttle bus. Private cars can't drive into Kamikochi.", "חונים ב-Akandana ועולים לאוטובוס. רכבים פרטיים לא יכולים להיכנס לקמיקוצ'י."),
    steps: [
      ticket("Buy round-trip bus tickets at the Akandana bus terminal by the car park. Keep the return half.", "קונים כרטיסי הלוך-חזור לאוטובוס בטרמינל ליד החניון ב-Akandana. לשמור את כרטיס החזור."),
      bus("Get off at 大正池 Taisho-ike, the first stop inside Kamikochi (≈ 25 min).", "יורדים ב-大正池 Taisho-ike, התחנה הראשונה בתוך קמיקוצ'י (כ-25 דק').")
    ]
  },
  "9:1": {
    best: b("Bus back from Kamikochi Bus Terminal to Hirayu. Last bus around 17:00–17:30 in November.", "אוטובוס חזרה מהטרמינל בקמיקוצ'י להיראיו. האוטובוס האחרון בסביבות 17:00–17:30 בנובמבר."),
    steps: [
      bus("Check the last-bus time on the board when you arrive in the morning. Queue early in the afternoon.", "לבדוק בבוקר על הלוח מתי האוטובוס האחרון. להיכנס לתור מוקדם אחר הצהריים."),
      walk("From Hirayu bus terminal walk to Hirayu no Mori onsen, or drive (it's by the car park).", "מתחנת האוטובוס בהיראיו הולכים לאונסן Hirayu no Mori, או נוסעים ברכב (הוא ליד החניון).")
    ]
  },

  /* ---------- Day 10 ---------- */
  "10:2": {
    best: b("Taxi: 10 min, ≈ ¥1,500, cheaper than four bus tickets.", "מונית: 10 דק', בערך ¥1,500, זול יותר מארבעה כרטיסי אוטובוס."),
    steps: [
      taxi("Taxi rank at Takayama Station, or ask a shop to call one: 飛騨の里 Hida no Sato.", "תחנת מוניות ליד תחנת טקיאמה, או לבקש מחנות להזמין: 飛騨の里 Hida no Sato."),
      bus("Or the Sarubobo bus from the Nohi bus centre next to the station, every 30 min, ≈ 10 min.", "או אוטובוס Sarubobo ממרכז האוטובוסים Nohi ליד התחנה, כל 30 דק', כ-10 דק'.")
    ]
  },
  "10:return": {
    best: b("Taxi back to the hotel (≈ 10 min).", "מונית חזרה למלון (כ-10 דק')."),
    steps: [taxi("Ask the folk village entrance to call a taxi, or take the bus back to the station and walk 10 min.", "לבקש בכניסה לכפר להזמין מונית, או אוטובוס חזרה לתחנה ו-10 דק' הליכה.")]
  },

  /* ---------- Day 11–13: Kanazawa ---------- */
  "11:return": {
    best: b("Taxi with the bags from the East Exit taxi rank, ≈ 10 min, ≈ ¥1,200.", "מונית עם המזוודות מתחנת המוניות ביציאה המזרחית, כ-10 דק', בערך ¥1,200."),
    steps: [bus("Or a bus from the East Exit bus terminal to 武蔵ヶ辻 Musashigatsuji (≈ 5 min), then a short walk.", "או אוטובוס מהטרמינל ביציאה המזרחית ל-武蔵ヶ辻 Musashigatsuji (כ-5 דק'), ומשם הליכה קצרה.")]
  },
  "12:2": {
    best: b("Taxi, 10 min, ≈ ¥1,500.", "מונית, 10 דק', בערך ¥1,500."),
    steps: [taxi("Taxis wait on the main road below Higashi Chaya (Hashiba-cho).", "מוניות מחכות בכביש הראשי מתחת להיגאשי צ'איה (Hashiba-cho).")]
  },
  "13:first": {
    best: b("Taxi with the bags, ≈ 10 min.", "מונית עם המזוודות, כ-10 דק'."),
    steps: [taxi("Ask the hotel to call one for 9:30: 金沢駅 Kanazawa Station.", "לבקש מהמלון מונית ל-9:30: 金沢駅 Kanazawa Station.")]
  },
  "13:0": {
    best: b("Hokuriku Shinkansen to Tsuruga, then the Thunderbird to Kyoto. One ticket covers both.", "שינקנסן Hokuriku לצורוגה, ומשם רכבת Thunderbird לקיוטו. כרטיס אחד לשתיהן."),
    steps: [
      ticket("At Kanazawa, buy Kanazawa → Kyoto at a JR West machine or office, with reserved seats on both trains.", "בקנאזאווה קונים Kanazawa → Kyoto במכונה או בקופה של JR West, עם מושבים שמורים בשתי הרכבות."),
      { k: "ride", line: "shinkansen", from: "Kanazawa", to: "Tsuruga", toward: "Tsuruga", towardJa: "敦賀", min: 50, note: b("Tsurugi, Hakutaka or Kagayaki trains, all end at Tsuruga.", "רכבות Tsurugi, Hakutaka או Kagayaki, כולן מסתיימות בצורוגה.") },
      change("Tsuruga: go down from the shinkansen platform following the サンダーバード Thunderbird / 在来線 signs. ≈ 8–10 min, it's the same building.", "בצורוגה: יורדים מרציף השינקנסן לפי השלטים サンダーバード Thunderbird / 在来線. כ-8–10 דק', באותו בניין."),
      { k: "ride", line: "thunderbird", from: "Tsuruga", to: "Kyoto", toward: "Osaka", towardJa: "大阪", min: 55 },
      taxi("Kyoto: with bags, take a taxi from the Karasuma (north) exit rank to the hotel, ≈ 5 min, ≈ ¥800. Without bags, it's 7 min on foot.", "בקיוטו: עם מזוודות, מונית מתחנת המוניות ביציאה הצפונית (Karasuma) למלון, כ-5 דק', בערך ¥800. בלי מזוודות זה 7 דק' ברגל.")
    ]
  },
  "13:1": {
    best: b("Keihan line 2 stops to Gion-Shijo, then walk across the bridge to Nishiki. 20 min.", "קו Keihan שתי תחנות ל-Gion-Shijo, ואז הליכה מעבר לגשר לנישיקי. 20 דק'."),
    steps: [
      walk("Hotel → Keihan Shichijo station, 7 min east (toward the river).", "מהמלון לתחנת Keihan Shichijo, 7 דק' מזרחה (לכיוון הנהר)."),
      { k: "ride", line: "keihan", from: "Shichijo KH37", to: "Gion-Shijo KH39", toward: "Demachiyanagi", towardJa: "出町柳", stops: 2, min: 4, note: b("Any train going north stops there.", "כל רכבת צפונה עוצרת שם.") },
      walk("Exit toward 四条大橋 Shijo bridge, cross the river west, turn right into the Teramachi/Shinkyogoku arcade and left into Nishiki. ≈ 10 min.", "יוצאים לכיוון 四条大橋 גשר Shijo, חוצים את הנהר מערבה, פונים ימינה למדרחוב המקורה Teramachi/Shinkyogoku ושמאלה לנישיקי. כ-10 דק'.")
    ],
    alt: TAXI_KYOTO_SHORT
  },
  "13:return": {
    best: b("Keihan Gion-Shijo → Shichijo, 2 stops, then 7 min walk. Or a taxi.", "קו Keihan מ-Gion-Shijo ל-Shichijo, שתי תחנות, ואז 7 דק' הליכה. או מונית."),
    steps: [
      walk("From Pontocho walk to the east end of Shijo bridge, Gion-Shijo station is underneath.", "מפונטוצ'ו הולכים לצד המזרחי של גשר Shijo; תחנת Gion-Shijo מתחתיו."),
      { k: "ride", line: "keihan", from: "Gion-Shijo KH39", to: "Shichijo KH37", toward: "Yodoyabashi / Osaka", towardJa: "淀屋橋・大阪", stops: 2, min: 4 },
      walk("Exit toward 七条通 Shichijo-dori, walk 7 min west to the hotel.", "יוצאים לכיוון 七条通 Shichijo-dori, 7 דק' הליכה מערבה למלון.")
    ],
    alt: TAXI_KYOTO_SHORT
  },

  /* ---------- Day 14 ---------- */
  "14:first": {
    best: b("JR Nara line, 2 stops; Inari station is right at the shrine gate.", "קו JR Nara, שתי תחנות; תחנת Inari נמצאת ממש מול שער המקדש."),
    steps: [
      walk("Hotel → Kyoto Station, 7 min. Follow 奈良線 Nara Line signs to platforms 8–10.", "מהמלון לתחנת קיוטו, 7 דק'. הולכים לפי השלטים 奈良線 Nara Line לרציפים 8–10."),
      { k: "ride", line: "jr-kyoto", from: "Kyoto", to: "Inari", toward: "Nara", towardJa: "奈良", stops: 2, min: 5, note: b("Local train (普通) only. The rapid (みやこ路快速) skips Inari.", "רק רכבת מקומית (普通). המהירה (みやこ路快速) לא עוצרת ב-Inari.") },
      exit("Inari: cross the road, the big orange torii is in front of you.", "ב-Inari: חוצים את הכביש, הטוריי הכתום הגדול מולכם.")
    ],
    alt: b("Taxi ≈ 10 min, ≈ ¥1,500. Or Keihan Shichijo → Fushimi-Inari (local train, 3 stops) + 5 min walk.", "מונית כ-10 דק', בערך ¥1,500. או Keihan מ-Shichijo ל-Fushimi-Inari (רכבת מקומית, 3 תחנות) ו-5 דק' הליכה.")
  },
  "14:0": {
    best: b("Walk 20 min north through the quiet streets. Tired legs: JR one stop Inari → Tofukuji.", "הליכה של 20 דק' צפונה ברחובות שקטים. אם הרגליים עייפות: JR תחנה אחת מ-Inari ל-Tofukuji."),
    steps: [
      { k: "ride", line: "jr-kyoto", from: "Inari", to: "Tofukuji", toward: "Kyoto", towardJa: "京都", stops: 1, min: 3 },
      walk("From Tofukuji station 10 min east to the temple.", "מתחנת Tofukuji עוד 10 דק' מזרחה למקדש.")
    ]
  },
  "14:1": {
    best: b("Taxi, 15 min, ≈ ¥1,500: saves an uphill walk.", "מונית, 15 דק', בערך ¥1,500: חוסכת עלייה ברגל."),
    steps: [
      taxi("Ask for 八坂の塔 Yasaka-no-to (the pagoda).", "לבקש 八坂の塔 Yasaka-no-to (הפגודה)."),
      { k: "ride", line: "keihan", from: "Tofukuji KH36", to: "Kiyomizu-Gojo KH38", toward: "Demachiyanagi", towardJa: "出町柳", stops: 2, min: 4, note: b("The train option, then 15 min uphill walk.", "האפשרות ברכבת, ואחריה 15 דק' הליכה בעלייה.") }
    ]
  },
  "14:return": {
    best: b("Taxi from Higashioji-dori below Kodai-ji, ≈ 10 min, ≈ ¥1,500.", "מונית מרחוב Higashioji-dori מתחת לקודאי-ג'י, כ-10 דק', בערך ¥1,500."),
    steps: [
      walk("Or walk 10 min to Gion-Shijo station (by the river).", "או 10 דק' הליכה לתחנת Gion-Shijo (ליד הנהר)."),
      { k: "ride", line: "keihan", from: "Gion-Shijo KH39", to: "Shichijo KH37", toward: "Yodoyabashi / Osaka", towardJa: "淀屋橋・大阪", stops: 2, min: 4 }
    ]
  },

  /* ---------- Day 15: Kurama → Kibune ---------- */
  "15:first": {
    best: b("Keihan line to the end, Demachiyanagi. Every train goes there.", "קו Keihan עד הסוף, Demachiyanagi. כל רכבת מגיעה לשם."),
    steps: [
      walk("Hotel → Keihan Shichijo station, 7 min.", "מהמלון לתחנת Keihan Shichijo, 7 דק'."),
      { k: "ride", line: "keihan", from: "Shichijo KH37", to: "Demachiyanagi KH42", toward: "Demachiyanagi", towardJa: "出町柳", stops: 5, min: 12 },
      change("At Demachiyanagi follow 叡山電車 Eizan Railway signs up to street level: the Eizan station is right next door (2 min).", "ב-Demachiyanagi הולכים לפי השלטים 叡山電車 Eizan Railway עד גובה הרחוב: תחנת אייזן ממש בצמוד (2 דק').")
    ]
  },
  "15:0": {
    best: b("Eizan train to Kurama, the end of the line. ≈ 30 min.", "רכבת אייזן לקוראמה, התחנה הסופית. כ-30 דק'."),
    steps: [
      { k: "ride", line: "eizan", from: "Demachiyanagi", to: "Kurama", toward: "Kurama", towardJa: "鞍馬", min: 30, note: b("Take a train marked 鞍馬 Kurama. Trains to 八瀬比叡山口 Yase-Hieizanguchi go the other way at Takaragaike!", "לעלות על רכבת שכתוב עליה 鞍馬 Kurama. רכבות ל-八瀬比叡山口 Yase-Hieizanguchi מתפצלות לכיוון אחר ב-Takaragaike!") },
      tip("Pay with Suica if the reader accepts it, otherwise buy a ticket at the machine; have coins. The window seats of the Kirara panorama car face the autumn trees.", "לשלם ב-Suica אם הקורא מקבל, אחרת כרטיס במכונה; כדאי שיהיו מטבעות. בקרון הפנורמי Kirara המושבים מול החלונות פונים לעצי השלכת.")
    ]
  },
  "15:2": {
    best: b("Bus 33 or walk 30 min down the road to Kibuneguchi station, then Eizan back.", "אוטובוס 33 או 30 דק' הליכה במורד הכביש לתחנת Kibuneguchi, ואז אייזן חזרה."),
    steps: [
      bus("Kyoto Bus 33 from the Kibune stop (below the shrine) to Kibuneguchi station, ≈ 5 min. Pay when you get off.", "Kyoto Bus 33 מתחנת Kibune (מתחת למקדש) לתחנת Kibuneguchi, כ-5 דק'. משלמים ביציאה."),
      { k: "ride", line: "eizan", from: "Kibuneguchi", to: "Demachiyanagi", toward: "Demachiyanagi", towardJa: "出町柳", min: 27 }
    ]
  },
  "15:return": {
    best: b("Keihan from Demachiyanagi back to Shichijo, then 7 min walk.", "קו Keihan מ-Demachiyanagi חזרה ל-Shichijo, ואז 7 דק' הליכה."),
    steps: [{ k: "ride", line: "keihan", from: "Demachiyanagi KH42", to: "Shichijo KH37", toward: "Yodoyabashi / Osaka", towardJa: "淀屋橋・大阪", stops: 5, min: 12 }]
  },

  /* ---------- Day 16: Arashiyama + Nijo ---------- */
  "16:first": {
    best: b("JR Sagano line from Kyoto Station, 15 min. Leave the hotel by 07:00.", "קו JR Sagano מתחנת קיוטו, 15 דק'. לצאת מהמלון עד 07:00."),
    steps: [
      walk("Hotel → Kyoto Station, 7 min. Then follow 嵯峨野線 Sagano Line signs to platforms 31–33, at the far west end of the station (≈ 5 min inside).", "מהמלון לתחנת קיוטו, 7 דק'. ואז לפי השלטים 嵯峨野線 Sagano Line לרציפים 31–33, בקצה המערבי של התחנה (כ-5 דק' בפנים)."),
      { k: "ride", line: "jr-kyoto", from: "Kyoto", to: "Saga-Arashiyama", toward: "Sonobe / Kameoka", towardJa: "園部・亀岡", min: 15, note: b("Local and rapid trains both stop at Saga-Arashiyama.", "גם מקומית וגם מהירה עוצרות ב-Saga-Arashiyama.") },
      exit("South exit, then 10 min walk west to the bamboo grove (via Tenryu-ji's north gate road).", "יציאה דרומית, ואז 10 דק' הליכה מערבה ליער הבמבוק (ברחוב של השער הצפוני של טנריו-ג'י).")
    ],
    alt: b("Taxi from the hotel ≈ 30 min, ≈ ¥4,000; at 07:00 the roads are empty.", "מונית מהמלון כ-30 דק', בערך ¥4,000; ב-07:00 הכבישים ריקים.")
  },
  "16:3": {
    best: b("JR back to Kyoto Station and rest. At 17:30 subway to Nijo Castle.", "JR חזרה לתחנת קיוטו ומנוחה. ב-17:30 רכבת תחתית לטירת ניג'ו."),
    steps: [
      walk("Togetsukyo → Saga-Arashiyama station, 15 min north.", "מגשר Togetsukyo לתחנת Saga-Arashiyama, 15 דק' צפונה."),
      { k: "ride", line: "jr-kyoto", from: "Saga-Arashiyama", to: "Kyoto", toward: "Kyoto", towardJa: "京都", min: 15 },
      walk("Evening, hotel → Nijo: Kyoto Station subway (green K signs).", "בערב, מהמלון לניג'ו: רכבת תחתית מתחנת קיוטו (שלטים ירוקים עם K)."),
      { k: "ride", line: "karasuma", from: "Kyoto K11", to: "Karasuma Oike K08", toward: "Kokusaikaikan", towardJa: "国際会館", stops: 3, min: 6 },
      change("At Karasuma Oike follow the orange T signs to the Tozai line, one floor down.", "ב-Karasuma Oike הולכים לפי השלטים הכתומים עם T לקו Tozai, קומה אחת למטה."),
      { k: "ride", line: "tozai-kyoto", from: "Karasuma Oike T13", to: "Nijojo-mae T14", toward: "Uzumasa Tenjingawa", towardJa: "太秦天神川", stops: 1, min: 2 }
    ],
    alt: b("Hotel → Nijo by taxi ≈ 15 min, ≈ ¥2,000.", "מהמלון לניג'ו במונית כ-15 דק', בערך ¥2,000.")
  },
  "16:return": {
    best: b("Subway back, one change at Karasuma Oike. Or a taxi, ≈ ¥2,000.", "רכבת תחתית חזרה, החלפה אחת ב-Karasuma Oike. או מונית, בערך ¥2,000."),
    steps: [
      { k: "ride", line: "tozai-kyoto", from: "Nijojo-mae T14", to: "Karasuma Oike T13", toward: "Rokujizo", towardJa: "六地蔵", stops: 1, min: 2 },
      change("Follow the green K signs to the Karasuma line, one floor up.", "לפי השלטים הירוקים עם K לקו Karasuma, קומה אחת למעלה."),
      { k: "ride", line: "karasuma", from: "Karasuma Oike K08", to: "Kyoto K11", toward: "Takeda", towardJa: "竹田", stops: 3, min: 6 },
      walk("Kyoto Station → hotel, 7 min.", "מתחנת קיוטו למלון, 7 דק'.")
    ]
  },

  /* ---------- Day 17 ---------- */
  "17:first": {
    best: b("Keihan to Demachiyanagi, then 12 min walk east along Imadegawa-dori.", "קו Keihan ל-Demachiyanagi, ואז 12 דק' הליכה מזרחה לאורך Imadegawa-dori."),
    steps: [
      walk("Hotel → Keihan Shichijo, 7 min.", "מהמלון ל-Keihan Shichijo, 7 דק'."),
      { k: "ride", line: "keihan", from: "Shichijo KH37", to: "Demachiyanagi KH42", toward: "Demachiyanagi", towardJa: "出町柳", stops: 5, min: 12 },
      walk("Exit to 今出川通 Imadegawa-dori, walk east to the Hyakumanben crossing; Chion-ji is on the right.", "יוצאים לרחוב 今出川通 Imadegawa-dori והולכים מזרחה עד צומת Hyakumanben; מקדש צ'יון-ג'י מימין.")
    ],
    alt: b("Taxi ≈ 25 min, ≈ ¥2,500.", "מונית כ-25 דק', בערך ¥2,500.")
  },
  "17:2": {
    best: b("Taxi to the hotel for the bags (≈ 20 min, ≈ ¥2,500), then 7 min walk to Kyoto Station.", "מונית למלון לאסוף מזוודות (כ-20 דק', בערך ¥2,500), ואז 7 דק' הליכה לתחנת קיוטו."),
    steps: [taxi("Taxis wait on the road below Nanzen-ji's main gate. Ask for 御宿野乃 京都七条 Onyado Nono Kyoto Shichijo.", "מוניות מחכות בכביש מתחת לשער הראשי של ננזן-ג'י. לבקש 御宿野乃 京都七条 Onyado Nono Kyoto Shichijo.")]
  },
  "17:3": {
    best: b("Tokaido Shinkansen Nozomi to Tokyo, ≈ 2 h 15.", "שינקנסן Tokaido מסוג Nozomi לטוקיו, כ-2 שעות ורבע."),
    steps: [
      ticket("Buy at the JR Central machines: Kyoto → Tokyo, reserved, seats D–E in two rows. E is the Mt Fuji side (≈ 1 h 30 after Kyoto).", "קונים במכונות של JR Central: Kyoto → Tokyo, שמור, מושבים D–E בשתי שורות. E הוא הצד של הר פוג'י (בערך שעה וחצי אחרי קיוטו)."),
      tip("Big suitcases (length + width + height over 160 cm) need a seat booked with the oversized-luggage area.", "מזוודות גדולות (אורך + רוחב + גובה מעל 160 ס\"מ) מחייבות הזמנת מושב עם אזור מזוודות גדולות."),
      { k: "ride", line: "shinkansen", from: "Kyoto", to: "Tokyo", toward: "Tokyo", towardJa: "東京", min: 135, note: b("Platforms 11–14. Car numbers are painted on the platform floor; stand there.", "רציפים 11–14. מספרי הקרונות מסומנים על רצפת הרציף; עומדים שם.") },
      { k: "ride", line: "yamanote", from: "Tokyo JY01", to: "Shimbashi JY03", toward: "Shinagawa", towardJa: "品川", stops: 2, min: 4, note: b("Yamanote or Keihin-Tohoku line, both go. The hotel is connected underground to Shimbashi.", "קו Yamanote או Keihin-Tohoku, שניהם מתאימים. המלון מחובר בשביל תת-קרקעי לשימבאשי.") }
    ],
    alt: b("With bags: taxi from Tokyo Station to the Dai-ichi Hotel ≈ 10 min, ≈ ¥1,500.", "עם מזוודות: מונית מתחנת טוקיו למלון Dai-ichi כ-10 דק', בערך ¥1,500.")
  },
  "17:4": {
    best: b("Ginza line, no change, to the end: Asakusa. 20 min.", "קו Ginza בלי החלפה עד הסוף: אסקוסה. 20 דק'."),
    steps: [
      walk("From the hotel take the underground passage to Shimbashi station, then the orange G signs.", "מהמלון בשביל התת-קרקעי לתחנת שימבאשי, ואז לפי השלטים הכתומים עם G."),
      { k: "ride", line: "ginza", from: "Shimbashi G08", to: "Asakusa G19", toward: "Asakusa", towardJa: "浅草", stops: 11, min: 19 },
      exit("Exit 1: Kaminarimon gate is 1 min away.", "יציאה 1: שער קמינרימון במרחק דקה.")
    ]
  },
  "17:return": {
    best: b("Ginza line back to Shimbashi, no change.", "קו Ginza חזרה לשימבאשי, בלי החלפה."),
    steps: [{ k: "ride", line: "ginza", from: "Asakusa G19", to: "Shimbashi G08", toward: "Shibuya", towardJa: "渋谷", stops: 11, min: 19, note: b("Asakusa is the first station, every train goes your way.", "אסקוסה היא התחנה הראשונה, כל רכבת נוסעת בכיוון שלנו.") }]
  },

  /* ---------- Day 18 ---------- */
  "18:first": {
    best: b("Toei Mita line from Uchisaiwaicho, no change, 4 stops. 25 min door to door.", "קו Toei Mita מ-Uchisaiwaicho, בלי החלפה, 4 תחנות. 25 דק' מדלת לדלת."),
    steps: [
      walk("Hotel → Uchisaiwaicho station, 4 min (blue I signs).", "מהמלון לתחנת Uchisaiwaicho, 4 דק' (שלטים כחולים עם I)."),
      { k: "ride", line: "mita", from: "Uchisaiwaicho I07", to: "Suidobashi I11", toward: "Nishi-takashimadaira", towardJa: "西高島平", stops: 4, min: 8 },
      exit("Follow the 小石川後楽園 Koishikawa Korakuen signs, ≈ 8 min walk to the west gate.", "לפי השלטים 小石川後楽園 Koishikawa Korakuen, כ-8 דק' הליכה לשער המערבי.")
    ],
    alt: b("Taxi ≈ 20 min, ≈ ¥2,500.", "מונית כ-20 דק', בערך ¥2,500.")
  },
  "18:1": {
    best: b("Tozai line, no change, 5 stops.", "קו Tozai בלי החלפה, 5 תחנות."),
    steps: [
      { k: "ride", line: "tozai-tokyo", from: "Kagurazaka T05", to: "Nihombashi T10", toward: "Nishi-funabashi", towardJa: "西船橋", stops: 5, min: 10 },
      exit("Follow the signs for 日本橋三越 Nihombashi Mitsukoshi, ≈ 5 min underground.", "לפי השלטים 日本橋三越 Nihombashi Mitsukoshi, כ-5 דק' מתחת לאדמה.")
    ]
  },
  "18:3": {
    best: b("JR Yokosuka line straight from Shimbashi, next to the hotel. No change, ≈ 55 min.", "קו JR Yokosuka ישר משימבאשי, ליד המלון. בלי החלפה, כ-55 דק'."),
    steps: [
      walk("At JR Shimbashi follow the blue 横須賀線 Yokosuka Line signs (underground platforms).", "ב-JR Shimbashi הולכים לפי השלטים הכחולים 横須賀線 Yokosuka Line (רציפים תת-קרקעיים)."),
      { k: "ride", line: "yokosuka", from: "Shimbashi", to: "Kamakura", toward: "Zushi / Kurihama", towardJa: "逗子・久里浜", min: 55 }
    ]
  }
};

/** Lines that only appear in leg guides (not on the transit page's line list). */
export const EXTRA_LINES: Record<string, { code: string; color: string; en: string; he: string }> = {
  keisei: { code: "KS", color: "#1F4E9B", en: "Keisei Access Express", he: "Keisei Access Express" },
  shinkansen: { code: "新", color: "#1B3D8F", en: "Shinkansen", he: "שינקנסן" },
  thunderbird: { code: "LE", color: "#3E4A9E", en: "Limited Express Thunderbird", he: "Thunderbird (רכבת מהירה)" },
  yokosuka: { code: "JO", color: "#0067C0", en: "JR Yokosuka line", he: "קו JR Yokosuka" }
};
