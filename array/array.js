let fruits=["apple","orange","pineapple","coconut"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.pop());
console.log(fruits.push("avacado"));
console.log(fruits);
console.log(fruits.unshift("alovera"));
console.log(fruits);
console.log(fruits.length);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.indexOf("apple"));
for(let fruit of fruits){
    console.log(fruit);
}
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
for(let i=fruits.length;i>=0;i--){
    console.log(fruits[i]);
}