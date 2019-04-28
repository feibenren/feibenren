---
title: lock
categories: 
- NODEJS
---
# package-lock.json

npm 5.5以上，默认安装package的时候，会生成一个`package-lock.json`的文件

package-lock.json文件主要用来`锁定package的版本`


# 产生原因

每次`npm install`的时候，是会默认安装最新的版本的

这就可能导致`不同时间安装的package不一致`

这可能就会产生bugs


npm5.6+在`执行npm install`，会`生成/更新`一个`package-lock.json`的文件


# 格式

- name
- 
- 
- 
- 
- 
