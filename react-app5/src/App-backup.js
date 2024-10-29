import logo from './logo.svg';
import './App.css';

//일반함수
//사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환
function Headaer() {
  return (
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <ol>
      <li><a href="/read/1">htm1</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Headaer></Headaer>
      <Headaer></Headaer>
      <Headaer></Headaer>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
