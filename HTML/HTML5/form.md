---
title: form
categories: 
- HTML5
---

# form 的enctype属性

enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码

- application/x-www-form-urlencoded:在发送前编码所有字符（默认）
- multipart/form-data:不对字符编码。(在使用包含文件上传控件的表单时，必须使用该值)
- text/plain:空格转换为 "+" 加号，但不对特殊字符编码。

# 编码
x-www-form-urlencoded是会对发送的表单数据编码的，但是到底怎么编码？

如果我提交的数据类似
```
var data={
    name:111,
    age:222
}
```
类似于变成这样
```
var data={
    name:111,
    age:222
}
var form_data=`name=encodeURIComponent(data.name)&age=encodeURIComponent(data.age)`;
```
也就是将表单的所有项目拼接成一个查询字符串，和GET查询一样


# postman 的 form-data,x-www-form-urlencoded,raw区别

和form的三个对应

# 总结
form-data主要用来上传文件使用，因此不能对表单数据编码

x-www-form-urlencoded:不上传文件的时候，应该使用该属性

也就是说，不上传文件，不用设置该属性

# node总处理表单信息提交
node中针对表单提交就比较麻烦，因为没有直接现成的方法或属性来使用

在node中，因为请求体可能会很大很耗费时间，所以接收请求体是需要通过事件来实现的(然而请求头却不用，因为很小，使用req.headers即可获得)

需要分为多种情况讨论

### x-www-form-urlencoded
这种情况也就是只能提交键值对，node处理这种情况很简单，使用querystring模块;

```
const http = require("http");
const querystring = require("querystring");
const server = new http.Server();
let i = 0;
server.on("request", function(req, res) {
    let data='';
    req.on('data',function(chunk){
        data+=chunk;
    })
    req.on('close',function(){
        res.end('数据接收失败');
    });
    req.on('end',function(){
        let obj=querystring.parse(data);
        res.end(JSON.stringify(obj));
    });
});
server.listen(9998);

```

### form-data,raw
这种情况处理起来就很麻烦

使用上面的代码，打印出来的内容是：

```
{
    "------WebKitFormBoundaryUpSNQXeXZFqI4W0D\r\nContent-Disposition: form-data; name": "\"aaa\"\r\n\r\n111\r\n------WebKitFormBoundaryUpSNQXeXZFqI4W0D\r\nContent-Disposition: form-data; name=\"bbb\"\r\n\r\n222\r\n------WebKitFormBoundaryUpSNQXeXZFqI4W0D--\r\n"
}
```
也就是一个大整体
这种情况，使用querystring模块就没有意义了
这个时候只能根据返回的内容来进行自行解析了








