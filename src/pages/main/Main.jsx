import Header from '../../components/header/Header.jsx';
import MenuButton from '../../components/button/MenuButton.jsx';
import Footer from '../../components/footer/footer.jsx';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 180px;
  box-sizing: border-box;
  ${mediaQueries[1]} {
    width: 100%;
    padding: 0 24px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
  ${mediaQueries[1]} {
    gap: 12px;
  }
`;

export default function Main() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <SubContainer>
        <MenuButton onClick={() => navigate('/equipments')}>대여 가능 기자재 조회</MenuButton>
        <MenuButton onClick={() => navigate('/rental')}>기자재 대여 신청</MenuButton>
        <MenuButton onClick={() => navigate('/locker')}>사물함 대여 신청</MenuButton>
        <MenuButton onClick={() => navigate('/guest')}>신청 내역 조회</MenuButton>
      </SubContainer>
      <Footer />
    </Container>
  );
}
