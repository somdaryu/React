import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {

  return <header>
  <h1><a href='/' onClick={event => {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a>
  </h1>
  </header>
}

function Nav(props) {

  const lis = [];

  for(let t of props.topics){

    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
  <ol>
    {lis}
  </ol>
  </nav>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type="submit" value='Create'></input>
        </p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name="title" value={title} placeholder='title'
            onChange={(event)=>{
              setTitle(event.target.value);
            }}  
          ></input>
        </p>
        <p>
          <textarea name='body' value={body} placeholder='body'
            onChange={(event)=>{
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value='Update'></input>
        </p>
      </form>
    </article>
  )
}


function App() {

  let [mode, setMode] = useState('WELCOME');

  let [id, setId] = useState(null);

  let content = null;

  let [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);

  let contextControl = null;

  let [nextId, setNextId] = useState(4);

  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    let title, body = null;
    for(let t of topics){
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>

    contextControl = 
      <>
        <a className='update-a' href={"/update"+id} onClick={
          (event)=>{
            event.preventDefault();
            setMode('UPDATE');
          }
        }>Update</a>
        <input className='delete-input' type="button" value="Delete" 
        onClick={() => {
          //topics 배열에서 선택된 topic을 삭제
          const newTopics = [];

          //해당요소를 제외한 나머지 요소를 배열에 옮기기
          for(let t of topics) {
            //topic의 id가 삭제할 id가 아니라면
            if(t.id !== id){
              newTopics.push(t);
            }
          }
          //새로운 배열로 state를 업데이트
          setTopics(newTopics);
          setMode("WELCOME");
        }}></input>
      </>

  } else if(mode === "CREATE") {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title: _title, body: _body};
    
      const newTopics = [...topics]; 
      newTopics.push(newTopic);
      setTopics(newTopics); 

      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);

    }}>
    </Create>
  } else if(mode === "UPDATE"){

    let title, body = null;

    for(let t of topics){
      if(t.id === id){
        title = t.title;
        body = t.body;
      }
    }

    content = <Update title={title} body={body} 
      onUpdate={(title, body)=>{

        const newTopics = [...topics];

        const updateTopic = {id: id, title: title , body: body}

        for(let i in topics){
          if(newTopics[i].id === id){
            newTopics[i] = updateTopic;
          }
        }
        setTopics(newTopics); 
      }}
    ></Update>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function(_id){
        setMode('READ');
        setId(_id);
      }}></Nav>

      {content}

      <a href="/create" onClick={ event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>

      {contextControl}

    </div>
  );
}

export default App;
