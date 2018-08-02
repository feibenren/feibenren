---
title: classList
categories: 

- JAVASCRIPT


---


# 在元素className的时候，有很多问题，比如判断是否包含的时候

```
ele.className.indexOf('modal') >-1//这样的判断是不保险的，比如含有 modal-content的话，就不行了
```

## classList对象有下列方法。
- add()：增加一个class。
- remove()：移除一个class。
- contains()：检查当前元素是否包含某个class。 (非常有用)
- toggle()：将某个class移入或移出当前元素。 (非常有用)
- item()：返回指定索引位置的class。
- toString()：将class的列表转为字符串。

```
document.getElementById('foo').classList.add('bold');
```