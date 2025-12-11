import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";

const NotFoundPage = () => {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <Helmet>
        <title>{t.notFound.title}</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.notFound.title}</h1>
      <p className="text-sm text-slate-700 md:text-base">{t.notFound.description}</p>
      <Link to="/" className="text-blue-700 font-semibold hover:text-blue-800 md:text-base">{t.notFound.back}</Link>
    </div>
  );
};

export default NotFoundPage;