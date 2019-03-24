---
title: Date
categories: 
- ECMASCRIPT
---

# Date

Date 对象没有字面量格式，只能通过函数来创建

Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

Date对象提供的方法都是`围绕着处理时间`展开的


可分为以下几类：

- "set" 方法, 用于设置Date对象的日期和时间的值。
- "get" 方法,用于获取Date对象的日期和时间的值。
- "to" 方法,用于返回Date对象的字符串格式的值。
- parse 和UTC 方法, 用于解析Date字符串。


- new Date()
- Date.now()
- Date.parse()
- Date.protype.get()
- Date.protype.set()
- Date.protype.to()

# new Date()

创建date对象并返回,创建的形式多种多样

```
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```


# Date.now()

返回当前时间的毫秒数

# Date.parse()
`解析时间字符串`并`返回毫秒数`

# Date.protype.get()
get系列是获取时间对象中的某个`时间属性`

# Date.protype.set()
设置时间对象中的某个`时间属性`
# Date.protype.to()
这个系列的函数就是将date对象转换为其他格式

- Date.protype.toString():字符串形式
- Date.protype.toLocaleString():当地形式的时间字符串

# 其他

一般情况下，我们看不到存储的直接的毫秒数,可以看到，都是UTC时间，只是展现形式不一致

valueOf()，Date.prototype给改写了，直接调用了getTime()方法，直接返回了毫秒数

如果两个日期对象相减，那么自动会将其转换成时间戳毫秒数,这非常方便两个日期的比较,相加的就变成了字符串连接了(没有意义)



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


