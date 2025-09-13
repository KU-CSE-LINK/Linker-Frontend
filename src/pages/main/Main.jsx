import { Container, SubContainer } from './Main.styles.jsx';
import Header from '../../components/header/Header.jsx';
import MenuButton from '../../components/button/MenuButton.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useNavigate } from 'react-router-dom';
export default function Main() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuButton onClick={() => navigate('/equipments')}>대여 가능 기자재 조회</MenuButton>
        <MenuButton onClick={() => navigate('/rental')}>기자재 대여 신청</MenuButton>
        <MenuButton onClick={() => navigate('/locker-rental')}>사물함 대여 신청</MenuButton>
        <MenuButton onClick={() => navigate('/guest')}>신청 내역 조회</MenuButton>
      </SubContainer>
      <Footer />
    </Container>
  );
}
