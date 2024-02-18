var num = 1.9;

function fn(){
    document.getElementById("n").innerHTML=num++ 
    if(num > 89.9){
        clearInterval(a)
    }
}
a=setInterval( fn,50)
// 
var num1 = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;
var num5 = 1;

function fn1(){
    document.getElementById("n2").innerHTML=num1++ 
    if(num1 > 25){
        clearInterval(b)
    }
}
b=setInterval(fn1,150)
function fn2(){
    document.getElementById("n3").innerHTML=num2++ 

    if(num2 > 160){
        clearInterval(c)
    }
}
c=setInterval(fn2,25)
function fn4(){
    document.getElementById("n4").innerHTML=num4++ 

    if(num4 > 450){
        clearInterval(d)
    }
}
d=setInterval(fn4,10)

function fn5(){
    document.getElementById("n5").innerHTML=num5++ + "K" 

    if(num5 > 5){
        clearInterval(e)
    }
}
e=setInterval(fn5,1000)