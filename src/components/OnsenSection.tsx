import { Bath, BookOpen, ListOrdered, Backpack, Languages, HeartPulse, Users, MapPin, Sparkles, ExternalLink } from "lucide-react";
import { useLang } from "../lib/i18n";
import { navigateChapter } from "../lib/route";

/* The onsen tab: what it is, how to bathe, the words on the signs, and
 * the baths along our route (hotels first, then day baths). */

type T = { en: string; he: string };
const b = (en: string, he: string): T => ({ en, he });

const STEPS: T[] = [
  b("Shoes off at the entrance (shoe lockers), slippers off before the changing room.", "מורידים נעליים בכניסה (לוקרים לנעליים), ונעלי בית לפני חדר ההחלפה."),
  b("Check the curtain: 男 = men, 女 = women. Usually blue for men and red for women, but go by the character, not the colour.", "בודקים את הווילון: 男 = גברים, 女 = נשים. בדרך כלל כחול לגברים ואדום לנשים, אבל הולכים לפי הסימן ולא לפי הצבע."),
  b("Undress completely in the changing room; clothes into a basket or locker. No swimsuits.", "מתפשטים לגמרי בחדר ההחלפה; הבגדים בסל או בלוקר. בלי בגד ים."),
  b("Take only the small towel inside. The big towel stays in the locker.", "נכנסים רק עם המגבת הקטנה. המגבת הגדולה נשארת בלוקר."),
  b("Sit on a stool at a shower station and wash your whole body and hair with soap. Rinse well. This is the most important rule.", "יושבים על שרפרף ליד עמדת מקלחת ומתרחצים עם סבון, כולל שיער. שוטפים היטב. זה הכלל הכי חשוב."),
  b("Pour some bath water over yourself (kakeyu) to get used to the heat, then enter slowly.", "שופכים קצת ממי האמבט על הגוף (קאקה-יו) כדי להתרגל לחום, ונכנסים לאט."),
  b("The small towel never goes into the water: fold it on your head or leave it at the edge. Long hair tied up, out of the water.", "המגבת הקטנה לא נכנסת למים: מקפלים אותה על הראש או מניחים בצד. שיער ארוך אסוף, מחוץ למים."),
  b("Soak quietly: no swimming, no splashing, no phones or cameras anywhere in the bath area.", "יושבים בשקט: לא שוחים, לא משפריצים, ואין טלפונים או מצלמות בכל אזור האמבט."),
  b("Before going back to the changing room, wipe yourself with the small towel so you don't drip on the floor.", "לפני שחוזרים לחדר ההחלפה, מנגבים את הגוף במגבת הקטנה כדי לא לטפטף על הרצפה.")
];

const BRING: T[] = [
  b("At hotels everything is there: towels, soap, shampoo, hair dryer. Go down in the yukata from the room.", "במלונות יש הכל: מגבות, סבון, שמפו, מייבש שיער. יורדים עם היוקטה מהחדר."),
  b("Yukata: left side over right. Right over left is how the dead are dressed.", "יוקטה: הצד השמאלי מעל הימני. ימין מעל שמאל זה איך שמלבישים מתים."),
  b("At day baths and sento: bring a small towel and soap, or rent them (¥100–300). Coins for the lockers.", "באונסן יומי ובסנטו: להביא מגבת קטנה וסבון, או לשכור (¥100–300). מטבעות ללוקרים."),
  b("A hair tie, and a bottle of water for after.", "גומייה לשיער, ובקבוק מים לאחרי.")
];

const WORDS: { ja: string; romaji: string; t: T }[] = [
  { ja: "♨ / ゆ / 湯", romaji: "yu", t: b("Hot water: a bath is here", "מים חמים: יש כאן אמבט") },
  { ja: "男湯", romaji: "otoko-yu", t: b("Men's bath", "אמבט גברים") },
  { ja: "女湯", romaji: "onna-yu", t: b("Women's bath", "אמבט נשים") },
  { ja: "露天風呂", romaji: "rotenburo", t: b("Open-air bath", "אמבט פתוח בחוץ") },
  { ja: "内湯", romaji: "uchiyu", t: b("Indoor bath", "אמבט מקורה") },
  { ja: "貸切風呂", romaji: "kashikiri-buro", t: b("Private bath, rented by time", "אמבט פרטי, לפי זמן") },
  { ja: "家族風呂", romaji: "kazoku-buro", t: b("Family bath (private, mixed)", "אמבט משפחתי (פרטי, מעורב)") },
  { ja: "源泉かけ流し", romaji: "gensen kakenagashi", t: b("Fresh spring water, not recycled", "מי מעיין טריים, לא ממוחזרים") },
  { ja: "水風呂", romaji: "mizuburo", t: b("Cold plunge (by the sauna)", "אמבט מים קרים (ליד הסאונה)") },
  { ja: "入れ墨・タトゥー禁止", romaji: "irezumi / tatū kinshi", t: b("No tattoos", "אסור עם קעקועים") }
];

