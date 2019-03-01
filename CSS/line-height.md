---
title: line-height
categories: 
- CSS
---

# line-box
行框




## 行距

`行框的高度就是行距`，w3c定义则说两条baseline的距离是行距

通过line-height可以设置行距


## baseline

line-height定义就是两条baseline之间的距离

vertical-align默认对齐也是按照baseline进行的
------------------
怎么确定baseline呢？

使用字符`x`来确定



### 默认情况

默认情况下，行距由内部元素的最大的高度进行计算

### 设置行距

使用了`line-height`进行设置的话，那么就会按照这个数据来计算

比如`line-height:1.5`，行高会根据`em-box的高度*1.5`，垂直方向上会按照baseline进行对齐

# line-height:1

line-height数值可以随便设置，但是`line-height:1`这样设置就不合理了

line-height是按照`em-box`来计算的，em-box是小于content-area的，如果设置为1，那么就会出现文字重叠的现象了


# 总结

- line-height的计算是根据font-size的
- 当我们没有设置line-height的时候，一个line-box的默认高度由这行内的最大高度决定。
- 当我们设置了line-height的时候，line-box的高度就是由line-height所设定的。