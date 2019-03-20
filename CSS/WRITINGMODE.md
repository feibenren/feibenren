---
title: WRITING MODE
categories: 
- CSS
- LAYOUT
---

# writing mode

`CSS writing Modes`是css的一个模块，这个模块定义了多种国际的`书写模式`

涉及到的属性有

- writing-mode
- direction
- unicode-bidi
- text-orientation


# writing-mode

`writing-mode`决定的是`文本行(text line)`的排列规则

注意，仅仅是`文本行(text line)`的排列规则，每个文本行内部怎么排列，不管

属性

- horizontal-tb(default)
- vertical-lr
- vertical-rl

horizontal-tb,每行是水平排列，每行是从上(top)到下(bottom)

--------------

vertical-lr,每行是垂直排列，这个时候的行其实就应该算是列了，每列从左(left)到右(right)

vertical-rl,这个和上面的正相反

[示例代码](https://jsbin.com/nuwobay/1/edit?html,output)


从代码中可以看到，英文字母，如果是`垂直排列`的行，字母也跟着行垂直了，但是中文字符却没有改变


# text-orientation

如果是英文字母，(vertical-lr/vertical-lr)的时候会发现字母是会旋转90度的


出现这种情况的原因是css的另外一个属性

`text-orientation`:文本方向
- mixed(default):字符旋转90度，表现为垂直的特征
- upright:字符表现为水平字符的特征,也就是`不旋转`

`text-orientation`这个css属性只有在`writing-mode:vertical-lr/vertical-lr`的时候才会起作用

但是`汉字无论如何都不会旋转`


[示例代码](https://jsbin.com/nuwobay/1/edit?html,output)


# direction

writing-mode这个属性决定了`text line`的排列规则，但是每一行中的文字是怎么排列的呢？

这里涉及到两个属性

- direction
- unicode-bidi

direction这个命令很有意思，一共就两个属性

- rtl(right to left)
- ltr(left to right)

但是表现却很有意思

[代码](https://jsbin.com/gamigol/2/edit?html,output)

可以看到，div中的文本，有的可以按照direction来确定方向，但是又得却不可以

但是一旦子元素是`inline-block`的元素，却都可以实现direction指定的方向

这是为什么？

先说direction作用的元素是`内联元素块`

内联元素快，简单说就是`display:inline-block`的元素和替换元素

```
    <div style="direction:rtl;">abc</div>
```
比如这样写的话，`abc`解释为一个`内联元素块`,所以展示的效果是`右对齐`

但是如果是:

```
    <div style="direction:rtl;">
        <span style="display:inline-block">a</span>
        <span style="display:inline-block">b</span>
        <span style="display:inline-block">c d e f</span>
    </div>
```
三个span可以按照direction的指令排序，但是第三个span内部的direction依旧按照默认的规则排序

# unicode-bidi

但是还有一个现象没有得到解释

```
    <div style="direction:rtl;">1 2 3 </div>
    <div style="direction:rtl;">a b c </div>
```
同样是相同的文本，但是`1 2 3`实现了从右到左，但是`a b c`却没有

这又是为什么？

这个和具体语言有关，浏览器会自动判断

比如abc，浏览器可以判断是英文字母，会按照默认的书写方式进行展示，但是对于数字，那就无法判断了，所以会按照`direction`的命令来排列展示


但是如何`css强制设置书写方向`？

unicode-bidi命令就这个目的

- normal:原来什么顺序就按照什么顺序写
- bidi-override:强制按照direction指定的方式排序
- embed:作用于inline元素，在对象内部进行影式重新排序

normal没什么好说的

```
<div style="direction:rtl;unicode-bidi:normal">a b c 1 2 3 一 二 三</div>
```

使用bidi-override可以实现`强制`direction排序

```
<div style="direction:rtl;unicode-bidi:bidi-override">a b c 1 2 3 一 二 三</div>
```

但是还有一种特殊情况，大段落`direction:rtl`,但是里面的某些元素，希望按照浏览器默认的顺序来排列的话，那就需要`unicode-bidi:embed`了

```
<div style="direction:rtl;unicode-bidi:bidi-override">a b c 1 2 3 
    <span style="unicode-bidi:embed;">一 二 三</span>
</div>
```


# 总结

writing-mode可以设置`text-line`的排列规则

但是每一行的排列规则需要使用`direction`和`unicode-bidi`来设置

direction命令设置的`行内元素块`或者是可替换元素

这就可能导致direction命令无效

并且浏览器针对不同的语言，对文本也有默认的排列规则

direction这些设置可以最大化的保证实用性

但是有时候不一定满足我们的需求

unicode-bidi这个属性就可以强制设置文本在文本行内的书写方向了



# css3 中的start，end

css3中多了很多的`-start`等开头的命令

但是在css2中却没有，而是有很多`left/right`开头的命令

这是为什么

应为在css2中，是没有`书写模式(writing mode)`的概念的

默认就是从左到右，从上到下

使用left/right就显得非常直观

但是css3引入了这个模块，使得现在的left和right不一定就是真的left 和right

比如`direction:rtl`这个时候的left就是right

所以使用left和right就不正确了，这个时候就使用start和end来表示了

如果是`direction:ltr`，那么start就是left，以此类推


# LINKS

- [https://www.zhangxinxu.com/wordpress/2016/04/css-writing-mode/](https://www.zhangxinxu.com/wordpress/2016/04/css-writing-mode/)
- [https://www.zhangxinxu.com/wordpress/2016/03/css-direction-introduction-apply/](https://www.zhangxinxu.com/wordpress/2016/03/css-direction-introduction-apply/)
- [https://www.cnblogs.com/dolphinX/p/4087816.html](https://www.cnblogs.com/dolphinX/p/4087816.html)
- []()
- []()
- []()