const HEALTH: T[] = [
  b("Water is usually 40–42 °C. Start with 5–10 minutes, get out, cool down, go back in.", "המים בדרך כלל 40–42 מעלות. מתחילים ב-5–10 דקות, יוצאים, מתקררים וחוזרים."),
  b("Drink water before and after. No bathing right after a big meal or drinks.", "שותים מים לפני ואחרי. לא נכנסים מיד אחרי ארוחה כבדה או אלכוהול."),
  b("Stand up slowly: the heat can make you dizzy.", "קמים לאט: החום יכול לגרום לסחרחורת."),
  b("High blood pressure or heart issues: shorter soaks, cooler baths, and ask a doctor before the trip.", "לחץ דם גבוה או בעיות לב: טבילות קצרות, אמבטים פחות חמים, ולשאול רופא לפני הטיול."),
  b("After a mineral bath you don't have to shower again: the minerals are part of the point.", "אחרי אמבט מינרלים לא חייבים להתקלח שוב: המינרלים הם חלק מהעניין.")
];

interface Place {
  name: string;
  ja: string;
  day?: number;
  date: string;
  kind: T;
  body: T;
  tattoo?: T;
  maps: string;
}

const PLACES: Place[] = [
  {
    name: "Hakone Yutowa",
    ja: "箱根ゆとわ",
    day: 6,
    date: "4.11",
    kind: b("Our hotel", "המלון שלנו"),
    body: b("Each of our units has its own hot-spring bath with a view, so the four of us can bathe together. The main building also has a public bath and two free private baths.", "בכל יחידה שלנו יש אמבט מעיין חם פרטי מול הנוף, כך שכל הארבעה יכולים להיכנס יחד. בבניין הראשי יש גם אמבט ציבורי ושני אמבטים פרטיים בחינם."),
    maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yutowa"
  },
  {
    name: "Tenzan Tohji-kyo",
    ja: "天山湯治郷",
    day: 6,
    date: "4.11",
    kind: b("Day onsen, option", "אונסן יומי, אופציה"),
    body: b("A forest bathhouse in Hakone-Yumoto: stone and wood outdoor pools along a stream. Bring your own towel.", "בית מרחץ ביער בהאקונה-יומוטו: בריכות אבן ועץ בחוץ לאורך נחל. להביא מגבת."),
    tattoo: b("Tattoos: not allowed", "קעקועים: אסור"),
    maps: "https://www.google.com/maps/search/?api=1&query=Tenzan+Tohji-kyo+Hakone"
  },
  {
    name: "Fuji Yurari",
    ja: "ふじやま温泉 富士眺望の湯ゆらり",
    day: 7,
    date: "5.11",
    kind: b("Day onsen, option", "אונסן יומי, אופציה"),
    body: b("Outdoor baths facing Mt Fuji, near Lake Kawaguchi. Private baths for families can be rented.", "אמבטים בחוץ מול הר פוג'י, ליד אגם קאוואגוצ'י. אפשר לשכור אמבט פרטי למשפחה."),
    maps: "https://www.google.com/maps/search/?api=1&query=Fuji+Yurari+onsen"
  },
  {
    name: "Matsumoto Hotel Kagetsu",
    ja: "松本ホテル花月",
    day: 8,
    date: "6.11",
    kind: b("Our hotel", "המלון שלנו"),
    body: b("A large bath filled with Matsumoto spring water, one of Japan's '100 best waters'. A good soak before the birthday dinner.", "אמבט גדול עם מי מעיין של מצומוטו, אחד מ\"100 המים הטובים ביפן\". טבילה טובה לפני ארוחת יום ההולדת."),
    maps: "https://www.google.com/maps/search/?api=1&query=Matsumoto+Hotel+Kagetsu"
  },
  {
    name: "Hirayu no Mori",
    ja: "ひらゆの森",
    day: 9,
    date: "7.11",
    kind: b("Day onsen, in the plan", "אונסן יומי, בתוכנית"),
    body: b("16 open-air pools in the forest after Kamikochi. About ¥700, 10:00–21:00. Private baths ≈ ¥3,000 for 45 min, 12:00–15:00, first come first served.", "16 בריכות פתוחות ביער, אחרי קמיקוצ'י. בערך ¥700, ‏10:00–21:00. אמבט פרטי בערך ¥3,000 ל-45 דק', ‏12:00–15:00, לפי סדר הגעה."),
    tattoo: b("Tattoos: allowed", "קעקועים: מותר"),
    maps: "https://www.google.com/maps/search/?api=1&query=Hirayu+no+Mori"
  },
  {
    name: "Takayama Green Hotel",
    ja: "高山グリーンホテル 天領の湯",
    day: 10,
    date: "7–9.11",
    kind: b("Our hotel", "המלון שלנו"),
    body: b("'Tenryo no Yu' natural hot spring with an open-air bath in a Japanese garden. Two nights: try it at night and early in the morning.", "מעיין חם טבעי בשם 'Tenryo no Yu' עם אמבט פתוח בגן יפני. שני לילות: לנסות בלילה ומוקדם בבוקר."),
    maps: "https://www.google.com/maps/search/?api=1&query=Takayama+Green+Hotel"
  },
  {
    name: "Onyado Nono Kyoto Shichijo",
    ja: "御宿 野乃 京都七条",
    day: 13,
    date: "11–15.11",
    kind: b("Our hotel", "המלון שלנו"),
    body: b("A two-floor natural hot-spring bath with an open-air pool and a sauna, the reward after every Kyoto walking day. Free late-night ramen in the evening.", "אמבט מעיין חם טבעי בשתי קומות, עם בריכה פתוחה וסאונה: הפרס אחרי כל יום הליכה בקיוטו. ראמן לילה בחינם בערב."),
    maps: "https://www.google.com/maps/search/?api=1&query=Onyado+Nono+Kyoto+Shichijo"
  },
  {
    name: "Kurama Onsen",
    ja: "くらま温泉",
    day: 15,
    date: "13.11",
    kind: b("Day onsen, option", "אונסן יומי, אופציה"),
    body: b("An outdoor bath in the cedar forest, 10 min from Kurama station. About ¥1,100 for the outdoor bath only. Best if you walk the trail the other way (Kibune → Kurama) and finish here. Check it's open before going.", "אמבט פתוח ביער הארזים, 10 דק' מתחנת קוראמה. בערך ¥1,100 לאמבט החיצוני בלבד. הכי טוב אם הולכים את המסלול בכיוון ההפוך (קיבונה ← קוראמה) ומסיימים כאן. לבדוק שפתוח לפני."),
    maps: "https://www.google.com/maps/search/?api=1&query=Kurama+Onsen"
  },
  {
    name: "Funaoka Onsen",
    ja: "船岡温泉",
    date: "Kyoto",
    kind: b("Sento, option", "סנטו, אופציה"),
    body: b("A neighbourhood bathhouse from 1923 in north Kyoto, with carved wooden panels and an old cypress bath. Locals' evening ritual, about ¥500.", "בית מרחץ שכונתי מ-1923 בצפון קיוטו, עם לוחות עץ מגולפים ואמבט ברוש ישן. הטקס הערבי של המקומיים, בערך ¥500."),
    maps: "https://www.google.com/maps/search/?api=1&query=Funaoka+Onsen+Kyoto"
  },
  {
    name: "Jakotsuyu",
    ja: "蛇骨湯",
    day: 17,
    date: "15.11",
    kind: b("Sento, option", "סנטו, אופציה"),
    body: b("Asakusa's old bathhouse with naturally dark 'black water' and a small outdoor bath. A few minutes from Senso-ji, open until midnight (closed Tuesdays). About ¥550.", "בית המרחץ הישן של אסקוסה, עם \"מים שחורים\" כהים מטבעם ואמבט חיצוני קטן. כמה דקות מסנסו-ג'י, פתוח עד חצות (סגור בימי שלישי). בערך ¥550."),
    tattoo: b("Tattoos: allowed", "קעקועים: מותר"),
    maps: "https://www.google.com/maps/search/?api=1&query=Jakotsuyu+Asakusa"
  }
];

