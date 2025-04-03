import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 180px;
  box-sizing: border-box;
  ${mediaQueries[1]} {
    width: 100%;
    padding: 0 24px;
    gap: 100px;
  }

  ${mediaQueries[0]} {
    padding: 0 16px;
    gap: 60px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
  ${mediaQueries[1]} {
    gap: 12px;
  }
`;
