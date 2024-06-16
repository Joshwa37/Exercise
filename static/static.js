class Product{
    static productcout=0;
    constructor(product,price){
        this.product=product;
        this.price=price;
        Product.productcout++;
    }
    show(){
        console.log(this.product);
        console.log(this.price);
        console.log(Product.productcout);
    }
}
let user1=new Product("burgar",56);
user1.show();