import styled from "styled-components";

//상세화면에서 공통으로 사용할 태그들

//카드
export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1150px;
  height: 700px;
  padding: 24px;
  margin: 50px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const CustomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;