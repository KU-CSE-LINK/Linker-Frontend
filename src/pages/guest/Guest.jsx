import { createRef } from 'react';
import Header from '../../components/header/Header';
import { Container, TitleText, InputContainer, InputPanel, SubmitButton, SubContainer } from './Guest.styles';
import InputWithLabel from '../../components/input/InputWithLabel';
import Footer from '../../components/footer/footer';

const Guest = () => {
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const studentIdInputRef = createRef();

  return (
    <Container>
      <Header />
      <TitleText>신청내역 조회</TitleText>
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
        <SubmitButton>비회원 인증하기</SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default Guest;
