const fs=require('fs');
let content=fs.readFileSync('./test.md','utf-8');
let res=content.replace(/\n/g,'');
console.log(res);