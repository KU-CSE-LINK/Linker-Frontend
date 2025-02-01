import React from "react";
import styled from "styled-components";
const Titlecontent = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 60px;
  margin-bottom: 20px;
`;
const Title = ({ title }) => {
  return <Titlecontent>{title}</Titlecontent>;
};

export default Title;
