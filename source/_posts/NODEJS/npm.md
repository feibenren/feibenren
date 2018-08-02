---
title: npm
categories: 

- NODEJS

---
#
查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的npm run命令。

# 最重要的命令

npm help:列出所有的命令
npm -l :列出所有命令的详细信息

```
npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview
```

### npm 内置了两个命令简写，npm test 等同于执行 npm run lint，npm start 等同于执行 npm run start。

### 两个命令中间用&&连接，表示执行完一个后执行另一个。如果希望两个命令同时平行执行，它们中间可以用&连接。

#简化命令
--save:-S
--save-dev:-D
install:i

# 钩子函数

```
"scripts": {
    "pretest": "echo 'pretest'",
    "test": "echo 'test'",
    "posttest": "echo 'posttest'",
  },
```
npm run为每条命令提供了pre和post两个钩子（hook）

# 参考文章

[https://www.kancloud.cn/kancloud/javascript-standards-reference/46497](https://www.kancloud.cn/kancloud/javascript-standards-reference/46497)
