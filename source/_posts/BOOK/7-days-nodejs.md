---
title: 7-days-nodejs
categories: 
- BOOK
tags:
- book
---

# [http://nqdeng.github.io/7-days-nodejs](http://nqdeng.github.io/7-days-nodejs)

# 主模块

通过命令行参数传递给 NodeJS 以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js 就是主模块。

```
 node main.js
```

NodeJS 使用 CMD 模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。

# NODE_PATH 环境变量

与 PATH 环境变量类似，NodeJS 允许通过 NODE_PATH 环境变量来指定额外的模块搜索路径。NODE_PATH 环境变量中包含一到多个目录路径，路径之间在 Linux 下使用:分隔，在 Windows 下使用;分隔

# index.js

# package.json

main:指定模块入口文件

# 命令行程序

## linux 环境中
简单说就是把一个 js 文件当作一行命令来执行
linux 系统很简单，只要是文件就可以当作命令来执行

## windows 环境中

windows 就不一样了，很麻烦，需要使用.cmd文件

```
#! /usr/bin/env node
console.log(1111);
```

## windows 中怎么办?使用 git bash

# 工程目录

```
- /home/user/workspace/node-echo/   # 工程目录
    - bin/                          # 存放命令行相关代码
        node-echo
    + doc/                          # 存放文档
    - lib/                          # 存放API相关代码
        echo.js
    - node_modules/                 # 存放三方包
        + argv/
    + tests/                        # 存放测试用例
    package.json                    # 元数据文件
    README.md                       # 说明文件
```


# npm

参数中的-g表示全局安装，因此node-echo会默认安装到以下位置，并且NPM会自动创建好Linux系统下需要的软链文件或Windows系统下需要的.cmd文件

# 版本号


# NPM常用命令

npm help:查看所有命令


使用npm help <command>可查看某条命令的详细帮助，例如npm help install。

在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。

使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。

使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。



# 文件操作



