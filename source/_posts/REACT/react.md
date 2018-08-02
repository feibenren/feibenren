---
title: react
categories: 

- REACT
---

要渲染一个 React 元素到一个 root DOM 节点，把它们传递给 ReactDOM.render() 方法


更新 UI 的唯一方法是创建一个新的元素, 并将其传入 ReactDOM.render() 方法


组件名称总是以大写字母开始。


一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数


所有 React 组件都必须是纯函数，并禁止修改其自身 props
因为reactor组件都必须是纯函数，所以，不能修改传给该组件的参数，也就是props

props到底是什么？
从定义上来说， 组件就像JavaScript的函数。组件可以接收任意输入(称为”props”)， 并返回 React 元素，用以描述屏幕显示内容




唯一可以分配 this.state 的地方是构造函数

当你调用 setState()， React 将合并你提供的对象到当前的状态中


键是React的一个内部映射，但其不会传递给组件的内部。如果你需要在组件中使用相同的值，可以明确使用一个不同名字的 prop 传入。


JSX允许在大括号中嵌入任何表达式

阅读代码的重要性远远高于写代码



从本质上讲，JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖


```
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
//等价的

//当你传递一个字符串字面量时，其值是未转义的 HTML(HTML-unescaped) 。那么这两个 JSX 表达式是等效的：
<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />

```



React 支持给任何组件添加特殊属性。ref 属性接受回调函数，并且当组件 装载(mounted) 或者 卸载(unmounted) 之后，回调函数会立即执行。



React 实现了一个独立于浏览器的 DOM 系统，用于提高性能和跨浏览器兼容性。 我们借此机会在浏览器 DOM 实现中清理了一些粗糙的东西