---
title: props&&state
categories: 
- LEARNING
- REACT
tags:
- REACT
---

# props

父组件传递数据给子组件的一种方式
注意点：
- props万万不要修改，应该在初始化的时候，将其传递给state
- 模板中不要使用props，虽然可以使用，但是模板中更应该使用state，应为state表示组件的状态

```
//父组件
<parent>
    <child name="p2c"></child>
</parent>

```

```
//子组件
<h1>
  {this.props.name} 
</h1>

```

# state
组件内部状态

构造函数是唯一能够初始化 this.state 的地方

## 初始化
```
constructor(props){
    super(props);
    this.state={
        name:111
    }
}
```
## 修改

```
this.setState({
    name:222
})

```
如果state非常大，我可以只更新其中的一部分吗? **可以**

# 组件渲染时机

只要子组件的state通过this.setState()改变后，那么就会重新渲染
