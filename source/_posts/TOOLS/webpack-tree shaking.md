---
title: webpack-tree shaking
categories: 
- TOOLS
---


# TREE SHAKING  
官网上说的两点
- export inport使用
- 代码压缩工具,uglifyjs

但是使用有局限
# 局限1
```
export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}

```

这样导出，可以实现shaking

假如这样呢

```
export default {
    square:function(x){
        return x * x;
    },
    square:function(x){
        return x * x;
    },
}
```
不会
# 局限2
```
{
    "presets": [
        [
            "env", {
                "loose": true,
                "modules": false
            }
        ]
    ]
}


```
babel需要这样设置，才会生效
