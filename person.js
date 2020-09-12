class Person{
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color
    }

     greeting(){
        console.log(`hello this is ${this.name} i am ${this.age}, i love ${this.color}`)
    }
   
}
module.exports = Person