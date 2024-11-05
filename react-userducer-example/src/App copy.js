import './App.css';
//useState : 값이 변경되면 화면이 다시 렌더링됨
//useReducer : 기능은 같음 + 상태변경로직을 중앙에서 처리
import {useState, useReducer} from 'react';
 
function App() {
  
  //state 생성
  //현재 상태(read only), 값을 변경하는 함수
  // let [count, setCount] = useState(0); //초기값

  //리듀서 함수 : 이벤트에따라 state를 변경하는 함수
  //이전 state값, 액션
  function countReducer(oldCount, action) {
    console.log(action);
  
    if(action.type === 'UP') {
      return oldCount + action.num;
    }else if(action.type === 'DOWN'){
      return oldCount - action.num;
    }else if(action.type === 'RESET') {
      return 0;
    }
  }

  // function down() {
  //   setCount(count-1);
  // }

  // function reset() {
  //   setCount(0);
  // }

  // function up() {
  //   setCount(count+1);
  // }

  //리듀서 함수를 사용하여 state 생성
  //인자 : 리듀서(state를 변경하는 로직을 가지는 함수), state초기값
  //반환 : 현재 state, 값을 변경하는 Dispatch함수
  const [count, countDispatch] = useReducer(countReducer, 0);

  //입력된 숫자
  const [num, setNum] = useState(0);
  return (
    <div class="app">
      <input type="button" value="-" onClick={()=>{
        //액션과 num
        countDispatch({type: "DOWN", num: num});
      }}></input>
      <input type="button" value="0" onClick={()=>{
        countDispatch({type: "RESET", num: num});
      }}></input>
      <input type="button" value="+" onClick={()=>{
        countDispatch({type: "UP", num: num});
      }}></input>
      <input type='text' onChange={(event)=> {
        setNum(Number(event.target.value));
      }}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
