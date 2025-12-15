import { Link, NavLink } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { useI18n } from "@/app/I18nProvider";
import logoImg from "@/assets/logo/logo2.webp";

const Layout = ({ children }: { children: ReactNode }) => {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("cookie_notice_accepted") : null;
    if (!stored) {
      setShowCookies(true);
    }
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-semibold rounded-full border transition md:text-base ${
      isActive
        ? "border-[var(--cta)] bg-[var(--accent)]/60 text-[var(--ink)] shadow-sm"
        : "border-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:bg-white/80 hover:text-[var(--cta)] shadow-none"
    }`;

  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg focus:ring-2 focus:ring-blue-700"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="MiKu Begleitung Logo"
              className="h-10 w-auto rounded-xl border border-slate-200 bg-white/80 p-1 shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass} end>
              {t.nav.home}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/kontakt" className={navLinkClass}>
              {t.nav.contact}
            </NavLink>
          </nav>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-slate-300 bg-gradient-to-r from-white to-[var(--accent)]/40 px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm transition hover:border-[var(--cta)] hover:text-[var(--cta)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta)] focus-visible:ring-offset-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden className="flex h-4 w-4 flex-col justify-between">
              <span className="block h-[2px] w-full rounded-full bg-[var(--ink)]" />
              <span className="block h-[2px] w-full rounded-full bg-[var(--ink)]" />
              <span className="block h-[2px] w-full rounded-full bg-[var(--ink)]" />
            </span>
            <span>Menu</span>
          </button>
        </div>
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 bg-white/95 px-6 py-3 shadow-sm md:hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={navLinkClass}
                end
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.home}
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.about}
              </NavLink>
              <NavLink
                to="/kontakt"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.contact}
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="text-lg">©</span>
            <span>{new Date().getFullYear()} MiKu Begleitung</span>
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/datenschutz" className="hover:text-blue-800">{t.nav.privacy}</Link>
            <Link to="/cookies" className="hover:text-blue-800">{t.nav.cookies}</Link>
            <Link to="/rechtlicher-hinweis" className="hover:text-blue-800">{t.nav.legalNotice}</Link>
          </div>
        </div>
      </footer>

      {showCookies && (
        <div className="fixed top-4 left-4 right-4 z-30 md:left-auto md:right-6 md:w-[28rem]">
          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur">
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--cta)]" aria-hidden />
            <div className="space-y-1 text-sm text-slate-800">
              <p className="font-semibold">Cookies Hinweis</p>
              <p>
                Diese Seite nutzt nur technisch notwendige Cookies (keine Analytics/Marketing).
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  className="rounded-lg bg-[var(--cta)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cta)] focus-visible:ring-offset-2"
                  onClick={() => {
                    if (typeof window !== "undefined") window.localStorage.setItem("cookie_notice_accepted", "yes");
                    setShowCookies(false);
                  }}
                >
                  Verstanden
                </button>
                <Link to="/cookies" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
