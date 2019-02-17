---
title: cookie
categories: 
- BROWSER
---

# cookie

随着 Web 应用程序的出现，也产生了对于能够直接在客户端上存储用户信息能力的要求，cookie 就是其中之一，由网景公司提出，后来成为一个标准

## 该标准要求

### 服务器

如果有一个自定义的响应头

```
set-Cookie:name=value

Set-Cookie: age=php; expires=Wed, 08-Aug-2018 08:40:37 GMT
Set-Cookie: name=php; expires=Wed, 08-Aug-2018 08:40:37 GMT
//如果有多个，那么就会有多个头相同，内容不同的response header
```

的响应头的话，就表明，这个内容里面有需要存储的 **会话信息**，客户端需要存储，需要客户端在以后每次请求中携带该内容

### 客户端

如果存在会话信息(cookie)，那么就需要每次请求的时候携带该回话信息，使用自定义请求头来携带

```
Cookie:name=value&name1=value1
//不用携带超时时间，域名等其他信息
```

### 会话信息

会话信息基本格式

```
xxx;xxx;xxx
```

每一项就是一个 cookie

### 注意

- 所有的 value,都会被转码，即 encodeURIComponent(),使用的话，需要 decodeURIComponent();

# js 处理 cookie

## 读取

通过 **document.cookie**

```
document.cookie
//会返回当前页面下，可用的cookie(排除了不合格的domain,expires,path等)
//返回的是一个字符串
//name1=value1;name2=value2;name3=value3
//需要处理
function cookie() {
    var arr = document.cookie.split(';');
    var res = {};
    arr.map(val => {
        var temp = val.split('=');
        res[ decodeURIComponent(temp[0]] = decodeURIComponent(temp[1]);
    });
    return res;
}
```

## 设置
当用于设置值的时候，document.cookie 属性可以设置为一个新的 cookie 字符串。这个 cookie 字
符串会被 **解释并添加**到现有的 cookie 集合中。设置 document.cookie 并不会覆盖 cookie，除非设置的
cookie 的名称已经存在。设置 cookie 的格式如下，和 Set-Cookie 头中使用的格式一样。
```
name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
```
这些参数中，只有 cookie 的名字和值是必需的。下面是一个简单的例子。
```
document.cookie = "name=Nicholas";
```
最好写个函数设置
```
var cookie2 = {
    name: '你好',
    value: '你好',
    expires: '22-Jan-37 07:10:24 GMT',
    path: '/',
    domain: 'www.test.com',
    secure: true,
};

function set_cookie({ name, value, expires = null, path = null, domain = null, secure = false }) {
    //name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
    let str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires instanceof Date) {
        str += "; expires=" + expires.toGMTString();
    }
    if (path) {
        str += `;path=${path} `
    }
    if (domain) {
        str += `;domain=${domain} `
    }
    if (secure) {
        str += `;secure`
    }
    console.log(str);
    document.cookie = str;
}

set_cookie(cookie1)

```


## 删除
直接设置超时时间为0

如果 cookie 过期了，就跳转到登陆页面，否则跳转到欢迎页面,怎么实现？？？

```
var expire=new Date(Date.now()+5000);
document.cookie='is_login=true; expires='+expire.toGMTString();
console.log(document.cookie);
```

需要注意的是

- cookie 格式 `value[; expires=date][; domain=domain][; path=path][; secure]`
- expires: 日期格式等同于 Date.toUTCString()的格式
