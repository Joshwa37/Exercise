
//for each
let number=[1,23,4,5,6];
number.forEach(function (element){
    console.log(element);
});



number.forEach(function (element,index,array){
    console.log(array[index]=element*2);
});
console.log("nn");
//map


let date=["10-12-2005"];
let val=date.map(function (element,index,array){
    return array[index]=element.split("-");
});
console.log(`${val[1]}/${val[0]}/${val[2]}`);
console.log("jgfhsdgvjhsdgc");


let date1=["10-04-2005","21-06-2003","30-07-2008"];
let val4=date1.map(function(element){
    const part=element.split("-");
    return `${part[2]}/${part[1]}/${part[0]}`;
})
console.log(val4);


//filter
let number2=[1,2,3,4,5,6,7,8,9,0];
const val2=number2.filter(function (element){
    return element % 2 === 0; 
});
console.log(val2);


//reduce
let number3=[1,2,3,4,5,6,7,8,9];
let val3=number3.reduce(function (accumulator,next){
    return accumulator+next;
});
console.log(val3);
