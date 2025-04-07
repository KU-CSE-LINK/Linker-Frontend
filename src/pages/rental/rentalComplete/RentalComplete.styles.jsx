import styled from 'styled-components';
import { mediaQueries } from '../../../styles/GlobalStyles';
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

export const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 172px;
`;

export const SubTitleText = styled.span`
  font-size: 25px;
  font-weight: 500;
  margin-top: 241px;
  ${mediaQueries[0]} {
    font-size: 19px;
    margin-top: 130px;
  }
`;

export const CheckBtn = styled.div`
  display: inline-flex;
  color: #9d9d9d;
  font-weight: 600;
  font-size: 25px;
  width: 270px;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
  ${mediaQueries[1]} {
    width: 220px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
  }
`;
