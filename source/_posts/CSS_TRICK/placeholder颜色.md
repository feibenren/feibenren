---
title: placeholder颜色
categories: 
- CSS
---

# placeholder颜色
使用el::placeholder伪类选择器修改
```
&::placeholder {
  color: #f00;
}
```
注意，
- chorme中，找不到对应的伪类选择器，也就是看不到对应的css
- select不支持placeholder
- 兼容性不好，需要添加前缀

# select 模拟placeholder
使用默认option再隐藏此选项
```
<select>
    <option value='' disabled selected style='display:none;'>Please Choose</option>
    <option value='0'>Open when powered (most valves do this)</option>
    <option value='1'>Closed when powered, auto-opens when power is cut</option>
</select>
```

# 兼容性
[https://caniuse.com/#search=%3A%3Aplaceholder](https://caniuse.com/#search=%3A%3Aplaceholder)