---
title: URL编码
categories: 
- COMPUTER
---

# URL编码

url中只有英文，数字和其他一些符号来表示，其他符号必须进行编码，具体使用`百分比编码`的方式进行编码


# form

因为form表单默认是get请求的，也就是说数据默认是放到url中的

所以form中的数据默认是编码的，所以，默认格式是`application/x-www-form-urlencoded`

但是如果将数据放到http body中，那么数据就不用编码了，所以，`multipart/form-data`就不编码




# links

- [http://www.ruanyifeng.com/blog/2010/02/url_encoding.html](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)
- [https://zh.wikipedia.org/wiki/%E7%99%BE%E5%88%86%E5%8F%B7%E7%BC%96%E7%A0%81](https://zh.wikipedia.org/wiki/%E7%99%BE%E5%88%86%E5%8F%B7%E7%BC%96%E7%A0%81)

