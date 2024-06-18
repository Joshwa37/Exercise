class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street,state){
        this.street=street;
        this.state=state;
    }
}
const person=new Person("spoong",21,"RGST","tamilnadu");
console.log(person.address.street);