import { Container, SubContainer } from './Main.styles';
import Header from '../components/header/Header.jsx';
import MenuBtn from '../components/btn/MenuBtn';
import Footer from '../components/footer/footer';
export default function Main() {
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuBtn>대여 가능 기자재 조회</MenuBtn>
        <MenuBtn>대여 신청</MenuBtn>
        <MenuBtn>신청 내역 조회</MenuBtn>
      </SubContainer>
      <Footer />
    </Container>
  );
}
