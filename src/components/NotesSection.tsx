import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { useLang } from "../lib/i18n";
import { navigateChapter } from "../lib/route";

/* Family notes: the ideas we collected, what each one is, and where it
 * landed in the plan (a day chip) — or why it didn't. Short lines only. */

type L = { en: string; he: string };

interface Note {
  title: L;
  day?: number; // dayNumber in the itinerary
  when?: L;
  lines: L[];
  link?: { label: L; url: string };
}

const NOTES: Note[] = [
  {
    title: { en: "Open decisions", he: "החלטות פתוחות" },
    lines: [
      { en: "Return flight: 17 or 18.11, not set yet.", he: "טיסת חזור: 17 או 18.11, עוד לא נקבע." },
      { en: "Hotels: all set through Kanazawa. Kyoto (Honyado Nono) and the last Tokyo nights (Dai-ichi Hotel Tokyo) are 'for now'.", he: "מלונות: הכל סגור עד קנאזאווה. קיוטו (Honyado Nono) והלילות האחרונים בטוקיו (Dai-ichi Hotel Tokyo), כרגע." },
      { en: "Larnaca hotel name for 30.10.", he: "שם המלון בלרנקה ל-30.10." }
    ]
  },
  {
    title: { en: "Tokyo, our way", he: "טוקיו, בדרך שלנו" },
    lines: [
      { en: "Five nights, built around neighbourhoods rather than sights: one area per half-day, long stays, few trains.", he: "חמישה לילות, בנויים סביב שכונות ולא אטרקציות: אזור אחד לכל חצי יום, שהייה ארוכה, מעט רכבות." },
      { en: "2.11 the old downtown: Tsukiji, Nezu, Yanaka, Ueno.", he: "2.11 טוקיו הישנה: צוקיג'י, נדזו, יאנאקה, אואנו." },
      { en: "3.11 the west side: Meiji Jingu, Omotesando, Daikanyama–Nakameguro, Shibuya at dusk.", he: "3.11 הצד המערבי: מקדש מייג'י, אומוטסנדו, דאיקאניאמה–נאקאמגורו, שיבויה בשקיעה." },
      { en: "15.11 Asakusa at night, when it's lit and calm. 16.11 Edo garden, Kagurazaka, Nihonbashi, or Kamakura / Nikko.", he: "15.11 אסקוסה בלילה, מוארת ושקטה. 16.11 גן אדו, קגורזקה, ניהונבאשי, או קמאקורה / ניקו." },
      { en: "Skipped on purpose: Takeshita Street, Robot Restaurant-type shows, queue-for-a-photo spots.", he: "דילגנו בכוונה: רחוב טקשיטה, מופעי תיירים, מקומות שעומדים בתור בשביל תמונה." }
    ]
  },
  {
    title: { en: "Dad's 60th birthday", he: "יום ההולדת ה-60 של אבא" },
    day: 8,
    when: { en: "6.11", he: "6.11" },
    lines: [
      { en: "Sunrise over Fuji at Oishi Park, coffee, family photo, first toast.", he: "זריחה מול הפוג'י בפארק אואישי, קפה, תמונה משפחתית, לחיים ראשון." },
      { en: "Itchiku Kubota museum, then the quiet western lakes (Motosu = the ¥1,000-note view).", he: "מוזיאון איצ'יקו קובוטה, ואז האגמים השקטים במערב (מוטוסו = הנוף שעל שטר 1,000 ין)." },
      { en: "Matsumoto Castle in the afternoon.", he: "טירת מטסומוטו אחר הצהריים." },
      { en: "Kaiseki dinner: Hikariya Higashi (private tatami rooms) or Hikariya Nishi. Book and say it's a 60th.", he: "ארוחת קאיסקי: Hikariya Higashi (חדרי טאטאמי פרטיים) או Hikariya Nishi. להזמין ולציין שזה יום הולדת 60." },
      { en: "A bottle from Ide brewery (bought the day before) for a toast at the hotel.", he: "בקבוק ממבשלת Ide (נקנה יום קודם) להרמת כוסית במלון." }
    ]
  },
  {
    title: { en: "Kamakura: by train from Tokyo", he: "קמאקורה: ברכבת מטוקיו" },
    day: 18,
    when: { en: "Option for the free day", he: "אופציה ליום החופשי" },
    lines: [
      { en: "What it is: Japan's capital in the 12th–14th centuries, a seaside town of temples and wooded hills, an hour from Tokyo.", he: "מה זה: בירת יפן במאות ה-12–14, עיירת חוף של מקדשים וגבעות מיוערות, שעה מטוקיו." },
      { en: "How: JR Yokosuka line from Tokyo Station, ~1 h, ~¥950, no change. Then the little Enoden train to Hase.", he: "איך: קו JR יוקוסוקה מתחנת טוקיו, כשעה, כ-950 ין, בלי החלפה. משם רכבת האנודן הקטנה להאסה." },
      { en: "What's there: the 13 m bronze Great Buddha, Hasedera on the hillside, Tsurugaoka Hachimangu, Hokokuji's bamboo grove.", he: "מה יש: הבודהה הגדול מברונזה (13 מ'), מקדש האסדרה על הגבעה, צורוגאוקה האצ'ימנגו, חורשת הבמבוק של הוקוקוג'י." },
      { en: "Walk: Daibutsu hiking trail, Kita-Kamakura → Great Buddha, ~2.5 km, 1 h.", he: "הליכה: שביל דאיבוטסו, מקיטה-קמאקורה לבודהה הגדול, כ-2.5 ק\"מ, שעה." },
      { en: "Honest note: leaves there turn late Nov, mostly green on our dates.", he: "בכנות: השלכת שם מגיעה בסוף נובמבר, בתאריכים שלנו עוד ירוק ברובו." }
    ]
  },
  {
    title: { en: "Kurama → Kibune hike", he: "מסלול קוראמה ← קיבונה" },
    day: 15,
    when: { en: "13.11", he: "13.11" },
    lines: [
      { en: "≈ 4 km, 2–3 h with stops, easy–moderate (stone steps and roots). Start in Kurama.", he: "כ-4 ק\"מ, 2–3 שעות עם עצירות, קל–בינוני (מדרגות אבן ושורשים). מתחילים בקוראמה." },
      { en: "Eizan train from Demachiyanagi, ~30 min. Kurama-dera entry ¥500, cash.", he: "רכבת אייזן מדמאצ'יאנאגי, כ-30 דק'. כניסה לקוראמה-דרה 500 ין, במזומן." },
      { en: "Stops: tengu statue → Yuki Shrine's 800-year cedar → Kurama-dera's view → the root path → down to Kibune.", he: "תחנות: פסל הטנגו ← הארז בן 800 השנה במקדש יוקי ← התצפית בקוראמה-דרה ← שביל השורשים ← ירידה לקיבונה." },
      { en: "Kibune: a tiny village on the river and Kifune Shrine's lantern stairway. Maples peak about mid-November.", he: "קיבונה: כפר קטנטן על הנהר ומדרגות הפנסים של מקדש קיפונה. השלכת בשיא בערך באמצע נובמבר." },
      { en: "Back: 20 min walk (or bus) to Kibuneguchi station, same train.", he: "חזרה: 20 דק' הליכה (או אוטובוס) לתחנת קיבונגוצ'י, אותה רכבת." }
    ]
  },
  {
    title: { en: "Kyoto at night & the bamboo", he: "קיוטו בלילה והבמבוק" },
    lines: [
      { en: "Kyoto, our way: Fushimi Inari at 7:00, Tofuku-ji's maple bridge, the quiet Saga temples (Jojakko-ji, Gio-ji), the back lanes of Higashiyama, and fewer of the packed spots.", he: "קיוטו בדרך שלנו: פושימי אינרי ב-7:00, גשר המייפל של טופוקו-ג'י, המקדשים השקטים של סאגה (ג'וג'אקו-ג'י, גיו-ג'י), הסמטאות של היגאשיאמה, ופחות מהמקומות הצפופים." },
      { en: "Nijo Castle at night, 'NAKED' light art, 18:00–22:00 → 14.11.", he: "מצודת ניג'ו בלילה, מופע אור NAKED, ‏18:00–22:00 ← 14.11." },
      { en: "Bamboo forest (Arashiyama) at 07:30, before the crowds → 14.11.", he: "יער הבמבוק (אראשיאמה) ב-07:30, לפני ההמונים ← 14.11." },
      { en: "'The temple with the bamboo': Kodai-ji, small bamboo grove, lit at night → 12.11 evening.", he: "\"המקדש עם הבמבוק\": קודאי-ג'י, חורשת במבוק קטנה, מואר בלילה ← 12.11 בערב." },
      { en: "The Silver Pavilion (Ginkaku-ji) is elsewhere in town, optional on 15.11 morning.", he: "מקדש הכסף (Ginkaku-ji) נמצא בצד אחר של העיר, אופציה בבוקר 15.11." },
      { en: "Golden Pavilion (Kinkaku-ji), dropped, as you asked.", he: "מקדש הזהב (Kinkaku-ji), ירד, כמו שביקשתם." }
    ]
  },
  {
    title: { en: "Kamikochi", he: "קמיקוצ'י" },
    day: 9,
    when: { en: "7.11", he: "7.11" },
    lines: [
      { en: "Alpine valley between Matsumoto and Takayama; no private cars, park at Hirayu, bus up.", he: "עמק אלפיני בין מטסומוטו לטקאיאמה; אין רכבים פרטיים, חונים בהירויו ועולים באוטובוס." },
      { en: "Walk: Taisho Pond → Kappa Bridge → Myojin, flat, 2–3 h. Larch gold, snowy peaks.", he: "הליכה: בריכת טאישו ← גשר קאפה ← מיוג'ין, מישורי, 2–3 שעות. ארזים מוזהבים ופסגות מושלגות." },
      { en: "Then an onsen at Hirayu no Mori before Takayama.", he: "אחר כך אונסן בהירויו נו מורי לפני טקאיאמה." }
    ]
  },
  {
    title: { en: "Nikko: only if we feel like it", he: "ניקו: רק אם יתחשק" },
    day: 18,
    when: { en: "Option for the free day", he: "אופציה ליום החופשי" },
    lines: [
      { en: "Shinkyo bridge → Toshogu → 30 min walk to Kanmangafuchi's row of ~70 jizo statues by the gorge.", he: "גשר שינקיו ← טושוגו ← 30 דק' הליכה לשורת כ-70 פסלי הג'יזו בקניון קנמנגאפוצ'י." },
      { en: "Skip Lake Chuzenji / Kegon Falls, leaves up there are gone by mid-November.", he: "לוותר על אגם צ'וזנג'י ומפל קגון, השלכת שם נגמרת עד אמצע נובמבר." },
      { en: "Tobu train from Asakusa, ~2 h each way.", he: "רכבת טובו מאסקוסה, כשעתיים לכל כיוון." }
    ],
    link: { label: { en: "Kanmangafuchi on Google Maps", he: "קנמנגאפוצ'י בגוגל מפות" }, url: "https://maps.app.goo.gl/8BQKnqDwAxP1eoV49" }
  },
  {
    title: { en: "Festivals & events on our dates", he: "פסטיבלים ואירועים בתאריכים שלנו" },
    lines: [
      { en: "3.11 Tokyo, Meiji Jingu yabusame (horseback archery), Culture Day.", he: "3.11 טוקיו, יבוסאמה (קשתות על סוסים) במקדש מייג'י, יום התרבות." },
      { en: "7–8.11 Takayama, Hie Shrine maple festival (dates unconfirmed).", he: "7–8.11 טקאיאמה, פסטיבל השלכת במקדש היה (התאריכים לא מאומתים)." },
      { en: "12.11 Kyoto, Kodai-ji autumn illumination.", he: "12.11 קיוטו, תאורת הסתיו בקודאי-ג'י." },
      { en: "14.11 Kyoto, Nijo Castle night event.", he: "14.11 קיוטו, אירוע הלילה במצודת ניג'ו." },
      { en: "15.11 Kyoto, Hyakumanben handicraft market (15th of each month), 08:00.", he: "15.11 קיוטו, שוק המלאכה של היאקומנבן (ב-15 לכל חודש), מ-08:00." },
      { en: "Just missed: Hakone samurai procession (3.11), Kawaguchiko leaves festival (from 7.11), Kenrokuen light-up (not 9–10.11), Kiyomizu night viewing (from 21.11).", he: "מפספסים בקטנה: תהלוכת הסמוראים בהאקונה (3.11), פסטיבל השלכת בקאוואגוצ'יקו (מ-7.11), התאורה בקנרוקואן (לא ב-9–10.11), הביקור הלילי בקיומיזו (מ-21.11)." }
    ]
  },
  {
    title: { en: "Sake breweries", he: "מבשלות סאקה" },
    lines: [
      { en: "5.11 Ide, Kawaguchiko, tour 15:00, ¥500. Book a day ahead.", he: "5.11 Ide, קאוואגוצ'יקו, סיור ב-15:00, ‏500 ין. להזמין יום קודם." },
      { en: "8.11 Takayama old town, Harada, Funasaka, Hirase; walk-in tastings.", he: "8.11 העיר העתיקה בטקאיאמה, Harada, ‏Funasaka, ‏Hirase; טעימות בלי הזמנה." },
      { en: "9.11 Fukumitsuya, Kanazawa, tour 15:00, ¥3,300 (optional, book).", he: "9.11 Fukumitsuya, קנאזאווה, סיור ב-15:00, ‏3,300 ין (אופציונלי, להזמין)." },
      { en: "12.11 Gekkeikan Okura museum, Fushimi (Kyoto), ¥600.", he: "12.11 מוזיאון גקקייקן אוקורה, פושימי (קיוטו), 600 ין." }
    ]
  },
  {
    title: { en: "Taiko drums & sumo", he: "תיפוף יפני וסומו" },
    lines: [
      { en: "Taiko: DRUM TAO theatre at Kyoto Station, nightly 19:00 & 21:00, from ¥10,000, option on 11.11.", he: "טייקו: תיאטרון DRUM TAO בתחנת קיוטו, כל ערב 19:00 ו-21:00, מ-10,000 ין, אופציה ל-11.11." },
      { en: "Sumo: the November tournament is in Fukuoka (8–22.11), not on our route, and Tokyo's stables are there too.", he: "סומו: טורניר נובמבר בפוקואוקה (8–22.11), לא במסלול שלנו, וגם האורוות של טוקיו נמצאות שם." },
      { en: "Instead: the free Sumo Museum in Ryogoku (weekdays, 2.11), or a sumo show-dinner in Asakusa (free day).", he: "במקום: מוזיאון הסומו בריוגוקו, בחינם (ימי חול, 2.11), או מופע סומו עם ארוחה באסקוסה (ביום החופשי)." }
    ]
  },
  {
    title: { en: "Onsen", he: "אונסנים" },
    lines: [
      { en: "4.11 Hakone Yutowa (our hotel). Day option: Tenzan Tohji-kyo, private baths too.", he: "4.11 Hakone Yutowa (המלון שלנו). אופציה יומית: Tenzan Tohji-kyo, גם עם אמבטים פרטיים." },
      { en: "5–6.11 Fuji Yurari, baths facing Fuji.", he: "5–6.11 Fuji Yurari, אמבטים מול הפוג'י." },
      { en: "7.11 Hirayu no Mori, 16 outdoor baths after Kamikochi.", he: "7.11 Hirayu no Mori, ‏16 אמבטים בחוץ אחרי קמיקוצ'י." }
    ]
  },
  {
    title: { en: "Markets", he: "שווקים" },
    lines: [
      { en: "Food: Tsukiji (2.11), Ameyoko (2.11), Takayama morning markets (8.11), Omicho (10.11), Nishiki (11.11).", he: "אוכל: צוקיג'י (2.11), אמייוקו (2.11), שווקי הבוקר בטקאיאמה (8.11), אומיצ'ו (10.11), נישיקי (11.11)." },
      { en: "Crafts: Hyakumanben market, Kyoto (15.11).", he: "מלאכת יד: שוק היאקומנבן בקיוטו (15.11)." }
    ]
  },
  {
    title: { en: "Autumn leaves: where it's best on our dates", he: "שלכת: איפה הכי יפה בתאריכים שלנו" },
    lines: [
      { en: "Peak: Kamikochi (7.11), Takayama (7–8.11), Kurama–Kibune (13.11).", he: "בשיא: קמיקוצ'י (7.11), טקאיאמה (7–8.11), קוראמה–קיבונה (13.11)." },
      { en: "Good: Hakone at altitude (4.11), Kenrokuen early colour (10.11), Shirakawa-go tail end (9.11).", he: "טוב: האקונה בגובה (4.11), קנרוקואן בתחילת הצבע (10.11), שירקאווה-גו בסוף העונה (9.11)." },
      { en: "Early: central Kyoto and Tokyo turn late Nov, we'll see the start.", he: "מוקדם: מרכז קיוטו וטוקיו משנים צבע בסוף נובמבר, נראה את ההתחלה." }
    ]
  }
];

