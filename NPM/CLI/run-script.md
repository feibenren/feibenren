---
title: run-script
categories: 
- NODEJS
---
# run-script

```
npm run-script <command> [--silent] [-- <args>...]

alias: npm run
```

This runs an arbitrary command from a package’s "scripts" object. If no "command" is provided, it will list the available scripts

运行package.json中的scripts对象，如果没有command的话就列出所有的命令


----------------

env是npm中内置的一个scripts，用来列出环境变量

如果自定义了env script，那么会覆盖掉内置的命令


------------

In addition to the shell’s pre-existing PATH, npm run adds node_modules/.bin to the PATH provided to scripts. Any binaries provided by locally-installed dependencies can be used without the node_modules/.bin prefix. 

除了预设的 shell path之外，npm 还添加了`node_modules/.bin`给scripts

script 中 任何二进制文件可以直接执行，而不用添加`node_modules/.bin`前缀



# 总结

- npm run 的是`package.json中的scripts中的命令`

- script脚本不用添加`node_modules/.bin`，运行的时候自动添加

