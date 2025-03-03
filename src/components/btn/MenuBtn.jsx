import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  display: flex;
  box-sizing: content-box;
  width: 280px;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: white;
  // 폰트 내용
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    background: #3773f5;
    color: #fff;
    font-weight: 600;
    border: none;
  }
`;

const MenuBtn = ({ children, onClick, type = 'button' }) => {
  return (
    <StyledBtn type={type} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default MenuBtn;
