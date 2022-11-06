// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RedModding Wiki",
  url: "https://wiki.redmodding.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RedModding", // Usually your GitHub org/user name.
  projectName: "WolvenKit", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "es", "it", "pl", "pt", "zh"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
        path: "en",
      },
      fr: {
        htmlLang: "fr",
        path: "fr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "RedModding",
        logo: {
          alt: "RedModding Logo",
          src: "img/logo.png",
          href: "https://redmodding.org",
        },
        items: [
          {
            type: "doc",
            docId: "WolvenKit/intro",
            position: "left",
            label: "WolvenKit",
          },
          {
            type: "doc",
            docId: "CET/intro",
            position: "left",
            label: "CET",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/wolvenkit/documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} Red Modding.`,
      },
      prism: {
        theme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
