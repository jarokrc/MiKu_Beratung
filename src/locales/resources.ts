import deCommon from "./de/common";
import deHome from "./de/home";
import deAbout from "./de/about";
import deContact from "./de/contact";
import dePrivacy from "./de/privacy";
import deCookies from "./de/cookies";
import deNotFound from "./de/notFound";
import type { Translation } from "./types";

const merge = (...parts: any[]) => parts.reduce((acc, part) => ({ ...acc, ...part }), {});

export const translations: Record<string, Translation> = {
  de: merge(deCommon, deHome, deAbout, deContact, dePrivacy, deCookies, deNotFound) as Translation,
};
