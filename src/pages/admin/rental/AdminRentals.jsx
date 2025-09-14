import { Container, EmptyCard, EmptyContent, EmptyTitle, StatusButton, StatusContainer, SubContainer, TitleText } from './AdminRentals.styles.jsx';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
// import { useEffect, useState } from 'react';
// import useAdminRental from '../../../hooks/admin/useAdminRental.jsx';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const AdminRentals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status');
  // const { getAllRentals } = useAdminRental();
  // const [error, setError] = useState(null);
  const rentalStatuses = [
    { value: 'REQUESTED', label: '신청완료' },
    { value: 'PREPARED', label: '대여 준비 완료' },
    { value: 'RENTED', label: '대여중' },
    { value: 'RETURNED', label: '반납완료' },
  ];
  const dummyRentals = [
    {
      id: 1,
      equipment: { name: '노트북', imageUrl: 'https://via.placeholder.com/65x30' },
      status: 'REQUESTED',
      createdAt: '2025-01-10T12:00:00',
      returnDate: '2025-01-15T12:00:00',
    },
    // ...추가 데이터
  ];
  const [rentals, setRentals] = useState(dummyRentals);

  // useEffect(() => {
  //   const param = status ? { status } : null;

  //   getAllRentals(param)
  //     .then((result) => setRentals(result))
  //     .catch((err) => setError(err.message || '에러 발생'));
  // }, [status]);

  // if (error) return <div>❌ 오류: {error}</div>;
  // if (!rentals) return <div>⌛ 로딩 중...</div>;

  return (
    <Container>
      <Header />
      <TitleText>신청 내역 관리</TitleText>
      <SubContainer>
        <StatusContainer>
          {rentalStatuses.map((rentalStatus) => (
            <StatusButton
              key={rentalStatus.value}
              className={rentalStatus.value === status ? 'selected' : ''}
              onClick={() => setSearchParams({ status: rentalStatus.value })}
            >
              {rentalStatus.label}
            </StatusButton>
          ))}
        </StatusContainer>
        {!rentals.length ? (
          <EmptyCard>
            <EmptyTitle>새로운 대여 요청이 없습니다.</EmptyTitle>
            <EmptyContent>（*＾-＾*）</EmptyContent>
          </EmptyCard>
        ) : (
          rentals.map((rental) => <RentalCard key={rental.id} rental={rental} />)
        )}
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default AdminRentals;
