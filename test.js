try{
    console.log(111);
    setTimeout(function() {
        throw new Error('setTimeout err');  
    }, 2000);
}catch(e){
    console.log('catch:');
    console.log(e);
}finally{
    console.log('finally');
}

console.log('after try');