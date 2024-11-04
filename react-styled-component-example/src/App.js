import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import styled from 'styled-components';

const Nav = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
`;

const Li = styled.li`
width: 33%;
  list-style: none;
`;

// App 컴포넌트 수정
function App() {
  console.log('App...');
  
  return (
    <div>
      <Nav>
        {/* Link : 링크를 클릭해도 request가 발생되지 않음 변경된 컴포넌트만 생성됨*/}
        {/* <Li>
          <NavLink to="/home">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/about">About</NavLink>
        </Li>
        <Li>
          <NavLink to="/contact">Contact</NavLink>
        </Li> */}
        
        {/* a태그 : 링크를 클릭하면 request가 발생됨 파일을 다시 불러옴 모든 컴포넌트가 재생성됨*/}
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

        {/* 속도 a < Link */}
      </Nav>
      {/* Router는 주소에 따라 화면이 전환될때 사용 */}
      {/* 조건: URL 주소 */}
      {/* 리턴: 새로운 Ui */}
      <Routes>
        <Route path="/home" element={<Main></Main>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>  
    </div>
  );
}

export default App;
