---
title: JavaScript高级程序设计
categories: 
- BOOK
tags:
- book
---

# defer && async

defer:延迟脚本,表明脚本在执行时不会影响页面的构造。这个属性的用途是表明脚本在执行时不会影响页
面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在`<script>`元素中设置
defer 属性，相当于告诉浏览器立即下载，但延迟执行。

async:。同样与defer 类似，async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与defer
不同的是，标记为async 的脚本并**不保证按照指定它们的先后顺序执行**

所以，建议添加deffer



#frameset


