import React from 'react';
import styled from 'styled-components';

const sizeStyle = {
  lg: {
    width: '332px',
    height: '26px',
  },
  xl: {
    width: '360px',
    height: '40px',
  },
};

const StyledBtn = styled.button`
  width: ${(props) => sizeStyle[props.size]?.width};
  height: ${(props) => sizeStyle[props.size]?.height};
  display: flex;
  box-sizing: content-box;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #3773f5;
  border: none;
  // 폰트 내용
  color: #fff;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ActionBtn = ({ children, onClick, type = 'button', size = 'xl' }) => {
  return (
    <StyledBtn type={type} size={size} onClick={onClick}>
      {children}
    </StyledBtn>
  );
};

export default ActionBtn;
