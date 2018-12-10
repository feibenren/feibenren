---
title: biji
categories: 

- VUE
---

# v-bind:class 指令也可以与普通的 class 属性共存。

```
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

# 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter

```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。

# watch && computed 对比

* watch 更通用，可以执行异步操作等，范围更大
* computed:更简单，适用于绝大部分场景，

# 用 key 管理可复用的元素

[用 key 管理可复用的元素](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

# 可以用 of 替代 in 作为分隔符

v-for="item of items"
v-for="item in items"
你也可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法：

```
<button v-on:click="say('hi')">Say hi</button>//
<button v-on:click="greet">Greet</button>
```

函数名或者让函数执行，都可以

如果你想把一个对象的所有属性作为 prop 进行传递，可以使用不带任何参数的 v-bind (即用 v-bind 而不是 v-bind:prop-name)。例如，已知一个 todo 对象：

```
<todo-item v-bind="todo"></todo-item>
===
<todo-item
  v-bind:text="todo.text"
  v-bind:is-complete="todo.isComplete"
></todo-item>
```

```
computed: {
    myList: {
        get() {
            return this.$store.state.myList
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
}
```

