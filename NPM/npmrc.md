---
title: npmrc
categories: 
- NODEJS
---
# npmrc

npm 的配置可以从命令行，环境变量，和npmrc中获取

npmrc是npm的配置文件

- per-project config file (/path/to/my/project/.npmrc)
- per-user config file (~/.npmrc)
- global config file ($PREFIX/etc/npmrc)
- npm builtin config file (/path/to/npm/npmrc)

有四层配置，可以逐级覆盖


-----------

# 配置内容
npm config的配置项
# 配置格式

```
registry=https://registry.npmjs.org/
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

