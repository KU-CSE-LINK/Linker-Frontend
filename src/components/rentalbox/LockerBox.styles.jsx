import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

export const Container = styled.div`
  width: 100%;
  min-height: 160px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px 8px rgba(139, 139, 139, 0.15);
  padding: 30px 0;
  ${mediaQueries[1]} {
    width: 100%;
    height: auto;
  }
`;

export const LockerTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  margin-left: 32px;
  margin-bottom: 40px;
`;

export const LockerInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  ${mediaQueries[1]} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-width: 110px;
  align-items: center;
`;

export const MainText = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const StatusText = styled.span`
  color: #3773f5;
  font-size: 16px;
  font-weight: 300;
`;

export const LocationText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  white-space: pre-line;
`;

export const NumberText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;

export const DateText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;
