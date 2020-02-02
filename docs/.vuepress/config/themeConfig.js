/**
 * 获得自我介绍
 */
const about = require("./about.js");
/**
 * 定制标识牌
 */
const nameplate = require("./nameplate.js");
module.exports = {
	site: "https://myhoney.club", // 站点地址
	logo: "/20200201/logo.png", // 站点 Logo
	banner: "/20200201/banner.png", // 首页封面，固定宽高比例：482x500
	author: "周玉川", // 博主名称
	authorLink: "https://github.com/UESTCzhouyuchuan/", // 博主名称跳转链接
	timeline: true,
	password: "yulovexin", //默认密码
	about,
	nameplate,
	bannerButtons: [
		// 首页按钮，type 默认：default，可选：primary dashed danger link
		{ text: "阅读博文", link: "/posts/?page=1&pageSize=12", type: "primary" },
		{ text: "了解博主", link: "/about", type: "default" },
	],
	notFound: "/20200201/NotFound.b5c9b223.jpg", // 404 页面背景图片
	nav: [
		{ text: "JavaScript", link: "/JavaScript/" },
		{ text: "CSS", link: "/css/" },
		{ text: "其它", link: "/other/" },
	],
	/**
	 * 首页打字特效
	 */
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
	// 乐动标签云
	piano: false,
	/**
	 * 设置友链
	 */
	link: {
		banner: "/20200201/summer-solstice-strawberry-moon.gif", // 封面图
		blog: [
			{
				title: "凉风有信", // 站点名称
				subtitle: "责难无以成事", // 站点描述
				link: "https://gleehub.com/", // 站点网址
				logo: "https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png", // 头像或者 Logo
				color: "#39c5bb", // 主题色
			},
			{
				title: "阿业战记",
				subtitle: "提升码农亩产，掰直码农方向",
				link: "https://eeee.im/",
				logo: "https://eeee.im/avatar.jpg",
				color: "#3c67bd",
			},
		],
	},
	/**
	 * 设置页脚
	 */
	footer: [
		[
			// 推荐资源
			{
				title: "Yur Tool", // 标题
				subtitle: "VuePress Yur 脚手架", // 描述
				link: "https://github.com/ioim/vuepress-theme-yur-cli", // 跳转链接
			},
		],
		[
			// 相关信息
			{
				title: "Github", // 标题
				link: "https://github.com/UESTCzhouyuchaun/", // 跳转链接
				type: "github", // 图标，这里获取：https://vue.ant.design/components/icon-cn/
				theme: "twoTone", // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
			},
			{
				// 根据示例，继续添加
			},
		],
		[
			// 其它
			{
				title: "uestczhouyuchuan@163.com", // 标题
				link: "mailto:uestczhouyuchuan@163.com", // 跳转链接
				type: "mail", // 图标，这里获取：https://vue.ant.design/components/icon-cn/
				theme: "outlined", // 图标类型，可选：filled（实心）丨outlined（默认：描线）丨twoTone（双色）
			},
			{
				// 根据示例，继续添加
			},
		],
	],
};
