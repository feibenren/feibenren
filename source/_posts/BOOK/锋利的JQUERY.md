---
title: 锋利的JQUERY
categories: 
- BOOK
tags:
- book
---


# 隐式迭代
比如 获得 隐藏 .myclass 的元素，默认是隐藏所有的，jquery的方法都是被设计成自动操作对象集合

# DOM对象和Jquery对象相互转换
##  jquery->dom：
```
$('#ad')[0]
$('#ad').get(0)
```
因为jquery对象是一个类数组的对象

## dom->jquery
```
$(dom)
```
dom对象是不可以使用jquery提供的方法
jquery对象也是不可以使用dom对象的方法的

#冲突
jQuery.noConflict()
```
var my=jQuery.noConflict();
console.log($,jQuery,my);//undefined,fn(){},fn(){}

var my=jQuery.noConflict(true);
console.log($,jQuery,my);//undefined,undefined,fn(){}
```

#选择器
```
$('a+b')://a同级的下一个b
$('a~b')://a同级的所有b

$('a+b') === $('a').next('b')
$('a~b') === $('a').nextAll('b')


//过滤选择器
$('a:first')://所有的a中的第一个
$('a:last'):
$('a:eq(1)')://所有的a中索引是第一个,从0开始   $('a:first')==$('a:eq(0)')
$('a:gt(1)'):
$(':header')://获取h1,h2,...所有的h*元素
$(':animated')://正在执行动画的元素
$(':focus')://获得焦点的元素


//内容过滤选择器
$(':contain(text)')://匹配包含给定文本的元素,
$(':empty')://空元素
$(':has(selector)')://包含selector的父元素
$(':parent')://匹配含有子元素或者文本的元素,如果子元素或者文本为空，则匹配不到



//特殊用法
var res=$('.res');
console.log($('h2',res));//表示在res中查找h2
```

# querySelector和querySelectorAll IE8+浏览器支持。

#DOM操作
- 查找
    - children()
    - next()
    - prev()
    - siblings()
    - closest():查找当前元素->查找父级元素->父父....->null(注意:不会查找同级元素)
    - parent()
    - parents()
- 创建
    - $('<h1>new element</h1>')
- 插入
    - append()/appendTo()
    - prepend()/prependTo()
    - after()/insertAfter()
    - before()/insertBefore()
- 删除
    - remove():不保留事件
    - detach():保留事件
    - empty()
- 替换
    - replaceWidth()/replaceAll()
- 复制
    - clone()
- 包裹
    - wrap()
    - wrapAll()
    - wrapInner()
- 属性操作
    - attr()
    - removeAttr()
    - prop()
    - removeProp()
- css操作
    - addClass()
    - removeClass()
    - toggleClass()
- html/text操作
    - html()
    - text()
    - val()


# 位置
- offset():获得元素相对于document.documentElement的距离，这个方法原生的没有，需要一层一层的offsetLeft/offsetTop才能实现
- position():原生的offsetLeft/offsetTop
- scrollTop()/scrollLeft(可传参数):原生scrollTop/scrollLeft的封装



# 事件
 ## $(function(){}) === $().ready() === $(document).ready()  >  window.onload == $(window).load()
    $(document).ready():可以使用多次，会按照注册顺序依次执行
 ## 合成事件
    原始事件中没有，jq自己合成的
    - hover()
    - toggle():1.9+版本删除,只用于显示隐藏

- bind(type,[data],fn)
- one(type,[data],fn):和bind一样，就是只会执行一次
- unbind(type,[fn])
- trigger(type,[data])


## 注意事项
 - bind('type1 type2'):多个事件，空格隔开
 - 命名空间，方便管理
 ```
 function fn1(){console.log(1)}
    function fn2(){console.log(2)}
    function fn3(){console.log(3)}
    $('.btn').bind('click.type1',fn1);
    $('.btn').bind('click.type1',fn2);//本质是自定义事件
    $('.btn').bind('click.type2',fn3);
    $('.btn').unbind('.type1')
 ```

 ## event
    - ev.stopPropagation();对原始的event.stopPropagation()的方法的封装,兼容各种浏览器
    - ev.preventDefault();对原始的event.preventDefault()的方法的封装,兼容各种浏览器
    - event.type
    - event.target
    - event.relatedTarget
    - event.pageX/pageY:对原始的event.pageX的封装
    - event.which：滚轮
    - event.metaKey
 