export default function NotesSection() {
  const { lang } = useLang();
  return (
    <Section
      id="notes"
      eyebrow={lang === "he" ? "הערות" : "Notes"}
      title={lang === "he" ? "הרעיונות שלנו, ואיפה הם במסלול" : "Our ideas, and where they landed"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {NOTES.map((n) => (
          <article key={n.title.en} className="rounded-2xl bg-cream-50 border border-ink-900/10 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-xl text-ink-900 leading-snug">{n.title[lang]}</h3>
              {n.when &&
                (n.day ? (
                  <button
                    onClick={() => navigateChapter(n.day!)}
                    className="shrink-0 rounded-full bg-terracotta-500/10 text-terracotta-700 px-3 py-1 text-xs font-medium"
                  >
                    {n.when[lang]}
                  </button>
                ) : (
                  <span className="shrink-0 rounded-full bg-ink-900/5 px-3 py-1 text-xs">{n.when[lang]}</span>
                ))}
            </div>
            <ul className="mt-3 space-y-1.5 text-[14px] text-ink-700/90 leading-relaxed">
              {n.lines.map((l, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-terracotta-500/70" aria-hidden />
                  <span>{l[lang]}</span>
                </li>
              ))}
            </ul>
            {n.link && (
              <a
                href={n.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-600"
              >
                <ExternalLink size={14} /> {n.link.label[lang]}
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
