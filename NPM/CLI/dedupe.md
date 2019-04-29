---
title: dedupe
categories:
  - NODEJS
---

# dedupe

Reduce duplication

减少重复

```
npm dedupe
npm ddp

aliases: find-dupes, ddp
```

Searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages.

搜索本地 package tree，试图去简化整体架构，更有效的共享依赖的 package

示例:

```
a
+-- b <-- depends on c@1.0.x
|   `-- c@1.0.3
`-- d <-- depends on c@~1.0.9
    `-- c@1.0.10
```

```
a
+-- b
+-- d
`-- c@1.0.10
```
