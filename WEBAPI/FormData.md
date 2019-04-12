---
title: FormData
categories: 
- WEBAPI
---

# FormData

FormData 接口提供了一种表示表单数据的键值对的构造方式，经过它的数据可以使用 XMLHttpRequest.send() 方法送出

# 构造器
- FormData()
# 函数

- FormData.append()
- FormData.delete()
- FormData.get()
- FormData.has()
- FormData.set()
- FormData.keys()
- FormData.values()
- FormData.entries()
- ...


# FormData()

```
var formData = new FormData([form])
```

构造器的参数可以是一个form对象

如果这个参数为空，则创建一个空的formData对象，需要手动添加数据

如果参数是一个form对象，则会自动包含form对象的表单值