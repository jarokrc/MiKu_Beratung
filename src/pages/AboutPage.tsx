import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";
import michaelImg from "@/assets/about/michael.webp";

const AboutPage = () => {
  const { t } = useI18n();
  const introRef = useRef<HTMLDivElement | null>(null);
  const [animatedIntro, setAnimatedIntro] = useState<string[]>(() => t.about.intro.map(() => ""));
  const hasStarted = useRef(false);

  useEffect(() => {
    const node = introRef.current;
    if (!node || hasStarted.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (!visible || hasStarted.current) return;
        hasStarted.current = true;

        let paragraphIndex = 0;
        let charIndex = 0;
        const texts = t.about.intro;

        const interval = window.setInterval(() => {
          // Skip any out-of-bounds or empty paragraphs
          while (paragraphIndex < texts.length && !texts[paragraphIndex]) {
            paragraphIndex += 1;
            charIndex = 0;
          }
          if (paragraphIndex >= texts.length) {
            window.clearInterval(interval);
            return;
          }

          const currentText = texts[paragraphIndex];
          setAnimatedIntro((prev) => {
            const next = [...prev];
            next[paragraphIndex] = currentText.slice(0, charIndex + 1);
            return next;
          });

          charIndex += 1;
          if (charIndex >= currentText.length) {
            paragraphIndex += 1;
            charIndex = 0;
            if (paragraphIndex >= texts.length) {
              window.clearInterval(interval);
              return;
            }
          }
        }, 25);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [t.about.intro]);

  return (
    <div className="space-y-8">
      <Helmet>
        <title>{t.meta.aboutTitle}</title>
      </Helmet>

      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">{t.about.title}</h1>
        </header>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={michaelImg}
            alt="Michael Kucerka"
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <section ref={introRef} className="section-card space-y-3 bg-white p-6 md:p-8">
        {animatedIntro.map((paragraph, idx) => (
          <p key={`intro-${idx}`} className="text-sm text-slate-700 md:text-base min-h-[1.5rem]">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <article className="section-card bg-white p-6 md:p-7">
          <h2 className="text-xl font-bold text-[var(--ink)] md:text-2xl">{t.about.goalTitle}</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
            {t.about.goals.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card bg-[var(--light-gray)]/60 p-6 md:p-7">
          <h2 className="text-xl font-bold text-[var(--ink)] md:text-2xl">{t.about.openTitle}</h2>
          <p className="mt-2 text-sm text-slate-700 md:text-base">{t.about.openText}</p>
        </article>
      </section>

      <section className="section-card bg-white p-6 md:p-8">
        <h2 className="text-xl font-bold text-[var(--ink)] md:text-2xl">{t.about.methodsTitle}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--ink)] md:text-xl">{t.about.nlpTitle}</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-700 md:text-base">
              {t.about.nlpItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--ink)] md:text-xl">{t.about.crisisTitle}</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-700 md:text-base">
              {t.about.crisisItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-card bg-white p-6 md:p-7">
        <h2 className="text-xl font-bold text-[var(--ink)] md:text-2xl">{t.about.effectsTitle}</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
          {t.about.effects.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
