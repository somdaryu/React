import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: yellow;
`;


function Contact() {
  console.log('Contact...');
  return (
    <Div>
      <h1>Contact</h1>
      Contact Page...
    </Div>
  );
}


export default Contact;
