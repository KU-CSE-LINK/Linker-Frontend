import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer';
import MenuButton from '../../../components/button/MenuButton.jsx';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 180px;
  box-sizing: border-box;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

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
