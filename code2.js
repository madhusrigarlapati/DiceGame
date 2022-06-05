
let r1,r2,res;

document.getElementById("b2").addEventListener("click",function(){
    document.getElementById("one").innerHTML="player2 trun"
});
document.getElementById("b3").addEventListener("click",function(){
    document.getElementById("one").innerHTML=res+"  TryAgain!!"
});

function player1(){
    let a=Math.floor(Math.random()*6)+1;
    let y="two";
    roll(a,y);
    r1=a;
}
function player2(){
    let b=Math.floor(Math.random()*6)+1;
    let y="three";
    roll(b,y);
    r2=b;
    dice();
}
function roll(x,y){
    document.getElementById(y).src="dice"+x+".png";
}

function dice(){
    if(r1>r2){
        res="player 1 wins";
    }
    else if(r2>r1){
        res="player2 wins";
    }
    else{
        res="draw";
    }
    
}

