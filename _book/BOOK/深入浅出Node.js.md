---
title: 深入浅出Node.js
categories: 
- BOOK

---



# 全局安装
全局默认不是将一个模块安装为全局包的意思，并不是可以在任何地方通过require()来引用到它，
-g 是将一个安装包安装为全局可用的可执行命令，它将根据package.json中的bin字段配置，将实际的脚本连接到与node可执行目录文件相同的路径下
