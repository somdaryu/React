import './App.css';
import { useState, useReducer } from 'react';

function App() {
  const [input, setInput] = useState('');

  //준비물: 상태를 변경하는 로직을 가지고 있는 함수
  //매개변수 : 이전 todolist, 액션
  //리턴값: 새로운 todolist
  //action {type: '명령', 그 외 다른 값들...}
  const todoReducer = (oldState, action) => {
    console.log(oldState);
    console.log(action);
    //조건: 추가, 삭제, 초기화
    if (action.type === "ADD") {
      //todolist에 새로운 요소를 추가하고 리턴
      //state는 이전 값을 변경할 수 없음
      //이전 state를 복사하여 새로운 객체로 생성해야함
      let newTodoList = [...oldState]; 

      //만약 list에 한건도 없으면 0번
      let id = 0;
      if(oldState.length > 0){
        id = oldState.length;
      }

      let newTodo = {id: id, text: action.text};
      newTodoList.push(newTodo); //리스트에 새로운 요소 추가
      
      return newTodoList;

    } else if (action.type === "DELETE") {
      //todolist에 해당 요소를 삭제하고 리턴
      //단건 삭제 -> PK -> 아이디
      //복제본 생성
      let newTodoList = [...oldState];

      //배열의 filter함수를 사용하여 해당 요소 제거
      //filter함수 : 배열을 순회하면서 조건을 만족하면 반환
      let filterList = newTodoList.filter((todo)=>
        //해당요소의 아이디가 action의 id와 일치하지 않는다면
        {return todo.id !== action.id}
      );
      return filterList;
    } else if (action.type === "RESET") {
        //todolist를 모두 삭제하고 리턴
        return [];
    }
    return oldState;
  } 
  //useReducer를 사용하여 state 생성
  //여러건 -> 자료구조 
  //현재 state, state를 변경할때 쓰는 dispatch함수
  const [todolist, todoDispatch] = useReducer(todoReducer, []);
  
  return (
    <div className="app">
      <div>
        <h1>To-Do List</h1>
        <input
          placeholder="새 할 일 입력"
          value={input}
          onChange={(event) => 
            //입력 필드의 값
            setInput(event.target.value)}
        />

        <button
          onClick={() => {
            //추가 버튼을 클릭하면, 입력필드에 있는 값을 꺼내서
            //todolist에 추가!

            //list를 변경하기 위해서 dispatch를 사용
            //dispatch -> reducer
            todoDispatch({ type: "ADD", text: input });
            setInput('');
          }}>추가</button>
        <button onClick={() => todoDispatch({ type: "RESET" })}>초기화</button>
      </div>
      
      <ul>
        {/* list 데이터를 사용하여 li태그를 동적으로 생성 */}
        {/* 배열의 map합수를 사용하여 li태그 생성
            map함수는 배열의 요소만큼 순회
            jsx를 동적으로 생성할 때는 key를 설정해야함
            */}
        {
          todolist.map((todo)=>{
            return (<li key={todo.id}>{todo.text}<button onClick={() => {
              todoDispatch({type: "DELETE", id:todo.id});
            }}>삭제</button></li>);
        })
        }
      </ul>
    </div>
  );
}

export default App;
