let shufffle=["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
for(let i=shufffle.length-1;i>0;i--){
    let shu=Math.floor(Math.random()*(i+1));
    console.log(shu);
}