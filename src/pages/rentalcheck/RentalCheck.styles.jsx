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

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const EmptyText = styled.div`
  height: 478px;
  text-align: center;
  line-height: 478px;
  color: #9d9d9d;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
`;
