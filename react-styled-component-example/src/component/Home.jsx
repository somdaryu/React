import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: skyblue;
`;

// const HomeDiv = () => {
//   const style = { backgroundColor: "pink" }
  
//   return (
//     <div style={style}></div>
//   );
// }

function Home() {
  console.log('Home...');
  return (
    <Div>
      <h1>Home</h1>
      Home Page...
    </Div>
  );
}

//default 키워드를 사용하면
//외부에서 다른 이름으로 사용 가능
export default Home;
