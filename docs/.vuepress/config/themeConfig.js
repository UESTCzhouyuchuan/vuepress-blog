// 定制标识牌
const nameplate = require('./nameplate.js');

//静态信息
const locales = require('./locales.js');

// 友链
const links = require('./links.js');

// 页脚
const footer = require('./footer.js');

module.exports = {
  lang: 'zh-CN',
  logo: '/static/blog.png',
  avatar: '/static/lovely-girl.jpg', // 头像
  author: '周玉川', // 博主名称
  authorLink: 'https://github.com/UESTCzhouyuchuan/', // 博主名称跳转链接
  social: {
    github: 'https://github.com/UESTCzhouyuchuan/',
    qq: 'tencent://message/?uin=1738733078',
  },
  banner: '/static/banner.png', // 首页封面，固定宽高比例：482x500
  timeline: true, // 开启时间线
  about: true,
  dark: true,
  cdn: 'https://cdn.jsdelivr.net/gh/uestczhouyuchuan/uestczhouyuchuan.github.io@master/',
  locales,
  navs: [
    { text: 'JavaScript', link: '/javascript/' },
    { text: 'CSS', link: '/css/' },
    { text: 'MarkDown', link: '/markdown/' },
    { text: '其它', link: '/other/' },
  ],
  nameplate,
  buttons: [
    // 首页按钮，type 默认：default，可选：primary dashed danger link
    { text: '阅读列表', link: '/posts/', type: 'primary' },
    { text: '了解博主', link: '/about.html', type: 'default' },
  ],
  footer,
  // 首页打字特效
  ityped: {
    typeSpeed: 300, // 正常速度
    backSpeed: 200, // 反向速度
    startDelay: 300, // 开始延迟（毫秒）
    backDelay: 1000, // 反向延迟（毫秒）
    loop: true, // 循环
    showCursor: true, // 显示指针
    placeholder: false, // 占位
    disableBackTyping: false, // 禁用反向输入
    cursorChar: '丨', // 指针字符
  },
  post: {
    bubbles: true,
  },
  search: {
    type: 'default',
    size: 10,
  },
  reward: ['/static/zifubao.jpg', '/static/weixin.jpg'],
  links,
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true,
    },
  ],
};
