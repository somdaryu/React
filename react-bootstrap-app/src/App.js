import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './features/Home';
import Register from './features/Register';
import Login from './features/Login';
import BoardList from './features/BoardList';
import BoardDetail from './features/BoardDetail';
import BoardRegister from './features/BoardRegister';
import BoardModify from './features/BoardModify';

function App() {
  //Router로 경로에 따라 컴포넌트 설정
  //예: / -> Home 컴포넌트
  //   /board/list -> BoardList 컴포넌트
  return (
    <div className="App">
      <Routes>
        {/* /경로로 이동하면 Layout 컴포넌트가 렌더링 */}
        {/* 중첩라우트 설정 */}
        {/* /를 최상위 경로로 설정 */}
        <Route path="/" element={<Layout></Layout>}>
        {/* 중첩라우트는 부모와 자식컴포넌트가 함께 렌더링 되는 구조 */}
        {/* 예: /register : <Layout> + <Register> */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* 게시물 관련 */}
          <Route path="/board/list" element={<BoardList></BoardList>}></Route>
          <Route path="/board/register" element={<BoardRegister></BoardRegister>}></Route>
          {/* :no => URL 안에 포함되어있는 파라미터 */}
          {/* 이자리에는 파라미터가 들어올수 있음 */}
          {/* 예: /board/read/1 */}
          <Route path="/board/read/:no" element={<BoardDetail></BoardDetail>}></Route>
          <Route path="/board/modify/:no" element={<BoardModify></BoardModify>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
