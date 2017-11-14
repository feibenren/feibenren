var p=new Promise(function(resolve,reject){
    if(true){
        resolve();
    }else{
        reject();
    }
});
p.then(function(){
    console.log(111);
}).catch(function(err){
    console.log(err);
})