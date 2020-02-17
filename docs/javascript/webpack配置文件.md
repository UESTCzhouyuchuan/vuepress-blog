---
title: webpack的配置文件webpack.config.js

meta:
  - name: description
    content: 研究webpack的配置
  - name: keywords
    content: webpack.config.js,webpack

created: 2020-02-05
updated: 2020-02-05
banner: /20200205/webpack.svg
tags:
  - webpack.config.js
  - webpack
---

## 前言

昨天写了通过 react 项目配置 webpack，发现 webpack 的配置文件需要单独拿出来学一学。

![https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600](https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600)
**官方文档地址**：<https://www.webpackjs.com/configuration/>

## 选项

以下列举常用的`webpack.config.js`选项

```
const path = require('path');

module.exports = {
  mode: "production", // 模式，"production" | "development" | "none"
  entry: "./src/index.js", // 入口文件，可以是多个，当前值为默认值，string | object | array
  output: {
    path: path.resolve(__dirname, "dist"), // string,所有输出文件的目标的绝对路径
    filename: "bundle.js", // string,出口分块
    publicPath: "/assets/", // string，输出解析文件的目录
  },
  module: { // 关于模块配置
    rules: [ // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.jsx|js?$/, // 文件名正则
        exclude: [ // 排除项
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader", // 使用的模块
      },
    ],
  },
  resolve: { //解析模块请求的选项
    extensions: [".js", ".json", ".jsx", ".css"],// 使用的扩展名
    alias:{ //别名
      "@": path.join(__dirname, "./src"), // 源代码根目录别名
    }
  },
  plugins: [],
  devServer: { // 开发过程中
    proxy: { // 代理
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite: {
          "^api": "api",// 这是默认值即http://localhost:3000/api
        }
      }
    },
  },
  watch: false, // 监听文件改变
}

```

## mode

当前模式，可选择为模式，`"production" | "development" | "none"`，代表生产模式，开发模式，无模式。

```
mode: "production", // enable many optimizations for production builds
mode: "development", // enabled useful tools for development
mode: "none", // no defaults
```

**注**：mode 值是必填项

## entry and content

<https://www.webpackjs.com/configuration/entry-context/>

### entry

项目入口文件，可以是多个文件。如果传递一个数组，那么数组的每一项都会执行。

```
entry: "./src/index.js",// SPA单页面
entry: {
  home: "./home.js",
  about: "./about.js",
  contact: "./contact.js"
}
```

**注**：默认值为`./src/index.js`

### content

全局上下文，即项目源码的基础目录。

```
module.exports = {
  context: path.resolve(__dirname, 'src')
};
```

## output

出口文件。

<https://www.webpackjs.com/configuration/output/>

## module 模块

<https://www.webpackjs.com/configuration/module/>

规定使用何种 loader 处理满足条件的文件。

### Rules

基本结构

```
rules:[
  {
    resource: {
      test:,
      include:,
      exclude:,
      and:[],
      or:[],
      not:[]
    },
    test:,
    include:,
    exclude:,
    loader:,
    use:,
  },
]
```

规则数组。

### Rule.resource

{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

{ include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

{ exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

{ and: [Condition] }：必须匹配数组中的所有条件

{ or: [Condition] }：匹配数组中任何一个条件

{ not: [Condition] }：必须排除这个条件

condition 可以是这些之一：

- 字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
- 正则表达式：test 输入值。
- 函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
- 条件数组：至少一个匹配条件。
- 对象：匹配所有属性。每个属性都有一个定义行为。

### Rule.test

Rule.test 是 Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。

### Rule.include

Rule.include 是 Rule.resource.include 的简写。如果你提供了 Rule.include 选项，就不能再提供 Rule.resource。

### Rule.exclude

Rule.exclude 是 Rule.resource.exclude 的简写。如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。

### Rule.use

应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。

传递字符串（如：use: [ "style-loader" ]）是 loader 属性的简写方式（如：use: [ { loader: "style-loader "} ]）。

loader 可以是多个，webpack 会从右向左即从最后一个到第一个应用这些 loader。

```
use: [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'less-loader',
    options: {
      noIeCompat: true
    }
  }
]
```

### Rule.loader

Rule.loader 是 Rule.use: [ { loader } ] 的简写。

## resolve

<https://www.webpackjs.com/configuration/resolve/>
这些选项能设置模块如何被解析。

目录结构。

```
resolve: {
  alias: {},
  extensions: []
}
```

### resolve.alias

创建 import 或 require 的别名，来确保模块引入变得更简单。

```
alias: {
  Utilities: path.resolve(__dirname, 'src/utilities/'),
  zyz$: path.resolve(__dirname, 'path/to/file.js')
}
```

使用精准解析，在字符串后面添加`$`表示精准解析，不解析其子目录。

```
import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入
import Test2 from 'xyz/file.js'; // 非精确匹配，触发普通解析
```

### resolve.extensions

自动解析确定的扩展。默认值为：

```
extensions: [".js", ".json"]
```

可以在引入文件时不带扩展名。

```
import File from '../path/to/file'
```

### resolve.plugins

额外的解析插件列表。它允许插件，如 `DirectoryNamedWebpackPlugin`。

```
plugins: [
  new DirectoryNamedWebpackPlugin()
]
```

## plugins

<https://www.webpackjs.com/configuration/plugins/>

webpack 插件列表。

```
const htmlWebpackPlugin = require("html-webpack-plugin");
// 新建插件实例
const htmlPlugin = new htmlWebpackPlugin({
	template: path.join(__dirname, "./src/index.html"), // 目标文件
	filename: "index.html", //生成的文件
});
module.exports = {
  plugins: [htmlPlugin],
}
```

## devServer

<https://www.webpackjs.com/configuration/dev-server/>

通过来自 webpack-dev-server 的这些选项，能够用多种方式改变其行为。

### devServer.compress

一切服务都启用 gzip 压缩：

```
compress: true
或者CLI
webpack-dev-server --compress
```

### devServer.https

默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务。

也可以使用命令。

```
webpack-dev-server --https --key /path/to/server.key --cert /path/to/server.crt --cacert /path/to/ca.pem
```

### devServer.port

指定要监听请求的端口号：

```
port: 8080
webpack-dev-server --port 8080
```

### devServer.proxy

用于跨域 API 接口。

代理简写。请求到 /api/users 现在会被代理到请求`http://localhost:3000/api/users`上。

```
proxy: {
  "/api": "http://localhost:3000"
}

```

也可以重写 api。

```
proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  }
}
```

也可以使用`https`。

```
roxy: {
  "/api": {
    secure: true
  }
}
```

### devServer.host

指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：

```
host: "0.0.0.0"
webpack-dev-server --host 0.0.0.0
```

## watch 和 watchOptions

watch 是打开文件监听模式。

> webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。

### watchOptions.aggregateTimeout

当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：

```
aggregateTimeout: 300 // 默认值
```

### watchOptions.ignored

排除监听文件的正则表达式

```
ignored: /node_modules/
```

### watchOptions.poll

通过传递 true 开启 polling，或者指定毫秒为单位进行轮询检查文件变动。

```
poll: 1000 // 每秒检查一次变动
```
