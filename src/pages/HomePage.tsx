import { Helmet } from "react-helmet-async";
import Hero from "@/sections/Hero";
import { useI18n } from "@/app/I18nProvider";
import homeImg from "@/assets/home/office.webp";
import logoImg from "@/assets/logo/logo2.webp";

const HomePage = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <Helmet>
        <title>{t.meta.homeTitle}</title>
        <meta name="description" content={t.meta.homeDescription} />
      </Helmet>
      <Hero />

      <section className="grid gap-4 md:grid-cols-[1.3fr,0.9fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.home.highlights.title}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.highlights.items.map((item) => (
              <article key={item.title} className="section-card p-5">
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={homeImg}
            alt="Praxisumgebung"
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="section-card grid gap-4 bg-[var(--accent)]/20 p-6 md:grid-cols-[1.1fr,0.9fr] md:p-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{t.home.approach.title}</p>
          <img
            src={logoImg}
            alt={t.home.brand}
            className="h-40 w-auto rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            loading="lazy"
            decoding="async"
          />
          <p className="text-sm text-slate-700 md:text-base">{t.home.approach.text}</p>
        </div>
        <div className="grid gap-3">
          {t.home.approach.items.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900 md:text-base">{item.title}</p>
              <p className="text-sm text-slate-700 md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-card bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{t.home.steps.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
            {t.home.steps.items.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card bg-white p-6">
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">{t.home.expectations.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
            {t.home.expectations.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

    </div>
  );
};

export default HomePage;
