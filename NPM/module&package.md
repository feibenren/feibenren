---
title: module&package
categories: 
- NODEJS
---
# package

A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry

package是一个拥有`package.json`的文件或文件夹

一个package必须包含package.json，用来发布给registry

> package是针对registry的一个概念，比如版本就是package的概念

# module

A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.

module是一个在`node_modules`中的文件或文件夹，能够被nodejs的`require()`函数引用

- package.json中的main field
- index.js
- js file

module需要满足以上条件才可以`require()`




