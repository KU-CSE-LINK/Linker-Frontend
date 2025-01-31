import React from "react";
import styled from "styled-components";
import Graph from "./Graph";
const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 60px;
  margin-bottom: 20px;
`;
const Ask = () => {
  return (
    <>
      <Title>대여 가능 기자재 보기</Title>
      <Graph />
    </>
  );
};

export default Ask;
