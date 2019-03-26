---
title: DragEvent
categories: 
- EVENT
---

# DragEvent

DragEvent 对象描述了键盘的交互方式

```
Event <---UIEvent <------ MouseEvent <----------  DragEvent 
```

# 属性

- DragEvent.dragstart
- DragEvent.drag
- DragEvent.dragend
- DragEvent.dragenter
- DragEvent.dragover
- DragEvent.dragleave
- DragEvent.drop

dragenter和dragover事件的默认行为是拒绝接受任何被拖放的元素

所以这两个事件如果想要响应`drop`事件，则需要`ev.preventDefault()`

# item & target
拖拽的时候，是分为`drag item`(被拖拽的元素)和`drag target`(拖拽的目标元素)

DragEvent上的事件，是分布在这两个元素上的

item:
- dragstart
- drag
- dragend

target
- dragenter
- dragover
- dragleave
- drop

这些事件是会在不同的阶段(phase)触发

# 不同阶段(phase)

item
- 选中:dragstart
- 拖拽:drag(多次触发)
- 释放:dragend

target
- 进入:dragenter
- 进入中:dragover(多次触发),drop
- 移出:dragleave


注意当从操作系统向浏览器中拖动文件时，不会触发dragstart 和dragend 事件。



# 总结

- 拖拽分为item和target双方，这个和其他事件不一样

[示例代码](https://jsbin.com/fajegut/1/edit?html,js,console,output)


# 

# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent)
- [https://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/](https://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [https://juejin.im/post/5a169d08518825592c07c666](https://juejin.im/post/5a169d08518825592c07c666)