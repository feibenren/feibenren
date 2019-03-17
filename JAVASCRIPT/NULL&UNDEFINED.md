---
title: NULL&UNDEFINED
categories: 
- JAVASCRIPT
---
# NULL

最早的js是没有undefined这种数据格式的

因为js是参照java设计的，java中也有null，表示空

但是

- java中的null是一个对象
- null可以自动转换为0

设计者觉得这样不合理，空不应该是一个对象来表示，并且自动转为为0不方便排查错误

于是设计出来一个新的数据格式

# undefined

undefined表示的是`未定义`，因为就是为了解决null的问题，所以和null的差别很小，除了这两点

- `typeof null ==> object`,`typeof undefined ===> undefined`
- null转为数字是0，undefined转为数字是NaN


