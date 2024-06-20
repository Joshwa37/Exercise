const val=document.getElementsByClassName('given');
const val2=document.getElementsByTagName('li')
const val3=document.querySelector('h1');
const val4=document.querySelectorAll('ul');
val[0].style.backgroundColor="yellow";
val2[0].style.backgroundColor="green";
val3.style.backgroundColor="black";
val4[0].style.backgroundColor="blue";
Array.from(val2).forEach(value=>{
    value.style.backgroundColor="blue";
})
