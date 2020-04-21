module.exports = {
  title: "ts-engine",
  tagline: "Power TypeScript packages and reduce your config overhead",
  url: "https://ts-engine.dev",
  baseUrl: "/",
  favicon: "img/logo.svg",
  organizationName: "ts-engine", // Usually your GitHub org/user name.
  projectName: "ts-engine", // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: "ts-engine",
      apiKey: "dd933e60cb4c9589286119ab2d4b6e1e",
      indexName: "ts-engine",
    },
    navbar: {
      title: "ts-engine",
      logo: {
        alt: "ts-engine Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/installation",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/ts-engine",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/installation",
            },
            {
              label: "Quick reference",
              to: "docs/command-quick-reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/ts-engine",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ts-engine",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lee Cheneler and doc contributors. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ts-engine/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
