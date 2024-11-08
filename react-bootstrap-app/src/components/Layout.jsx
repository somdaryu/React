import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

//styled컴포넌트를 사용해서 div태그 생성
const LayoutContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//레이아웃은 '헤더' + '상세화면'으로 구성

//Outlet : 자식 컴포넌트의 위치
//Layout: 부모 컴포넌트
//Home, Login, Register: 자식컴포넌트
const Layout = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <Outlet></Outlet> 
    </LayoutContainer>
  )
}

export default Layout