function Card({ Icon, title, children }: { Icon: typeof Bath; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-cream-50 border border-ink-900/10 shadow-sm p-4 sm:p-5">
      <h3 className="flex items-center gap-2 text-[19px] sm:text-xl text-ink-900">
        <Icon size={20} className="text-terracotta-600 shrink-0" />
        {title}
      </h3>
      <div className="mt-3 text-[14.5px] leading-relaxed text-ink-800">{children}</div>
    </section>
  );
}

function List({ items, he, ordered }: { items: T[]; he: boolean; ordered?: boolean }) {
  return (
    <ol className="space-y-2">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2.5">
          {ordered ? (
            <span className="shrink-0 w-6 h-6 rounded-full bg-terracotta-600 text-cream-50 text-[12px] font-bold flex items-center justify-center">{i + 1}</span>
          ) : (
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
          )}
          <span>{he ? x.he : x.en}</span>
        </li>
      ))}
    </ol>
  );
}

export default function OnsenSection() {
  const { lang } = useLang();
  const he = lang === "he";
  return (
    <section className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
        <div>
          <h2 className="text-3xl text-ink-900">{he ? "אונסן ♨" : "Onsen ♨"}</h2>
          <p className="mt-1 text-[14.5px] text-ink-700/80">
            {he
              ? "מה זה, איך נכנסים בלי להתבייש, ואיפה טובלים לאורך המסלול. בשלושה מהמלונות שלנו יש אמבט מעיין חם (האקונה, טקיאמה, קיוטו), ובמצומוטו אמבט גדול."
              : "What it is, how to bathe without embarrassment, and where to soak along our route. Three of our hotels have a hot-spring bath (Hakone, Takayama, Kyoto), and Matsumoto has a large bath."}
          </p>
        </div>

        <Card Icon={BookOpen} title={he ? "מה זה אונסן" : "What an onsen is"}>
          <div className="space-y-2.5">
            <p>
              {he
                ? "יפן יושבת על קו של הרי געש, ויש בה עשרות אלפי מקורות של מים חמים מהאדמה. אונסן (温泉) הוא אמבט במים האלה, עם מינרלים שמשנים את הצבע והריח: גופרית בהאקונה, ברזל אדמדם, מים שחורים בטוקיו."
                : "Japan sits on a volcanic arc, with tens of thousands of hot springs. An onsen (温泉) is a bath in that water; the minerals change its colour and smell: sulphur in Hakone, rusty-red iron, 'black water' in Tokyo."}
            </p>
            <p>
              {he
                ? "זה לא ספא ולא בריכה. יושבים בשקט, ערומים, ליד זרים, וזה נחשב רגיל לגמרי. ליפנים יש לזה ביטוי: הדאקה נו צוקיאי, \"קשר של עירום\". בלי בגדים אין מעמדות, ואנשים נפתחים. משפחות, חברים ועמיתים לעבודה הולכים יחד."
                : "It's not a spa or a pool. You sit quietly, naked, next to strangers, and that's completely normal. The Japanese call it hadaka no tsukiai, 'naked communion': without clothes there's no rank, and people open up. Families, friends and colleagues go together."}
            </p>
            <p>
              {he
                ? "השורשים דתיים: בשינטו, מים מטהרים. לכן מתרחצים לפני שנכנסים. האמבט משותף, והמים צריכים להישאר נקיים לבא אחריכם."
                : "The roots are religious: in Shinto, water purifies. That's why you wash before you get in. The bath is shared, and the water has to stay clean for the next person."}
            </p>
            <p>
              {he
                ? "סנטו (銭湯) הוא בית מרחץ שכונתי עם מים מחוממים, לא מעיין. הוא קטן, זול, והמקומיים באים אליו בערב. ריוקן הוא פונדק מסורתי, לרוב עם אונסן."
                : "A sento (銭湯) is a neighbourhood bathhouse with heated tap water, not a spring: small, cheap, locals' evening place. A ryokan is a traditional inn, usually with an onsen."}
            </p>
          </div>
        </Card>

        <Card Icon={ListOrdered} title={he ? "איך נכנסים, צעד אחר צעד" : "How to bathe, step by step"}>
          <List items={STEPS} he={he} ordered />
        </Card>

        <Card Icon={Users} title={he ? "משפחה, אמבט פרטי וקעקועים" : "Family, private baths, tattoos"}>
          <List
            he={he}
            items={[
              b("Public baths are split by gender, so the family splits too. Agree on a time to meet in the lounge outside.", "האמבטים הציבוריים מופרדים לגברים ונשים, אז גם המשפחה מתפצלת. קובעים שעה להיפגש בטרקלין שבחוץ."),
              b("To bathe together, book a private bath (貸切 kashikiri), by the hour, at the hotel desk. At Hakone Yutowa each unit has its own.", "כדי להיכנס יחד, מזמינים אמבט פרטי (貸切 kashikiri) לפי שעה בדלפק של המלון. בהאקונה יוטווה יש אחד בכל יחידה."),
              b("Some hotels swap the men's and women's baths overnight. Check the curtain every time.", "יש מלונות שמחליפים בין אמבט הגברים לאמבט הנשים במהלך הלילה. לבדוק את הווילון בכל פעם."),
              b("Tattoos: many onsen still refuse them. Small ones can be covered with a skin-coloured sticker; otherwise use a private bath or a tattoo-friendly place (marked below).", "קעקועים: הרבה אונסנים עדיין לא מכניסים. קעקוע קטן אפשר לכסות במדבקה בצבע עור; אחרת אמבט פרטי או מקום שמתיר קעקועים (מסומן למטה).")
            ]}
          />
        </Card>

        <Card Icon={Backpack} title={he ? "מה לקחת ומה ללבוש" : "What to bring and wear"}>
          <List items={BRING} he={he} />
        </Card>

        <Card Icon={Languages} title={he ? "המילים על השלטים" : "The words on the signs"}>
          <ul className="divide-y divide-ink-900/[0.07]">
            {WORDS.map((w) => (
              <li key={w.ja} className="py-2 flex items-baseline gap-3">
                <span lang="ja" className="text-[18px] font-bold text-ink-900 shrink-0 min-w-[96px]">{w.ja}</span>
                <span className="min-w-0">
                  <span className="text-ink-900">{he ? w.t.he : w.t.en}</span>
                  <span className="ms-1.5 text-[12.5px] text-ink-700/60" dir="ltr">{w.romaji}</span>
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card Icon={HeartPulse} title={he ? "בריאות" : "Health"}>
          <List items={HEALTH} he={he} />
        </Card>

        <Card Icon={MapPin} title={he ? "איפה טובלים לאורך המסלול" : "Where we soak on the route"}>
          <ul className="space-y-2.5">
            {PLACES.map((p) => (
              <li key={p.name} className="rounded-xl bg-white/80 ring-1 ring-ink-900/[0.07] p-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-bold text-ink-900 text-[15.5px]" dir="ltr" style={{ textAlign: he ? "right" : "left" }}>{p.name}</div>
                    <div lang="ja" className="text-[13px] text-ink-700/65">{p.ja}</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-terracotta-600/10 text-terracotta-700 px-2.5 py-0.5 text-[12px] font-bold">
                    {p.date === "Kyoto" ? (he ? "קיוטו" : "Kyoto") : p.date}
                  </span>
                </div>
                <div className="mt-1 text-[12.5px] font-semibold text-olive-700">{he ? p.kind.he : p.kind.en}</div>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-800">{he ? p.body.he : p.body.en}</p>
                {p.tattoo && <div className="mt-1 text-[13px] font-semibold text-ink-700">{he ? p.tattoo.he : p.tattoo.en}</div>}
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href={p.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full ring-1 ring-terracotta-500/30 px-3 py-1 text-[12.5px] font-semibold text-terracotta-700">
                    <ExternalLink size={12} /> {he ? "בגוגל מפות" : "Google Maps"}
                  </a>
                  {p.day && (
                    <button onClick={() => navigateChapter(p.day!)} className="inline-flex items-center rounded-full bg-cream-100 px-3 py-1 text-[12.5px] font-semibold text-ink-900">
                      {he ? `ליום ${p.day}` : `Day ${p.day}`}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12.5px] text-ink-700/65">
            {he ? "מחירים ושעות של אונסנים יומיים הם לפי מקורות מ-2025; כדאי לבדוק לפני שנוסעים." : "Day-bath prices and hours are from 2025 sources; check before going."}
          </p>
        </Card>

        <Card Icon={Sparkles} title={he ? "אחרי האמבט" : "After the bath"}>
          <List
            he={he}
            items={[
              b("The classic: a cold bottle of milk (coffee or fruit milk) from the machine in the lounge.", "הקלאסיקה: בקבוק חלב קר (קפה או פירות) מהמכונה בטרקלין."),
              b("Rest 15 minutes in the lounge or on the tatami before going out into the cold.", "לנוח רבע שעה בטרקלין או על הטטאמי לפני שיוצאים לקור."),
              b("At Nono in Kyoto: the free late-night ramen after the evening bath.", "בנונו בקיוטו: הראמן החינמי בלילה אחרי האמבט של הערב.")
            ]}
          />
        </Card>
      </div>
    </section>
  );
}
