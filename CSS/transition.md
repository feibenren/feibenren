---
title: transition
categories: 
- CSS
---

# transition

过渡，是一个复合属性，由四个命令组成


- transition-property
- transition-duration
- transition-timing-funciton
- transition-delay

# transition-property
设置过渡的属性，不是所有的属性都可以的，一般数值的都可以

# transition-duration

过渡时间

# transition-timing-funciton

过渡函数

- ease(default)
- ease-in 
- ease-out 
- ease-in-out  
- linear
- cubic-bezier()


#### linear
匀速变化，是最基本的

#### ease-in
缓入，也就是说开始慢，后来快

适合入场动画

#### ease-out
和in相反，适合出场动画

#### ease-in-out
开始和结束慢，中间快

#### ease

和ease-in-out类似，只不过ease的幅度偏小，是默认值


----------------------

- ease: 开始和结束慢，中间快。相当于cubic-bezier(0.25,0.1,0.25,1)
- linear: 匀速。相当于cubic-bezier(0,0,1,1)
- ease-in: 开始慢。相当于cubic-bezier(0.42,0,1,1)
- ease-out: 结束慢。相当于cubic-bezier(0,0,0.58,1)
- ease-in-out: 和ease类似，但比ease幅度大。相当于cubic-bezier(0.42,0,0.58,1)


示例代码 [https://output.jsbin.com/nizuqek/6](https://output.jsbin.com/nizuqek/6)

# transition-delay
延迟时间

# transition

transition可以定义多个，每个中间逗号隔开

```
transition:t1,t2,t3;
```

### 初始值

- transition-delay: 0s
- transition-duration: 0s
- transition-property: all
- transition-timing-function: ease

四个命令的顺序没有要求，但是需要注意的是，两个命令中的参数都是时间

只有一个时间，是设置duration，两个的话，第一个是duration，第二个是delay



# links
- [http://www.cnblogs.com/xiaohuochai/p/5347930.html](http://www.cnblogs.com/xiaohuochai/p/5347930.html)