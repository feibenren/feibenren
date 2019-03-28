---
title: Body
categories: 
- WEBAPI
---
# Body

Body接口，表示的是fetch api中的`http中的 response body/request body`

Body接口被 Request，Reponse实现了

# 属性

- Body.body:A simple getter used to expose a ReadableStream of the body contents.
- Body.bodyUsed : whether the body has been read.


#　方法

- Body.arrayBuffer()
- Body.blob()
- Body.formData()
- Body.json()
- Body.text()

# Body.body

这个属性表示的是http body，是一个`ReadableStream`的getter

直接读取stream也可以，但是麻烦，Body提供了很多的便捷方法

比如`Body.json(),Body.text()`,这些方法表示`读取Body.body Stream直到完成，然后转换为对应的对象(返回的是一个promise)`

比如`Body.json()`表示读取body stream，直到完成，然后将body转换为`JSON`对象

因为返回的都是promise，所以使用`async function`非常好用

[示例代码](https://codepen.io/feibernren/pen/xBoomJ?editors=1010)

```
let url = 'http://rap2api.taobao.org/app/mock/117159/example/1542009440817';
async function test(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
test(url).then(data => console.log(data)).catch(err => console.log(err));

```