import { Container, SubContainer } from './Main.styles.jsx';
import Header from '../../components/header/Header.jsx';
import MenuButton from '../../components/button/MenuButton.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function Main() {
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuButton>대여 가능 기자재 조회</MenuButton>
        <MenuButton>대여 신청</MenuButton>
        <MenuButton>신청 내역 조회</MenuButton>
      </SubContainer>
      <Footer />
    </Container>
  );
}
