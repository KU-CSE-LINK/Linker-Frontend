import Header from '../../../components/header/Header';
import { Container, TitleText, SubContainer, SubTitleText, CheckBtn } from './RentalComplete.styles';
import Footer from '../../../components/footer/footer';

const RentalComplete = () => {
  return (
    <Container>
      <Header />
      <TitleText>대여 신청</TitleText>
      <SubContainer>
        <SubTitleText>대여 신청이 완료되었습니다.</SubTitleText>
        <CheckBtn>신청내역 조회하기</CheckBtn>
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default RentalComplete;
