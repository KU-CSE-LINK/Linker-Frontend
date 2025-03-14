import { Container, SubContainer } from './AdminMain.styles';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer';
import MenuButton from '../../../components/button/MenuButton.jsx';

export default function AdminMain() {
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuButton>신청 내역 관리</MenuButton>
        <MenuButton>물품 별로 보기</MenuButton>
        <MenuButton>블랙리스트</MenuButton>
      </SubContainer>
      <Footer />
    </Container>
  );
}
