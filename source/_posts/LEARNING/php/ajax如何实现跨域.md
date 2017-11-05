---
title: ajax如何实现跨域
categories: 
- LEARNING
- php
tags:
- php
---

# 很简单 :**header('access-Control-Allow-Origin:*');**
设置完该属性后，可以让所有ajax访问，没有域名限制
```
<?php

//access-Control-Allow-Origin
header('access-Control-Allow-Origin:*');
$arr=[
   ["title"=>'标题',"con"=>"con1111"],
   ["title"=>'标题',"con"=>"con1111"],
   ["title"=>'标题',"con"=>"con1111"],
   ["title"=>'标题',"con"=>"con1111"],
   ["title"=>'标题',"con"=>"con1111"],
];
    
    echo json_encode($arr);
?>
```
