---
title: module
categories: 
- NODEJS
---



# The module wrapper

nodejs使用了commonjs的规范，每个文件都是一个独立的模块，实现方式类似
```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

有五个参数

- exports:module.exports的简写
- require():导入模块，文件，json
- module:代表当前模块
- __filename:代表当前文件名
- __dirname:代表当前模块的目录名

# module

代表当前模块，有以下属性

- module.id:模块的id，一般是模块的路径名称
- module.filename:处理过的文件名称(也就是绝对路径)
- module.children:当前模块引入的子模块
- module.parent:首次引入这个模块的模块
- module.exports:
- module.loaded:是否被加载
- module.paths:模块的搜索路径


> 也就是说，在nodejs中，使用拥有这些属性的对象来表示一个模块


# require()
导入模块，文件，json

该函数还有其他属性和方法

- require.main
- require.cache
- require.resolve()
- require.resolve.paths()

### require.main

The Module object representing the entry script loaded when the Node.js process launched

表示nodejs启动的时候的入口脚本所对应的`模块对象`


### require.cache

Modules are cached in this object when they are required

By deleting a key value from this object, the next require will reload the module


模块加载后会被缓存在这个对象中

如果删除对应的键值对，下次加载就会重新加载删除后的模块

-------------

注意，所有加载的模块都会被缓存在这个对象中,格式类似

```
{
    module_path1:module_obj1,
    module_path2:module_obj2,
    module_path3:module_obj3,
}
```

### require.resolve()

Use the internal require() machinery to look up the location of a module， but rather than loading the module, just return the resolved filename.

使用`require()机制`来查找模块的路径，但是不会加载模块，只会返回处理过后的文件名


# exports

A reference to the module.exports that is shorter to type

仅仅是`module.exports`的简写版本,实现方式类似

```
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // Module code here. In this example, define a function.
    function someFunc() {}
    exports = someFunc;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = someFunc;
    // At this point, the module will now export someFunc, instead of the
    // default object.
  })(module, module.exports);
  return module.exports;
}
```

# __dirname 

The directory name of the current module.This is the same as the path.dirname() of the __filename.

代表当前模块的文件夹名称

# __filename

代表当前模块的文件名


# 总结

