// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seeed Studio Wiki',
  tagline: 'The IoT Hardware Development Documentation',
  
  url: 'https://c1ev0ps.github.io',
  baseUrl: '/docusaurus_wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Seeed Studio', // Usually your GitHub org/user name.
  projectName: 'docusaurus_wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en',  'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          sidebarPath: require.resolve('./sidebars.js'),
          
          remarkPlugins: [math],
          rehypePlugins: [katex],

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: false,
          editCurrentVersion: false,

          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: undefined,

          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],

          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    
  ],
  
  themeConfig:
    
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Seeed Studio',
          src: 'https://statics3.seeedstudio.com/assets/img/common/logo_2018_horizontal.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'https://www.seeedstudio.com/', label: 'Bazaar', position: 'left'},
          {to: 'https://www.seeedstudio.com/fusion.html', label: 'Fusion', position: 'left'},
          {to: 'https://www.seeedstudio.com/odm', label: 'Services', position: 'left'},
          {to: 'https://forum.seeedstudio.com/', label: 'Forum', position: 'left'},
          {to: 'https://solution.seeedstudio.com/', label: 'Solution', position: 'left'},
          {
            href: 'https://github.com/c1ev0ps/docusaurus_wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/About',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Form',
                href: 'https://forum.seeedstudio.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/QqMgVwHT3X',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/seeedstudio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.seeedstudio.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seeed Studio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '8182LB8Y0D',
  
        // Public API key: it is safe to commit it
        apiKey: 'a2761291fdfe389c56720a86986d1952',
  
        indexName: 'example',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'false',
  
        //... other Algolia params
      },
      mermaid: {
        options: {
          maxTextSize: 50,
        },
      },

      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },

    }),
  
  
};

module.exports = config;
