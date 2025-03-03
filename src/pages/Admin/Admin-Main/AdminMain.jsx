import { Container, SubContainer } from './AdminMain.styles';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer';
import MenuBtn from '../../../components/btn/MenuBtn';

export default function AdminMain() {
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuBtn>신청 목록 조회</MenuBtn>
        <MenuBtn>신청 내역 관리</MenuBtn>
        <MenuBtn>블랙리스트</MenuBtn>
      </SubContainer>
      <Footer />
    </Container>
  );
}
