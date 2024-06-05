let x=0;
document.getElementById("but").onclick = function(){
    x=Math.floor(Math.random() * 100) + 1;
    document.getElementById("count").textContent = x; 
}