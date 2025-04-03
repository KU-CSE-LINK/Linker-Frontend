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

export const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  width: 500px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  ${mediaQueries[1]} {
    width: 100%;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const InputPanel = styled.div`
  grid-column: ${({ fill = 1 }) => `${fill} span / ${fill} span`};
  ${mediaQueries[1]} {
    grid-column: 1 / -1;
  }
`;

export const SubmitButton = styled.div`
  width: 380px;
  height: 60px;
  text-align: center;
  border-radius: 10px;
  background: #3773f5;
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  line-height: 60px;
  cursor: pointer;
  ${mediaQueries[1]} {
    width: 325px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 159px;
`;
