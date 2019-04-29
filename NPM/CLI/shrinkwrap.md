---
title: shrinkwrap
categories: 
- NODEJS
---
# shrinkwrap

Lock down dependency versions for publication

锁定发布时候的依赖



This command repurposes package-lock.json into a publishable npm-shrinkwrap.json or simply creates a new one. The file created and updated by this command will then take precedence over any other existing or future package-lock.json files. 

这个命令会重新更新npm-shrinkwrap.json文件，或者创建爱你一个

这个文件的优先级是最高的，比package.json,package-lock.json这两个文件的优先级都高


