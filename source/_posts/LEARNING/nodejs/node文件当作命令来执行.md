---
title: node文件当作命令来执行
categories: 
- LEARNING
- nodejs
tags:
- js
---


linux中的test.js文件，头部添加这样一段话

```
#!/usr/bin/env node
```

```
./test.js   #执行这样的命令的话，就可以直接运行test.js了，如果没有这句话，需要使用 node ./test.js才可以
```


# window中怎么做?????