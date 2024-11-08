import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoSlice } from '../App';

const Todo = () => {

  const [input, setInput] = useState('');

  const todolist = useSelector((state) => 
    { console.log(state);
      return state.todo.todolist
    });

  const dispatch = useDispatch();


  return (
    <div>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
      />
      <button onClick={() => {

        // 액션 타입 수정 (슬라이스이름/타입)
        // dispatch({ type: 'todoSlice/ADD', text: input });
        
        //액션을 직접 넘기지 않고 액션함수를 사용
        dispatch(todoSlice.actions.ADD(input));

        setInput('');
      }}>추가</button>
      <button onClick={() => 
        // dispatch({ type: 'todoSlice/RESET' });
        {dispatch(todoSlice.actions.RESET())}
        }>초기화</button>
      <ul>
        {todolist.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {/* 단건 삭제는 삭제할 대상을 지정해야함
                조건: 식별자(아이디, 번호 등...)
            */}
            <button onClick={() => {
              // dispatch({ type: 'todoSlice/DELETE', id: todo.id })
              dispatch(todoSlice.actions.DELETE(todo.id));}
              }>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo