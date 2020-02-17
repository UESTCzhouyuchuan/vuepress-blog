---
title: React入门这一篇就够了
meta:
  - name: description
    content: React入门
  - name: keywords
    content: React
created: 2020-02-06
updated: 2020-02-06
tags:
  - React
  - jsx
  - create-react-app
  - ReactDom
  - setState
  - ReactLifeCircle
banner: /20200206/react.svg
---

## 前言

之前技术栈一直是 vue，面字节的时候面试官就没问 vue 的东西，一问才发现，字节前端技术栈是`React` + `TypeScript`。

既然咱是字节的准实习生(本来 2 月 12 号入职，疫情影响推到 3 月 2 号)，就把 React 的基础给学了，改天再学 Typescript。

![../.vuepress/public/20200206/byteDancer.jpg](../.vuepress/public/20200206/byteDancer.jpg)

## React 使用前的准备

对于不是刚刚入门的小白，比如已经学习过 vue，本人推荐使用`create-react-app`搭建本地开发环境，只是可能会遇到 nodejs 和 npm 的一些困扰，今天上午遇到了 npm 无法使用 CLI 升级的问题，日后会分享出来。好了，言归正传。

> 以下操作默认 nodejs 和 npm 以及安装好并且没出现问题。

### create-react-app

`create-react-app`是 react 官方提供的脚手架。

首先使用 npm 安装到全局环境。

```
npm install -g create-react-app
```

使用`create-react-app`创建 react 项目

```
>create-react-app --help
Usage: create-react-app <project-directory> [options]
Options:
  -V, --version                            output the version number
  --verbose                                print additional logs
  --info                                   print environment debug info
  --scripts-version <alternative-package>  use a non-standard version of react-scripts
  --template <path-to-template>            specify a template for the created project
  --use-npm
  --use-pnp
  --typescript                             (this option will be removed in favour of templates in the next major
                                           release of create-react-app)
  -h, --help                               output usage information
    Only <project-directory> is required.
```

### 自己搭建 react+webpack

阅读我的之前的博客<https://blog.yulovexin.xyz/javascript/react-xiang-mu-xue-xiwebpack-pei-zhi.html>

## ReactDom(虚拟 DOM)渲染页面

React 渲染页面两部曲，使用 React.createElement 创建 VDOM,然后通过 ReactDom.render 渲染到页面上。

引入`react`和`react-dom`这两个模块

```
import React from "react";
import ReactDom from "react-dom";
```

### React.createElement

`React.createElement`作用是创建你需要的 DOM。

函数接收三种参数。

- 参数 1,string,Element 的 tag 值，例如`"h1"`
- 参数 2,object,节点的属性值，例如`{className = "wrap"}`
- 参数 3-n,text 类型或者`React.createElement`的返回类型即 element 类型,为节点的子节点

```
React.createElement(
  type,
  [props],
  [...children]
)
```

### ReactDom.render

`ReactDom.render`的作用是把 VDOM 挂载到指定的容器节点下。

函数接收三个参数，第三个是可选的。

- 参数 1：element 类型，一般是`React.createElement`的返回类型，要挂载的 DOM。
- 参数 2：container 容器，页面的 DOM 元素，一般是通过`document.getElementById`或者其他选择器获得的 DOM 元素。
- 参数 3：可选的回调函数。

```
ReactDOM.render(element, container[, callback])
```

## JSX 语法

JSX 是`javascript xml`的简写，意味 JavaScript 的超集，其作用就是在 js 中使用 html 的标签语法。

例如。

```
const ele2 = <h2>这是jsx语法的H2</h2>;
```

js 不能直接解析这种语法，需要通过 react 的预解析器解析后，把上面的语法转化成 js 能识别的。
意思就是把标签语法翻译成`React.createElement`语法。

翻译后：

```
const ele2 = React.createElement("h2", null, "这是jsx语法的H2");

```

### jsx 的注意事项

html 的默写关键字和 js 的关键字重复照成的，有`class、for`

所以，在 jsx 中：

