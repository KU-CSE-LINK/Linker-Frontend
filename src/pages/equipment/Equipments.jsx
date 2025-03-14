import { Container, TitleText } from './Equipments.styles.jsx';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer';
import InventoryTable from '../../components/table/InventoryTable.jsx';
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
