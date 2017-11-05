var Human=require('./Human');
class Person extends Human{
    eat(){
        console.log('Person...');
    }
}
module.exports=Person;