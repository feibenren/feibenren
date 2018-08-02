---
title: genertor
categories: 

- JAVASCRIPT


---

# 什么是genertor?
# 怎么用？
# 有什么用？







## 有这样一个需求，页面中有一个模拟客服发消息的对话框，第一秒出来第一句话，你好，第二秒出来一句话，在吗，第三秒出来一句话，欢迎，怎么用js实现这个效果,如果有更多句话，怎么做方便使用


```
var words = ['你好', '在吗', '欢迎', '请问您有什么需要'];
var i = 0;

function say(t) {
    setTimeout(function() {
        console.log(words[i]);
        i++;
    }, t);
}

var g = function*() {
    yield say(1000);
    yield say(2000);
    yield say(3000);
    yield say(4000);
}

var res = g();
res.next();
res.next();
res.next();
res.next();
```

