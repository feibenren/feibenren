---
title: URL
categories: 
- WEBAPI
---

# URL



# 静态方法

- URL.createObjectURL()
- URL.revokeObjectURL()

# URL.createObjectURL()

返回一个DOMString ，包含一个唯一的blob链接（该链接协议为以blob:，后跟唯一标识浏览器中的对象的掩码）

-----------
一般情况下，我们不需要要手动创建一个url，因为url都是字符串，所以可以简单的拼接

但是如果想要下载一个`没有url`的数据的话，就没办法了

比如生成的canvas数据，网页的表格等

针对这种情况，浏览器提供了这个方法，可以下载我们指定的数据

# URL.revokeObjectURL()

销毁之前使用URL.createObjectURL()方法创建的URL实例。