import logo from './logo.svg';
import './App.css';

function Header(props){
  return (
    <h1>
      <a href="/" onClick={event => {
        event.preventDefault();
        props.onChangeMode();
      }}>WEB</a>
    </h1>
  )
}

function Nav(props){
  const lis = [];
  for(let t of props.topics){
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read' + t.id} 
      onClick={event=> {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
  }

  return (
    <ol>
      {lis}
    </ol>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  return (
    <div>
      <Header onChangeMode={
        function() {
          alert('Header');
        }
      }></Header>

      <Nav topics={topics} onChangeMode={function(id){
        alert(id);
      }}></Nav>
    </div>
  );
}

export default App;
