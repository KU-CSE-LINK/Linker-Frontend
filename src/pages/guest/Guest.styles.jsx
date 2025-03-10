import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
`;

export const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  display: grid;
  width: 500px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
`;

export const InputPanel = styled.div`
  grid-column: ${({ fill = 1 }) => `${fill} span / ${fill} span`};
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
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 159px;
`;
