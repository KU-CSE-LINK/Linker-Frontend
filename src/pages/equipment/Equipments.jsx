import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer';
import InventoryTable from '../../components/table/InventoryTable.jsx';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 40px;
  box-sizing: border-box;
  ${mediaQueries[1]} {
    width: 100%;
    padding: 0 24px;
  }
`;

const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
`;

const Equipments = () => {
  return (
    <Container>
      <Header />
      <TitleText>대여 가능 기자재 보기</TitleText>
      <InventoryTable />
      <Footer />
    </Container>
  );
};

export default Equipments;
