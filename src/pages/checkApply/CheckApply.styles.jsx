import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 1067px;
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

export const ApplyButton = styled.div`
  position: absolute;
  top: 511px;
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
  top: 780px;
  color: #dbdbdb;
  font-size: 15px;
  font-weight: 400;
`;
