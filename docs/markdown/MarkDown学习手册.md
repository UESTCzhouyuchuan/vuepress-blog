---
title: MarkDown学习手册

copyright: 禁止转载 不允许转载

meta:
  - name: description

    content: 这是一篇markdown学习手册

  - name: keywords

    content: markdown

created: 2020-02-03

updated: 2020-02-03

tags:
  - MarkDown

banner: /20200203/ginkgoLeaf.png
---

# 简介

MarkDown 是一种轻量级的`标记语言`，兼容<code>HTML</code>，

> We believe that writing is about content, about what you want to say – not about fancy formatting.

我们坚信写作写的是内容，所思所想，而不是花样格式。

# MarkDown 基础语法

## 1.内联元素

### 1.1 链接

#### 1.1.1 内联链接 inline-link

使用格式：[link text](url 可选的 title)

例如：`[example](http://example.com "example")`

#### 1.1.2 引用链接

分为定义与使用

定义时格式：`[link-id](url link-title)`

```
[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)
```

**注意**: Markdown.pl 1.0.1 有一个已知的问题就是不能用单引号来包围链接标题.

使用时格式：`[link-text][link-id]`

*默认链接*当链接 id 为空时，默认等于 link-text 值

以下引用链接的使用是等价的

```
[Google][]
[Google][Google]
```

注：链接也可以使用`<>`符号，例如：`<https://www.baidu.com>`

### 1.2 图片

图片与链接类似，也分为行内以及引用，图片与链接相比前面多路个符号`!`

行内式语法：

```
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")
```

引用式语法：可以参考引用式链接

```
![Alt text][id]
[id]: url/to/image  "Optional title attribute"
```

### 1.3**强调**与*斜体*

使用一个`*或者_`包含的是**粗体**，`**或者__`包含的是*斜体*

注：等价于`<strong>和<em>`

### 1.4 代码

符号`` ` ``会将&和尖括号以及自身转化为 HTML 实体

在一对` `` `中可以使用`` ` ``符

一对 ` ``` `可以表示多行代码块

## 2 块级元素

### 2.1 标题

类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题），例如：

```
This is an H1
=============

This is an H2
-------------
```

类 Atx 形式格式为符号`#` 空格 标题名

- #一级标题
- ##二级标题
- ###三级标题
- ###四级标题
- 等等...

注意：<strong>最多有 6 个标题</strong>

### 2.2 列表

1. #### 无序列表

   使用符号`*`或者`-`或者`+`

2. #### 有序列表

   直接在前面加上数字以及符号点`.`,例如: `1.`, `2.`

   数字只是代表是有序列表并不能决定序号

### 2.3 块引用

在文本前使用符号`>`即可。

#### 2.3.1 区块引用可以嵌套

> 引用
>
> > 嵌套的引用

#### 2.3.2 区块引用可以使用其他 markdown 语法

> ## 使用标题
>
> 1. 有序 1
> 2. 有序 2

### 2.4 水平线

如果一行中只有三个以上的连字符, 星号, 或者下划线则会在该位置生成一个 `<hr />` 标签. 星号和连字符之间的空格也是允许的. 下面的例子都会生成一条水平线:

```
* * *
***
*****
- - -
---------------------------------------
```

例如：

---

注：等价于`<hr>`

### 2.5 代码区块

和程序相关的写作或是标签语言原始码通常会有已经排版好的代码区块，通常这些区块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 `<pre>` 和 `<code>` 标签来把代码区块包起来。

缩进 4 个空格或是 1 个制表符就可以

```
这是一个普通段落：
    这是一个代码区块。
```

Markdown 会转换成：

```
<p>这是一个普通段落：</p>
<pre><code>这是一个代码区块。
</code></pre>
```

## 3 其他

### 3.1 换行

markdown 中空的一行可以实现强制换行，或者使用`<br>`

### 3.2 特殊符号

<table>
<tr><th>符号</th><th>字符</th></tr>
<tr><td>空格</td><td>&amp;nbsp;</td></tr>
<tr><td>大于号</td><td>&amp;gt;</td></tr>
<tr><td>小于号</td><td>&amp;lt;</td></tr>
<tr><td>&符</td><td>&amp;amp;</td></tr>
</table>

### 3.3 转义字符

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

```
\   反斜线
`   反引号
*   星号
_   底线
{}  花括号
[]  方括号
()  括弧
#   井字号
+   加号
-   减号
.   英文句点
!   惊叹号
```

### 3.4 自动链接

Markdown 支持以简短的链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来。

例如：

```
<http://example.com/>

<address@example.com>
```

Markdown 会转为：

```
<a href="http://example.com/">http://example.com/</a>

<a href="mailto:addre
ss@example.co
m">address@exa
mple.com</a>
```
