let sum1=[1,2,3,4,5,6,7,8,9];
const sum2=[9,8,76,65,5,4,3,2,1];
function sum(element){
       console.log(sum1);
       element();
}
function sum3(element){
    console.log(sum2);
}
sum(sum3);
//for each
let number=[1,23,4,5,6];
function sum4(element){
    console.log(element);
}
number.forEach(sum4);
function double(element,index,array){
    console.log(array[index]=element*2);
}
number.forEach(double);
console.log("nn");
//map
let date=["10-12-2005"];
function double1(element,index,array){
    return array[index]=element.split("-");
}
let val=date.map(double1);
console.log(`${val[1]}/${val[0]}/${val[2]}`);
//filter
let number2=[1,2,3,4,5,6,7,8,9,0]
function odd(element){
    return element % 2 === 0; 
}
const val2=number2.filter(odd);
console.log(val2);
//reduce
let number3=[1,2,3,4,5,6,7,8,9];
function add(accumulator,next){
    return accumulator+next;
}
let val3=number3.reduce(add);
console.log(val3);
