import { Plane, Car, Users, ExternalLink, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLang } from "../lib/i18n";

/* The "need it right now" strip at the top of the page: booking codes,
 * surname, and the one button everybody looks for at the airport. */

type L = { en: string; he: string };

interface Booking {
  Icon: typeof Plane;
  title: L;
  when: L;
  codes: string[];
  lines?: L[];
  action?: { label: L; url: string };
  phone?: { label: L; tel: string; display: string };
}

const BOOKINGS: Booking[] = [
  {
    Icon: Plane,
    title: { en: "Emirates flights", he: "טיסות Emirates" },
    when: { en: "31.10 Larnaca → Dubai · 1.11 Dubai → Narita", he: "31.10 לרנקה ← דובאי · 1.11 דובאי ← נריטה" },
    codes: ["HG8ZCN", "I5JSFN"],
    lines: [
      { en: "Surname: STEIN", he: "שם משפחה: STEIN" },
      { en: "EK110 · 31.10 16:25 → Dubai 19:25", he: "EK110 · 31.10 16:25 ← דובאי 19:25" },
      { en: "EK318 · 1.11 02:55 → Narita 17:20", he: "EK318 · 1.11 02:55 ← נריטה 17:20" },
      { en: "Return flight: not set yet", he: "טיסת חזור: עוד לא נקבעה" }
    ],
    action: {
      label: { en: "Emirates online check-in", he: "צ'ק-אין אונליין ב-Emirates" },
      url: "https://www.emirates.com/il/english/manage-booking/online-check-in/"
    }
  },
  {
    Icon: Car,
    title: { en: "Toyota Rent a Car — Noah Hybrid", he: "Toyota Rent a Car — נואה היברידית" },
    when: { en: "Pick up 4.11 10:00 Odawara · return 9.11 by 20:00 Kanazawa", he: "איסוף 4.11 10:00 אודווארה · החזרה 9.11 עד 20:00 קנאזאווה" },
    codes: ["99910376400"],
    lines: [{ en: "Booked under RONEN STEIN", he: "על שם RONEN STEIN" }],
    phone: { label: { en: "Odawara branch", he: "סניף אודווארה" }, tel: "+81465320100", display: "0465-32-0100" }
  },
  {
    Icon: Users,
    title: { en: "Tokyo evening tour (Hebrew)", he: "סיור ערב בטוקיו (בעברית)" },
    when: { en: "2.11 · 20:00 · Gap Store Shinjuku", he: "2.11 · 20:00 · Gap Store שינג'וקו" },
    codes: ["9022"],
    action: {
      label: { en: "Meeting point", he: "נקודת המפגש" },
      url: "https://maps.app.goo.gl/SbGAF4ki2xodKpPh9"
    },
    phone: { label: { en: "Office WhatsApp", he: "וואטסאפ המשרד" }, tel: "+818043737268", display: "+81 80-4373-7268" }
  }
];

function CodeChip({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(code).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 text-cream-50 px-2.5 py-1 font-mono text-[15px] tracking-wider"
      dir="ltr"
    >
      {code}
      {copied ? <Check size={13} /> : <Copy size={13} className="opacity-60" />}
    </button>
  );
}

export default function QuickBookings() {
  const { lang } = useLang();
  return (
    <section id="bookings-quick" className="relative py-8 sm:py-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-[26px] sm:text-3xl text-ink-900">{lang === "he" ? "הזמנות וקודים" : "Bookings & codes"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {BOOKINGS.map((b) => (
            <div key={b.codes[0]} className="rounded-2xl bg-cream-50 border border-ink-900/10 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-ink-900 font-medium">
                <b.Icon size={16} className="text-terracotta-600" />
                {b.title[lang]}
              </div>
              <div className="mt-1 text-[13px] text-ink-700/75">{b.when[lang]}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {b.codes.map((c) => (
                  <CodeChip key={c} code={c} />
                ))}
              </div>
              {b.lines && (
                <ul className="mt-3 space-y-0.5 text-[13px] text-ink-700/85">
                  {b.lines.map((l, i) => (
                    <li key={i}>{l[lang]}</li>
                  ))}
                </ul>
              )}
              {(b.action || b.phone) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {b.action && (
                    <a
                      href={b.action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-600 text-cream-50 px-4 py-2 text-sm font-medium"
                    >
                      <ExternalLink size={14} /> {b.action.label[lang]}
                    </a>
                  )}
                  {b.phone && (
                    <a
                      href={`tel:${b.phone.tel}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-4 py-2 text-sm"
                    >
                      <Phone size={14} /> {b.phone.label[lang]} <span dir="ltr">{b.phone.display}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
