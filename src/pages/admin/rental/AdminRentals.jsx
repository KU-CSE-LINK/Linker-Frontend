import { Container, EmptyCard, EmptyContent, EmptyTitle, SubContainer, TitleText } from './AdminRentals.styles.jsx';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
import laptopStand from '../../../assets/laptopStand.svg';
import ActionButton from '../../../components/button/ActionButton.jsx';
import { useNavigate } from 'react-router-dom';

const AdminRentals = () => {
  const navigate = useNavigate();

  if (!rentals.length) {
    return (
      <Container>
        <Header />
        <TitleText>신청 내역 관리</TitleText>
        <SubContainer>
          <EmptyCard>
            <EmptyTitle>새로운 대여 요청이 없습니다.</EmptyTitle>
            <EmptyContent>（*＾-＾*）</EmptyContent>
          </EmptyCard>
        </SubContainer>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <TitleText>신청 내역 관리</TitleText>
      <SubContainer>
        {rentals.map((rental) => (
          <>
            <RentalCard key={rental.studentId} rental={rental} />
            <ActionButton onClick={() => navigate('/admin/rentals/equipments')}>신청 내역 관리하기</ActionButton>
          </>
        ))}
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default AdminRentals;

const rentals = [
  {
    id: 1,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '김철수',
    studentId: 202011299,
    rentalType: 'SHORT_TERM',
    status: 'REQUESTED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
  {
    id: 2,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '이철수',
    studentId: 202011299,
    rentalType: 'LONG_TERM',
    status: 'PREPARED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
  {
    id: 3,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '박철수',
    studentId: 202011299,
    rentalType: 'SHORT_TERM',
    status: 'RENTED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
];
