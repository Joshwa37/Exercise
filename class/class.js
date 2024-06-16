class grass{
        constructor(name,age){
                this.name=name;
                this.age=age;
        }
        show(){
            console.log(this.name);
            console.log(this.age);
        }
}
const prod=new grass("pizza",45);
prod.show();
