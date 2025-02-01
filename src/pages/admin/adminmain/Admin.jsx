import React, { Children } from "react";
import styled from "styled-components";
// import Header from "../../components/Header/Header";
import MenuBtn from "../../../components/Btn/MenuBtn";
// import Bottom from "../../components/Bottom/Bottom";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const Admin = () => {
  return (
    <Content>
      <MenuBtn onClick={console.log(Children)}>신청 목록 조회</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>신청 내역 관리</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>블랙리스트</MenuBtn>
    </Content>
  );
};

export default Admin;
