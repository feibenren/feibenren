---
title: folders
categories: 
- NODEJS
---

# folders

npm 会将文件从registry下载到自己的电脑上，但是这些文件到底怎么放？

- Local install (default): puts stuff in ./node_modules of the current package root.
- Global install (with -g): puts stuff in /usr/local or wherever node is installed.
- Install it locally if you’re going to require() it.
- Install it globally if you’re going to run it on the command line.
- If you need both, then install it in both places, or use npm link.

- 本地安装(默认):将下载的包放到当前文件夹下的`./node_modules`
- 全局安装:放到`/usr/local`或者node的安装目录
- 本地安装的包，是可以`require()`使用的
- 全局安装的包，是可以在命令行中使用的
- 如果想本地和全局安装，使用`npm link`


# prefix 

The prefix config defaults to the location where node is installed. On most systems, this is /usr/local. On Windows, it’s %AppData%\npm. On Unix systems, it’s one level up, since node is typically installed at {prefix}/bin/node rather than {prefix}/node.exe.

When the global flag is set, npm installs things into this prefix. When it is not set, it uses the root of the current package, or the current working directory if not in a package already.

prefix默认表示node的安装目录，在linux系统中，是`/usr/local`,windows是`%AppData%\npm`

如果是全局安装，默认会在prefix目录装安装


# 可执行的命令

When in global mode, executables are linked into {prefix}/bin on Unix, or directly into {prefix} on Windows.

When in local mode, executables are linked into ./node_modules/.bin so that they can be made available to scripts run through npm. (For example, so that a test runner will be in the path when you run npm test.)

在全局模式中，可执行的命令会被link to`{prefix}/bin`中(windows中则是直接放到`{prefix}`中)

当本地模式中，可执行命令会被link to`./node_modules/.bin`,这样npm就可以使用这些命令了,比如test的时候

这里的link，在linux中，就是创建软连接，在window中，不是创建软连接，而是创建cmd文件


# Node Modules

