import { createRef } from 'react';
import Header from '../../components/header/Header';
import InputWithLabel from '../../components/input/InputWithLabel';
import Footer from '../../components/footer/footer';
import useRental from '../../hooks/rental/useRental.jsx';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const Container = styled.div`
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

const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
`;

const InputContainer = styled.div`
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

const InputPanel = styled.div`
  grid-column: ${({ fill = 1 }) => `${fill} span / ${fill} span`};
  ${mediaQueries[1]} {
    grid-column: 1 / -1;
  }
`;

const SubmitButton = styled.div`
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
    width: 325px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 159px;
`;

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
        <SubmitButton onClick={handleGuestSubmit}>내역 조회하기</SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default Guest;
