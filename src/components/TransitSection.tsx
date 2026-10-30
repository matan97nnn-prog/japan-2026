import { useState } from "react";
import { CreditCard, Signpost, TrainFront, MapPinned, Bus, CarTaxiFront, Zap, ExternalLink, ListOrdered, ChevronDown, BedDouble } from "lucide-react";
import { LINES, type Line } from "../data/lines";
import { LineBadge } from "./LegSteps";
import { useLang } from "../lib/i18n";

/* The "Transport" tab: how trains work in Japan, the lines we actually
 * use, and links to the official maps. Each day's legs have their own
 * step-by-step directions on the day page. */

type T = { en: string; he: string };
const b = (en: string, he: string): T => ({ en, he });

const QUICK: T[] = [
  b("Google Maps does the planning: it shows the line, the platform direction, the number of stops and the exit. Follow it.", "גוגל מפות עושה את התכנון: הוא מראה את הקו, הכיוון ברציף, מספר התחנות והיציאה. פשוט ללכת אחריו."),
  b("Every line has a colour and a letter; every station a number. G09 = Ginza line, station 9.", "לכל קו יש צבע ואות, ולכל תחנה מספר. G09 = קו Ginza, תחנה 9."),
  b("On the platform, the direction is the name of the line's end station. That's the 'toward' in each day's directions.", "ברציף, הכיוון הוא שם התחנה הסופית של הקו. זה ה\"לכיוון\" שמופיע בהדרכה של כל יום."),
  b("Exits are numbered (A3, 5, B1) on yellow signs. The right exit can save 10 minutes above ground.", "היציאות ממוספרות (A3, 5, B1) על שלטים צהובים. היציאה הנכונה חוסכת לפעמים 10 דקות הליכה למעלה."),
  b("Queue at the floor markings, let people off first, no phone calls inside, quiet voices.", "עומדים בתור לפי הסימונים על הרצפה, נותנים לצאת קודם, לא מדברים בטלפון בפנים, ומדברים בשקט."),
  b("Escalators: stand on the left in Tokyo; in Kyoto people mostly stand on the left too, Osaka on the right.", "מדרגות נעות: בטוקיו עומדים משמאל; בקיוטו בדרך כלל גם משמאל, באוסקה מימין."),
  b("Avoid 07:30–09:30 on weekdays: rush hour. Last trains are around midnight.", "להימנע מ-07:30–09:30 בימי חול: שעת העומס. רכבות אחרונות בסביבות חצות.")
];

const HOW: T[] = [
  b("Tap the Suica (phone or card) on the reader at the gate. It opens.", "מצמידים את ה-Suica (טלפון או כרטיס) לקורא בשער, והוא נפתח."),
  b("Follow the colour and letter of your line on the overhead signs.", "הולכים לפי הצבע והאות של הקו בשלטים שמעל הראש."),
  b("At the stairs to the platforms, pick the side whose sign shows your 'toward' station.", "בירידה לרציפים בוחרים את הצד שהשלט שלו מראה את תחנת ה\"לכיוון\" שלכם."),
  b("Check the train type on the screen: 各停 / 普通 = local (stops everywhere), 急行 / 快速 = express (skips stations).", "בודקים את סוג הרכבת על המסך: 各停 / 普通 = מקומית (עוצרת בכל תחנה), 急行 / 快速 = מהירה (מדלגת)."),
  b("Inside, the screen above the door shows the next station in English and how many minutes to each stop.", "בפנים, המסך מעל הדלת מראה את התחנה הבאה באנגלית וכמה דקות לכל תחנה."),
  b("Changing lines: follow the colour of the next line. Inside the same company you don't tap out.", "החלפת קו: הולכים לפי הצבע של הקו הבא. בתוך אותה חברה לא מצמידים ביציאה."),
  b("Getting off: look for the yellow exit sign with your exit number, tap out at the gate.", "ביציאה: מחפשים את השלט הצהוב עם מספר היציאה ומצמידים בשער.")
];

