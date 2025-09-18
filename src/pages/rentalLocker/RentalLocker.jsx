import { createRef } from 'react';
import InputWithLabel from '../../components/input/InputWithLabel.jsx';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useRecoilValue } from 'recoil';
import { selectedLockerState, selectedLocationState } from '../locker/recoil/selectedLockerState.js';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';
import useLocker from '../../hooks/locker/useLocker.jsx';
import { useNavigate } from 'react-router-dom';

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

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

const SubmitButton = styled.button`
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

const LockerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const LockerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 30px;
`;
const LockerInfoTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

const LockerInfoSubTitle = styled.div`
  color: #000;
  width: fit-content;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(0deg, #ffa835 60%, transparent 60%);
`;

const LockerInfoContent = styled.span`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RentalLocker = () => {
  const navigate = useNavigate();
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const studentIdInputRef = createRef();
  const selectedLocker = useRecoilValue(selectedLockerState);
  const selectedLoc = useRecoilValue(selectedLocationState);
  const { postRentalLocker } = useLocker();
  const handleSubmit = async () => {
    const userName = nameInputRef.current.value;
    const phoneNumber = phoneInputRef.current.value;
    const studentId = studentIdInputRef.current.value;

    if (!userName || !phoneNumber || !studentId) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    postRentalLocker(selectedLocker.id, studentId, userName, phoneNumber)
    .then((response) => {
      console.log(response);
      alert('사물함 대여 신청이 완료되었습니다.');
      navigate('/check?name=' + userName + '&studentId=' + studentId + '&type=locker');
    })
    .catch((error) => {
      console.error(error);
      alert('사물함 대여 신청에 실패하였습니다.');
    });
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
        <LockerInfoContainer>
          <LockerInfoTitle>대여할 사물함</LockerInfoTitle>
          <LockerInfo>
            <LockerInfoSubTitle>위치</LockerInfoSubTitle>
            <LockerInfoContent>{selectedLoc ? `선택된 위치: ${selectedLoc.location}` : '선택된 위치가 없습니다.'}</LockerInfoContent>
          </LockerInfo>
          <LockerInfo>
            <LockerInfoSubTitle>번호</LockerInfoSubTitle>
            <LockerInfoContent>{selectedLocker ? `선택된 사물함: ${selectedLocker.lockerName}` : '선택된 사물함이 없습니다.'}</LockerInfoContent>
          </LockerInfo>
        </LockerInfoContainer>
        <SubmitButton onClick={handleSubmit}>대여 신청하기</SubmitButton>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default RentalLocker;
