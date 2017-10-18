function Person(name){
    this.name=name;
    this.say=function(word){
        console.log(word);
    }
}
/* Person.prototype.eat=function(food){
    console.log(food);
} */
var p1=new Person('wang');
p1.say('i am p1');

console.log(Person.prototype);


