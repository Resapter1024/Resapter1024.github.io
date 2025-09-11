import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    // 第一个参数是标签名，第二个是属性对象
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Resa 的自习室",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
