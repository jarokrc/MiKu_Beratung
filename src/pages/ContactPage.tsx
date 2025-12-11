import { Helmet } from "react-helmet-async";
import Contact from "@/sections/Contact";
import { useI18n } from "@/app/I18nProvider";

const ContactPage = () => {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <Helmet>
        <title>{t.meta.contactTitle}</title>
      </Helmet>
      <Contact />
    </div>
  );
};

export default ContactPage;
