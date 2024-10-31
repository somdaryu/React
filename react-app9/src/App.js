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

//수정 화면을 반환하는 컴포넌트
function Update(props) {
  //props로 전달받은 데이터를 state로 변경
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
              //사용자가 값을 변경하면 state를 업데이트
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

  //수정 링크를 저장할 변수
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

    //모드가 Read일 경우, 수정 링크 생성
    contextControl = 
      <a className='update-a' href={"/update"+id} onClick={
        (event)=>{
          event.preventDefault(); //페이지 이동 방지
          setMode('UPDATE'); //수정모드로 전환
        }
      }>Update</a>

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

    //해당 Topic의 데이터를 Update컴포넌트로 전달
    let title, body = null;

    // 배열의 id가 일치하는 topic 찾기
    for(let t of topics){
      if(t.id === id){
        title = t.title;
        body = t.body;
      }
    }

    //모두가 UPDATE로 전환되면 수정폼을 표시
    //props를 통해 Update 컴포넌트에 title, body를 전달
    content = <Update title={title} body={body} 
      onUpdate={(title, body)=>{

        // 기존 배열을 복사하여 새로운 배열을 생성
        const newTopics = [...topics];

        //전달받은 데이터로 기존 topic을 교체
        const updateTopic = {id: id, title: title , body: body}

        //topics 배열에서 해당  id와 일치하는 topic을 찾아서 교체
        for(let i in topics){
          if(newTopics[i].id === id){
            //id가 일치하면 요소를 교체
            newTopics[i] = updateTopic;
          }
        }
        setTopics(newTopics); 
        setMode('READ'); // 모드 전환 (수정 -> 조회)
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