function Card({ Icon, title, children }: { Icon: typeof TrainFront; title: string; children: React.ReactNode }) {
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

/* A drawn station sign, the kind you see on every Tokyo platform pillar. */
function SignDemo({ he }: { he: boolean }) {
  return (
    <div className="mt-1">
      <svg viewBox="0 0 340 150" className="w-full max-w-md mx-auto block" role="img" aria-label="Station sign example" direction="ltr">
        <rect x="1" y="1" width="338" height="110" rx="10" fill="#fff" stroke="#d6d3cc" />
        <rect x="1" y="86" width="338" height="25" fill="#FF9500" />
        <circle cx="48" cy="44" r="27" fill="#fff" stroke="#FF9500" strokeWidth="7" />
        <text x="48" y="40" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111">G</text>
        <text x="48" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fill="#111">09</text>
        <text x="200" y="40" textAnchor="middle" fontSize="28" fontWeight="700" fill="#111">銀座</text>
        <text x="200" y="66" textAnchor="middle" fontSize="16" fill="#333">Ginza</text>
        <text x="14" y="104" fontSize="12" fill="#fff" fontWeight="700">◀ G08 Shimbashi</text>
        <text x="326" y="104" textAnchor="end" fontSize="12" fill="#fff" fontWeight="700">Kyobashi G10 ▶</text>
        <text x="48" y="138" textAnchor="middle" fontSize="11" fill="#6b6b6b">①</text>
        <text x="200" y="138" textAnchor="middle" fontSize="11" fill="#6b6b6b">②</text>
        <text x="300" y="138" textAnchor="middle" fontSize="11" fill="#6b6b6b">③</text>
      </svg>
      <ol className="mt-2 space-y-1 text-[13.5px]">
        <li>① {he ? "האות והצבע של הקו, ומספר התחנה: G09 = קו Ginza, תחנה 9." : "Line letter and colour, station number: G09 = Ginza line, station 9."}</li>
        <li>② {he ? "שם התחנה ביפנית ובאנגלית." : "Station name in Japanese and English."}</li>
        <li>③ {he ? "התחנה הקודמת והבאה. כך יודעים אם אנחנו בצד הנכון של הרציף." : "Previous and next stations: this tells you if you're on the right side of the platform."}</li>
      </ol>
    </div>
  );
}

function LineCard({ line, he }: { line: Line; he: boolean }) {
  return (
    <li className="rounded-xl bg-white/80 ring-1 ring-ink-900/[0.07] p-3">
      <div className="flex items-center gap-2.5">
        <LineBadge id={line.id} />
        <div className="min-w-0">
          <div className="font-bold text-ink-900 text-[15px] leading-tight">{he ? line.he : line.en}</div>
          <div className="text-[12px] text-ink-700/60" dir="ltr" style={{ textAlign: he ? "right" : "left" }}>{line.operator}</div>
        </div>
      </div>
      {/* The line as a strip, our stations as dots on it. */}
      <ol className="mt-3 relative ps-5">
        <span className="absolute top-2 bottom-2 start-[7px] w-1 rounded-full" style={{ background: line.color }} />
        {line.stations.map((s, i) => (
          <li key={i} className="relative py-1.5">
            <span
              className="absolute -start-5 top-[11px] w-[18px] h-[18px] rounded-full bg-white border-[3px]"
              style={{ borderColor: line.color }}
            />
            <div className="flex items-baseline gap-2 flex-wrap">
              {s.code && <span className="text-[12px] font-bold text-ink-700/70" dir="ltr">{s.code}</span>}
              <span className="font-semibold text-ink-900 text-[14.5px]" dir="ltr">{s.en}</span>
              <span className="text-[13px] text-ink-700/70" lang="ja">{s.ja}</span>
              {s.hotel && <BedDouble size={14} className="text-terracotta-600" aria-label={he ? "ליד המלון" : "near our hotel"} />}
            </div>
            {s.note && <div className="text-[12.5px] text-ink-700/75">{he ? s.note.he : s.note.en}</div>}
          </li>
        ))}
      </ol>
    </li>
  );
}

const MAPS: { href: string; en: string; he: string }[] = [
  { href: "https://www.tokyometro.jp/en/subwaymap/index.html", en: "Tokyo subway map (Tokyo Metro + Toei, PDF)", he: "מפת הרכבת התחתית של טוקיו (Tokyo Metro ו-Toei, PDF)" },
  { href: "https://www.kotsu.metro.tokyo.jp/eng/maps/", en: "Toei lines map (Oedo, Mita)", he: "מפת קווי Toei (Oedo, Mita)" },
  { href: "https://www2.city.kyoto.lg.jp/kotsu/webguide/en/index.html", en: "Kyoto city subway & bus guide", he: "מדריך הרכבת התחתית והאוטובוסים של קיוטו" },
  { href: "https://www.keihan.co.jp/travel/en/", en: "Keihan line (Kyoto)", he: "קו Keihan (קיוטו)" },
  { href: "https://www.kyoto.travel/en/getting-around/", en: "Getting around Kyoto (official tourism site)", he: "התניידות בקיוטו (אתר התיירות הרשמי)" }
];

export default function TransitSection() {
  const { lang } = useLang();
  const he = lang === "he";
  const [city, setCity] = useState<"tokyo" | "kyoto">("tokyo");

  return (
    <section className="py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
        <div>
          <h2 className="text-3xl text-ink-900">{he ? "תחבורה ומטרו" : "Trains & metro"}</h2>
          <p className="mt-1 text-[14.5px] text-ink-700/80">
            {he
              ? "איך זה עובד, הקווים שלנו והמפות. ההדרכה המדויקת לכל נסיעה נמצאת בדף של כל יום, תחת \"איך מגיעים בדיוק\"."
              : "How it works, our lines, the maps. Exact directions for each ride are on each day's page, under \"Exact directions\"."}
          </p>
        </div>

        <Card Icon={Zap} title={he ? "בקיצור" : "The short version"}>
          <List items={QUICK} he={he} />
        </Card>

        <Card Icon={CreditCard} title={he ? "כרטיס Suica: כרטיס אחד לכל דבר" : "Suica: one card for everything"}>
          <List
            he={he}
            items={[
              b("Each of us needs our own. It works on every metro, JR train and city bus in Tokyo, Kyoto and Kanazawa, and pays in convenience stores and vending machines.", "כל אחד צריך אחד משלו. עובד בכל המטרו, רכבות JR והאוטובוסים העירוניים בטוקיו, קיוטו וקנאזאווה, ומשלם גם בחנויות נוחות ובמכונות שתייה."),
              b("iPhone: Wallet → + → Transit card → Suica. Top up in the Wallet app. If an Israeli card is refused, top up with cash at any station machine or at a 7-Eleven till.", "אייפון: ארנק ← + ← כרטיס תחבורה ← Suica. טוענים באפליקציית הארנק. אם כרטיס האשראי הישראלי נדחה, טוענים במזומן בכל מכונה בתחנה או בקופה של 7-Eleven."),
              b("Android: most foreign phones can't hold Suica. Buy a physical Welcome Suica at Narita (JR East Travel Service Center).", "אנדרואיד: ברוב הטלפונים מחוץ ליפן אי אפשר להחזיק Suica. קונים כרטיס פיזי Welcome Suica בנריטה (JR East Travel Service Center)."),
              b("Keep ¥2,000+ on it. If the gate beeps red, the balance is low: top up at the yellow 'Fare adjustment' (精算) machine before the exit.", "להשאיר עליו לפחות ¥2,000. אם השער מצפצף באדום, היתרה נמוכה: טוענים במכונה הצהובה 'Fare adjustment' ‏(精算) לפני היציאה."),
              b("Not for the Shinkansen or the Thunderbird: those need a ticket (see below).", "לא לשינקנסן ולא ל-Thunderbird: לאלה צריך כרטיס (פירוט למטה).")
            ]}
          />
        </Card>

        <Card Icon={Signpost} title={he ? "איך קוראים שלט תחנה" : "Reading a station sign"}>
          <SignDemo he={he} />
        </Card>

        <Card Icon={ListOrdered} title={he ? "נסיעה במטרו, צעד אחר צעד" : "A metro ride, step by step"}>
          <List items={HOW} he={he} ordered />
        </Card>

        <Card Icon={TrainFront} title={he ? "הקווים שלנו" : "Our lines"}>
          <div className="flex gap-2 mb-3">
            {(["tokyo", "kyoto"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`rounded-full px-4 py-2 text-[14px] font-semibold ${c === city ? "bg-terracotta-600 text-cream-50" : "bg-white border border-ink-900/15 text-ink-900"}`}
              >
                {c === "tokyo" ? (he ? "טוקיו" : "Tokyo") : he ? "קיוטו" : "Kyoto"}
              </button>
            ))}
          </div>
          <p className="mb-3 text-[13.5px] text-ink-700/80">
            {city === "tokyo"
              ? he
                ? "שתי חברות מטרו, Tokyo Metro ו-Toei, ועוד קווי JR. כולן עובדות עם אותו Suica. רק התחנות שאנחנו משתמשים בהן מופיעות כאן."
                : "Two metro companies, Tokyo Metro and Toei, plus JR. Same Suica for all. Only the stations we use are shown."
              : he
                ? "בקיוטו הרכבות מהירות יותר מהאוטובוסים, במיוחד בעונת השלכת. קו Keihan, 7 דק' מהמלון, הוא הקו העיקרי שלנו."
                : "In Kyoto trains beat buses, especially in foliage season. The Keihan line, 7 min from the hotel, is our main line."}
          </p>
          <ul className="space-y-2.5">
            {LINES.filter((l) => l.city === city).map((l) => (
              <LineCard key={l.id} line={l} he={he} />
            ))}
          </ul>
        </Card>

        <Card Icon={Zap} title={he ? "שינקנסן (רכבת הכדור)" : "Shinkansen (bullet train)"}>
          <List
            he={he}
            items={[
              b("Buy at the JR ticket machines (English button, credit card) or the ticket office. Each person gets two tickets, fare + express: put both into the gate together; it returns them.", "קונים במכונות של JR (כפתור English, כרטיס אשראי) או בקופה. כל אחד מקבל שני כרטיסים, נסיעה + אקספרס: מכניסים את שניהם יחד לשער, והוא מחזיר אותם."),
              b("Reserved seats are worth it. Car numbers are painted on the platform floor; wait at your car's number.", "שווה לקנות מושבים שמורים. מספרי הקרונות מסומנים על רצפת הרציף; מחכים ליד המספר של הקרון שלנו."),
              b("Tokyo ↔ Kyoto: seat E is the Mt Fuji side. Fuji shows about 45 min out of Tokyo.", "טוקיו ↔ קיוטו: מושב E הוא הצד של הר פוג'י. פוג'י נראה בערך 45 דק' מטוקיו."),
              b("Trains leave on the second, and stop for about a minute. Be on the platform 10 min early.", "הרכבות יוצאות בדיוק בשנייה ועוצרות בערך דקה. להיות ברציף 10 דק' לפני."),
              b("Suitcases over 160 cm (L+W+H) need a seat booked with the luggage area. Food and drinks on board are fine: buy an ekiben (station lunch box).", "מזוודות מעל 160 ס\"מ (אורך+רוחב+גובה) מחייבות הזמנת מושב עם אזור מזוודות. מותר לאכול ולשתות ברכבת: קונים אקיבן (קופסת אוכל של התחנה).")
            ]}
          />
        </Card>

        <Card Icon={Bus} title={he ? "אוטובוסים" : "Buses"}>
          <List
            he={he}
            items={[
              b("Kyoto city buses: get on at the back, tap Suica (or pay cash) at the front when getting off. Flat fare in the city, about ¥230.", "אוטובוסים עירוניים בקיוטו: עולים מאחור, ומצמידים Suica (או משלמים במזומן) מקדימה כשיורדים. מחיר אחיד בעיר, בערך ¥230."),
              b("Press the button before your stop; the next stop shows on the screen in English.", "לוחצים על הכפתור לפני התחנה; התחנה הבאה מופיעה על המסך באנגלית."),
              b("In foliage season Kyoto buses are slow and packed. We use them only when there's no train.", "בעונת השלכת האוטובוסים בקיוטו איטיים ועמוסים. משתמשים בהם רק כשאין רכבת.")
            ]}
          />
        </Card>

        <Card Icon={CarTaxiFront} title={he ? "מוניות" : "Taxis"}>
          <List
            he={he}
            items={[
              b("The rear left door opens and closes by itself; don't touch it.", "הדלת האחורית השמאלית נפתחת ונסגרת לבד; לא נוגעים בה."),
              b("Four of us fit in a regular taxi without big bags. For short rides it costs about the same as four tickets.", "ארבעתנו נכנסים למונית רגילה בלי מזוודות גדולות. בנסיעות קצרות זה עולה בערך כמו ארבעה כרטיסים."),
              b("Show the Japanese name: every stop and hotel on this site has a 'Show the driver' button.", "מראים את השם ביפנית: לכל תחנה ומלון באתר יש כפתור \"להראות לנהג\"."),
              b("The GO and Uber apps work in Tokyo and Kyoto. Night surcharge (+20%) from 22:00. No tipping.", "האפליקציות GO ו-Uber עובדות בטוקיו ובקיוטו. תוספת לילה (‎+20%) מ-22:00. לא נותנים טיפ.")
            ]}
          />
        </Card>

        <Card Icon={MapPinned} title={he ? "המפות הרשמיות" : "Official maps"}>
          <p className="mb-2 text-[13.5px] text-ink-700/80">
            {he ? "המפות המלאות של החברות. כדאי לפתוח פעם אחת עם אינטרנט ולשמור בטלפון." : "The operators' full maps. Open once online and save to the phone."}
          </p>
          <ul className="space-y-1.5">
            {MAPS.map((m) => (
              <li key={m.href}>
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-terracotta-700">
                  <ExternalLink size={14} /> {he ? m.he : m.en}
                </a>
              </li>
            ))}
          </ul>
        </Card>

        <DayLinks he={he} />
      </div>
    </section>
  );
}

/* Shortcut to the days that use the most trains. */
function DayLinks({ he }: { he: boolean }) {
  const [open, setOpen] = useState(false);
  const days = [4, 5, 13, 14, 15, 16, 17, 18];
  return (
    <div className="rounded-2xl bg-olive-500/[0.08] p-4">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between text-[15px] font-bold text-ink-900">
        {he ? "הימים עם הכי הרבה רכבות" : "Days with the most train rides"}
        <ChevronDown size={18} className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="mt-3 flex flex-wrap gap-2">
          {days.map((d) => (
            <a key={d} href={`#chapter/${d}`} className="rounded-full bg-cream-50 border border-ink-900/15 px-3.5 py-1.5 text-[14px] font-semibold text-ink-900">
              {he ? `יום ${d}` : `Day ${d}`}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
