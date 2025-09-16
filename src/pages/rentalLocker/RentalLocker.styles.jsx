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

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

export const ChoiceText = styled.p`
  color: ${(props) => (props.selected ? '#000' : '#d9d9d9')};
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const SubmitButton = styled.button`
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
    width: 80%;
    height: auto;
    aspect-ratio: 380/60;
    font-size: 22px;
  }
`;

export const LockerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const LockerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 30px;
`;
export const LockerInfoTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const LockerInfoSubTitle = styled.div`
  color: #000;
  width: fit-content;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(0deg, #ffa835 60%, transparent 60%);
`;

export const LockerInfoContent = styled.span`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
