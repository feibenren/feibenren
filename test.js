var p=new Promise(function(resolve,reject){
    if(true){
        resolve();
    }else{
        reject();
    }
});


function test(){
    return  p.then(function(){
        console.log(111);
        setTimeout(() => {
            console.log(333);
        }, 2000);
    }).then(function(){
        console.log(222);
    }).catch(function(err){
        console.log(err);
    })
}

var res=test();
console.log(res);