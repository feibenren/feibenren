---
title: text
categories: 
- CSS
---

# 文字装饰

关于文字装饰，有这么几个等级
block->line->text->word->letter



### text

- text-decoration
- text-align
- text-indent
- text-emphasis
- text-shadow
- text-overflow

- white-space


### word
- word-spacing
- word-break

### letter 

- letter-spacing

# text-decoration

`文本装饰`，比如a链接就自带这个样式

这个属性是由三个属性组合而成的

- text-decoration-style:
  - none
  - underline:下划线
  - overline:顶划线
  - line-through:中划线
- text-decoration-color:
- text-decoration-line:
    - solid:实线
    - double:双实线
    - dotted:点线
    - dashed:长虚线
    - wavy:波浪线

初始值

- text-decoration-color: currentcolor
- text-decoration-style: solid
- text-decoration-line: none

# text-indent

首行空格

规定行首应该有多少`水平空格`

一般设定是`text-index:2rem`


# text-align
这个属性是给`block containers`设定的，给行内元素没有意义

规定块元素内的行内元素应该怎么水平对齐

- left/right/center
- justify:文字向两侧对齐，对最后一行无效。
- justify-all:和justify一致，但是强制使最后一行两端对齐。

### text-align:justify
英文单字，由于word不分开，或者字母宽度不一致，会到这这样一个问题

每个line box的`自由空隙`长度是不一定的

默认是从左到右排列的，所以空隙都在最右边

justify做的就是对齐的方式是从两边开始，和`flex布局`类似

由于最后一行一般是不满的，按照常理，是不能对齐的


### text-emphasis

The text-emphasis CSS property applies emphasis(强调) marks to text

表现就是会在文本的上面/下面添加强调符号，比如常见的三角，很少使用

### text-rendering

告诉浏览器如何渲染文字，会从速度，精度等之间进行权衡

很少使用

### text-shadow

### text-overflow














# letter-spacing
字母间距

和这个相关的还有一个`word spacing`




# links
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Text_Decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Text_Decoration)