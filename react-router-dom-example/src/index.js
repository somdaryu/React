import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
  <div>
    <h2>Home</h2>
    Home...
  </div>
  )
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
  </div>
  )
}


//전체 UI를 반환하는 함수
function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>

    {/* 링크 */}
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/topics">Topics</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    {/* url경로와 컴포넌트 설정 */}
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/topics' element={<Topics></Topics>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      {/* 존재하지 않는 경로를 호출하면 'Not Found'를 출력 */}
      <Route path='/*' element={'Not Found'}></Route>
    </Routes>
    </div>
  );
}

//라우트 기능을 활성화하기위해 BrowserRouter로 최상위 컴포넌트를 감싸기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