- for 写为 htmlFor
- class 写为 className

## 组件。

组件在 react 中是比较核心的概念，组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。

组件有两种创建方式，分别是函数式和 Class 式。

### 函数式组件

三点：

- 函数接收参数 props，返回 element 元素可以为`null`。
- 使用时直接把函数名作为标签,参数作为属性。
- 注意点：组件函数名第一个字母必须大写，props 对象默认只读，不可修改。

**注**：无论`Vue`还是`React`，组件的 props 是只读的。
示例：

```
// 创建
function FunctionComponent(props) {
	return (
		<div>
			<h2>name: {props.name}</h2>
			<h3>gender: {props.gender}</h3>
		</div>
	);
}
// 使用
let me = { name: "周玉川", gender: "男" };
<FunctionComponent name={me.name} gender={me.gender}></FunctionComponent>
// <FunctionComponent {...me}></FunctionComponent>
```

**Tip**： 父组件可以使用对象的展开运算符`{...obj}`简化组件的属性值的书写

### class 组件

有以下几点：

- 继承 extends React.Component
- render 函数返回的视图
- 通过`this.props`获得传入的参数属性
- 使用时和函数组件相同

```
import React from "react";

export default class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>这里是ClassComponent</h2>
				<h3>name: {this.props.name}</h3>
				<h3>gender: {this.props.gender}</h3>
			</div>
		);
	}
}
```

## state & 生命周期

<https://zh-hans.reactjs.org/docs/state-and-lifecycle.html>

下面是一个闹钟组件。

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // 初始化state
  }

  componentDidMount() { // 生命周期函数mount挂载后运行
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // 组件接挂后前
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

### state

`state`是组件的状态，`setState`更新的就是依赖 state 的视图。

state 注意点：

- 不能通过直接改变 state 更新视图，必须通过 setState
- state 的更新可能是异步的，多个 setState 可能会合并一个 setState 更新，所以你不要依赖他们的值来更新下一个状态。

  例如，此代码可能会无法更新计数器：

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的
props 做为第二个参数：

```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### 生命周期

`componentDidMount()`组件成功挂载后运行。

```
componentDidMount() {

}
```

`componentWillUnmount()`组件被清除前使用。

```
componentWillUnmount() {

}
```

## 事件。

- react 采用驼峰式而不是全小写,`onclick`->`onClick`
- react 的事件是函数变量而不是字符串。

```
// 传统HTML
<button onclick="event()">button</button>
// jsx
<button onClick={this.event}>button</button>
```

- react 中不能同时返回 false 组织默认行为，需要显式得`preventDefault()`

```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

- class 组件中绑定事件的 this 需要格外注意
  javascript 的 class 的方法默认不绑定 this,当直接把函数的引用传递给事件时,函数中的 this 是 undefined。

  这时，解决办法有如下几个：

  1. 通过 bind 给函数绑定 this,然后直接使用函数名。
  2. 如果没有使用 class fields 语法，可以给事件传递箭头函数，在箭头函数中执行函数。
  3. 使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数：

```
// 为了在回调中使用 `this`，这个绑定是必不可少的
this.handleClick = this.handleClick.bind(this);
// 箭头函数
<button onClick={e => this.handleClick(e)}>Button</button>
// class fields
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }
}
```

- 事件传参

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染

- 使用 if

```
if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
} else {
    button = <LoginButton onClick={this.handleLoginClick} />;
}
```

- 先行运算符

```
{unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
}
```

- 三目运算符

```
<div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
</div>
```

## 列表 & key

和 vue 的 v-for 不同，react 的列表需要使用 map 人为处理为一个 item 数组，然后再放到一个父容器中。

```
// 通过map处理为一个item数组
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
);
// item数组放到父容器中
return(
    <ul>{listItems}</ul>
);
```

列表 item 的 key 是作为唯一标识，在 VDOM 的更新 diff 算法中起重要作用，所以 key 值尽量存在，否则会 warning。所以 key 值在兄弟节点之间必须唯一。
