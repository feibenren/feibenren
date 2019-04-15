---
title: path
categories: 
- NODEJS
---

# path

The path module provides utilities for working with file and directory paths.

path模块提供了很过的用来处理文件和文件夹路径的小工具

方法

- path.basename(path[, ext])
- path.delimiter
- path.dirname(path)
- path.extname(path)
- path.format(pathObject)
- path.isAbsolute(path)
- path.join([...paths])
- path.normalize(path)
- path.parse(path)
- path.posix
- path.relative(from, to)
- path.resolve([...paths])
- path.sep
- path.toNamespacedPath(path)
- path.win32

# path格式

```
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
```

- root
- dir
- base
- name
- ext


# path.sep

# path.basename(path[, ext])

The path.basename() methods returns the last portion of a path, similar to the Unix basename command

这个方法会返回路径最后一部分，类似unix的`basename`命令

# path.delimiter

Provides the platform-specific path delimiter:

提供平台特定的路径分隔符

- ; for Windows
- : for POSIX

```
console.log(process.env.PATH);
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

process.env.PATH.split(path.delimiter);
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
```


# path.dirname(path)
The path.dirname() method returns the directory name of a path, similar to the Unix dirname command

返回path的文件夹名，类似unix的`dirname`命令

# path.extname(path)

The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if the first character of the basename of path (see path.basename()) is ., then an empty string is returned.

这个方法会返回path的扩展名，从最后的`.`开始，直到path的末尾

如果没有`.`，或者basename的第一个字符是`.`,那么会返回一个空字符串

# path.format(pathObject)

The path.format() method returns a path string from an object. This is the opposite of path.parse().

这个方法将一个对象变成path string，和`path.parse()`正好相反

# path.isAbsolute(path)

判定给定的path是否是一个绝对路径

# path.join([...paths])

The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

这个方法会将给定的path片段，使用平台特有的分隔符来组装合并，然后进行`normalize()`

# path.normalize(path)

处理掉路径中的`.`,`..`


# path.parse(path)

The path.parse() method returns an object whose properties represent significant elements of the path

这个方法会将path字符串解析成一个对象，这个对象上有

- root
- base
- dir
- name
- ext


# path.relative(from, to)

这个方法，会将`to`当做基点，将`from`按照`to`来获得`相对路径`

# path.resolve([...paths])

The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

将一个路径队列，合并成一个绝对路径


# path.posix

提供针对`posix`系统的特定方法的接口

# path.win32

提供针对windows系统的特定方法的接口
