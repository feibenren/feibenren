---
title: fs
categories: 
- LEARNING
- nodejs
tags:
- js
---


# 文件的读写

常见情况
- 列出当前目录下面的所有文件，(文件名称，文件类型)
- 文件的写入(添加，重写)
- 文件的读取
- 文件的删除
- 文件的创建，文件夹的创建

## 写一个函数，可以查看指定目录下面的所有文件，包括文件夹,如果是文件，则读取文件的头100个字符来查看

```


var fs=require('fs');
let resArr=[];//存储结果
fs.readdir('./',function(err,files){
    if(err){
        console.log(err);
    }
    files.forEach(function(val){
        var stat=fs.statSync(val);
        if( stat.isDirectory()  ){
            // type:dir,title:'dir_name'
            resArr.push({type:'dir',title:val});
        }else{
            //type:file,title:'file_name',
            var con=fs.readFileSync(val).slice(0,100);
            resArr.push({type:'file',title:val,con:con.toString()});
        }
    });
    console.log(resArr);
});



```

