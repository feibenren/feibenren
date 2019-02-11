---
title: css变量
categories:
  - CSS
---

之前在 css 中使用变量，无法实现，只能使用 sass/less 等预编译语言来使用,现在可以直接使用了

# 语法

## 申明

sass 使用$,less 使用@,原生的使用--

```
.hd{
  --color:#f00;
}
```

## 作用域

和 css 层叠规则一致，所以可以被覆盖，也有全局(:root{})和局部作用域

```
:root{
  --global_color:#f00;
}
.hd{
  local_color:#00f;
}
```

## 类型

和 css 中属性值一样

```
.hd{
  --color:#f00;
  --lineHeight:1.5;
  --size:20;
}
```

## 运算

如果是字符串的话,可以直接拼接，算数运算的话，需要使用 calc()

```
.hd{
  --append: 'aaaaa';
  --myappend: var(--append)'xxx';
}
```
如果是数值

```
.hd{
  --size: 20;
  font-size:var(--size)px;//fail,var()函数仅仅是取出数值，不支持连接单位,需要使用calc来连接单位
  font-size:calc(var(--size)*1px);//ok
}
```

## 引用

必须使用`var()`函数来引用变量

```
.hd{
  --color:#f00;
  --height:30;
}
.hd h1{
  color:var(--color);
}
.hd h2{
  color:var(--color,#00f);//var()接收第二个参数，表示默认值
}

.hd h3{
  font-size:var(--size)*2px;//fail,css中不支持直接运算,需要使用calc()来包裹
  font-size:calc(var(--size)*2px);//ok
}
```





# 链接

- [http://www.ruanyifeng.com/blog/2017/05/css-variables.html](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
