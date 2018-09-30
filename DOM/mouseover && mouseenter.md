---
title: mouseover && mouseenter
categories: 

- ES5


---

mouseover && mouseenter

mouseover事件和mouseenter事件，都是鼠标进入一个节点时触发。

两者的区别是，mouseover事件会冒泡，mouseenter事件不会

```
// HTML代码为
// <ul id="test">
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>

var test = document.getElementById("test");

// 进入test节点以后，该事件只会触发一次
test.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "purple";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// 接入test节点以后，只要在子Element节点上移动，该事件会触发多次
test.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```
