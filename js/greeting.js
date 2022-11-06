const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden'; //2번이상 쓰이면 변수행, string이며 중요도가 낮으면 대문자로 
const USERNAME_KEY = "username";

function paintGreetings(username)
{
    

    
    //string 안에 변수넣기: &{}, 따옴표(') 아니고 백틱(`)임에 주의하기
    greeting.innerText = `Hello, ${username} `; //새로고침 시 save된 username만 남으니까!
    greeting.classList.remove(HIDDEN_CLASSNAME);//숨겨진 텍스트(유저에게 인사) 보여주기
}
function onLoginSubmit(event){ //argument에. 반환값이 방금 일어난 event가 object로 저장됨 
    event.preventDefault(); // pre-함수: 기본 동작(submit)을 막아줌
    const username = loginInput.value;//입력창에 적은 값을 변수선언
    localStorage.setItem(USERNAME_KEY, username); //set인데 get으로 적어서 난리남 ㅋㅋㅋㅋ 조심,,뒤죽박죽 외워졌네
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼 숨기기
    paintGreetings(username);
    console.log(username);
}


const saveUsername = localStorage.getItem(USERNAME_KEY) //유저가 입력한 이름을 알려줌 
if(saveUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    //show the greetings
    
    paintGreetings(saveUsername);
}