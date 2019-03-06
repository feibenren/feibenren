---
title: will-change
categories: 
- CSS
---

# will-change

will-change属性是告诉浏览器哪些属性`一段时间后`会发生变化，浏览器会提前做好准备

```
will-change:transform,opcity
```
但是这个属性一般是不直接写在css中的，一般都是通过js来动态修改

如果写在css中，那么浏览器会将对应的内容放到内存中，反而可能会占用大量空间，影响性能

建议

- 给它足够的工作时间
- 不要过早应用 will-change 优化
- 有节制地使用
- 不要将 will-change 应用到太多元素上



# links
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)