import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/app/I18nProvider";
import contactImg from "@/assets/contact/cesta.webp";

const buildEmail = () => {
  const userChars = [109, 105, 99, 104, 97, 101, 108, 46, 107, 117, 99, 101, 114, 107, 97, 56]; 
  const domainChars = [103, 109, 97, 105, 108, 46, 99, 111, 109]; 
  const toStr = (chars: number[]) => chars.map((c) => String.fromCharCode(c)).join("");
  return `${toStr(userChars)}@${toStr(domainChars)}`;
};

const Contact = () => {
  const { t, locale } = useI18n();
  const email = buildEmail();
  const noticeRef = useRef<HTMLParagraphElement | null>(null);
  const [animatedNotice, setAnimatedNotice] = useState("");
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = noticeRef.current;
    if (!el || hasStarted.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible && !hasStarted.current) {
          hasStarted.current = true;
          const text = t.contact.notice;
          let index = 0;
          const interval = window.setInterval(() => {
            index += 1;
            setAnimatedNotice(text.slice(0, index));
            if (index >= text.length) {
              window.clearInterval(interval);
            }
          }, 30);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [t.contact.notice]);

  const regionText = t.contact.info.availability;
  const responseText = t.contact.info.response;

  return (
    <section id="contact" className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.contact.subtitle}</h2>
        <p
          ref={noticeRef}
          className="inline-flex min-h-[1.5rem] items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--cta)]/20 via-white to-[var(--accent)]/25 px-3 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm ring-1 ring-[var(--cta)]/30 md:text-base"
        >
          {animatedNotice}
        </p>
      </div>

      <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.1fr,1fr] md:p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">
            {t.contact.badge}
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t.contact.headline}
            </h3>
            <p className="text-sm text-slate-700 md:text-base">{t.contact.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {regionText}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {responseText}
            </span>
          </div>

          <p className="text-sm text-slate-700 md:text-base">
            {t.contact.mail.note}
          </p>
          <p className="text-sm text-slate-600 md:text-base">
            {t.contact.mail.label}{" "}
            <a className="font-semibold text-blue-700 hover:text-blue-800" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm">
          <img
            src={contactImg}
            alt="Kontakt"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      
    </section>
  );
};

export default Contact;
