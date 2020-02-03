/** @format */
/**
 * 主题配置
 */
const themeConfig = require("./config/themeConfig.js");
/**
 * 头部配置
 */
const head = require("./config/head.js");
module.exports = {
	base: "/",
	dest: "dist",
	title: "玉川鑫鑫", // 网站名称以及首页大字
	description: "爱学习，爱代码，爱鑫鑫", // 首页简介
	theme: "yur",
	piano: true, //默认弹奏乐谱：小星星
	locales: {
		"/": {
			lang: "zh-CN", // 只支持中文
		},
	},
	markdown: {
		lineNumbers: true, // 开启行号（关闭无呼吸灯特效）
		anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "#" },
		toc: { includeLevel: [2, 3] }, // 指定 [[toc]]
	},
	head,
	themeConfig,
};
