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

文件句柄，使用`fs.open()`产生,用来操作数据

# Class: fs.Dirent

When `fs.readdir()` or `fs.readdirSync()` is called with the `withFileTypes` option set to true, the resulting array is filled with fs.Dirent objects, rather than strings or Buffers.

调用`fs.readdir()` or `fs.readdirSync()`，并且设置`withFileTypes`，结果数组就是`fs.Dirent`对象，而不是字符串或buffer

# Class: fs.FSWatcher

A successful call to fs.watch() method will return a new fs.FSWatcher object.

调用`fs.watch()`返回`fs.FSWatcher`对象，本质上就是继承了EventEmiter

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


 
# 方法


- fs.access(path[, mode], callback)
- fs.appendFile(path, data[, options], callback)
- fs.chmod(path, mode, callback)
- fs.chown(path, uid, gid, callback)
- fs.close(fd, callback)
- fs.constants
- fs.copyFile(src, dest[, flags], callback)
- fs.createReadStream(path[, options])
- fs.createWriteStream(path[, options])
- fs.fchmod(fd, mode, callback)
- fs.fchown(fd, uid, gid, callback)
- fs.fstat(fd[, options], callback)
- fs.fsync(fd, callback)
- fs.ftruncate(fd[, len], callback)
- fs.futimes(fd, atime, mtime, callback)
- fs.lchmod(path, mode, callback)
- fs.lchown(path, uid, gid, callback)
- fs.link(existingPath, newPath, callback)
- fs.lstat(path[, options], callback)
- fs.mkdir(path[, options], callback)
- fs.mkdtemp(prefix[, options], callback)
- fs.open(path, flags[, mode], callback)
- fs.read(fd, buffer, offset, length, position, callback)
- fs.readdir(path[, options], callback)
- fs.readFile(path[, options], callback)
- fs.readlink(path[, options], callback)
- fs.realpath(path[, options], callback)
- fs.realpath.native(path[, options], callback)
- fs.rename(oldPath, newPath, callback)
- fs.rmdir(path, callback)
- fs.stat(path[, options], callback)
- fs.symlink(target, path[, type], callback)
- fs.truncate(path[, len], callback)
- fs.unlink(path, callback)
- fs.unwatchFile(filename[, listener])
- fs.utimes(path, atime, mtime, callback)
- fs.watch(filename[, options][, listener])
- fs.watchFile(filename[, options], listener)
- fs.write(fd, buffer[, offset[, length[, position]]], callback)
- fs.writeFile(file, data[, options], callback)


## 方法

## fs.access(path[, mode], callback)
Tests a user's permissions for the file or directory specified by path

通过给定的path，测试文件或者文件夹对应的用户的权限

## fs.appendFile(path, data[, options], callback)
Asynchronously append data to a file, `creating the file if it does not yet exist`. data can be a string or a Buffer.

## fs.chmod(path, mode, callback)
Asynchronously changes the permissions of a file.

## fs.chown(path, uid, gid, callback)
Asynchronously changes owner and group of a file. 
## fs.close(fd, callback)
Asynchronous close(2)

linux 函数 close的异步版本
## fs.constants

fs上面挂载的常量，大多数都是mode

## fs.copyFile(src, dest[, flags], callback)

## fs.createReadStream(path[, options])

## fs.createWriteStream(path[, options])

## fs.fchmod(fd, mode, callback)

linux的函数fchmod的异步版本===fs.chmod()

- fs.fchown(fd, uid, gid, callback)
- fs.fstat(fd[, options], callback)
- fs.fsync(fd, callback)
- fs.ftruncate(fd[, len], callback)
- fs.futimes(fd, atime, mtime, callback)
- fs.lchmod(path, mode, callback)
- fs.lchown(path, uid, gid, callback)
- fs.link(existingPath, newPath, callback)
- fs.lstat(path[, options], callback)

这些函数都是linux系统的函数的异步版本


## fs.mkdir(path[, options], callback)
Asynchronously creates a directory.

## fs.mkdtemp(prefix[, options], callback)

## fs.open(path, flags[, mode], callback)
也是linux函数的异步版本

注意，callback的第二个参数是file descriptor，很多地方操作文件都需要fd

## fs.read(fd, buffer, offset, length, position, callback)


## fs.readdir(path[, options], callback)

linux函数的异步版本

## fs.readFile(path[, options], callback)

## fs.readlink(path[, options], callback)
## fs.realpath(path[, options], callback)
## fs.realpath.native(path[, options], callback)
## fs.rename(oldPath, newPath, callback)
## fs.rmdir(path, callback)
## fs.stat(path[, options], callback)


Using fs.stat() to check for the existence of a file before calling fs.open(), fs.readFile() or fs.writeFile() is not recommended. Instead, user code should open/read/write the file directly and handle the error raised if the file is not available.

To check if a file exists without manipulating it afterwards, fs.access() is recommended.

不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查文件是否存在。 而是应该直接打开、读取或写入文件，如果文件不可用则处理引发的错误。

要检查文件是否存在但随后并不对其进行操作，则建议使用 fs.access()。


## fs.symlink(target, path[, type], callback)
## fs.truncate(path[, len], callback)
## fs.unlink(path, callback)
## fs.unwatchFile(filename[, listener])
## fs.utimes(path, atime, mtime, callback)
## fs.watch(filename[, options][, listener])
Watch for changes on filename, where filename is either a file or a directory.
观察文件或文件夹的变动
## fs.watchFile(filename[, options], listener)
## fs.write(fd, buffer[, offset[, length[, position]]], callback)
## fs.writeFile(file, data[, options], callback## 



# 总结

在遍历文件夹的时候，应该使用`withFileTypes`配置，因为这样就可以得到`fs.Dirent`实例了，通过这个实例判断文件类型，而不用再次调用`fs.stat()`，这样避免陷入另外一个回调函数中

---------------
createWriteStream(),createReadStream()没有promise版本，也没有异步版本

-----------

如果仅仅是判断文件是否存在，使用`fs.access()`，如果有后续操作，使用`fs.stat()`最好

--------------
如何判断一个文件夹是否存在

```
try {
    await fsp.access(dir);
} catch (error) {
    await fsp.mkdir(dir);
}
```
通过这种方式才最合适，因为如果走回调来判断错误的话，会有一个问题就是接下来的操作就比较麻烦了

