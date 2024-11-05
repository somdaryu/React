import './App.css';
import { useState, useReducer } from 'react';

function todoReducer(list, action) {
  if (action.type === "ADD") {
    const newTodo = { id: Date.now(), text: action.value }; // 새 todo 객체 생성
    return [...list, newTodo];
  } else if (action.type === "DELETE") {
    return list.filter(todo => todo.id !== action.id);
  } else if (action.type === "RESET") {
    return [];
  }
  return list;
}

function App() {
  const [value, setValue] = useState('');
  const [todo, todoDispatch] = useReducer(todoReducer, []);

  return (
    <div className="app">
      <div>
        <h1>To-Do List</h1>
        <input
          placeholder="새 할 일 입력"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            todoDispatch({ type: "ADD", value: value });
            setValue('');
          }}
        >
          추가
        </button>
        <button onClick={() => todoDispatch({ type: "RESET" })}>초기화</button>
      </div>
      
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => todoDispatch({ type: "DELETE", id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
