---
title: SOCKET
categories: 
- COMPUTER
---

# SOCKET

Socket本身有“插座”的意思，在Linux环境下，用于表示`进程间网络通信的特殊文件类型`。`本质为内核借助缓冲区形成的伪文件`。



# socket IPC（本地套接字domain）

socket API原本是为网络通讯设计的，但后来在socket的框架上发展出一种IPC机制，就是UNIX Domain Socket。虽然网络socket也可用于同一台主机的进程间通讯（通过loopback地址127.0.0.1），但是UNIX Domain Socket用于IPC更有效率


目前已成为使用`最广泛的IPC机制`

