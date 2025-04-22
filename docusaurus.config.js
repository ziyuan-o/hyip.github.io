const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  onBrokenLinks: 'ignore',
  title: '资源挖掘博客',
  titleDelimiter: '-',
  url: 'http://www.zy-wan.top',
  baseUrl: '/',
  favicon: 'https://pic.imgdb.cn/item/66cba8a2d9c307b7e9af4e79.jpg',
  organizationName: 'jl',
  projectName: 'blog',
  tagline: '挖掘数据爱好者',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'https://pic.imgdb.cn/item/66cba8a2d9c307b7e9af4e79.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'keywords',
        content: '资源挖掘博客',
      },
      
      {
        name: 'keywords',
        content: '挖掘数据爱好者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: '资源挖掘博客',
      logo: {
        alt: '资源挖掘博客',
        src: 'https://pic.imgdb.cn/item/66cba8a2d9c307b7e9af4e79.jpg',
        srcDark: 'https://pic.imgdb.cn/item/66cba8a2d9c307b7e9af4e79.jpg',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/',
          label: '首页',
          position: 'right',
        },
        {
          to: "docs/赚钱资源/赚钱资源-intro",
          label: "赚钱资源",
          position: "right",
    
        },
        {
          to: "docs/营销专区/营销专区-intro",
          label: "营销专区",
          position: "right",
         
        },
        {
          to: "docs/学习专区/学习专区-intro",
          label: "学习专区",
          position: "right",
        },
        {
          to: "docs/办公专区/办公专区-intro",
          label: "办公软件",
          position: "right",
        },
        {
          to: "docs/休闲专区/休闲专区-intro",
          label: "休闲专区",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: '赚钱资源',
          items: [
            {
              label: '赚钱资源',
              to: 'docs/赚钱资源/赚钱资源-intro',
            }
          ]
        },
        {
          title: '营销专区',
          items: [
            {
              label: '营销专区',
              to: 'docs/营销专区/营销专区-intro',
            }
           
            
          ],
        },
        {
          title: '学习专区',
          items: [
            {
              label: '学习专区',
              to: 'docs/学习专区/学习专区-intro',
            }
          ],
        },
        {
          title: '办公专区',
          items: [
            {
              label: '办公软件',
              to: 'docs/办公专区/办公专区-intro',
            }
           
          ],
        },
        
        {
          title: '联系博客',
          items: [
            {
              label: 'QQ群:733580353',
              to: '/',
            },
            {
              label: 'QQ:3812263050',
              to: '/',
            },
            {
              label: '微信公众号:资源整集',
              to: '/',
            },
           
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: '鲸落',
              position: 'right',
              href: 'http://www.xiaojunnan.cn/',
            }
          ],
        },
      ],
      copyright:  `Copyright © ${new Date().getFullYear()} 资源挖掘博客<p><a href="/" class="footer_lin">都是网上收集的资源，如有侵权联系博主删除！</a></p>`,
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
      matomoUrl: 'http://www.zy-wan.top',
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
        content: '资源挖掘博客',
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
        blogDescription: '资源挖掘博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '资源挖掘博客',
          copyright: `Copyright © ${new Date().getFullYear()} 资源挖掘博客<p><a href="/" class="footer_lin">暂无</a></p>`,
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
