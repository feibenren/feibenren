---
title: 一个对象中，key可以用变量表示吗
categories: 
- QUESTION
- JAVASCRIPT
tags:

```
var key1='qqq';
var obj={
    name:'asdf',
    [key1]:333
}
```

可以，必须使用[]括起来，小括号，大括号都不行