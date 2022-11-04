/*
//2일차
//변수, let, const
const a = 5;
const b = 2
let x = 7;
var y = 111;
//변수 쓰면 여러번 쓸 것을 한 번 씀
console.log(a+b);
console.log(a*b);
console.log(a/b+x);
console.log(y);
//let의 할당값 변경해보기
x = 5;
console.log("x=",x);
//var의 재할당
y=11;
console.log("y=",y);
//var의 재선언(var을 쓰지 말아야 하는 이유임. 나중에 실수로 값을 밑에서 바꾸면 끝장남)
var y = 1;
//콤마 하면 띄어쓰고 글자 붙이기, +는 그냥 글자 더하기 
console.log("y="+y);



//Array 쓰는법
const week = ["mon", "twe", "wed", "thu", "fri", "sat"];
//Array의 element 출력하기
console.log(week[5]);
// element 추가하기
week[6]="sun";
console.log(week);
//element 값 변경
week[4]=6;
console.log(week);
// 얜 안돼week=["a","b","c","d","e","f","g"];
// 괄호 마지막, 값 처음꺼만 적용되나봄??week[3,1,5]="i","l","f";

//Object 쓰는법
const Sarang=
{
    pashion: 'EXCELLENT',
    age:22,
    married:false,

}
//오브젝트와 특성 출력
console.log(Sarang);
console.log(Sarang.age);
console.log(Sarang["age"]);
//오브젝트에 특성+값 추가
Sarang.beauty=10000;
console.log(Sarang);
//오브젝트의 한 특성의 값 변경(여기선 숫자)
Sarang.age=Sarang.age+2;
console.log(Sarang.age);
*/
/*
//3일차
//object+function을 이용한 계산기
const calculator={
    add: function(firstNumber, secondNumber){console.log(firstNumber+secondNumber)},
    //다른 함수더라도 매개변수 이름 같은 건 상관 없는듯? 그걸 출력하려고 하면 문제고 
    subtract: function(firstNumber, secondNumber){console.log(firstNumber-secondNumber)},
    multiply: function(firstNumber, secondNumber){console.log(firstNumber*secondNumber)},
    divide: function(firstNumber, secondNumber){console.log(firstNumber/secondNumber)},
    square: function(firstNumber, secondNumber){console.log(firstNumber**secondNumber)}
};
calculator.add(1,2);
calculator.subtract(2,10); // minus is ok
calculator.multiply(4,4);
calculator.multiply(4,5,6,7); // 앞에서부터 매개변수 개수에서 끊김, 오류는 없음
calculator.divide(10,5);
calculator.square(2,10);
// 이거안됨. 스퀘어 정의가 안됐다는데 계산기 없어서그런듯?square(2,10);
*/
/*
//4일차
//document: js의 내장 object로, html 코드를 가져옴
//body 가져오고 console에 출력
const showbody = document.body;
console.log(showbody);
//title 가져오고 console에 출력
let showtitle=document.title;
showtitle = "babo";
console.log(showtitle);

//dir은 element를 보여줌
console.dir(showbody);


//html에서 js파일 가져오기를 바디 맨 마지막에 해야함,,ㄷㄷ
const title = document.querySelector("div.first h1");
console.dir(title);
//점 찍고 안나와도 당황 ㄴㄴ dir에 나온거면 ㄱㅊㄱㅊ
title.innerText = "js에서 innerText 바꾸기";
title.style.color="blue";


//#3.3 Events
//html 코드 받아오기
const h1 = document.querySelector("div.first h1");

//js가 실행할 함수 목록들
function handleTitleClick(){
    console.log("title was clicked");
    h1.style.color="red";
}
function handleMouseEnter(){
    h1.innerText = "Mouse is on";
}
function handleMouseLeave(){
    h1.innerText = "Mouse is leaved";
}
function handleWindowResize(){
document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("Copier!복사됨!");
}
function handleWindowOffline(){
    alert("No Wifi!");

}
function handleWindowOnline(){
    alert("on-line");

}
//함수 뒤 () 적지 말기 
//title.onclick=handleTitleClick;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
/*

//5일차
//#3.6 종합
const h1 = document.querySelector("div.first h1");

function handleTitleClick(){
    const currentColor = h1.style.color
    let newColor;
    if(currentColor==="blue"){
        newColor="tomato";
    }else {
        newColor = "blue";
    }
    h1.style.color=newColor;
    console.log(h1.style.color);
}

h1.addEventListener("click", handleTitleClick);
*/

//10일차: clock
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;

} 
//0초에 시계 보여줌
getClock()
setInterval(getClock, 1000); 
