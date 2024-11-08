import './App.css';
import { Counter } from './component/prevCounter';
import { Provider } from 'react-redux';
import { store } from './store/store';

// redux -> redux toolkit 방식으로 변경

// redux toolkit = redux + 부가기능
// 1. 스토어를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

//toolkit으로 스토어 만드는 방법
//카운터 슬라이스 생성 . 슬라이스를 모아서 스토어 생성

//변경!
//reducer + createStore => createSlice + configureStore

//1. 카운터 슬라이스 생성 (작은 스토어)

//인자: {}슬라이스 이름, 상태 초기값, 리듀서함수

//Redux toolkit의 액션함수 사용하기!

//카운트 슬라이스 내보내기


//리듀서의 변화
//1.이전코드는 조건문을 사용했으나 슬라이스는 액션타입만 쓰면됨
//2.이전코드는 state를 복제하고 변경된 state를 반환했지만
//  슬라이스는 state를 그대로 사용하면 됨

//3.슬라이스를 모아서 스토어 생성




function App() {
  return (
    <div>
      {/* provide로 앱에 스토어 주입 */}
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
