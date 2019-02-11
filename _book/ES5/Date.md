---
title: Date
categories: 

- ES5


---

# Date
js中保存的是UTC的毫秒数(1970.1.1开始),而时间戳都是指秒数，需要注意

```
new Date()
```
可以创建基于当前时间的日期对象，一般情况下，我们看不到存储的直接的毫秒数，比如直接输出，会返回
```
Thu Aug 09 2018 14:29:48 GMT+0800 (中国标准时间)
//chrome
2018-08-09T06:35:51.443Z
//node
```
可以看到，都是UTC时间，只是展现形式不一致，但是都是表示 **时间戳毫秒数**

# Date.parse() && Date.UTC() && Date.now()

这两个方法都会返回时间戳毫秒数
## Date.parse(string)
参数是一个字符串，字符串格式没确定要求，如果如果不能解析的话，会返回NaN
## Date.UTC(Y,M,D,H,M,S,M)
参数就是年月日时分秒
## Date.now()
直接返回当前的时分秒 
## 总结
实际上，new Date(value)，这样写法，后台会调用以上的函数，将参数转化为毫秒数，如果是字符串，就调用Date.parse(),如果是多个参数，那么就是Date.UTC()
# Locale类方法
这种方法返回的就是符合本地的字符串，但是这种方法只能返回特定的，整体的格式，灵活度很低，用处不大
```
(new Date()).toLocaleString()
"2018/8/9 下午2:50:41"
(new Date()).toLocaleDateString()
"2018/8/9"
(new Date()).toLocaleTimeString()
"下午2:50:56"
```

# 获取/设置date中的部分时间
- getTime() 返回表示日期的毫秒数；与valueOf()方法返回的值相同
- setTime(毫秒) 以毫秒数设置日期，会改变整个日期
- getFullYear() 取得4位数的年份（如2007而非仅07）
- getUTCFullYear() 返回UTC日期的4位数年份
- setFullYear(年) 设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
- setUTCFullYear(年) 设置UTC日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
- getMonth() 返回日期中的月份，其中0表示一月，11表示十二月
- getUTCMonth() 返回UTC日期中的月份，其中0表示一月，11表示十二月
- setMonth(月) 设置日期的月份。传入的月份值必须大于0，超过11则增加年份
- setUTCMonth(月) 设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份
- getDate() 返回日期月份中的天数（1到31）
- getUTCDate() 返回UTC日期月份中的天数（1到31）
- setDate(日) 设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
- setUTCDate(日) 设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
- getDay() 返回日期中星期的星期几（其中0表示星期日，6表示星期六）
- getUTCDay() 返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）
- getHours() 返回日期中的小时数（0到23）
- getUTCHours() 返回UTC日期中的小时数（0到23）
- setHours(时) 设置日期中的小时数。传入的值超过了23则增加月份中的天数
- setUTCHours(时) 设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数
- getMinutes() 返回日期中的分钟数（0到59）
- getUTCMinutes() 返回UTC日期中的分钟数（0到59）
- setMinutes(分) 设置日期中的分钟数。传入的值超过59则增加小时数
- setUTCMinutes(分) 设置UTC日期中的分钟数。传入的值超过59则增加小时数
- getSeconds() 返回日期中的秒数（0到59）
- getUTCSeconds() 返回UTC日期中的秒数（0到59）
- setSeconds(秒) 设置日期中的秒数。传入的值超过了59会增加分钟数
- setUTCSeconds(秒) 设置UTC日期中的秒数。传入的值超过了59会增加分钟数
- getMilliseconds() 返回日期中的毫秒数
- getUTCMilliseconds() 返回UTC日期中的毫秒数
- setMilliseconds(毫秒) 设置日期中的毫秒数


# 注意
- valueOf()，Date.prototype给改写了，直接调用了getTime()方法，直接返回了毫秒数

- 如果两个日期对象相减，那么自动会将其转换成时间戳毫秒数,这非常方便两个日期的比较,相加的就变成了字符串连接了(没有意义)
