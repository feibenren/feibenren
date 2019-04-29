---
title: install
categories: 
- NODEJS
---

# install

安装package

```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

aliases: npm i, npm add
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```



This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an npm-shrinkwrap.json taking precedence if both files exist

这个命令会安装一个package 和这个package的依赖

如果存在pack-lock或者shrinkwrap文件，则按照shrinkwrap文件来安装


# --force

 force npm to fetch remote resources even if a local copy exists on disk.

 强制获取远程资源，即使本地有

# -g

 cause npm to install the package globally rather than locally.
 