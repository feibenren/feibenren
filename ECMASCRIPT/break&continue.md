---
title: 跳出多层循环 break语句和continue语句
categories: 

- ECMASCRIPT


---

JavaScript语言允许，语句的前面有标签（label）。标签通常与break语句和continue语句配合使用，跳出特定的循环。

```
top:
    for (var i=0;i<3;i++){
        for (var j=0;j<3;j++){
            if (i===1 && j===1) break top;
            console.log("i="+i+",j="+j);
        }
}
// i=0,j=0
// i=0,j=1
// i=0,j=2
// i=1,j=0
```
上面代码为一个双重循环区块，加上了top标签（注意，top不用加引号）。当满足一定条件时，使用break语句加上标签名，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

continue语句也可以与标签配合使用。
```
top:
    for (var i=0;i<3;i++){
        for (var j=0;j<3;j++){
            if (i===1 && j===1) continue top;
            console.log("i="+i+",j="+j);
        }
}
// i=0,j=0
// i=0,j=1
// i=0,j=2
// i=1,j=0
// i=2,j=0
// i=2,j=1
// i=2,j=2
```
上面代码在满足一定条件时，使用continue语句加上标签名，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。