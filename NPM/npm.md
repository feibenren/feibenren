---
title: npm
categories: 
- NODEJS
---

# About two-factor authentication
# npm profile
# Configuring your registry settings as an npm Enterprise user(通过配置注册设置来成为一个企业用户)

最简单的方式是配置`企业的注册地址`来发布或安装私有npm包

# 依赖

- `npm i xxxx`===>dependcies
- `npm i xxxx --save-dev`===>devDependcies

也就是说默认安装包的时候，是会修改package.json的dependcies的

> cnpm 不会自动添加，之后npm才会


# 常用命令

- `npm repo xxx`:Open package repository page in the browser
- `npm bugs xxx`:Bugs for a package in a web browser maybe
- `npm docs xxx`:Docs for a package in a web browser maybe
- `npm view/info/show/v xxx`:View registry info

# npm link

npm link is designed to install a development package and see the changes in real time without having to keep re-installing it. (You do need to either re-link or npm rebuild -g to update compiled packages, of course.)




# 参考文章

- [https://docs.npmjs.com/cli-documentation/](https://docs.npmjs.com/cli-documentation/)

- [https://docs.npmjs.com/misc/index.html](https://docs.npmjs.com/misc/index.html)