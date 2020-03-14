// 插件
// const TerserPlugin = require('terser-webpack-plugin');

// 头部配置
const head = require('./config/head.js');
// 主题配置
const themeConfig = require('./config/themeConfig.js');

let markdown = {
  lineNumbers: true, // 开启行号（关闭无呼吸灯特效）
  anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
  toc: { includeLevel: [2, 4] }, // 指定 [[toc]]
  extractHeaders: ['h2', 'h3', 'h4'],
};
module.exports = {
  base: '/',
  dest: 'dist',
  theme: 'yur',
  evergreen: true,
  markdown,
  head,
  themeConfig,
  extraWatchFiles: ['/docs/.vuepress/config.js', '/docs/.vuepress/config/**'],
  plugins: ['@vuepress/pwa', '@vuepress/nprogress'],
  configureWebpack: {
    plugins: [],
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       chunkFilter: () => true,
    //       cache: '/cache',
    //     }),
    //   ],
    // },
    resolve: {
      alias: {
        '@public': './.vuepress/public/',
      },
    },
    devServer: {
      compress: true,
    },
  },
};
