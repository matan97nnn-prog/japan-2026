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
      exit("Odawara: WEST exit (西口, the Shinkansen side). Turn left, walk ~50 m along the Shinkansen tracks, then left: Toyota Rent a Car is under the tracks, 1 min.", "באודווארה: יציאה מערבית (西口, הצד של השינקנסן). פונים שמאלה, כ-50 מטר לאורך פסי השינקנסן ושוב שמאלה: Toyota Rent a Car מתחת לגשר הרכבת, דקה הליכה.")
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
  /* ---------- Day 13: first evening ---------- */
  "13:first": {
    best: b("Keihan line 2 stops to Gion-Shijo, then 5 min walk to Shirakawa. 15 min.", "קו Keihan שתי תחנות ל-Gion-Shijo, ואז 5 דק' הליכה לשירקאווה. 15 דק'."),
    steps: [
      walk("Hotel → Keihan Shichijo station, 7 min east (toward the river).", "מהמלון לתחנת Keihan Shichijo, 7 דק' מזרחה (לכיוון הנהר)."),
      { k: "ride", line: "keihan", from: "Shichijo KH37", to: "Gion-Shijo KH39", toward: "Demachiyanagi", towardJa: "出町柳", stops: 2, min: 4, note: b("Any train going north stops there.", "כל רכבת צפונה עוצרת שם.") },
      exit("Exit toward 祇園 Gion / 四条通 Shijo-dori, walk east, then left (north) into the lanes to Shirakawa and the Tatsumi bridge, 5 min.", "יוצאים לכיוון 祇園 Gion / 四条通 Shijo-dori, הולכים מזרחה ופונים שמאלה (צפונה) לסמטאות עד שירקאווה וגשר טאטסומי, 5 דק'.")
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

  /* ---------- Day 14: Arashiyama by train and river ---------- */
  "14:first": {
    best: b("JR Sagano line from Kyoto Station, 15 min. The Torokko station is right next to JR Saga-Arashiyama.", "קו JR Sagano מתחנת קיוטו, 15 דק'. תחנת הטורוקו צמודה ל-JR Saga-Arashiyama."),
    steps: [
      walk("Hotel → Kyoto Station, 7 min. Follow 嵯峨野線 Sagano Line signs to platforms 31–33, at the far west end of the station (≈ 5 min inside).", "מהמלון לתחנת קיוטו, 7 דק'. לפי השלטים 嵯峨野線 Sagano Line לרציפים 31–33, בקצה המערבי של התחנה (כ-5 דק' בפנים)."),
      { k: "ride", line: "jr-kyoto", from: "Kyoto", to: "Saga-Arashiyama", toward: "Sonobe / Kameoka", towardJa: "園部・亀岡", min: 15, note: b("Local and rapid trains both stop at Saga-Arashiyama.", "גם מקומית וגם מהירה עוצרות ב-Saga-Arashiyama.") },
      exit("South exit: トロッコ嵯峨駅 Torokko Saga station is the building right beside it. Buy the train tickets there first.", "יציאה דרומית: トロッコ嵯峨駅 תחנת Torokko Saga היא הבניין ממש לידה. קודם כל קונים שם כרטיסים.")
    ],
    alt: b("Taxi from the hotel ≈ 30 min, ≈ ¥4,000.", "מונית מהמלון כ-30 דק', בערך ¥4,000.")
  },
  "14:0": {
    best: b("From Torokko Kameoka, a bus or taxi to the boat dock, ≈ 15 min. Staff point the way.", "מ-Torokko Kameoka, אוטובוס או מונית לרציף הסירות, כ-15 דק'. הצוות מכוון."),
    steps: [
      bus("Bus from in front of Torokko Kameoka station to 保津川下り乗船場 (the boat dock), ≈ 15 min. Pay when you get off; have coins.", "אוטובוס מול תחנת Torokko Kameoka ל-保津川下り乗船場 (רציף הסירות), כ-15 דק'. משלמים ביציאה; כדאי שיהיו מטבעות."),
      taxi("Or a taxi if one is waiting, ≈ 10 min: 保津川下り乗船場.", "או מונית אם יש, כ-10 דק': 保津川下り乗船場."),
      ticket("Boat tickets at the dock counter. Boats leave about every hour; the ride ends in Arashiyama, by Togetsukyo.", "כרטיסים לסירה בקופה ברציף. הסירות יוצאות בערך כל שעה; השיט מסתיים בארשיאמה, ליד טוגצוקיו.")
    ]
  },
  "14:return": {
    best: b("JR from Saga-Arashiyama back to Kyoto, 15 min.", "JR מ-Saga-Arashiyama חזרה לקיוטו, 15 דק'."),
    steps: [
      walk("From the bamboo grove walk 10 min east to JR Saga-Arashiyama station.", "מיער הבמבוק 10 דק' הליכה מזרחה לתחנת JR Saga-Arashiyama."),
      { k: "ride", line: "jr-kyoto", from: "Saga-Arashiyama", to: "Kyoto", toward: "Kyoto", towardJa: "京都", min: 15 },
      walk("Kyoto Station → hotel, 7 min.", "מתחנת קיוטו למלון, 7 דק'.")
    ]
  },

  /* ---------- Day 15: Fushimi Inari & Nara ---------- */
  "15:first": {
    best: b("JR Nara line, 2 stops; Inari station is right at the shrine gate.", "קו JR Nara, שתי תחנות; תחנת Inari נמצאת ממש מול שער המקדש."),
    steps: [
      walk("Hotel → Kyoto Station, 7 min. Follow 奈良線 Nara Line signs to platforms 8–10.", "מהמלון לתחנת קיוטו, 7 דק'. לפי השלטים 奈良線 Nara Line לרציפים 8–10."),
      { k: "ride", line: "jr-kyoto", from: "Kyoto", to: "Inari", toward: "Nara", towardJa: "奈良", stops: 2, min: 5, note: b("Local train (普通) only. The rapid (みやこ路快速) skips Inari.", "רק רכבת מקומית (普通). המהירה (みやこ路快速) לא עוצרת ב-Inari.") },
      exit("Inari: cross the road, the big orange torii is in front of you.", "ב-Inari: חוצים את הכביש, הטוריי הכתום הגדול מולכם.")
    ],
    alt: b("Taxi ≈ 10 min, ≈ ¥1,500.", "מונית כ-10 דק', בערך ¥1,500.")
  },
  "15:0": {
    best: b("JR Nara line toward Nara, ≈ 1 h with one change to the rapid train. Google Maps shows the exact trains.", "קו JR Nara לכיוון נארה, כשעה עם החלפה אחת לרכבת המהירה. גוגל מפות מראה את הרכבות המדויקות."),
    steps: [
      { k: "ride", line: "jr-kyoto", from: "Inari", to: "Uji", toward: "Nara / Uji", towardJa: "奈良・宇治", min: 15, note: b("Local train (普通).", "רכבת מקומית (普通).") },
      change("At Uji cross to the みやこ路快速 Miyakoji Rapid toward 奈良 Nara (same or opposite side of the platform).", "באוג'י עוברים ל-みやこ路快速 Miyakoji Rapid לכיוון 奈良 Nara (באותו רציף או ממול)."),
      { k: "ride", line: "jr-kyoto", from: "Uji", to: "Nara", toward: "Nara", towardJa: "奈良", min: 30 },
      walk("JR Nara → Nara Park: 20 min east along 三条通 Sanjo-dori, or the city loop bus (≈ 5 min). The deer start where the park starts.", "מ-JR Nara לפארק נארה: 20 דק' מזרחה לאורך 三条通 Sanjo-dori, או האוטובוס העירוני (כ-5 דק'). האיילים מתחילים איפה שהפארק מתחיל.")
    ],
    alt: b("Tired after Inari? Back to Kyoto Station and Kintetsu to Nara (≈ 45 min): Kintetsu Nara station is 5 min from the park.", "עייפים אחרי אינרי? חזרה לתחנת קיוטו ו-Kintetsu לנארה (כ-45 דק'): תחנת Kintetsu Nara נמצאת 5 דק' מהפארק.")
  },
  "15:return": {
    best: b("Kintetsu from Kintetsu Nara straight to Kyoto Station, no change. Express ≈ 45 min, no extra fee.", "Kintetsu מ-Kintetsu Nara ישר לתחנת קיוטו, בלי החלפה. Express כ-45 דק', בלי תוספת."),
    steps: [
      walk("From Naramachi or the park, walk to 近鉄奈良 Kintetsu Nara station (under the Gyoki statue fountain).", "מנאראמאצ'י או מהפארק הולכים לתחנת 近鉄奈良 Kintetsu Nara (מתחת למזרקה עם פסל גיוקי)."),
      { k: "ride", line: "kintetsu", from: "Kintetsu Nara", to: "Kintetsu Kyoto", toward: "Kyoto", towardJa: "京都", min: 45, note: b("Take an Express (急行) to 京都 Kyoto. The Limited Express (特急) is 35 min but needs a seat ticket (≈ ¥520 extra).", "לעלות על Express (急行) ל-京都 Kyoto. ה-Limited Express (特急) לוקח 35 דק' אבל צריך כרטיס מושב (בערך ¥520 תוספת).") },
      walk("Kintetsu Kyoto is inside Kyoto Station. Hotel 7 min.", "Kintetsu Kyoto נמצאת בתוך תחנת קיוטו. 7 דק' למלון.")
    ]
  },

  /* ---------- Day 16: Nishiki, tea ceremony, Ninenzaka ---------- */
  "16:first": {
    best: b("Subway Karasuma line 2 stops to Shijo, then 5 min walk east to Nishiki.", "רכבת תחתית קו Karasuma שתי תחנות ל-Shijo, ואז 5 דק' הליכה מזרחה לנישיקי."),
    steps: [
      walk("Hotel → Kyoto Station, 7 min, then follow the green K subway signs.", "מהמלון לתחנת קיוטו, 7 דק', ואז לפי השלטים הירוקים עם K של הרכבת התחתית."),
      { k: "ride", line: "karasuma", from: "Kyoto K11", to: "Shijo K09", toward: "Kokusaikaikan", towardJa: "国際会館", stops: 2, min: 4 },
      exit("Follow 錦市場 Nishiki Market signs; walk east along Shijo-dori, then left into Nishiki, ≈ 5 min.", "לפי השלטים 錦市場 Nishiki Market; הולכים מזרחה לאורך Shijo-dori ושמאלה לנישיקי, כ-5 דק'.")
    ],
    alt: TAXI_KYOTO_SHORT
  },
  "16:return": {
    best: b("Taxi from Gion, ≈ 10 min, ≈ ¥1,200. Or Keihan Gion-Shijo → Shichijo.", "מונית מגיון, כ-10 דק', בערך ¥1,200. או Keihan מ-Gion-Shijo ל-Shichijo."),
    steps: [
      { k: "ride", line: "keihan", from: "Gion-Shijo KH39", to: "Shichijo KH37", toward: "Yodoyabashi / Osaka", towardJa: "淀屋橋・大阪", stops: 2, min: 4 },
      walk("Exit toward 七条通 Shichijo-dori, walk 7 min west to the hotel.", "יוצאים לכיוון 七条通 Shichijo-dori, 7 דק' הליכה מערבה למלון.")
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
  yokosuka: { code: "JO", color: "#0067C0", en: "JR Yokosuka line", he: "קו JR Yokosuka" },
  kintetsu: { code: "B", color: "#D7000F", en: "Kintetsu Kyoto line", he: "קו Kintetsu Kyoto" }
};
