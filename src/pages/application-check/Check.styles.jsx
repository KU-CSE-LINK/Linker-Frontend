import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
`;

export const GuestName = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

export const SubText = styled.span`
  color: #000;
  font-size: 25px;
  font-weight: 400;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;
