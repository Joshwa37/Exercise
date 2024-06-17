const color=["red","blue","white"];
[color[0],color[2]]=[color[2],color[0]];
console.log(color);
const [fcolor,scolor,...ecolor]=color;
console.log(fcolor);
console.log(scolor);
console.log(ecolor);
const person={
    firstname:"spoong",
    age:21,
}
function detail({firstname,age,job="unemp"}){
    console.log(firstname);
    console.log(age);
    console.log(job);
}
detail(person);