import React, { Children } from "react";
import styled from "styled-components";
// import Header from "../../components/Header/Header";
import MenuBtn from "../../components/Btn/MenuBtn";
// import Bottom from "../../components/Bottom/Bottom";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const MainPage = () => {
  return (
    <Content>
      <MenuBtn onClick={console.log(Children)}>대여 가능 기자재 조회</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>대여 신청</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>신청 내역 조회</MenuBtn>
    </Content>
  );
};

export default MainPage;
