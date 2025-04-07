import { Container, EmptyCard, EmptyContent, EmptyTitle, StatusContainer, SubContainer, TitleText } from './AdminRentals.styles.jsx';
import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
import { useEffect, useState } from 'react';
import useAdminRental from '../../../hooks/admin/useAdminRental.jsx';
import { useSearchParams } from 'react-router-dom';

const AdminRentals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status');
  const { getAllRentals } = useAdminRental();
  const [rentals, setRentals] = useState(null);
  const [error, setError] = useState(null);
  const rentalStatuses = [
    { value: 'REQUESTED', label: '신청완료' },
    { value: 'PREPARED', label: '대여 준비 완료' },
    { value: 'RENTED', label: '대여중' },
    { value: 'RETURNED', label: '반납완료' },
  ];

  useEffect(() => {
    const param = status ? { status } : null;

    getAllRentals(param)
      .then((result) => setRentals(result))
      .catch((err) => setError(err.message || '에러 발생'));
  }, [status]);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!rentals) return <div>⌛ 로딩 중...</div>;

  if (!rentals.length) {
    return (
      <Container>
        <Header />
        <TitleText>신청 내역 관리</TitleText>
        <SubContainer>
          <StatusContainer>
            {rentalStatuses.map((rentalStatus) => (
              <div key={rentalStatus.value}>
                <input
                  type="radio"
                  id={rentalStatus.value}
                  name="rentalStatus"
                  value={rentalStatus.value}
                  checked={rentalStatus.value === status}
                  onChange={() => {
                    setSearchParams({ status: rentalStatus.value });
                  }}
                />
                <label htmlFor={rentalStatus.value}>{rentalStatus.label}</label>
              </div>
            ))}
          </StatusContainer>
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
        <StatusContainer>
          {rentalStatuses.map((rentalStatus) => (
            <div key={rentalStatus.value}>
              <input
                type="radio"
                id={rentalStatus.value}
                name="rentalStatus"
                value={rentalStatus.value}
                checked={rentalStatus.value === status}
                onChange={() => {
                  setSearchParams({ status: rentalStatus.value });
                }}
              />
              <label htmlFor={rentalStatus.value}>{rentalStatus.label}</label>
            </div>
          ))}
        </StatusContainer>
        {rentals.map((rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </SubContainer>
      <Footer />
    </Container>
  );
};

export default AdminRentals;
