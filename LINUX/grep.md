---
title: grep
categories: 
- LINUX
---


# grep

grep 命令是查找正则的工具，来源可以是文件或者stdout


结果是匹配的内容


这里的正则，绝大多数就直接搜索字符串，最多使用*匹配符

```
Usage: grep [OPTION]... PATTERN [FILE]...
Search for PATTERN in each FILE or standard input.
PATTERN is, by default, a basic regular expression (BRE).
Example: grep -i 'hello world' menu.h main.c
```