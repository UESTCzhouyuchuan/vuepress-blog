---
title: JavaScript代码规范
meta:
  - name: description
    content: JavaScript代码规范
  - name: keywords
    content: 代码规范
created: 2020-03-13
updated: 2020-03-13
tags:
  - JavaScript
  - 代码规范
banner: /20200313/girl.jpg
---

## 代码基础规范

### 文件使用无 BOM 的 UTF-8 编码

BOM ByteOrderMark 通常出现在 windows 中，mac 中无。

### 使用 space 代替 tab

tab 在各个平台表现不一致，使用空格代替。

### 几个空格

使用两个空格作为缩进，而不是 4 个

### 列宽

最大列宽控制在 120

### 文件名使用小写，避免大写

多个单词使用-或者\_分开，一般使用中划线。 文件名在 window 和 mac 不缺分大小写，但 linux 区分。

### 文件尾新增一个空行。

对 git diff 更加友好。同时更好兼容各类 \*nix 文本处理工具，详情参考

### 不允许在行尾增加空白字符。

对 git diff 更加友好。

## 代码规范

### 1.空格与缩写

- 1.1 一元运算符不能有空格，二元运算符前后必须有一个空格。
- 1.2 起始花括号前必须有一个空格
- 1.3 关键字 `if,else,switch,for,while,do,try,catch,finally,function` 后必须有空格
- 1.4 对象中的:，前不能有空格，后必须有空格
- 1.5 函数声明，函数表达式，函数声明中函数名和()之间无空格。
- 1.6`,;`前无空格，后有空格
- 1.7 在函数声明，函数表达式，函数调用，单行数组声明，属性访问以及`if,for,while,switch`中，()和[]内不允许有空格。
- 1.8generator 的\*前无空格，后有空格。
- 1.9 单行对象大括号内左右两侧有空格

### 2.换行

- 2.1 独立语句必须换行
- 2.2 运算符处换行，必须在运算符后换行，也就是运算符在上一行的行尾
- 2.3 在函数声明，函数表达式，函数调用，数组对象声明时，不允许在`,;`前换行
- 2.3 结构多个变量或者声明数组或者对象时，如果变量超过三个或者单行超过 120，必须为每个变量换行.
- 2.4else 不允许换行

### 3 命名

- 3.1 变量，函数，函数的参数使用 Camel 驼峰命名法。
- 3.2 类使用 Pascal 命名
- 3.3 类的方法使用驼峰命名
- 3.4 枚举变量使用 Camel 命名，枚举属性使用全部大写以下划线分割。

### 4 分号

- 4.1 语句结束必须有分号，类的成员属性之后有分号
- 4.2 函数声明，类声明之后无分号，类的方法属性无分号
- 4.3

### 5 括号

- 5.1 if，else，switch，for，while 语句一定要加括号
- 5.2 箭头函数单参数省略括号，箭头函数返回对象用括号包裹

### 6 变量

- 6.1 强制使用`let/const`
- 6.2 变量使用前必须先声明，建议即用即声明
- 6.3 声明并赋值时一次只能声明一个变量，声明不赋值时可以声明多个变量。禁止赋值 undefined，禁止多值赋值。

### 7 条件

- 7.1 使用严格等于===
- 7.2 当判断等于 null 或者 undefined 时，可以使用`== null`
- 7.2 对于 switch 语句，一个 case 要么通过 break，throw，return 语句结束，要么通过注释进入下一个 case，一定要有 default

### 8 循环

- 8.1 在循环体内不声明函数，提取到循环外声明
- 8.2 在循环体内多次使用循环外的变量，在循环体外用缓存代替
- 8.3 遍历有序集合（数组）时，缓存其 length

### 9 类型

- 9.1 类型检测，优先使用 typeof，对象检测使用 instanceof
- 9.2 转为 string 时，使用 String；转为 number 使用 Number，如果必须使用 parseInt 方法，第二个参数不能省略；转为 boolean，使用 Boolean；
- 9.3 小数转整数，使用 Math .ceil/floor/round，不要使用 parseInt。小于 1 的小数不要省略整数位 0，等于整数的小数不要省略小数位 0

### 10 字符串

- 10.1 字符串使用单引号，如果字符中存在单引号或者单行字符串的拼接使用模版字符串
- 10.2 禁止使用\进行多行连续拼接，使用+代替
- 10.3 使用变量拼接字符串时，不要使用两层以上的函数调用，使用变量存储函数返回结果。

### 11 对象

- 11.1 使用{}初始化对象。
- 11.2 对象的属性名能不加引号就不加，除非存在如-这种特殊符号必须要使用引号，所有属性包括最后一个属性后面加 `,`逗号，单行对象不用加。
- 11.3 访问对象的属性采用.的方式，除非属性名存在特殊字符，不得不用[expr]的方式。
- 11.4 定义对象时，能缩写（属性名和变量同名）的一定缩写，而且放到前面，不能缩写的放到后面
- 11.5 遍历对象使用 Object.keys/entries 函数，避免 in 遍历继承的属性
- 11.6 定义计算属性时应当在定义对象时完成，不建议后面添加
- 11.7 不能破坏对象的原型对象，例如添加方法。不要在一个对象变量上直接调用 Object.prototype 方法，使用 Object.prototype.func.call 代替。
- 11.7 对象浅拷贝时使用展开运算符...

### 12 数组和集合

- 12.1 使用[]初始化数组，浅拷贝使用...，数组清空使用.length = 0，多行数组最后一行加上逗号，但行不用加逗号。
- 12.2 数组排序不轻易使用自定义排序，数组的遍历尽量使用 map，reduce，foreach 代替 for in，for of

### 13 函数

- 13.1 函数的长度不超过 50 行，变量不超过六个，变量过多使用对象封装。
- 13.2 避免修改外部传递的参数
- 13.3 使用默认参数比条件判断赋值为默认值要好，使用...args 不定参数，而不是 argusments 对象。
- 13.4 箭头函数内无法绑定 this，对于使用 call，apply 调用的函数不要使用箭头函数。

### 14 ES Module

- 14.1 export default 最好与内容放在一起。import 语句写在文件开始出，动态组件除外。

### 15 动态特性

- 15.1 禁止使用 with
- 15.2 禁止 throw 一个字面量或者不是 Error 类型的表达式，禁止在 catch 块中什么也不做，如果有这种情况需要注释。
-

## 注释

代码整洁之道之注释 <https://www.jianshu.com/p/b4a41ee35fb6>
