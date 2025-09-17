import Header from '../../../components/header/Header.jsx';
import Footer from '../../../components/footer/footer.jsx';
import RentalCard from '../../../components/admin/rental/RentalCard.jsx';
import { useEffect, useState } from 'react';
import useAdminRental from '../../../hooks/admin/useAdminRental.jsx';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
`;

const TitleText = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

const EmptyCard = styled.div`
  padding: 200px 0;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const EmptyTitle = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const EmptyContent = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StatusButton = styled.button`
  min-width: 160px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid #d3d3d3;
  background: #fff;
  color: #b0b0b0;
  font-size: 18px;
  font-weight: 500;
  margin-right: 24px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  outline: none;
  &:last-child {
    margin-right: 0;
  }
  &.selected {
    border: 2px solid #3773f5;
    background: #eaf1ff;
    color: #3773f5;
  }
`;

const AdminRentals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status');
  const { getAllRentals } = useAdminRental();
  const [error, setError] = useState(null);
  const rentalStatuses = [
    { value: 'REQUESTED', label: '신청완료' },
    { value: 'PREPARED', label: '대여 준비 완료' },
    { value: 'RENTED', label: '대여중' },
    { value: 'RETURNED', label: '반납완료' },
  ];
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const param = status ? { status } : null;

    getAllRentals(param)
      .then((result) => setRentals(result))
      .catch((err) => setError(err.message || '에러 발생'));
  }, [status]);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!rentals) return <div>⌛ 로딩 중...</div>;

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
