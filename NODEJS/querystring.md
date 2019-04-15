---
title: querystring
categories: 
- NODEJS
---

# querystring

The querystring module provides utilities for parsing and formatting URL query strings

querystring模块提供了解析和格式化url query字段的工具


# 方法

- querystring.escape(str)
- querystring.parse(str[, sep[, eq[, options]]])
- querystring.stringify(obj[, sep[, eq[, options]]])
- querystring.unescape(str)


# querystring.escape(str)

The querystring.escape() method performs URL percent-encoding on the given str in a manner that is optimized for the specific requirements of URL query strings.


这个函数会将给定的字符串进行`百分比编码`

# querystring.parse(str[, sep[, eq[, options]]])

The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.

会解析给定的字符串，变成一个键值对序列

# querystring.stringify(obj[, sep[, eq[, options]]])

The querystring.stringify() method produces a URL query string from a given obj by iterating through the object's "own properties".

会将给定的遍历器遍历，创建一个字符串

# querystring.unescape(str)

The querystring.unescape() method performs decoding of URL percent-encoded characters on the given str.

根据给定的按照百分比编码的字符串来解码