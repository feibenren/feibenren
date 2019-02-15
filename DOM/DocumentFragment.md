---
title: DocumentFragment
categories: 
- DOM
---

# DocumentFragment

DocumentFragment表示的是`文档片段`，`DOM片段`

DocumentFragment优点在于它是在内存中的，不是在DOM TREE上的，对他进行DOM操作，不会引起`relayout`,`repaint`


`document.createDocumentFragment()`这个方法不需要参数

创建的fragment`永远不会出现在DOM中`,fragment相当于一个`虚位`


示例

```
<div id="box" >
</div>
```

```
console.time();
for(let i=0;i<100000;i++){
    let new_span=document.createElement('span');
    let new_text=document.createTextNode(i);
    new_span.appendChild(new_text);
    box.appendChild(new_span);
}
console.timeEnd();
```
普通的DOM操作，没进行一步操作，都会引发重排和重绘，性能有消耗很大

```
console.time();
let fragment=document.createDocumentFragment();
for(let i=0;i<100000;i++){
    let new_span=document.createElement('span');
    let new_text=document.createTextNode(i);
    new_span.appendChild(new_text);
    fragment.appendChild(new_span);
}
box.appendChild(fragment);
console.timeEnd();
```

这个时候的html结构会是这样的
```
<div id="box" >
    <span>1</span>
    <span>2</span>
    .....
</div>
```
fragment不会出现在html代码中




