let mysel=document.getElementById("mycheck");
let mysel1=document.getElementById("mycheck1");
let mysel2=document.getElementById("mycheck2");

document.getElementById("submit").onclick=function(){
if(mysel.checked){
    document.getElementById("par").textContent = "you select B.tech"; 
    console.log("dytdhtd");
}
else if(mysel2.checked){
    document.getElementById("par").textContent = "you select B.E";
}
else{
    document.getElementById("par").textContent = "you select Arts";
}
}