import './App.css';
import { Counter } from './component/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// redux -> redux toolkit 방식으로 변경

// redux toolkit = redux + 부가기능
// 1. 스토어를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

function reducer(oldState, action) {

  let newState = { ...oldState };

  if (action.type === 'UP') {
    newState.num = newState.num + action.step;
    return newState;
  }

  return oldState;

}

const initState = { num: 0 };
const store = createStore(reducer, initState);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
