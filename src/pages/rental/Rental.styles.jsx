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

export const SubTitleText = styled.span`
  font-size: 22px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 17px;
  }
`;

export const DescriptionText = styled.span`
  font-size: 10px;
  font-weight: 300;
  color: #3773f5;
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

export const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 500px;
  gap: 10px;
  ${mediaQueries[1]} {
    width: 100%;
  }
`;

export const EquipmentTitleContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 3px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
  padding-left: 10px;
`;

export const ChoiceText = styled.p`
  color: ${(props) => (props.selected ? '#000' : '#d9d9d9')};
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 10px;
  ${mediaQueries[1]} {
    width: 100%;
  }
`;

export const SubButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  ${mediaQueries[1]} {
    grid-column: 1 / -1;
  }
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 246px;
  height: 46px;
  border-radius: 10px;
  color: #9d9d9d;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #f1f1f1;

  input:checked + & {
    background-color: rgba(229, 237, 255, 0.8);
    color: #3773f5;
    border: 2px solid #3773f5;
  }
  ${mediaQueries[1]} {
    width: 45%;
    height: auto;
    aspect-ratio: 246/46;
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
    width: 80%;
    height: auto;
    aspect-ratio: 380/60;
    font-size: 22px;
  }
`;
