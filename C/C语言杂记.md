---
title: C语言杂记
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)

# 指针

```
int main(){
    int a=1;
    print("&a:%p",&a);//&,获得a变量的内存地址，也就是指针
    print("*&a:%p",*&a);//*&,获得内存地址中存储的数值，和直接打印a效果一样
    return 0;
}
```

# 单引号，双引号的不同
单引号和双引号在C语言中不一样，不能混用

单引号用来标识单个字符，双引号标识字符串



# const  #define 