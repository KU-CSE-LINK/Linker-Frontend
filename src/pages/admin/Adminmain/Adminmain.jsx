import React, { Children } from "react";
import styled from "styled-components";
import MenuBtn from "../../../components/Btn/MenuBtn";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: center;
`;
const Adminmain = () => {
  return (
    <Content>
      <MenuBtn onClick={console.log(Children)}>신청 목록 조회</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>신청 내역 관리</MenuBtn>
      <MenuBtn onClick={console.log(Children)}>블랙리스트</MenuBtn>
    </Content>
  );
};

export default Adminmain;
