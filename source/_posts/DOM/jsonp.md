---
title: jsonp
categories: 

- ES5


---


# jsonp

## 为什么一定要使用script标签，不能使用image呢
script标签有一个特别的功能，就是请求回来的数据会被当作js，并且会被立即执行，但是image不具备这个功能
还有一个区别
img标签，只要设定了src属性，那么就会立即请求数据
scirpt标签，只设定了src属性，是不会请求数据的，只能append到页面中，才会请求数据


