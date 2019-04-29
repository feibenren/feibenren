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

- name:必须和package.json的name一样
- version
- lockfileVersion§
- dependencies
- version:确定的版本信息(这个字段是最重要的字段，里面都是确定的版本)



# shrinkwrap

A publishable lockfile

一个可以发布的lockfile

npm-shrinkwrap.json is a file created by npm-shrinkwrap.

npm-shrinkwrap.json这个文件是`npm shrinkwrap`命令产生的


# 总结

如果说`package.json`是输入的话，理想情况下，输入一样，输出就应该一样

但是npm的安装规则却不是这样的，而package-lock.json的文件就是确保输入一样的情况下，输出也会一样