# 动画
 ## speed 
    - slow :0.6s
    - normal:0.4s
    - fast:0.2s
 - show([speed])/hide([speed]):opcity/width/height
 - fadeIn([speed],[easing],[callback])/fadeOut():opcity
 - slideIn()/slideOut():height
 - animate(params,[speed],[callback])
    - 累加:$('.box').animate({left:'+=100px'})
    - 多重动画，顺序动画
        - $('.box').animate({left:'100px',top:'100px'}):多重，同时进行
        - $('.box').animate({top:'100px'}).animate({top:'100px'}):多重，顺序进行
- stop([clearQueen],[gotoend])
  默认:停止当前动画，开始下一个动画
  stop(true,false):停止在动画代码执行的动画状态，不会开始下一个动画
  stop(false,true):停止当前动画到结束状态，后续动画不会执行
  stop(false,false):停止在代码执行的动画状态，开始下一个动画
  stop(true,true):停止到第一个动画到结束状态，后续动画不会执行
- 是否处于动画状态:$(ele).is(':animated')
- delay():延迟动画

## 专门的交互动画
- toggle()
- slideToggle()
- fadeTo()
- fadeToggle()


# end()


# ajax
- $.load(url,[data],[callback]):远程载入代码并且插入dom中
- $.load('url #box',[data],[callback]):远程载入代码并且插入dom中,并且筛选
- $.getScript(),$.getJson()

## 数据格式
- xml
- html
- json
ajax可以设置默认的返回数据格式，原理设置发送的http请求头`Accept:application/xml, text/xml`,
问题:如果请求的是一个返回json数据的接口，而我设置的格式是html，会怎么样？？？？
我将得不到数据
问题，设置正确的话，我将可以直接得到对应类型的数据，比如我设置为json，那么返回的数据就是json，这个格式是jquery重又处理的，还是怎么滴？


##  $.getScript()
    ```
    $.getScript('https://cdn.bootcss.com/lodash.js/4.17.4/lodash.js')
    ```
    执行后，可以直接使用lodash，不用在append到head中去了
##  $.getJSON():
    返回结果直接是json，并且支持jsonp

# $.ajax()
- url:
- type
- timeout
- data
- dataType
- beforeSend
- complete
- success
- error
- global

# ajax全局事件
- $(document).ajaxStart():
- $(document).ajaxStop():
- $(document).ajaxComplete():
- $(document).ajaxError():
- $(document).ajaxSuccess():
- $(document).ajaxSend():
- $(document).ajaxSend():
**jquery1.9+版本以后，ajax全局事件需绑定到document对象上才能触发。**

$.ajax({
    global:false
})
这样设置后，改请求就不会触发全局事件了



# 序列化
- serialize();
- serializeArray();
- $.param():核心方法,对象序列化


# encodeURI && decodeURI


# 插件
## validate插件
```


$('#login_box').submit(function(ev){
    ev.preventDefault();
    
    $(this).validate({
        rules:{
            username:{
                required:true
            },
            pwd:{
                required:true,
                
            },
            verify:{
                required:true,
                remote:{
                    url:'http://www.test.com/validate.php',
                    type:'post',
                    data:{
                        verify:$('[name="verify"]').val(),
                    }
                }
            }
        },
        messages: {  
            pwd: {  
                required: "密码不能为空", 
            },
            verify:{
                remote:'验证码错误' 
            }
        }  
    });
})

```

```
//http://www.test.com/validate.php


<?php
header('access-Control-Allow-Origin:*');

$res=false;


$res=json_encode($res);

if(  isset($_GET['callback'])  ){
    // echo 111;
    echo $_GET['callback']."($res)";
}else{
    echo $res;
}


```
验证返回的结果只是`json_encode(true/false)`即可

## form
http://malsup.com/jquery/form/
可以非常容易地、无侵入地升级HTML表单以支持Ajax

## modal
https://github.com/ericmmartin/simplemodal

这个插件在高版本的jquery中有问题，使用1.*的版本

## cookie



# jquery ui