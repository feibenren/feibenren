---
title: Error对象
categories: 

- JAVASCRIPT


---

# Error对象
## Error对象的实例有三个最基本的属性：
- name：错误名称
- message：错误提示信息
- stack：错误的堆栈（非标准属性，但是大多数平台支持）

# 常见JavaScript的原生错误类型
- SyntaxError:语法错误
- ReferenceError:引用错误，由于引用了一个不存在的变量时候发生的错误
- TypeError:类型错误,变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。

# 自定义错误

# finally代码块

**不管是否出现错误，都必需在最后运行的语句。**

# try...catch(e){}
```
try{
  throw new Error('报错了');
  console.log(111);//111不会输出，因为报错了
}catch(e){
  console.log(e);
}
```
## try只要里面的出现了报错，后面的代码就不会去执行

