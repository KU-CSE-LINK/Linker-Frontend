import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
  ${mediaQueries[1]} {
    width: 100%;
    padding: 0 24px;
  }
`;

export const GuestName = styled.span`
  font-size: 30px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 25px;
  }
`;

export const SubText = styled.span`
  color: #000;
  font-size: 25px;
  font-weight: 400;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
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
