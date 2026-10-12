const baseURL = "https://mepathan.com";

const meta = {
  home: {
    path: "/",
    title: "mepathan | Data Analyst & Business Insights",
    description:
      "Data analyst sharing practical insights on Power BI, Power Query, SharePoint, data strategy, and modern business analytics.",
    image: "/og-home.svg",
    canonical: "https://mepathan.com",
    robots: "index,follow",
    alternates: [{ href: "https://mepathan.com", hrefLang: "en" }],
  },
};

const schema = {
  logo: "https://mepathan.com/og-home.svg",
  type: "Person",
  name: "mepathan",
  description: meta.home.description,
  email: "hello@mepathan.com",
  sameAs: [
    "https://github.com/eliaspathan",
    "https://www.linkedin.com/in/epathan",
  ],
};

export { meta, schema, baseURL };