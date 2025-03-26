import { Container, EmptyCard, EmptyContent, EmptyTitle, SubContainer, TitleText } from './AdminRentals.styles.jsx';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
import useRentalList from '../../../apis/admin/useRentalList.js';
import { useEffect, useState } from 'react';

const AdminRentals = () => {
  const fetchRentalList = useRentalList();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchRentalList()
      .then((result) => setData(result))
      .catch((err) => setError(err.message || '에러 발생'));
  }, [fetchRentalList]);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!data) return <div>⌛ 로딩 중...</div>;
  const rentals = data?.content || [];
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
          <RentalCard key={rental.studentId} rental={rental} />
        ))}
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default AdminRentals;
