---
title: package.json
categories:
  - NODEJS
---

# package.json

- name
- version
- description
- keywords
- homepage
- bugs
- license
- people fields: author, contributors
- files
- main
- browser
- bin
- man
- directories
- repository
- scripts
- config
- dependencies
- devDependencies
- peerDependencies
- bundledDependencies
- optionalDependencies
- engines
- os
- cpu
- private
- publishConfig

# name

# version

# description

# keywords

# homepage

项目主页

```
"homepage": "https://github.com/owner/project#readme"
```

# bugs

项目 bugs 的跟踪 url 和 email 地址

```
{ "url" : "https://github.com/owner/project/issues"
, "email" : "project@hostname.com"
}
```

# license

# people fields: author, contributors

# files

# main

入口文件

# browser

# bin

A lot of packages have one or more executable files that they’d like to install into the PATH. npm makes this pretty easy (in fact, it uses this feature to install the “npm” executable.)

很多 package 拥有希望被安装到可执行目录中的可执行文件，npm 使得这种情况变得非常简单

To use this, supply a bin field in your package.json which is a map of command name to local file name. On install, npm will symlink that file into prefix/bin for global installs, or ./node_modules/.bin/ for local installs.

为了使用这个，需要在 package.json 中提供一个 bin 字段

这个 bin 是一个`name->local file`的 map，

在全局安装的时候，npm 在`prefix/bin`中创建软连接，分别连接到`local file`

如果是本地安装，则是在`./node_modules/.bin/`中创建软连接

Please make sure that your file(s) referenced in bin starts with #!/usr/bin/env node, otherwise the scripts are started without the node executable!

bin 中的文件，开头都需要添加`#!/usr/bin/env node`的 shebang，否则不会使用 node 去执行

# man

# directories

The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object

commonjs package可以通过设置directories对象来描述package的结构

## directories.lib
Tell people where the bulk of your library is. 

告诉人们library的位置
## directories.bin

## directories.man

## directories.doc

## directories.example

## directories.test

# repository
线上仓库的位置
# scripts

The “scripts” property is a dictionary containing script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.

key 是lifecycle的事件，value是这个事件对应的命令

# config


# dependencies

# devDependencies

# peerDependencies

# bundledDependencies

# optionalDependencies

# engines

# os

# cpu

# private

If you set "private": true in your package.json, then npm will refuse to publish it.

如果设置了private，那么npm就不会去publish

这是一种安全机制，防止误操作

# publishConfig

# DEFAULT VALUES

"scripts": {"start": "node server.js"}


"scripts":{"install": "node-gyp rebuild"}


## node-gyp

node-gyp是node自带的编译C++模块的的构建工具，因为要跨平台，所以需要每次都编译一下

因为npm分发的是源码，而不是二进制文件，分发二进制反而不好，可能会有各种问题

分发源码的问题就是每次都需要编译安装