import { createRef } from 'react';
import {
  Container,
  InputContainer,
  InputPanel,
  SubContainer,
  SubmitButton,
  TitleText,
  LockerInfoContainer,
  LockerInfo,
  LockerInfoTitle,
  LockerInfoContent,
  LockerInfoSubTitle,
} from './RentalLocker.styles.jsx';
import InputWithLabel from '../../components/input/InputWithLabel.jsx';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useRecoilValue } from 'recoil';
import { selectedLockerState, selectedLocationState } from '../locker/recoil/selectedLockerState.js';

const RentalLocker = () => {
  const buttonRef = createRef();
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const studentIdInputRef = createRef();
  const selectedLocker = useRecoilValue(selectedLockerState);
  const selectedLoc = useRecoilValue(selectedLocationState);
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
        <LockerInfoContainer>
          <LockerInfoTitle>대여할 사물함</LockerInfoTitle>
          <LockerInfo>
            <LockerInfoSubTitle>위치</LockerInfoSubTitle>
            <LockerInfoContent>{selectedLoc ? `선택된 사물함: ${selectedLoc.name}` : '선택된 사물함이 없습니다.'}</LockerInfoContent>
          </LockerInfo>
          <LockerInfo>
            <LockerInfoSubTitle>번호</LockerInfoSubTitle>
            <LockerInfoContent>{selectedLocker ? `선택된 사물함: ${selectedLocker.number}` : '선택된 사물함이 없습니다.'}</LockerInfoContent>
          </LockerInfo>
        </LockerInfoContainer>
        <SubmitButton ref={buttonRef} onClick={() => {}}>
          대여 신청하기
        </SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default RentalLocker;
