---
title: DOM扩展
categories: 
- DOM
---

# DOM扩展

社区和HTML5都对Dom进行了大量的扩展，以弥补原来dom的一些不足

# 选择API

即使到DOM3中，也只有`getElementById()`,`getElementByTagName()`这两个方法来查询dom对象，但是这远远不够

后来有添加了如下选择方法

- querySelector():
- querySelectorAll():
- getElementByClassName():

# Element.classList
classList是针对className的优化而来的

之前只能使用`Element.className`来获取className，但是获取的仅仅是一个字符串，操作麻烦

html5中给Element对象添加了这样一个属性

有如下方法属性

- add()
- remove()
- contains()
- toggle()
- item()：返回指定索引位置的class



# dataset

这个也是针对`自定义属性`的补充

如果是通用属性，比如`id`,`className`,`title`等属性，可以直接从dom对象上获取，但是针对`自定义的属性`，那么就很麻烦了

在之前，获取自定义属性只能使用`Element.attributes`，`Element.getAttribute()`,`Element.setAttribute()`来操作

html5规定了`dataset`的属性,只要是`data-`开头的自定义属性，可以通过该属性直接获取

```
      <span id="t3" data-my='mmm'>333</span>
```

```
let t3=document.getElementById('t3');
console.log(t3.dataset.my);//mmm
```

# innerHTML

在之前进行DOM的插入的时候，会很麻烦，需要逐个拼装，然后挂载，但是这样效率很低下

html5中规定，使用`innerHTML`来优化这种大量`DOM插入`,

在读模式下，会得到`html字符串`

在写模式下，innerHTML设置的字符串，浏览器会将字符串默认解析成`DOM子树`，由于使用的浏览器来解析,效率非常高

这里就有一个比对,DocumentFragment(代码片段)


### 1、操作

DocumentFragment可以可以完成所有的dom操作，但是innerHTML能操作的就是覆盖

### 2、性能

如果是解析html，肯定是innerHTML胜出

但是如果`超级频繁`设置innerHTML的数值的话，最好还是使用fragment来，因为innerHTML频繁设置为字符串，js引擎受不了

### 3、优缺点

innerHTML性能总的来说都很好，但是又一个缺点,就是字符串，需要拼接，虽然方便，但是无法编程


# Element.scrollIntoView()
元素滚动到视口中



# [文档模式](./DOM/文档模式.md)




# ELEMENT.children

`NODE.childNodes`返回的节点可能含有非html元素的节点，有时候不方便操作

就添加了一个children的属性，返回的是`HtmlCollection`的集合，只能是html元素

还有

`NODE.nextSibling`,`NODE.previouSibling`,`NODE.firstChild`,`NODE.lastChild`NODE提供的属性，返回的也可能是非html元素

针对这种情况，又退出了一套新的属性，只返回html元素

- Element.nextElementSibling
- Element.firstElementChild
- Element.lastElementChild
- Element.previousElementSibling
- Element.ChildElementCount


# links
- [https://kongwsh.github.io/2016/09/02/html-1/](https://kongwsh.github.io/2016/09/02/html-1/)
- [https://wq123456.github.io/2016/08/29/jslab1/](https://wq123456.github.io/2016/08/29/jslab1/)