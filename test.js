const crypto=require('crypto');

const cipher=crypto.createCipheriv('des3','key1',null);

cipher.update('hello');

let res=cipher.final('hex');
console.log(res);