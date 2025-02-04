import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 1067px;

  .choice-desc {
    position: absolute;
    top: 499px;
    left: 316px;
    color: #3773f5;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
  }
`;

export const Logo = styled.div`
  position: relative;
  padding-top: 31px;
  text-align: center;
  color: #000;
  font-size: 40px;
  font-weight: 900;
`;

export const ProfileImg = styled.img`
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;

export const TitleText = styled.span`
  position: absolute;
  top: 142px;
  left: 57px;
  color: #000;
  font-size: 25px;
  font-weight: 700;
`;

export const BoldText = styled.span`
  color: #000;
  font-size: 22px;
  font-weight: 600;
`;

export const NameInput = styled.input`
  width: 500px;
  position: absolute;
  top: 266px;
  left: 150px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  height: 46px;
  outline: none;

  &:focus {
    border: 1px solid rgba(55, 115, 245, 0.5);
  }
`;

export const PhoneInput = styled(NameInput)`
  width: 246px;
  top: 390px;
  left: 150px;
`;

export const StdIdInput = styled(NameInput)`
  width: 246px;
  top: 390px;
  left: 405px;
`;

export const ChoiceWrapper = styled.div`
  position: absolute;
  top: 524px;
  left: 159px;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  gap: 6px;
  height: 24px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ChoiceText = styled.p`
  color: ${(props) => (props.selected ? '#000' : '#d9d9d9')};
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 707px;
  left: 150px;
  display: flex;
  width: 502px;
  gap: 10px;
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const HiddenRadio = styled.input`
  display: none;
`;

export const ChoiceLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabel = styled.label`
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
`;

export const ApplyButton = styled.div`
  position: absolute;
  top: 870px;
  left: 210px;
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

export const Host = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 34px;
  color: #dbdbdb;
  font-size: 15px;
  font-weight: 400;
`;
