---
title: -g
categories: 
- NODEJS
---

# -g 到底做了什么东西？
简单说，通过-g，可以将脚本当作普通的命令来使用，比如我在一个npm包中定义了一个命令，命令名称叫做tool,
那么通过-g安装后，我可以直接在命令行中使用命令
```
#linux
root@jiamengwang:~/test# tool
```

```
#windows
C:\Users\Administrator> tool
```
也就是说，我只要系统中装了node，然后通过-g安装，那么就可以扩展命令行了

# 怎么在包中定义命令？
通过在package.json中指定`bin`字段，如
```
"bin":{
    "tool":"./bin/console.js"
}
```
命令具体做什么，写在指定的js文件中

# js文件怎么写?
这个就涉及到如果在linux，windows中自定义命令了
简单说，其实不通过node，我也可以实现在系统中自定义命令
## windows中实现自定义命令
在windows中，是使用cmd文件实现的，cmd脚本有一套自己的语法，不深入，简单的cmd文件比如

test.cmd
```
echo 111;
```
双击这个test.cmd，就会输出111,如果想要通过命令行在任何目录中执行该脚本，需要放到一个PATH变量中指定的目录中

## PATH变量
在windows，linux中，都有这么一种情况:我在命令行中输入一个命令，怎么去查找这个命令？
需要在系统全局设置一个变量，这个变量保存了一组路径，在命令行中输入一个命令，那么系统就会在这组路径中去查找对应的文件,找到就执行，找不到就报错,这个变量就是PATH:可执行文件的搜索路径
比如，window中的PATH变量指定的路径
```
D:\Python27\;D:\Python27\Scripts;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\Windows Kits\8.1\Windows Performance Toolkit\;%NVM_HOME%;%NVM_SYMLINK%;D:\MongoDB\bin;D:\Redis\;D:\nodejs\;D:\Git\cmd;D:\Git\mingw64\bin;D:\Git\usr\bin;D:\VSCode\bin;D:\PuTTY\
```
如果将test.cmd文件放到`D:\nodejs\`这个目录下(在PATH变量中)，那么在任何地方都可以输入命令`test`就可以执行这个cmd命令了
## linux中实现自定义命令
在linux中，普通文件都可以当作一个命令执行，不像windows中，必须通过cmd，
只需要将这个普通文件放到PATH中指定的目录即可(linux也有PATH变量概念，和windows一样)，但是通常使用软链接


但是其实还有一件事情，我们写的自定义命令，都是脚本，都需要一个执行环境，说白了，我们写的代码，无法直接运行，需要交给指定的软件来运行，如果代码写的是shell脚本，那么就需要指定该脚本使用bash来执行，同理，如果写的是js脚本，需要node执行，那么就要像下面这样在文件第一行指定
```
#!/usr/bin/env node
```
题外话，如果是shell脚本，就这样
```
#!/usr/bin/env bash
```
放在首行的这段，在node中(浏览器端就不行)，会被当作注释(但是在普通的js文件中，不是使用#来做注释的)，
注意，必须放到首行，其他行会报错

## 回归怎么用js写命令行脚本
在windows中，因为是通过创建一个cmd文件来实现的，所以，只需要创建一个cmd文件即可(这个cmd文件其实做的事情主要就是让node去执行指定的js文件)
js文件该怎么写就怎么写，但是在linux中，不一样，需要使用`#!/usr/bin/env node`来指定执行环境
但是这行会被node当作注释，所以，windows中，linux中，都加上这样也无妨，所以，一个简单的js脚本如下
```
#!/usr/bin/env node
setInterval(function(){
    console.log(4444);
},1000)
```
# 最后，-g做了什么就很简单了
下载包,得到bin中指定的命令名称和对应的js文件路径,windows中在PATH指定目录中创建cmd文件，指向对应的bin中指定的js文件，linux中，直接创建软连接到PATH目录中，然后就可以在全局使用了，实际情况是npm不管平台。都会创建软连接和cmd文件的

# 总结
其实
`npm install `和`npm install -g` 完全不是一个意思，一个是 **下载包**，一个是 **安装自定义命令**


# shebang


# 链接
[https://www.cnblogs.com/wxishang1991/p/5439024.html](https://www.cnblogs.com/wxishang1991/p/5439024.html)