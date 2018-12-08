---
title: linux
categories: 
- LINUX
---

# BASE
## 起源

0、 1965年之前，还没有操作系统，这导致一个程序只能在一个计算机上跑，换另外一个计算机，可能需要重写程序，这很麻烦

1、贝尔实验室研发出了一个操作系统'MULTICS',是多任务，多用户的操作系统，但是太复杂，没有成功

2、其主要开发者thompson和ritchie在此基础上开发了一个新的操作系统，就是unix

3、后来，两人合伙发明了C语言，后来有重写了UNIX

4、后来，Unix内部出现了分歧，分为两派(BSD和AT&T)，导致unix内乱，开始收费了

5、后来，有一个教授照着UNIX写了一个迷你版本的unix(mini-unix)，简称minix

6、后来，linus这个大学生，在minix的基础上，写了linux

7、GNU是一个计划，由Stallman领导，这个计划打算写一个开源的，和unix类似的操作系统，以来反对unix的收费，所以起名叫做'GNU is not unix'

8、GNU打算自己开发一个操作系统的，但是发现了linux，不用自己开发了，于是他们就合并了

9、终于出现了一个免费，开源的操作系统---linux


----------------

所有的操作系统，其实都是源于unix，windows，linux，macos，其实都是同宗同源的，基本思想都一致

# SHELL



1、计算机只能识别0和1，输入01对人类来说很麻烦，所以需要一个更好的'人机交互方式'

2、最早的交互方式就是打字机，我们可以输入不同的英文单词，表示不同的意思

3、这就是shell 的前生，我们只需要操作‘壳’，就可以操作计算机，更人性化

4、从这个角度看，windows的桌面系统，命令行等都可以称作是shell

5、这里的shell，特指类unix上的终端



## bash


shell本质上就是一个软件， 有很多，比较出名的就是shell.exe和bash.exe了

1、unix系统，自带了一个命令解析器，叫做shell，是一个叫做Bourne的人开发的

2、linux出来后，又请这个人来开发了一个shell，叫做bash(Bourne again shell)

所以，linux上的命令解析器一般叫做bash,两者高度相似

bash 有很多快捷键,常见的有

- ctrl+e:回到尾
- ctrl+a：回到头


操作系统只需要提供一些常见的操作封装成函数，用户只需要在shell中输入对应的函数，就可以执行操作了

linux中大部分的命令由此而来


# 目录和文件

windows系统，将硬盘划分成多个目录树，但是unix/linux上就一个目录树

linux常见的目录


- / 根目录
- /bin 命令保存目录（普通用户权限）
- /sbin 命令保存目录（root权限）
- /boot 启动目录，包含启动相关文件，和开机有关
- /dev 设备文件保存目录
- /etc 配置文件保存目录
- /home 普通用户家目录
- /lib 系统库保存目录
- /mnt 系统挂载目录
- /media 挂载目录（常用于光盘挂载）
- /root 超级用户家目录
- /tmp 临时目录
- /usr 系统软件资源目录
- /var 系统相关文档内容



# 常见命令

- mkdir(make directory):创建目录
- cd(change directory):目录跳转
- ls(list):列出目录内容
- touch:修改文件时间，或者创建文件
- rm(remove):删除文件或目录
- cat:查看文件内容，或者
- pwd:当前所在目录
- which:查看命令所在目录
- mv(move):移动或者
- cp(copy)：复制
- more:读取文件
- less:读取文件,
- tail:读取文件尾巴
- head:读取文件头
- tree:显示目录树(需要安装)
- ln(link):创建链接


# cp

```
 cp [OPTION] SOURCE DEST 
```
- a:same as -dR --preserve=all,保留文件修改时间等所有信息


# ln

```
ln [OPTION] TARGET LINK_NAME
```
- s :创建软连接(需要使用绝对路径)


