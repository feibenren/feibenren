---
title: text-overflow
categories: 
- CSS
---

# text-overflow

css中的text-overflow属性，是`针对block 元素`来设置文本溢出的处理方式的

常见的就两种属性

- clip:直接裁剪掉
- ellipsis:末尾使用省略号

但是这有个前提，就是得文字溢出


# 什么情况会溢出？

就两点

`宽度限定+不换行`

宽度限定好理解


不换行就比较蛮烦

### 不换行

针对中文，默认是都会换行的，如果想要不换行，需要特别设定

如果是英文，默认也是会换行的，但是英文中的单词如果换行，阅读起来可能比较麻烦，所以`单词默认是不换行展示的`(但是可以通过word-break来设定)

这就可能导致溢出

综上:

如果想要不换行，可以通过`white-space:nowrap`来设置


```
.box{
    display:block;//得是块状元素
    width:200px;//设定宽度，不设置也可以，但是不一定符合自己的要求
    white-space:nowrap;//确保所有文本都不换行
    text-overflow:ellipsis;//省略号展示
    ////////////////额外属性
    overflow:hidden;
}
```

