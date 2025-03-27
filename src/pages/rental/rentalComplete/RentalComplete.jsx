import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../../components/header/Header';
import { CheckBtn, Container, SubContainer, SubTitleText, TitleText } from './RentalComplete.styles';
import Footer from '../../../components/footer/footer';

const RentalComplete = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const studentId = searchParams.get('studentId');

  const navigate = useNavigate();
  const handleCheckClick = () => {
    const param = new URLSearchParams({ name, studentId });

    navigate({ pathname: '/check', search: param.toString() });
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
