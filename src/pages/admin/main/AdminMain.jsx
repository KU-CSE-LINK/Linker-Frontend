import { Container, SubContainer } from './AdminMain.styles';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer';
import MenuButton from '../../../components/button/MenuButton.jsx';
import { useNavigate } from 'react-router-dom';

export default function AdminMain() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuButton onClick={() => navigate('/admin/rentals')}>신청 목록 조회</MenuButton>
        <MenuButton>물품 별로 보기</MenuButton>
        <MenuButton>블랙리스트</MenuButton>
      </SubContainer>
      <Footer />
    </Container>
  );
}
