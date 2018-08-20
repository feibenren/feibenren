---
title: select三角
categories: 
- CSS3
---

# 修改select 默认三角

```
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #000;
 
  /*很关键：将默认的select选择框样式清除*/
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
 
  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("http://ourjs.github.io/static/2015/arrow.png") right center no-repeat;
 
 
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
}
 
 
/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }

```

需要注意,background的right属性，会导致三角紧贴右侧，所以三角最好右侧留有一定空白