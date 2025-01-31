import React from "react";
import styled from "styled-components";

const SelectedBtn = styled.button`
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #3773f5;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 108px;
  height: 44px;
`;

const UnSelectedBtn = styled.button`
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #f1f1f1;
  color: #9d9d9d;
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: not-allowed; /* 비활성화 상태일 때 마우스 스타일 변경 */
  width: 108px;
  height: 44px;
`;

const LendBtn = ({ onClick, type = "button", enable }) => {
  return enable ? (
    <SelectedBtn type={type} onClick={onClick}>
      대여 신청
    </SelectedBtn>
  ) : (
    <UnSelectedBtn type={type} onClick={onClick} disabled>
      대여 불가
    </UnSelectedBtn>
  );
};

export default LendBtn;
