import { useState } from 'react';
import {
  Container,
  Logo,
  ProfileImg,
  TitleText,
  BoldText,
  NameInput,
  PhoneInput,
  StdIdInput,
  ChoiceWrapper,
  ChoiceContainer,
  ChoiceText,
  ButtonContainer,
  ApplyButton,
  Host,
  HiddenCheckbox,
  HiddenRadio,
  ChoiceLabel,
  StyledLabel,
} from './Rental.styles';
import Profile from '../../assets/profileIcon.svg';
import Checked from './checked.svg';
import UnChecked from './unchecked.svg';

const dummyGoods = [
  { id: 1, name: '블루투스 키보드 & 마우스 세트' },
  { id: 2, name: '노트북 거치대' },
  { id: 3, name: '노트북 C타입 충전기' },
];

const Rental = () => {
  const [selectedEquipments, setSelectedEquipments] = useState(dummyGoods.reduce((acc, item) => ({ ...acc, [item.id]: false }), {}));

  const handleChoiceClick = (id) => {
    setSelectedEquipments((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <Logo>
        LINKER
        <ProfileImg src={Profile} alt="프로필아이콘" />
      </Logo>
      <TitleText>대여 신청</TitleText>

      <BoldText style={{ position: 'absolute', top: '237px', left: '150px' }}>이름</BoldText>
      <NameInput type="text" />

      <BoldText style={{ position: 'absolute', top: '362px', left: '150px' }}>전화번호</BoldText>
      <PhoneInput type="text" />

      <BoldText style={{ position: 'absolute', top: '362px', left: '405px' }}>학번</BoldText>
      <StdIdInput type="text" />

      <BoldText style={{ position: 'absolute', top: '487px', left: '150px' }}>대여할 기자재 선택</BoldText>
      <span className="choice-desc">중복 선택 가능</span>

      <ChoiceWrapper>
        {dummyGoods.map((item) => (
          <ChoiceContainer key={item.id}>
            <HiddenCheckbox type="checkbox" id={`equipment-${item.id}`} checked={selectedEquipments[item.id]} onChange={() => handleChoiceClick(item.id)} />
            <ChoiceLabel htmlFor={`equipment-${item.id}`}>
              <img src={selectedEquipments[item.id] ? Checked : UnChecked} alt="체크" />
              <ChoiceText selected={selectedEquipments[item.id]}>{item.name}</ChoiceText>
            </ChoiceLabel>
          </ChoiceContainer>
        ))}
      </ChoiceWrapper>

      <BoldText style={{ position: 'absolute', top: '676px', left: '150px' }}>대여기간</BoldText>

      <ButtonContainer>
        <HiddenRadio type="radio" name="rentalPeriod" id="short" />
        <StyledLabel htmlFor="short">단기</StyledLabel>

        <HiddenRadio type="radio" name="rentalPeriod" id="long" />
        <StyledLabel htmlFor="long">장기</StyledLabel>
      </ButtonContainer>

      <ApplyButton>대여 신청하기</ApplyButton>
      <Host>제6대 컴퓨터공학부 학생회 LINK</Host>
    </Container>
  );
};

export default Rental;
