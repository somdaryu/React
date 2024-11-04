import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: pink;
`;

function About() {
  console.log('About...');
  return (
    <Div>
      <h1>About</h1>
      About Page...
    </Div>
  );
}

export default About;
