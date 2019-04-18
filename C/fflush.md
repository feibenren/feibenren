---
title: fflush
categories: 
- C
---


# fflush

For output streams, fflush() forces a write of all user-space buffered data for the given output or update stream via the stream's underlying write function. 

针对输出流，fflush()会强制已经得到的buffer数据写入给定的output

For input streams, fflush() discards any buffered data that has been fetched from the underlying file, but has not been consumed by the application. The open status of the stream is unaffected.

针对输入流，fflush会忽略程序已经得到的缓存数据


# 原理

为什么要手动flush?

flush和缓冲区有关

比如写入一个文件，默认的流程是`程序产生的数据-->缓冲区--->目的地`

假设缓冲区容量是8K

缓冲区的规则是满8K就向目的地写入一次数据，这样可以提高效率

但是如果数据不满足8K的话，那么就不会写入目的地，会在缓冲区一直保留，直到缓冲区满8K再继续

这样就会导致一个问题，最后可能导致`部分数据停留在缓冲区`

flush的意思就是将缓冲区的数据强制写到目的地


# 总结

需要flush的原因，是缓冲机制带来的