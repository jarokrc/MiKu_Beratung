// LegalNotice.tsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";

const LegalNotice = () => {
  const { t } = useI18n();
  const ln = t.legalNotice;

  return (
    <div className="space-y-8">
      <Helmet>
        <title>{ln.metaTitle}</title>
        {ln.metaDescription ? <meta name="description" content={ln.metaDescription} /> : null}
      </Helmet>

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{ln.title}</h1>
        
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{ln.projectHeading}</h2>
        <div className="space-y-2">
          {ln.projectParagraphs.map((p: string, i: number) => (
            <p key={i} className="text-sm text-slate-700 md:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{ln.scopeHeading}</h2>
        <div className="space-y-2">
          {ln.scopeParagraphs.map((p: string, i: number) => (
            <p key={i} className="text-sm text-slate-700 md:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{ln.importantHeading}</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 md:text-base">
          {ln.importantBullets.map((b: string, i: number) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <div className="pt-2">
        <Link to="/" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">
          {ln.backHome}
        </Link>
      </div>
    </div>
  );
};

export default LegalNotice;
