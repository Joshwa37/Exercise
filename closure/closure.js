function count(){
    let score=0;
    function increase(incr){
        score+=incr;
        console.log(incr);
    }
    function decrease(dec){
        score-=dec;
        console.log(dec);
    }
    function total(){
        console.log(score);
    }
    return {increase,decrease,total};
}
const cou=count();
cou.increase(5);
cou.decrease(3);
cou.total();




