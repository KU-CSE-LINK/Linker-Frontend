import React from "react";
import styled from "styled-components";

// 조건부 스타일 적용
const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 108px;
  height: 44px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  border: none;
  text-align: center;
  cursor: ${({ enable }) => (enable ? "pointer" : "not-allowed")};
  background: ${({ enable }) => (enable ? "#3773f5" : "#f1f1f1")};
  color: ${({ enable }) => (enable ? "white" : "#9d9d9d")};
`;

const LendBtn = ({ onClick, type = "button", enable }) => {
  return (
    <StyledButton
      type={type}
      onClick={enable ? onClick : undefined}
      enable={enable}
      disabled={!enable}
    >
      {enable ? "대여 신청" : "대여 불가"}
    </StyledButton>
  );
};

export default LendBtn;
