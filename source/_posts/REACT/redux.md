---
title: redux
categories: 

- REACT
---

# flux 和redux的区别
最大的区别就是只能有一个store

# 设计思想
- Web 应用是一个状态机，视图与状态是一一对应的。
- 所有的状态，保存在一个对象里面。

# 三原则
- 唯一数据源
- 状态保持只读
- 数据改变只能通过纯函数完成

# 唯一数据源
说白了，就是单一store
多个store之间可能存在依赖，比如CounterSummary就依赖于CounterStore，并且这两个store中都要设置外露回调函数，所以有冗余
这其实就导致了另外一个问题，就是store的解构问题，这个问题将会是一个核心问题

# 状态保持只读
就是store中的数据不要直接修改，

UI=render(state);
## 不修改状态，怎么改变view
改变状态的方法不是去直接修改状态上的值，而是创建一个**新的**状态对象返回给redux


#数据改变只能通过纯函数完成
纯函数就是reducer
redux=flux + reducer

# reducer到底是个什么东西?
简单说就是定义store数据更新规则,
用法
```
reducer(state , action }
```
看用法，说白了reducer就是一个函数，这个函数根据state和action来返回一个全新的数据


reducer 必须是纯函数，也就是说函数的返回结果必须完全由参数state 和action 决定，而且不产生任何副作用，也不能修改参数state 和action 对象。

Redux的reducer 只负责计算状态，却并不负责存储状态。




# Store设计原则
- 避免数据冗余



# 常用方法
- store.getState():获取store状态
- store.dispatch():派发action，因为action是数据，所以也就是派发数据
- store.subscribe():注册回调函数,action是向store发送修改数据的请求，修改后，需要重新获取store的数据，什么时候获取，就通过注册回调函数就可以了
- const Store=createStore(Reducer,VALS);创建store




```


```


在Redux 中， action 构造函数只负责创建对象，要派发action 就
需要调用store.dispatch 函数。


#先写哪个？
ActionTypes->Actions->Reducer


#只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。


# 用户只能接触到view
# Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化

# store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法

# Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数

# Store 
- store.getState()
- store.dispatch()
- store.subscribe()

# state和store是不同的
state表示当前时间的store的副本，store的数据是会变化的，state不会，因为他表示某一个时刻的状态