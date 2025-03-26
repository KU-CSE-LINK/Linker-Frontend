import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header/Header';
import { Container, TitleText, SubContainer, SubTitleText, CheckBtn } from './RentalComplete.styles';
import Footer from '../../../components/footer/footer';

const RentalComplete = () => {
  const navigate = useNavigate();
  const handleCheckClick = () => {
    const userName = localStorage.getItem('userName');
    const userStudentId = localStorage.getItem('userStudentId');
    navigate(`/check?name=${userName}&studentId=${userStudentId}`);
  };

  return (
    <Container>
      <Header />
      <TitleText>대여 신청</TitleText>
      <SubContainer>
        <SubTitleText>대여 신청이 완료되었습니다.</SubTitleText>
        <CheckBtn onClick={handleCheckClick}>신청내역 조회하기</CheckBtn>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default RentalComplete;
