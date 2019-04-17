---
title: fs
categories: 
- NODEJS
---

# fs
The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

fs模块，提供一些列和`POSIX函数`非常相似的api

涉及到的概念

- 文件句柄
- Class: fs.Dirent
- Class: fs.FSWatcher
- Class: fs.Stats
- Class: fs.ReadStream
- Class: fs.WriteStream
- Class: fs.WriteStream

涉及到的接口一共有三个版本

- 同步版本
- 异步版本
- promise版本

# File Descriptors

文件句柄，使用`fs.open()`产生

# Class: fs.Dirent

When `fs.readdir()` or `fs.readdirSync()` is called with the `withFileTypes` option set to true, the resulting array is filled with fs.Dirent objects, rather than strings or Buffers.

调用`fs.readdir()` or `fs.readdirSync()`，并且设置`withFileTypes`，结果数组就是`fs.Dirent`对象，而不是字符串或buffer

# Class: fs.FSWatcher

A successful call to fs.watch() method will return a new fs.FSWatcher object.

调用`fs.watch()`返回`fs.FSWatcher`对象

All fs.FSWatcher objects are EventEmitter's that will emit a 'change' event whenever a specific watched file is modified.

每当fs.FSWatcher观察的文件修改，会触发`change`事件，


# Class: fs.Stats
A fs.Stats object provides information about a file.
fs.Stats表示一个文件的信息

- fs.stat()
- fs.lstat()
- fs.fstat() 

这三个方法的回调参数就是fs.Stats

# Class: fs.ReadStream

A successful call to fs.createReadStream() will return a new fs.ReadStream object.

`fs.createReadStream()`会返回fs.ReadStream对象

# Class: fs.WriteStream


 
# fs Promises API

## class: FileHandle

- filehandle.appendFile(data, options)
- filehandle.chmod(mode)
- filehandle.chown(uid, gid)
- filehandle.close()
- filehandle.datasync()
- filehandle.fd
- filehandle.read(buffer, offset, length, position)
- filehandle.readFile(options)
- filehandle.stat([options])
- filehandle.sync()
- filehandle.truncate(len)
- filehandle.utimes(atime, mtime)
- filehandle.write(buffer, offset, length, position)
- filehandle.write(string[, position[, encoding]])
- filehandle.writeFile(data, options)


## 方法
- fsPromises.access(path[, mode])
- fsPromises.appendFile(path, data[, options])
- fsPromises.chmod(path, mode)
- fsPromises.chown(path, uid, gid)
- fsPromises.copyFile(src, dest[, flags])
- fsPromises.lchmod(path, mode)
- fsPromises.lchown(path, uid, gid)
- fsPromises.link(existingPath, newPath)
- fsPromises.lstat(path[, options])
- fsPromises.mkdir(path[, options])
- fsPromises.mkdtemp(prefix[, options])
- fsPromises.open(path, flags[, mode])
- fsPromises.readdir(path[, options])
- fsPromises.readFile(path[, options])
- fsPromises.readlink(path[, options])
- fsPromises.realpath(path[, options])
- fsPromises.rename(oldPath, newPath)
- fsPromises.rmdir(path)
- fsPromises.stat(path[, options])
- fsPromises.symlink(target, path[, type])
- fsPromises.truncate(path[, len])
- fsPromises.unlink(path)
- fsPromises.utimes(path, atime, mtime)
- fsPromises.writeFile(file, data[, options])
















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

