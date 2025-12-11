import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { useI18n } from "@/app/I18nProvider";
import privacyImg from "@/assets/privacy/gdpr.webp";

const buildEmail = () => {
  const userChars = [109, 105, 99, 104, 97, 101, 108, 46, 107, 117, 99, 101, 114, 107, 97, 56]; 
  const domainChars = [103, 109, 97, 105, 108, 46, 99, 111, 109]; 
  const toStr = (chars: number[]) => chars.map((c) => String.fromCharCode(c)).join("");
  return `${toStr(userChars)}@${toStr(domainChars)}`;
};

const PrivacyPage = () => {
  const { t } = useI18n();
  const email = useMemo(() => buildEmail(), []);

  return (
    <div className="space-y-6">
      <Helmet>
        <title>{t.meta.privacyTitle}</title>
      </Helmet>
      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">{t.privacy.title}</h1>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">{t.privacy.intro}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={privacyImg}
            alt="Datenschutz Illustration"
            className="h-full w-full rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="space-y-6">
        {t.privacy.sections.map((section, sectionIndex) => (
          <section key={`${section.heading}-${sectionIndex}`} className="space-y-3">
            <h2 className="text-lg font-semibold text-[var(--ink)] md:text-xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`${section.heading}-paragraph-${paragraphIndex}`}
                className="text-sm leading-relaxed text-slate-700 md:text-base"
              >
                {paragraph.toLowerCase().includes("kontakt per e-mail") ? (
                  <>
                    Kontakt per E-Mail:{" "}
                    <a className="font-semibold text-blue-700 hover:text-blue-800" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </section>
        ))}

        <section className="space-y-2 border-t border-slate-200 pt-4">
          <h2 className="text-lg font-semibold text-[var(--ink)] md:text-xl">{t.privacy.contact.heading}</h2>
          {t.privacy.contact.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={`contact-paragraph-${paragraphIndex}`}
              className="text-sm leading-relaxed text-slate-700 md:text-base"
            >
              {paragraph}
            </p>
          ))}
          <a
            className="text-sm font-medium text-blue-700 hover:text-blue-800 md:text-base"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
