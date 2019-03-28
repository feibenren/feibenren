---
title: FileReader
categories: 
- WEBAPI
---

# FileReader

FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容

可以读取对象，只有`File`,`Blob`两个对象

FileReader是一个异步接口，所以，这个对象和`XMLHttpRequest`很类似

# 属性

- FileReader.readyState 
- FileReader.result

FileReader中最重要的两个属性

`FileReader.readyState `表示读取的状态，这个和XMLHttpRequest很类似

- EMPTY	0	还没有加载任何数据.
- LOADING	1	数据正在被加载.
- DONE	2	已完成全部的读取请求.
----------------
FileReader.result则是读取的内容

# 事件

- abort
- error
- load
- loadstart
- loadend
- progress
事件也和XMLHttpRequest类似

# 方法

- FileReader.abort()
- FileReader.readAsArrayBuffer()
- FileReader.readAsDataURL()
- FileReader.readAsText()


# FileReader.readAsArrayBuffer()

# FileReader.readAsDataURL()
result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容
# FileReader.readAsText()
result属性中将包含一个字符串以表示所读取的文件内容



# 总结

FileReader表示的是读取文件的句柄

由于安全限制，只能读取，不能做其他任何事情，比如删除，修改等等

来源只能是input和drop两种方式

```
  let file=myfile.files[0];
  let fileReader=new FileReader();
  let res=fileReader.readAsText(file);
  fileReader.addEventListener('load',function(res){
    console.log(fileReader.result);
  })
```

# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
