import { createRef } from 'react';
import Header from '../../components/header/Header';
import { Container, InputContainer, InputPanel, SubContainer, SubmitButton, TitleText } from './Guest.styles';
import InputWithLabel from '../../components/input/InputWithLabel';
import Footer from '../../components/footer/footer';
import useRental from '../../hooks/rental/useRental.jsx';
import { useNavigate } from 'react-router-dom';

const Guest = () => {
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const studentIdInputRef = createRef();

  const navigate = useNavigate();

  const { getRentals } = useRental();

  const handleGuestSubmit = () => {
    const name = nameInputRef.current?.value?.trim() || '';
    const phone = phoneInputRef.current?.value?.trim() || '';
    const studentId = Number(studentIdInputRef.current?.value?.trim() || '');

    if (!name) {
      alert('이름을 입력해주세요.');
      return;
    }

    if (!phone || !/^\d{10,11}$/.test(phone)) {
      alert('전화번호를 정확히 입력해주세요. (숫자만 10~11자리)');
      return;
    }

    if (!studentId) {
      alert('학번을 입력해주세요.');
    }

    const data = { name, studentId };
    getRentals(data).then(() => {
      const param = new URLSearchParams(data);
      navigate({ pathname: '/check', search: param.toString() });
    });
  };

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
        <SubmitButton onClick={handleGuestSubmit}>비회원 인증하기</SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default Guest;
