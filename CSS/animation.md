---
title: animation
categories: 
- CSS
---



# transition的区别

transition的优点在于简单易用，但是它有几个很大的局限。
- transition需要事件触发，所以没法在网页加载时自动发生。
- transition是一次性的，不能重复发生，除非一再触发。
- transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
- 一条transition规则，只能定义一个属性的变化，不能涉及多个属性。


# animation
animation属性是简写属性，是7个属性的集合

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode

-----------------------
以下这四个属性和transition规则一样，不多说

- animation-name
- animation-duration
- animation-timing-function
- animation-delay


------------
以下三个属性是animation特有的
- animation-iteration-count
- animation-direction
- animation-fill-mode

## animation-name

设置动画名称，这个名称是@keyframes来设置的，取名不要和属性的关键词重名

## @keyframes
@keyframes用来定义动画的关键帧的,格式可以

```
@keyframes animation-name{
    0%{}
    50%{}
    100%{}
}
```
关键词
- from(0%)
- to(100%)

## animation-duration
动画持续时间

## animation-timing-function
动画函数

## animation-delay
动画延迟

## animation-iteration-count

动画迭代次数

默认是1

关键词

- infinite

## animation-direction

动画执行方向
- normal
- alternate
- reverse
- alternate-reverse

#### normal
动画执行的方式默认是`0%->100%,0%-100%,0%-100%,0%-100%,.....`

也就是每次动画都是从头开始

#### alternate
动画执行的方式默认是`0%->100%,100%-0%,0%->100%,100%-0%.....`

这种方式`最常用`,也就是`交替执行动画`

#### reverse
动画执行的方式默认是`100%->0%,100%-0%,100%-0%,100%-0%,.....`

和normal正好相反，每次都是从末尾开始

#### alternate-reverse

动画执行的方式默认是`100%->0%,0%-100%,100%-0%,0%-100%,.....`


alternate-reverse和alternate是相反的，alternate第一次是正向的，而alerternate的头一次是反着的

示例代码[https://jsbin.com/ruzupun/edit?html,css,output](https://jsbin.com/ruzupun/edit?html,css,output)

## animation-fill-mode

> The animation-fill-mode property defines what values are applied by the animation outside the time it is executing.

也就是说，`不在动画运动`的这段时间，元素会怎么应用css样式

- none
- forwards
- backwards
- both

### forwards

animation-fill-mode:forwards这个属性，表示的是，动画运动完成后，100%中的css命令，会被应用到元素上

这就相当于动画结束完成后，给元素`自动添加了css属性`，`保持最后一帧的样式`

这种情况最最常见

### backwards

backwards表示的是`动画延迟`这段时间，元素会被应用到`第一帧的样式`

backwards设置`生效的前提`是设置动画延迟

但是和forwards不同，backwards只有在delay的那段时间才有效，动画结束后，backfords设置的属性会被清除
### both

both就是backwards和forwards都会被应用到

### none

none就是运动动画的样式不会影响元素，动画开始和动画结束，都不会影响元素的属性



示例代码[https://jsbin.com/qowoqod/edit?html,css,output](https://jsbin.com/qowoqod/edit?html,css,output)