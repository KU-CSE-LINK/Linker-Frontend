import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background-color: ${({ $isClicked }) => ($isClicked ? '#3773F5' : '#fff')};
  border: ${({ $isClicked }) => ($isClicked ? 'none' : '1px solid #3773F5')};
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const ButtonContent = styled.span`
  color: ${({ $isClicked }) => ($isClicked ? '#FFFFFF' : '#3773F5')};
  font-size: 14px;
  font-weight: 700;
`;

const RentalStatusButton = ({ children, onClick, type = 'button', isClicked }) => {
  return (
    <Container type={type} onClick={onClick} $isClicked={isClicked}>
      <ButtonContent $isClicked={isClicked}>{children}</ButtonContent>
    </Container>
  );
};

export default RentalStatusButton;
