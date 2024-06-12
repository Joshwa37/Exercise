//it is spread operator
let fruit=["apple","banana","califlower"];
console.log(...fruit);
//it is rest parameter
function rest(...string){
    console.log(string);
    console.log(...string.join("*"));
}
rest("j","o","s");

