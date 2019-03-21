---
title: flex
categories: 
- CSS
- LAYOUT
---

# 1-flex布局

flex布局是css3中提出的一种布局方案

之前是没有`布局方案`一说的，只能使用某些功能进行来达到布局的目的

比如浮动，定位，行内布局，块布局，表格布局等

涉及到的属性有

### 1.2-flex container

- dispaly:flex
- flex-direction
- flex-wrap
- flex-flow
- align-items
- justify-content
- align-content

### 1.3-flex item

- flex-basis
- flex-grow
- flex-shrink
- flex
- align-self
- order


# 2-基本概念

#### 2.1-一维布局

flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 CSS Grid Layout，可以同时处理行和列上的布局。


#### 2.1-main axis & cross axis

主轴和交叉轴。

主轴由 flex-direction 定义，另一根轴垂直于它。我们使用 flexbox 的所有属性都跟这两根轴线有关, 所以有必要在一开始首先理解它。


#### 2.2- start line & end line

flex 元素内容排列，会形成一个方向，无论是水平还是垂直，start line表示的方向的开头，end line表示方向的结尾



# dispaly:flex

申明容器元素为一个`flex container`

# flex-direction

定义 `main axis`的方向

- row
- row-reverse
- column
- column-reverse

> 注意:flex-direction命令会受到direction命令和dir属性的影响

# flex-wrap

指定flex item是否允许换行显示

- nowrap
- wrap
- wrap-reverse(和 wrap 的行为一样，但是 cross-start 和 cross-end 互换)

# flex-flow

flex-flow是`flex 流`的设置 是
- flex-direction
- flex-wrap
的组合属性

```
flex-flow:row wrap;
```

# align-items

CSS align-items属性将所有直接子节点上的`align-self`值设置为一个组

也就是说，`align-items`这个属性，仅仅是一个快捷属性，快捷设置所有子元素的`align-self`

同样子元素也可以通过`align-self`命令来覆盖掉`align-items`

- stretch(default) 拉伸子元素高度
- flex-start:按照 cross  start line来对齐
- flex-end:corss end line对齐
- center:居中对齐
- baseline:


# justify-content

设置 main axis 轴的对齐方向

- flex-start:main axis start line一侧对齐
- flex-end
- center:居中对齐
- space-between:每个元素的space 相等,元素紧贴start line和endline
- space-around:每个元素的space也相等,但是和start line/end line保留1/2的space


# align-content

设置 cross axis上多余空间的分配规则

------------

问题是在cross axis上怎么才会产生多余空间呢

flex container如果不设置高度的话，高度默认是由内容高度决定的

这样就不会产生多余空间，所以如果在cross axis上产生空间，需要给flex container设置较大的高度

----------
align-content这个属性还有一个限制，只适用于`multi-line flex containers`

也就是父容器必须设置`flex-wrap: nowrap`

-------------
- normal(default):每行底部留有相等空间
- flex-start:每行都在cross axis start line开始填充，剩余空间会留在end line处
- flex-end:和flex-start相反
- center:每行都在中间填充，start line，end line都留有相等空间
- space-around:每行都留有相等空间，start line 和end line两侧也有空间，是其他空间的1/2
- space-between:每行都留有相等空间，开始和结束没有空间
- space-evenly:每行留有相等空间，开始和结束的空间也相等



# 剩余空间 

flex item有三个命令

- flex-basis
- flex-grow
- flex-shrink

main axis上，flex item填充完成后，可能会有空白，这个空白就是`剩余空间(free space)`,这三个命令可以分配这些空白

分为:

- `positive free space` 表示`flex container`有剩余空间

- `negative free space `表示空间父元素没有剩余空间，已经溢出了，溢出的部分就是`negative free space`


# flex-basis

flex-basis是flex item中最基础的属性，表示的是flex 元素在main axis上的`初始大小`

- length
- auto

flex-basis:length，如果设置一个固定数值，这没什么好说的

-----------------

如果是auto，表示宽度由子元素确定:

- 子元素设置了width,则width就是flex-basis的取值
- 子元素没有设置width，则flex-basis的取值是`width:max-content`


默认值:`flex-basis:auto`;

> max-content:简单说就是最大的内容宽度，也就是所有内容不换行的宽度

[max-content,min-content](https://jsbin.com/lepowig/2/edit?html,css)

# flex-grow

 flex-grow 属性指定了`flex增长值`, 这决定了当`positive free space`分配时，flex子元素相对于flex容器中的其余flex子元素的增长程度.

 默认值`flex-grow:0`

 > 只有positive free space存在的时候，这个属性才有意义，默认是不分配剩余空间的

# flex-shrink

这个属性和flex-grow正好相反，只有存在`negative free space`的时候，这个属性才有意义

默认值`flex-grow:1`

也就是说，默认会等比例缩小

收缩规则

- 1、先按照flex-grow和flex-basis计算出总宽度
- 2、根据flex container计算出negative free space
- 3、根据子元素flex-shrink设置的数值，平均分配应该缩小的空间
- 4、每个子元素都有一个缩小的极限值，就是`min-content`

# flex

flex规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间

是一个复合属性，由

- flex-grow
- flex-shrink
- flex-basis


```
none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

- flex单值
    - 整数，表示设置`flex-grow`
    - 宽度值，表示设置`flex-basis`
- 双值
    - `flex-grow`+有单位(flex-basis)/无单位(flex-shrink)
- 三值
    - flex-grow flex-shrink flex-basis

# align-self

align-self,单独设置flex item的对齐方式

# order

设置`视觉顺序(visual order)`

- 整数值

`初始值:0`,可以设置为一个负数，那么他会在所有元素的前面

# 总结

flex 布局更方便实现布局

------------
- flex布局中有main axis ,cross axis的概念，还有start line 和 end line的概念

- flex布局中还分为 flex container 和 flex item

- flex布局中，还有 free space的概念，分为 positive free space ,negative free space

flex中的css命令和上面的概念有关系

----------------
flex container

- display:flex,申明一个flex布局
- flex-direction:设置main axis
- flex-wrap:是否可以断行
- justify-content:main axis 上，设置flex item的分布方式
- align-items:cross axis 上，设置flex item的分布方式
- align-content:在 cross axis上，分配flex container上的剩余空间
- flex-flow:flex-direction flex-wrap

flex item

- flex-basis:设置 flex item在flex container中的初始大小
- flex-grow:设置flex item分配positive free space
- flex-shrink:设置 flex item 分配negative free spance
- flex:flex-grow flex-shrink flex-basis
- order:设置视觉顺序
- align-self:覆盖flex container 中的 align-items的批量设置

# 响应式布局

利用flex布局的特性，可以实现响应式的布局，而不使用`media query`

[示例代码](https://jsbin.com/tekaboc/1/edit?html,output)

# links
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode)
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)