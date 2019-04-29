---
title: access
categories: 
- NODEJS
---
# access

Set access level on published packages

设置发布的package的权限

> 免费用户没有这个权限

```
npm access public [<package>]
npm access restricted [<package>]

npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]

npm access 2fa-required [<package>]
npm access 2fa-not-required [<package>]

npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]
```