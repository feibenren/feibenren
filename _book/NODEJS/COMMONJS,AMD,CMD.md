---
title: COMMONJS,AMD,CMD
categories: 

- NODEJS

---

# COMMONJS
适用于服务器端，同步加载
格式:
```
exports.a=111;
exports.b=222
////or
module.exports={
    a:111,
    b:222
}

```
# AMD
适用于浏览器端，异步加载

格式:
```
//define(id?,dependcies?,factory);
define('mod1',['dep1','dep2'],function(dep1,dep2){
    var a=111;
    return a;
})
//or
define(function(dep1,dep2){
    var a=111;
    return a;
})

```
# CMD


适用于浏览器端，异步加载

格式:
```
//define(factory);
define(function(require,exports,module){
    var a=111;
    return a;
})


```

# 兼容写法

```

;(function(name,definition){
  let is_amd;
  //判断是否是AMD OR CMD
  if(typeof define !== undefined){
    is_amd=true;
  }else{
    is_amd=false;
  }
  //判断是否是COMMONJS
  let is_commonjs;
  if(typeof exports !== undefined && module.exports !== undefined){
    is_commonjs=true;
  }else{
    is_commonjs=false;
  }

  //判断

  if(is_amd){
    define(definition);
  }else if(is_commonjs){
    module.exports=definition();
  }else{
    this[name]=definition;//window环境
  }


})('mod1',function(){
  var a=111;
  return a;
})

```

