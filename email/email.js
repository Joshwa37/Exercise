function email1(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(email1("jdsjhcwj@gmail.com"));
console.log(email1("jdsjhcwjgmail.com"));
console.log(email1("jdsjhcwj@gmail"));
