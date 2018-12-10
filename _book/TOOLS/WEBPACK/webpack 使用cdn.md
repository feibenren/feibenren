---
title: webpack 使用cdn
categories: 
- WEBPACK
---

# 如何使用cnd
```
externals:{
    // require("zepto") is external and available
  //  on the global var Zepto
  'zepto': 'Zepto'
}
```
设置这个东西的话，就是说打包的时候，不会将zepto打包进去，这样设置的话，外部一定要引入zepto，否则将没有Zepto可以使用，因为不会被打包进去

# 容易犯的错误
1：我在模板中引入lodash 的cdn，但是我没写externals，然后main.js中正常引入lodash，发现没报错，那么会怎么样???
打包的时候，会将lodash打包进去，这样的话，就有两个lodash了

main.js
```
import _ from 'lodash';

document.title=_.join([1,2,3],'|');

```

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/lodash.js/4.17.4/lodash.min.js"></script>
</head>
<body>
    
</body>
</html>
```

# 竟然报错了

```
externals: {
        "lodash": 'lodash'
}
```

这个地方一定要注意的就是,key是包名称，val的是全局变量

```
    externals: {
        "lodash": '_'
    }
```






