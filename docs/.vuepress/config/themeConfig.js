// 定制标识牌
const nameplate = require("./nameplate.js");

//静态信息
const locales = require("./locales.js");

// 友链
const links = require("./links.js");

// 页脚
const footer = require("./footer.js");

module.exports = {
	lang: "zh-CN",
	site: "https://blog.yulovexin.xyz",
	logo: "/static/logo.png", // 站点 Logo
	author: "周玉川", // 博主名称
	authorLink: "https://github.com/UESTCzhouyuchuan/", // 博主名称跳转链接
	social: {
		github: "https://github.com/UESTCzhouyuchuan/",
		qq: "tencent://message/?uin=1738733078",
	},
	banner: "/static/banner.png", // 首页封面，固定宽高比例：482x500
	timeline: true, // 开启时间线
	about: true,
	avatar: "/static/sleep_girl.jpg",
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
		cursorChar: "丨", // 指针字符
	},
	post: {},
	search: {
		type: "default",
		size: 10,
	},
	reward: ["/static/zifubao.jpg", "/static/weixin.jpg"],
	links,
	plugins: [
		"@vuepress/pwa",
		{
			serviceWorker: true,
			updatePopup: true,
		},
	],
	"zh-CN": {
		locales,
		navs: [
			{ text: "JavaScript", link: "/javascript/" },
			{ text: "CSS", link: "/css/" },
			{ text: "MarkDown", link: "/markdown/" },
			{ text: "其它", link: "/other/" },
		],
		nameplate,
		buttons: [
			// 首页按钮，type 默认：default，可选：primary dashed danger link
			{ text: "阅读列表", link: "/posts/", type: "primary" },
			{ text: "了解博主", link: "/about.html", type: "default" },
		],
		footer,
	},
	en: {
		locales: {
			title: "Stars so bright",
			description: "Writing life with you",
		},
		navs: [
			{
				text: "One",
				link: "/one/",
			},
			{
				text: "Two",
				link: "/two/",
			},
		],
		nameplate: {
			title: "Yur",
		},
		buttons: [
			{ text: "Read", link: "/posts/", type: "primary" },
			{ text: "About", link: "/about.html", type: "default" },
		],
		footer: {
			// icon: '/20171231/footer.png',
			one: [
				{
					title: "Yur",
					subtitle: "VuePress Theme",
					link: "https://github.com/cnguu/vuepress-theme-yur",
				},
			],
			two: [
				{
					title: "Hosted On GitHub",
					link: "https://github.com/",
					type: "cloud",
					theme: "filled",
				},
			],
			three: [
				{
					title: "Gitter",
					link:
						"https://gitter.im/vuepress-theme/yur?utm_source=share-link&utm_medium=link&utm_campaign=share-link",
					type: "message",
					theme: "outlined",
				},
			],
		},
	},
	// notFound: "/static/NotFound.b5c9b223.jpg", // 404 页面背景图片
};
