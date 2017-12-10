---
title: webpack import()
categories: 
- LEARNING
- TOOLS
tags:
- TOOLS
- WEBPACK
---


# import()
异步导入
需要使用babel的一个插件才可以使用
```
yarn add  --dev babel-plugin-syntax-dynamic-import

```
.babelrc
```
{
    "presets": [
        [
            "env", {
                "loose": true,
                "modules": false
            }
        ]
    ],
    "plugins": ["syntax-dynamic-import"]
}


```
