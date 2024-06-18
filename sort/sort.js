let number =[2,3,45,7,8,4,2,5,7];
number.sort( (a, b) => a-b);
console.log(number);
const person=[{
    name:"spoong",
    age:21,
    gpa:6.0},
    {
     name:"patric",
     age:57,
     gpa:8.0,   
    }]
let detail=person.sort((a,b)=>a.age-b.age);
console.log(detail);