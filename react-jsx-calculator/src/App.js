import logo from './logo.svg';
import './App.css';
import React from 'react';
// react에서 useState 훅 함수 가져오기
import { useState } from 'react';

//jsx는 하나의 요소만 반환해야하므로
//부모 태그로 자식들을 감싸야 한다
function App() {

  //state는 컴포넌트의 생명주기를 관리하므로 컴포넌트 함수에서만 생성 가능

  let content = null;
  const [num1, setNum1] = useState(null);
  const [calc, setCalc] = useState(null);
  const [num2, setNum2] = useState(null);
  const[input, setInput] = useState('');
  const [result, setResult] = useState(null);

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



  function resultClick(){
    if(calc === "+"){
      setResult(Number(num1) + Number(num2));
    }else if(calc === "-"){
      setResult(Number(num1) - Number(num2))
    }else if(calc === "*"){
      setResult(Number(num1) * Number(num2))
    }else if(calc === "/"){
      setResult(Number(num1) / Number(num2))
    }
  }

  const calculate = () => {
    
    let tempResult = 0;

    switch(calc){
      case "+":
        tempResult = num1 + num2;
        break;
      case "-":
        tempResult = num1 - num2;
        break;
      case "*":
        tempResult = num1 * num2;
        break;
      case "/":
        tempResult = num1 / num2;
        break;
      default :
        tempResult = 0;
    }
    setResult(tempResult);
  }


  function clearClick() {
    setInput('');
    setResult(null);
    setNum1(null);
    setCalc(null);
    setNum2(null);
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
      //빈태그: 부모가 필요할 때 사용할것
    <>
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
      {/* <input type="button" value="1" onClick={numClick}></input>
      <input type="button" value="2" onClick={numClick}></input>
      <input type="button" value="3" onClick={numClick}></input>
      <input type="button" value="4" onClick={numClick}></input>
      <input type="button" value="5" onClick={numClick}></input>
      <input type="button" value="6" onClick={numClick}></input>
      <input type="button" value="7" onClick={numClick}></input>
      <input type="button" value="8" onClick={numClick}></input>
      <input type="button" value="9" onClick={numClick}></input>
      <input type="button" value="0" onClick={numClick}></input> */}

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

      {/* 
      <input type="button" value="+" onClick={calcClick}></input>
      <input type="button" value="-" onClick={calcClick}></input>
      <input type="button" value="*" onClick={calcClick}></input>
      <input type="button" value="/" onClick={calcClick}></input>
      </div> */}

      <div>
      <input type="button" value="=" onClick={calculate}></input>
      <input type="button" value="C" onClick={clearClick}></input>
      </div>

    </>
  );
}

export default App;
