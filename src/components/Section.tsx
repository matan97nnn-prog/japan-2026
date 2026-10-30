import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  /** A short italic subtitle shown right under the headline */
  kicker?: string;
  intro?: string;
  children: ReactNode;
  toned?: boolean;
  /** When true, headline + intro center themselves */
  center?: boolean;
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
  toned,
  center
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-8 sm:py-14 scroll-mt-20 ${
        toned ? "bg-cream-100/60" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`mb-5 sm:mb-8 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}
        >
          <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-terracotta-500/60" aria-hidden />
            <div className="section-eyebrow !mt-0">{eyebrow}</div>
          </div>
          <h2 className="mt-2 font-serif text-[28px] sm:text-4xl text-ink-900 leading-tight">
            {title}
          </h2>
          {/* Kickers and intro paragraphs were cut: the family asked for short pages. */}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
