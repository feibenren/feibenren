---
title: marquee
categories: 
- LEARNING
- HTML
tags:
- html
---

# marquee
- behavior
    - alternate:两端之间来回滚动
    - scroll:由一端滚动到另一边，会重复
    - slide:由一端滚动到另一边，不会会重复
- direction
    - left:
    - right:
    - up:
    - down:
- loop:
    - -1:默认值，表示无限滚动
- scrollamount:活动字幕的滚动速度
- scrolldelay:活动字幕滚动两次之间的延迟时间,就是两次运动的间隔时间,单位为毫秒

```
    <marquee behavior="alternate" 
    onmouseover="this.stop()"
    onmouseout='this.start()'
    direction="left" scrollamount=1 scrolldelay=3000>test</marquee>

```


```

   onmouseover="this.stop()"
    onmouseout='this.start()'

```
这里的start,stop函数不用自己定义，浏览器提供，固定格式就这么写


# 缺点
- 无法自定义滚动形式，比如，marquee只能在内容都滚动完成后再进行下一次滚动，无法实现无缝滚动


