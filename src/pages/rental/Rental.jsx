import { createRef, useState } from 'react';
import {
  ButtonContainer,
  CheckboxContainer,
  Container,
  DescriptionText,
  EquipmentContainer,
  EquipmentTitleContainer,
  HiddenRadio,
  InputContainer,
  InputPanel,
  RadioLabel,
  SubButtonContainer,
  SubContainer,
  SubmitButton,
  SubTitleText,
  TitleText,
} from './Rental.styles.jsx';
import EquipmentCheckBox from '../../components/equipment/CustomCheckBox.jsx';
import InputWithLabel from '../../components/input/InputWithLabel.jsx';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer.jsx';
import useRentalRequest from '../../apis/rental/useRentalRequest.js';

const dummyEquipments = [
  { id: 1, name: '블루투스 키보드 & 마우스 세트', totalStock: 10, availableStock: 5 },
  { id: 2, name: '노트북 거치대', totalStock: 5, availableStock: 0 },
  { id: 3, name: '노트북 C타입 충전기', totalStock: 5, availableStock: 5 },
];

const Rental = () => {
  const equipmentRefs = dummyEquipments.map(() => createRef());
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const studentIdInputRef = createRef();
  const [rentalType, setRentalType] = useState(null);
  const submitRental = useRentalRequest();

  const handleRentalSubmit = async () => {
    const selectedIndex = equipmentRefs.findIndex((ref) => ref.current?.checked);

    if (selectedIndex === -1) {
      alert('하나 이상의 기자재를 선택해주세요.');
      return;
    }

    const selectedEquipment = dummyEquipments[selectedIndex];

    const data = {
      equipmentId: selectedEquipment.id,
      phoneNumber: phoneInputRef.current?.value || '',
      name: nameInputRef.current?.value || '',
      studentId: Number(studentIdInputRef.current?.value) || 0,
      rentalType: rentalType === 'short' ? '단기' : '장기',
    };

    submitRental(data);
  };

  return (
    <Container>
      <Header />
      <TitleText>대여 신청</TitleText>

      <SubContainer>
        <InputContainer>
          <InputPanel fill={2}>
            <InputWithLabel text={'이름'} ref={nameInputRef} />
          </InputPanel>
          <InputPanel>
            <InputWithLabel text={'전화번호'} ref={phoneInputRef} />
          </InputPanel>
          <InputPanel>
            <InputWithLabel text={'학번'} ref={studentIdInputRef} />
          </InputPanel>
        </InputContainer>

        <EquipmentContainer>
          <EquipmentTitleContainer>
            <SubTitleText>대여할 기자재 선택</SubTitleText>
            <DescriptionText>중복 선택 가능</DescriptionText>
          </EquipmentTitleContainer>
          <CheckboxContainer>
            {dummyEquipments.map((item, index) => (
              <EquipmentCheckBox key={item.id} equipment={item} ref={equipmentRefs[index]} />
            ))}
          </CheckboxContainer>
        </EquipmentContainer>

        <ButtonContainer>
          <SubTitleText>대여기간</SubTitleText>
          <SubButtonContainer>
            <HiddenRadio type="radio" name="rentalPeriod" id="short" onChange={() => setRentalType('short')} />
            <RadioLabel htmlFor="short">단기</RadioLabel>

            <HiddenRadio type="radio" name="rentalPeriod" id="long" onChange={() => setRentalType('long')} />
            <RadioLabel htmlFor="long">장기</RadioLabel>
          </SubButtonContainer>
        </ButtonContainer>

        <SubmitButton onClick={handleRentalSubmit}>대여 신청하기</SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default Rental;
