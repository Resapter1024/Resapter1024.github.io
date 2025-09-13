import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({

  hostname: "https://Resapter1024.github.io",

  author: {
    name: "Resapter",
    // url: "https://mister-hope.com",
  },

  darkmode: "switch",
  fullscreen: true,

  logo: "/logo.PNG",

  repo: "Resapter1024/Resapter1024.github.io",

  docsDir: "src",

  blog: {
    avatar: "/logo.PNG",
    medias: {
      BiliBili: "https://space.bilibili.com/34529907",
      // Email: "2022201384@ruc.edu.cn",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/Resapter1024",
    },
  },

  locales: {
    "/": {

      // navbar
      navbar: [
        { text: "Resa的自习室", link: "/", icon: "home" },
          {
          // ↓↓↓↓↓↓ 这是修改后的“博文”下拉菜单 ↓↓↓↓↓
          text: "博文",
          icon: "pen-to-square",
          prefix: "/", // 可选：为下面的所有链接添加一个路径前缀
          children: [
            // 这是一个分组
            {
              text: "索引",
              children: [
                { text: "分类", link: "/category/" },
                { text: "标签", link: "/tag/" },
              ]
            },
            // 这是另一个分组
            {
              text: "列表",
              children: [
                { text: "文章列表", link: "/notes/" },
                { text: "时间轴", link: "/timeline/" },
              ]
            }
          ],
        },
      // ↑↑↑↑↑↑ 修改结束 ↑↑↑↑↑↑
      ],

      // sidebar
      sidebar: "structure",

      footer: "",

      displayFooter: true,

      blog: {
        description: "Per aspera ad astra.",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    /**
     * English locale config
     */
    "/en/": {
      
      // navbar
      navbar: [
        { text: "Resa's Self-Study Room", link: "/en/", icon: "home" },
          {
          // ↓↓↓↓↓↓ 这是修改后的“博文”下拉菜单 ↓↓↓↓↓
          text: "Blog",
          icon: "pen-to-square",
          prefix: "/en/", 
          children: [
            {
              text: "Index",
              children: [
                { text: "Category", link: "category/" },
                { text: "Tag", link: "tag/" },
              ]
            },
            {
              text: "List",
              children: [
                { text: "Artical List", link: "notes/" },
                { text: "Timeline", link: "timeline/" },
              ]
            }
          ],
        },
      ],


      // sidebar
      sidebar: "structure",

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "Per aspera ad astra.",
        intro: "/en/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/notes/probability/probability2.html": "resa4201",// empty
    }
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    // 启用 GFM 风格的 Markdown (表格、删除线等)
    gfm: true,
    // 允许在图片上添加标题和说明
    figure: true,
    // 开启图片懒加载
    imgLazyload: true,
    // 允许指定图片大小
    imgSize: true,
    // 允许在 Markdown 中导入其他 Markdown 文件
    include: true,
    // 启用高亮标记
    mark: true,
    // 启用脚注
    footnote: true,
    // 启用任务列表
    tasklist: true,
    // 启用上下角标
    sub: true,
    sup: true,
    // 启用自定义对齐
    align: true,
    // 启用属性支持 (给标题等添加 class 或 id)
    attrs: true,
    // 启用代码块分组和代码块选项卡
    codeTabs: true,
    // 启用常规选项卡
    tabs: true,
    // 启用自定义容器 (tip, warning, danger, details)
    // 这个默认就是开的，但我们明确写出来
    // container: true, // (旧版写法，新版已集成)

    // --- 以下是需要额外安装依赖的功能 ---

    // 启用数学公式支持 (使用 KaTeX)
    math: true,
    // 启用图表支持 (Mermaid.js),

    // align: true,
    // attrs: true,
    // codeTabs: true,
    // component: true,
    // demo: true,
    // figure: true,
    // gfm: true,
    // imgLazyload: true,
    // imgSize: true,
    // include: true,
    // mark: true,
    // plantuml: true,
    // spoiler: true,
    // stylize: [
    //   {
    //     matcher: "Recommended",
    //     replacer: ({ tag }) => {
    //       if (tag === "em")
    //         return {
    //           tag: "Badge",
    //           attrs: { type: "tip" },
    //           content: "Recommended",
    //         };
    //     },
    //   },
    // ],
    // sub: true,
    // sup: true,
    // tabs: true,
    // tasklist: true,
    // vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
