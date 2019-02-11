---
title: clild_process
categories: 

- NODEJS

---

# clild_process



#常见方法
- exec()
- execFile()
- spawn()
- fork()
- send()


```
const child_process=require('child_process');
const ping=child_process.spawn('ping',['www.baidu.com']);
ping.stdout.setEncoding('utf8');
ping.stdout.on('data',function(data){
  console.log(data);
})
```