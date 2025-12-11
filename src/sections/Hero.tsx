import { Link } from "react-router-dom";
import { useI18n } from "@/app/I18nProvider";

const Hero = () => {
  const { t } = useI18n();
  const hero = t.home.hero;

  return (
    <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-[#f4e9da] via-[var(--accent)]/30 to-[#f4e9da] px-8 py-12 text-[var(--ink)] shadow-xl ring-1 ring-slate-200 md:grid-cols-[1.05fr,0.95fr] md:items-center md:px-12 md:py-14">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)]">
          {hero.badge}
        </div>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">{hero.title}</h1>
        <p className="max-w-2xl text-base text-slate-800 md:text-lg">{hero.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="shine-btn rounded-lg bg-[var(--cta)] px-5 py-3 text-base font-semibold text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta)] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-lg"
          >
            {hero.primaryCta}
          </Link>
        </div>
      </div>
      <div className="section-card relative overflow-hidden border-slate-200 bg-white/80 p-6 text-[var(--ink)] shadow-2xl shadow-slate-200/70 backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/50 via-transparent to-[#f4e9da]/60" aria-hidden />
        <div className="relative space-y-3 text-[var(--ink)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">{t.home.approach.title}</p>
          <ul className="space-y-2 text-sm text-slate-800">
            {t.home.approach.items.map((item) => (
              <li key={item.title} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
