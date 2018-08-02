---
title: promise
categories: 

- JAVASCRIPT


---

es5中先执行a，再执行b，方法只有两个，回掉，事件
es6中有promise

**promise 每一步都要返回一个promise对象，不然没法then**

** then里面的函数，是什么，是回调函数**

# 它的思想是，每一个异步任务立刻返回一个Promise对象，由于是立刻返回，所以可以采用同步操作的流程。这个Promises对象有一个then方法，允许指定回调函数，在异步任务完成后调用

所以，PROMISE(承诺)的到底是什么东西？？？？承诺的就是你给我传入的resolve给我放到then中，我调用resolve执行的时候，就取你放入then的方法

起始一个promise只会有一个then，但是每个then都返回promise，那么就可以连接起来使用了



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