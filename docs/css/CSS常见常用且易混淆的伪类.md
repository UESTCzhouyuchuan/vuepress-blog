---
title: CSS常见常用且易混淆的伪类
banner: /20200209/many_lovely.jpg
meta:
  - name: description
    content: 研究CSS常见常用且易混淆的伪类
  - name: keywords
    content: CSS,伪类，伪元素
created: 2020-02-09
updated: 2020-02-09
tags:
  - CSS
  - 伪类
  - 伪元素
---

## 前言

MDN 官方文档地址:
<https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes>

在学习 CSS 动画以及奇技淫巧时，发现 CSS 伪类有些摸棱两可的认知，今天就去好好用自己的话总结一下。

## first-child

举例

```
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

表达的含义是当`p`元素是其父元素的第一个元素时，使用该样式。

## first-of-type

表示一组兄弟元素中其类型的第一个元素。
举例

```
p:first-of-type {
  color: red;
  font-style: italic;
}
```

表达的含义是其兄弟元素的第一个`p`元素。
##last-child
和`first-child`类似，只是表示最后一个。

## last-of-type

和`last-of-type`类似，只是表示最后一个元素。

## nth-child(a\*n+b)

`:nth-child(an+b)` 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从 1 开始排序，如果选择的元素在`a*n+b`位置上，则应用样式。否则不用。
常见应用：

```
tr:nth-child(2n+1)
  表示HTML表格中的奇数行。
tr:nth-child(odd)
  表示HTML表格中的奇数行。
tr:nth-child(2n)
  表示HTML表格中的偶数行。
tr:nth-child(even)
  表示HTML表格中的偶数行。
span:nth-child(0n+1)
  表示子元素中第一个且为span的元素，与 :first-child 选择器作用相同。
span:nth-child(1)
  表示父元素中子元素为第一的并且名字为span的标签被选中
span:nth-child(-n+3)
  匹配前三个子元素中的span元素。
```

## nth-last-child

和`nth-child`类似，只是从尾部开始计数。

## nth-of-type

和`nth-child`类似，只是`nth-of-type`只会排序相同类型的元素，再找符合格式的位置应用样式。

## nth-last-of-type

和`nth-of-type`类似，只是从尾部开始排列。

## only-child

`:only-child` 匹配没有任何兄弟元素的元素，等效的选择器还可以写成 `:first-child:last-child`或者:`nth-child(1):nth-last-child(1)`,当然,前者的权重会低一点。

## only-of-type

匹配当前兄弟没有相同类型的元素。

## 总结一下

- 带`child`的伪类会考虑当前元素所有兄弟节点。
- 带`of-ype`的伪类只会考虑相同类型的兄弟节点。
