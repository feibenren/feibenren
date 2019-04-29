---
title: deprecate
categories: 
- NODEJS
---
# deprecate

Deprecate a version of a package

弃用某个版本的package

```
npm deprecate <pkg>[@<version>] <message>
```

This command will update the npm registry entry for a package, providing a deprecation warning to all who attempt to install it.

这个命令会更新仓库中的对应包，当安装的时候，提供一个弃用警告