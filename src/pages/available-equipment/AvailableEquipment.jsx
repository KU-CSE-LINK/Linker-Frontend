import { Container, TitleText } from './AvailableEquipment.styles';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/footer';
import InventoryTable from './Table/InventoryTable.jsx';
export default function Main() {
  return (
    <Container>
      <Header />
      <TitleText>대여 가능 기자재 보기</TitleText>
      <Table />
      <Footer />
    </Container>
  );
}
