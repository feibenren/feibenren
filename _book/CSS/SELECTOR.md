---
title: SELECTOR
categories: 
- CSS
---

# 选择符
选择符:选择特定元素的表达式,特定元素包括实体元素和伪元素/伪类

### 伪类和伪元素

css引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分

- 伪类:实体元素的 **某个时刻的状态**，比如`a:hover`,是状态
- 伪元素:不存在于文档中的元素,比如`a::before`,是元素

选择符分为很多种，归类如下:

## 元素
- `*`:
- `E`:
- `E#id`:
- `#.classname`:
## 关系
- `A B`:子代选择器
- `A>B`:直系子选择符
- `A+B`:相邻选择符(相邻+后一个)
- `A~B`:兄弟选择符(后一片)
等
## 属性
- `E[attr]`:
- `E[attr='val']`:
等

## 伪类
- `E:hover`
等

## 伪元素
- `E::before`:
等

# 取值与单位

- 取值:在css中可以单独使用的值
- 单位:取值的单位

## 单位
##### 长度
- px:
- %:
- rem:
- vw:
等

##### 角度
- deg
##### 时间
- s
##### 布局
- fr
##### 数字

## 取值
##### 颜色
- rgb()
- rgba()
- hex(十六进制)
- transparent


# 规则(rules)
这里的规则可以片面的理解为语法

- 选择符优先级
  - 后面覆盖前面
  - E:1,classname:10,id:1000
  - !important:设置为最高
- @media:设置媒体查询
- @keyframes:设置动画

等

# 属性

css中的重点是css中的属性名和属性值，主要分类为:

### 基础
- 定位
- 布局
- 尺寸
- 媒体查询
- 颜色

### 外观
- 文本
- 表格
- 列表
- 边框
- 背景

### 效果
- 动画
- 变换
- 过渡





# 链接

- [http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)
- [http://www.css88.com/book/css/rules](http://www.css88.com/book/css/rules)