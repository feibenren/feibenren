---
title: 事件
categories: 

- ES5


---


DOM的事件操作（监听和触发），都定义在EventTarget接口
该接口就是三个方法，addEventListener和removeEventListener用于绑定和移除监听函数，dispatchEvent用于触发事件。



# addEventListener
 为当前对象的同一个事件，添加多个监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）。


 如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。
```
function print(x) {
  console.log(x);
}

var el = document.getElementById("div1");
el.addEventListener("click", function(){print('Hello')}, false);
```




# 监听函数

- HTML标签的on-属性

使用这种方法时，on-属性的值是“监听代码”，而不是“监听函数”。也就是说，一旦指定事件发生，这些代码是原样传入JavaScript引擎执行。因此如果要执行函数，必须在函数名后面加上一对圆括号。


- Element节点的事件属性

**同一个事件只能定义一个监听函数**

- addEventListener方法



# 事件的传播

传播的三个阶段
- 第一阶段：从window对象传导到目标节点，称为“捕获阶段”（capture phase）。
- 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
- 第三阶段：从目标节点传导回window对象，称为“冒泡阶段”（bubbling phase）。

事件的代理
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

