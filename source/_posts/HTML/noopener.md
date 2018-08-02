---
title: noopener
categories: 

- HTML

---

# noopener

当你使用 target='_blank' 打开一个新的标签页时，新页面的 window 对象上有一个属性 opener，它指向的是前一个页面的 window 对象，因此，后一个页面就获得了前一个页面的控制权，so 可怕！！


比如你的链接现在变成了这样 <a href='/index' rel=noopener>链接<a/>，再打开后你会发现 window.opener 已经被置为了 null，如果是一些旧的浏览器，可以使用 rel=noreferrer