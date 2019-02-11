---
title: vim
categories: 
- LINUX
---
# base

vim是一个linux系统的文本编辑器，只能使用键盘，不能使用鼠标，功能强大

# 模式

vim编辑器由于不能使用鼠标操作，所以就只能使用键盘，导致会有大量快捷键

vim设计了很多的模式，在不同的模式下面输入不同的字符表示不同的意思

比如在文本模式下，输入i，表示的就是输入一个字符i

而在命令模式下面，输入i，则表示的是进入插入模式

一共有三种模式:
- 命令模式:该模式是vim的默认模式，是文本模式和底行模式的中间桥梁
- 底行模式:输入命令的模式
- 文本模式:文本编辑的模式

使用vim的过程，就是在这三种模式中来回穿梭，使用不同快捷键的过程

有一点需要注意，底行模式无法直接进入文本模式，文本模式也无法直接进入底行模式，也就是说，这两者切换必须通过命令模式

### 命令模式
默认的模式，在这种模式下下面，可以实现光标的移动，复制，删除，粘贴等功能


### 底行模式

这种模式主要实现的功能就是字符查找和替换，文件的保存退出

### 文本模式

输入字符，但是这种模式下面只能通过方向键来移动光标，这不是vim推荐的

想要移动光标的话，vim推荐先进入命令模式，然后使用`h,j,k,l`来移动，然后`i`,`a`等

也就是说，在这种模式下面，任何键盘的敲击，都应该是输入字符

不应该在这种模式下下面使用功能键


# 模式切换

命令模式->文本模式：`i`,`I`,`a`,`A`,`o`,`O`,`s`,`S`

文本模式->命令模式:`esc`

文本模式->末行模式:`esc`+`:`

末行模式->文本模式:无法直接进入


#移动光标

## 普通跳转
在文本编辑模式下面，只能通过方向键盘来移动光标

在命令模式下，可以使用`h,j,k,l`来移动光标，也可以使用方向键盘来移动

- h: ← 左移

- l: → 右移

- j: ↓ 下移

- k: ↑ 上移

## 快速跳转

- gg: 光标移动文件开头

- G: 光标移动到文件末尾

- 0: 光标移动到行首

- $: 光标移动到行尾

- 123G：跳转到第123行

## 选择
v:命令模式输入v进入visual模式，可以使用`h,j,k,l`选择高亮文本,选择后可以`y`,`d`

# 复制
- yy

# 粘贴
- p

# 删除
- d:本质上是剪切，vim没有删除

# 查找&替换
- /aaa:文件中查找
- /s/aaa/bbb/g ：光标所在行替换
- /%s/aaa/bbb/g:文件中替换所有

# 缩进
- `>>,<<`:命令模式下的缩进
- gg=G:命令模式下的代码格式化



# 分屏
- :sp 上下分屏
- :vsp 所有分屏
- ctrl+w+w：屏幕切换
- :wqall:关闭所有

# 其他

在命令模式下保存退出: ZZ

`:sec nu`打开行号

在linux 系统编程中，光标放在对应的接口函数上，按 `shift+K`可以直接进入该函数的man page页面，非常好用