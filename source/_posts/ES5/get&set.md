---
title: get&set
categories: 

- ES5


---

```
var oo = {
    name : '贤心',
    get sex(){
        return 'man';
    }
};
oo.sex = 'woman';//无效
console.log(oo.sex); //结果依然是man
```
通过这种方式，就可以实现只读属性
