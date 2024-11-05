import './App.css';
//useState : 값이 변경되면 화면이 다시 렌더링됨
//useReducer : 기능은 같음 + 상태변경로직을 중앙에서 처리
import {useState, useReducer, act} from 'react';
 
function App() {
  
  // useReducer: 상태를 변경하는 로직이 복잡할 때 쓰는 거
  // state 목록
  // 숫자 연산자 식 결과
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(null);
  const [calc, setCalc] = useState(null);
  const [num2, setNum2] = useState(null);
  const[input, setInput] = useState('');
  // 결과 -> 리듀서 방식 변경.  
  //결과는 - + * 연산자 종류에 따라 상태를 변경하는 로직이 다르기 때문
  // const [result, setResult] = useState(null);

  // 상태 변경하는 로직을 가지고 있는 리듀서 함수 생성
  // 불변성: state는 이전의 값을 유지하려는 경향이 있음
  function resultReducer(result, action) {
    console.log(action);
    if(action.type === 'RESULT') {
      switch(action.calc){
        case "+":
          result = action.num1 + action.num2;
          break;
        case "-":
          result = action.num1 - action.num2;
          break;
        case "*":
          result = action.num1 * action.num2;
          break;
        case "/":
          result = action.num1 / action.num2;
          break;
        default :
        result = null;
      }
      return result;
    }else if(action.type === 'CLEAR'){
      setNum1(null);
      setNum2(null);
      setCalc(null);
      return null;
    }
  }

  // useReducer를 사용해서 state 생성
  // set함수 -> dispatch함수
  const [result, countDispatch] = useReducer(resultReducer, null);

  function numClick(event){
    const value = event.target.value;
    if(!calc){
      setNum1(value);
    }else{
      setNum2(value);
    }
  }

  function calcClick(event){
    const value = event.target.value;
    setCalc(value);
  }

  //숫자를 입력하는 함수
  const inputNumber = (value) => {
    setInput(input + value); //현재 입력된 식 업데이트

    if(!calc){
      setNum1(value);
    }else{
      setNum2(value);
    }
  }

  const inputOper = (value) => {
    setInput(input + value);
    setCalc(value);
  }

  return (
    <div class="app">
      <h1>계산기</h1>
      <div>
        <span>식: </span>
        <span>{num1}</span>
        <span>{calc}</span>
        <span>{num2}</span>
      </div>

      <div>
        <span>결과: </span>
        <span>{result}</span>
      </div>



      <div>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
        <button key={num} onClick={() => inputNumber(num)}>
          {num}
        </button>
      ))}
      </div>

      <div>
        {["+", "-", "*", "/"].map((op)=>(
          <button key={op} onClick={() => inputOper(op)}>{op}</button>
        ))}
      </div>

      <div>
      <input type="button" value="=" onClick={()=>{
        // set함수 -> dispatch함수 사용
        // 액션 + 두 숫자 {}
        countDispatch({type: "RESULT", num1: num1, num2: num2, calc: calc})
      }}></input>
      <input type="button" value="C" onClick={()=>{
         countDispatch({type: "CLEAR"})
      }}></input>
      </div>
    </div>
  );
}

export default App;
