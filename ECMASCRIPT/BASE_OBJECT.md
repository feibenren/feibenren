---
title: BASE_OBJECT
categories:
- ECMASCRIPT
---
# BASE_OBJECT

对象是一种数据结构，由无序的数据键值对组成

如果仅仅从一种数据结构来说，很简单

但是js还将对象赋予了更多的功能，比如
- 继承
- 键值对控制
等

这里只说数据结构


# 创建对象

如果只将js看作一种数据结构

那就很简洁

```
{
    key1:value1,key2:value2,
}
new Object(value)
```
通过这这两种方式可以创建一个对象，第一种很直观，最常见

第二种一般用在数据类型转换上

# 遍历对象

```
var obj={name:1,age:2}
for(var key in obj){
    console.log(key);
}
```

# 删除

```
var obj={name:1,age:2}
delete obj.name
```

# in操作符
判断一个属性名称是否存在于一个对象中
```
var obj={name:1,age:2}
if('sex' in obj){}
```

# 总结
如果仅仅从数据结构看对象，就很简单

可以很方便的管理键值对