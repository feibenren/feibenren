---
title: promise
categories: 
- LEARNING
- JAVASCRIPT
tags:
- js
---

es5中先执行a，再执行b，方法只有两个，回掉，事件
es6中有promise

**promise 每一步都要返回一个promise对象，不然没法then**

## 有这样一个需求，页面中有一个模拟客服发消息的对话框，第一秒出来第一句话，你好，第二秒出来一句话，在吗，第三秒出来一句话，欢迎，怎么用js实现这个效果,如果有更多句话，怎么做方便使用

```

var words = ['你好', '在吗', '欢迎'];
var i = 0;

function say() {//回掉
    console.log(words[i]);
    i++;
    setTimeout(function() {
        console.log(words[i]);
        i++;
        setTimeout(function() {
            console.log(words[i]);
            i++;
        }, 1000);
    }, 1000);
}
say();
```

## promise

```
var words = ['你好', '在吗', '欢迎'];
var i = 0;

function say() {
    console.log(words[i]);
    i++;
    return new Promise(function(resolve, refuse) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
}
say()
    .then(function() {
        console.log(words[i]);
        i++;
        return new Promise(function(resolve, refuse) {
            setTimeout(function() {
                resolve();
            }, 1000);
        });
    })
    .then(function() {
        console.log(words[i]);
        i++;
        return new Promise(function(resolve, refuse) {
            setTimeout(function() {
                resolve();
            }, 1000);
        });
    })
```