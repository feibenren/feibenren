---
title: frameset
categories: 

- HTML5

---

# frameset
这个标签已经被不推荐使用了，不建议使用，这个地方仅仅是为了看懂别人写的代码

## 基本示例

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<frameset cols="30%,50%">
    <frame name='f1' src='f1.html'></frame>
    <frame name='f2' src='f2.html'></frame>
</frameset>
</html>
```
### 注意
- 没有body
- frameset 通过属性来定义比例
- frameset rows="10%,30%"表示上下布局:上面10%比例，下面30%比例
- frameset cols:左右布局
- frame默认都是100%高度这个很有用
- 每个frame 通过name来标示自己

### frameset 中window的三种表示方法: top,self,parent
top:如果在一个frame中，top就表示最顶层,最外围的window
self:表示frame中的自己 ，其实，self===window 只是为了与top，parent对应一下
parent:表示自己的父级window,

