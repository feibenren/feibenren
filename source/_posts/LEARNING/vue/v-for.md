---
title: v-for
categories: 
- LEARNING
- VUE
tags:
- VUE
---

# v-for 语法
- `<li v-for="item in items">`
- `<li v-for="(item,key) in items">`
- `<li v-for="(item,key,index) in items">`

# in 可以替换成of
- `<li v-for="item of items">`
- `<li v-for="(item,key) of items">`
- `<li v-for="(item,key,index) of items">`

# 如果items是array的话，是没有key的，只有index，`<li v-for="(item,key,index) of items">` 这样写，不会报错，但是最后index就不存在了

# key
建议尽可能在使用 v-for 时提供 key
还不是很清楚这个可以是干什么用的，先记住，for循环的时候，必须绑定key

# 变异方法
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
只有这些使用这些方法的时候，vue才会自动更新视图，如果不是，将不更新
比如，如果list是一个对象，那么将怎么做，都不会更新视图，所以，如果是列表的话，尽量使用array





# 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
- 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength



# 一段取值范围的 v-for

```
<span v-for="n in 10">{{ n }} </span>
```

# v-for with v-if
当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用
```
 <li v-for="(val,key,index) in list" v-bind:key="index" v-if="key=='title1'">{{val}}--{{key}}--{{index}}</li>
```
这样我只会渲染出key==title1的数据，比如，我想渲染出带有hot标记的新闻，这招就很有用
