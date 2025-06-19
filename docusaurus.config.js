const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  onBrokenLinks: 'ignore',
  title: 'HYIP博客',
  titleDelimiter: '-',
  url: 'http://www.zy-wan.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jl',
  projectName: 'blog',
  tagline: '高收益,高风险',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'HYIP博客',
      },
      
      {
        name: 'keywords',
        content: 'HYIP, 钱包, VPN, 优质, 意向, 观望',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'HYIP博客',
      logo: {
        alt: 'HYIP博客',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/',
          label: '首页',
          position: 'right',
        },
        {
          label: '新人必看',
          position: 'right',
          to: 'docs/Newcomers',
        },
        {
          label: '投资项目',
          position: 'right',
          items: [
            {
              label: '优质',
              to: 'docs/HighQuality',
            },
            {
              label: '小资金测试',
              to: 'docs/test',
            },
            {
              label: '审核',
              to: 'docs/Audit',
            },
            {
              label: '已跑路',
              to: 'docs/Runaway',
            },
          ],
        },
       {
          label: '钱包',
          position: 'right',
          to: 'docs/wallet',
        },
       {
          to: "docs/VPN",
          label: "VPN软件",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '新人必看',
          items: [
            {
              label: '常见问题',
              to: 'docs/Newcomers/hyip-question',
            },
            {
              label: '从哪里开始',
              to: 'docs/Newcomers/hyip-start',
            },
            {
              label: '投资词典',
              to: 'docs/Newcomers/hyip-dictionary',
            },
            {
              label: '投资的黄金法则',
              to: 'docs/Newcomers/hyip-invest',
            },
          ]
        },
        {
          title: '投资项目',
          items: [
            {
              label: '优质项目',
              to: 'docs/HighQuality'
            },
           {
              label: '审核项目',
              to: 'docs/Audit'
            },
            
          ],
        },
        {
          title: 'VPN软件',
          items: [
            {
              label: '艾林克',
              to: 'docs/VPN/vpn-Elink',
            },
            {
              label: '安易',
              to: 'docs/VPN/vpn-Easy',
            }
          ],
        },
        {
          title: '联系博客',
          items: [
            {
              label: 'telegram:@hyip_cn',
              to: 'https://t.me/hyip_cn',
            },
            {
              label: 'QQ群:1035024431',
              to: 'https://qm.qq.com/q/kE8RlgDgxW',
            },
            {
              label: 'QQ:3975759714',
              to: '/',
            },
            {
              label: 'QQ频道:pd14273801',
              to: 'https://pd.qq.com/s/4czx55qma',
            },
           
          ],
        },
      ],
      copyright:  `Copyright © ${new Date().getFullYear()} HYIP博客<p><a href="/" class="footer_lin">都是网上收集的资源，如有侵权联系博主删除！</a></p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'RIMEHIIIP6',
      apiKey: '0bb55046a96eb973a220fe57b2d2d3b5',
      indexName: 'xiaojunnan'
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'http://www.zy-wan.com',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'xiaojunnanya/blog',
      repoId: 'R_kgDOJ23KyQ',
      category: 'General',
      categoryId: 'DIC_kwDOJ23Kyc4Ccv-l',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      // github: 'https://github.com/xiaojunnanya',
      // juejin: 'https://juejin.cn/user/3633256370537165',
      // twitter: 'https://twitter.com',
      // csdn: 'https://blog.csdn.net',
      // qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=3812263050&amp;site=qq',
      // zhihu: 'https://www.zhihu.com/people',
      // cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'HYIP博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/xiaojunnanya/blog`,
        editLocalizedFiles: false,
        blogDescription: 'HYIP博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'HYIP博客',
          copyright: `Copyright © ${new Date().getFullYear()} HYIP博客<p><a href="/" class="footer_lin">暂无</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
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
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    // localeConfigs: {
    //   en: {
    //     htmlLang: 'en-GB',
    //   },
    // },
  },
}

module.exports = config
