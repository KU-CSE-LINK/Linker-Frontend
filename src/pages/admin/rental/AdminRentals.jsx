import { Container, EmptyCard, EmptyContent, EmptyTitle, SubContainer, TitleText } from './AdminRentals.styles.jsx';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
import { useEffect, useState } from 'react';
import useAdminRental from '../../../hooks/admin/useAdminRental.jsx';

const AdminRentals = () => {
  const { getAllRentals } = useAdminRental();
  const [rentals, setRentals] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllRentals()
      .then((result) => setRentals(result))
      .catch((err) => setError(err.message || '에러 발생'));
  }, []);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!rentals) return <div>⌛ 로딩 중...</div>;

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
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default AdminRentals;
