export type Translation = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    contactTitle: string;
    privacyTitle: string;
    cookiesTitle: string;
    aboutTitle: string;
  };
  nav: {
    home: string;
    contact: string;
    about: string;
    privacy: string;
    cookies: string;
  };
  home: {
    brand: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    highlights: {
      title: string;
      items: { title: string; description: string }[];
    };
    approach: {
      title: string;
      text: string;
      items: { title: string; description: string }[];
    };
    steps: {
      title: string;
      items: string[];
    };
    expectations: {
      title: string;
      items: string[];
    };
    contactTeaser: {
      title: string;
      text: string;
      cta: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    notice: string;
    info: {
      response: string;
      availability: string;
    };
    badge: string;
    headline: string;
    mail: {
      note: string;
      cta: string;
      label: string;
    };
  };
  about: {
    title: string;
    intro: string[];
    goalTitle: string;
    goals: string[];
    openTitle: string;
    openText: string;
    methodsTitle: string;
    nlpTitle: string;
    nlpItems: string[];
    crisisTitle: string;
    crisisItems: string[];
    effectsTitle: string;
    effects: string[];
  };
  privacy: {
    title: string;
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    contact: {
      heading: string;
      paragraphs: string[];
    };
  };
  cookies: {
    title: string;
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    contact: {
      heading: string;
      paragraphs: string[];
    };
  };
  notFound: {
    title: string;
    description: string;
    back: string;
  };
};
