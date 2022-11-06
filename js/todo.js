const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(); //UI에서만 제거되고, 값은 쓸 수 있답니다. 그래서 이 밑에도 쓸 수 있음
    toDos = toDos.filter((toDoElement)=>toDoElement.id !== parseInt(li.id)); //!=로 형변환 PASS 가능, but string->int 형변환 해서 비교하는 게 safer.
    saveToDos();

}
function PaintToDo(newToDoObject){ //꼭 저 이름 아니여도 상관없음.. 근데 이해 쉽게~
    //console.log(`I will paint ${newToDo}`);
    //console.log("i will paint", newToDo);  //이게 더 나아보임
    const li = document.createElement("li");
    li.id=newToDoObject.id;
    const span = document.createElement("span");
    span.innerText = newToDoObject.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText = "❌";
    li.appendChild(span); //하위로 span 넣기! 이작업은 항상 마지막에 
    li.appendChild(button);
    //console.log(li);
    toDoList.appendChild(li);


}
function onToDoSubmit(event){
    event.preventDefault(); //외워버리자 자주쓰네 이거 
    //console.log(toDoInput.value); //value 써야 저장된 값이 뜸. 그냥쓰면 가져온 태그 나옴
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = { 
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    PaintToDo(newToDoObject)
    saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos!== null){ //!==인거 기억,, = 아님,,
    
    const parsedToDos = JSON.parse(savedToDos); //저장된 투두랑 함수랑 헷갈림,, on을 쓰자! 끝나면 따라와 그게 내방식~ 이언닌 짗궂어~~ 니별명은 루줘!~
    toDos = parsedToDos; //값 업데이트. 새로고침해도 이전 데이터 남게 해줌. todos 수정시마다 이거 붙여줘야된다~
    parsedToDos.forEach(PaintToDo); //이거 빈종이에 쓸 수 있어야. 함수는 js가 자동으로 각 요소마다 실행해주기떄문에ㅡㅡㅡ
        
    }

