const fs=require('fs');
let content=fs.readFileSync('./test.md','utf-8');
let res=content.replace(/\r\n/g,'');
console.log(res);