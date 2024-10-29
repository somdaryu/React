import logo from './logo.svg';
import './App.css';
function Item() {
  return (
    <div>
    <p>Item Component</p>
    </div>
  );
}

function Navbar() {
  return(
    <div>
      <h1>Navigation</h1>
      <ul>
        <li><Home></Home></li>
        <li><About></About></li>
        <li><Contact></Contact></li>
      </ul>
    </div>
  );
}

function Home() {
  return(
    <div>
      <a href="#">Home</a>
    </div>
  );
}

function About() {
  return(
    <div>
      <a href="#">About</a>
    </div>
  );
}


function Contact() {
  return(
    <div>
      <a href="#">Contact</a>
    </div>
  );
}

function Content() {
  return(
    <div>
      <p>Content Component</p>
    </div>
  );
}

function Section() {
  return (
    <div>
    <h1>Section Component</h1>
    <Content></Content>
    <Content></Content>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <div>
      <h1>Item List</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Navbar></Navbar>
      <Section></Section>
      <Section></Section>
    </div>
    </div>
  );
}

export default App;
