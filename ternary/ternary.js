let age= 45;
Number(age);
document.getElementById("submit").onclick=function(){
let ans= age>= 18 ? "you can take license": "you don't take licence";
document.getElementById("par").textContent= ans;
console.log(ans);
}
let username="   hello world";
console.log(username);
console.log(username.charAt(3));
console.log(username.indexOf("r"));
console.log(username.lastIndexOf("l"));
console.log(username.length);
console.log(username.trim());
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.repeat(3));
console.log(username.startsWith(" "));
console.log(username.replaceAll(" ","$"));
console.log(username.padStart(30,"6"));
console.log(username.padEnd(30,"6"));
console.log(username.slice(3,5));
console.log(username.slice(3,));
console.log(username.slice(-1));
console.log(username.slice(3,username.indexOf("r")));
console.log(username.slice(3,username.indexOf("r")+1));
console.log(username.slice(username.indexOf("r")));

