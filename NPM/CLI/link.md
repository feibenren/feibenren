---
title: link
categories: 
- NODEJS
---

# link
Symlink a package folder

```
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln
```

Package linking is a two-step process.

First, npm link in a package folder will create a symlink in the global folder {prefix}/lib/node_modules/<package> that links to the package where the npm link command was executed. (see npm-config for the value of prefix). It will also link any bins in the package to {prefix}/bin/{name}.

在当前文件夹下执行命令，会在全局folder中创建一个软连接，这个软连接指向当前的package

如果当前的文件夹有bin字段，还会创建`{prefix}/bin/{name}`的软连接

Next, in some other location, npm link package-name will create a symbolic link from globally-installed package-name to node_modules/ of the current folder.

接下来，如果切换到其他文件夹下，执行该命令

会在当前path中创建`node_modules`目录，然后将指定的全局的package链接到node_modules文件夹中


npm link is designed to install a development package and see the changes in real time without having to keep re-installing it. (You do need to either re-link or npm rebuild -g to update compiled packages, of course.)

link 命令就是用来安装一个开发中的package的，而不用重新安装，当然也不用重新rebuild 来升级编译过的package

# 总结

npm link 就是添加软连接的

不仅添加package的软连接，而且还会添加bin字段对应的可执行文件的软连接

这样可以非常方便的进行本地测试