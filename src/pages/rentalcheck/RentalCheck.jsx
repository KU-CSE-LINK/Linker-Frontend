import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import RentalBox from '../../components/rentalbox/RentalBox';
import Footer from '../../components/footer/footer';
import useRental from '../../hooks/rental/useRental.jsx';
import RentalType from '../../components/rentalType/RentalType.jsx';
import LockerBox from '../../components/rentalbox/LockerBox.jsx';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';
import useLocker from '../../hooks/locker/useLocker.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 0 50px;
  gap: 65px;
  box-sizing: border-box;
  ${mediaQueries[1]} {
    width: 100%;
    padding: 0 24px;
  }
`;

const GuestName = styled.span`
  font-size: 30px;
  font-weight: 700;
  ${mediaQueries[0]} {
    font-size: 25px;
  }
`;

const SubText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-size: 25px;
  font-weight: 400;
  ${mediaQueries[0]} {
    font-size: 20px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const EmptyText = styled.div`
  height: 478px;
  text-align: center;
  line-height: 478px;
  color: #9d9d9d;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
`;

const RentalCheck = () => {
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState('equipment');
  const name = searchParams.get('name');
  const studentId = searchParams.get('studentId');
  const [rentals, setRentals] = useState([]);
  const [lockers, setLockers] = useState([]);

  const { getRentals } = useRental();
  const { getMyLockers } = useLocker();
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    if (!name || !studentId) {
      return;
    }

    (async () => {
      getRentals({ name, studentId }).then((res) => {
        setRentals(res);
      });
    })();
    (async () => {
      getMyLockers(studentId).then((res) => {
        setLockers(res);
      });
    })();
  }, []);

  const renderEquipmentBox = () => {
    if (rentals.length === 0) {
      return <EmptyText>대여 신청 내역이 존재하지 않습니다.</EmptyText>;
    }
    return rentals.map((rental) => (
      <RentalBox
        key={rental.id}
        itemName={rental.equipment.name}
        imageUrl={rental.equipment.imageUrl}
        status={rental.status}
        rentalDate={rental.createdAt}
        returnDate={rental.returnDate}
      />
    ));
  };
  const renderLockerBox = () => {
    return <LockerBox status="RENTED" location="1층 101호" number="A-123" />;
  };
  const renderContent = () => {
    if (selectedType === 'equipment') {
      return renderEquipmentBox();
    } else {
      return renderLockerBox();
    }
  };

  return (
    <Container>
      <Header />
      <SubText>
        <div>
          <GuestName>{name}</GuestName>님의 신청내역
        </div>
        <RentalType type={selectedType} onChange={handleTypeChange} />
      </SubText>
      <BoxContainer>{renderContent()}</BoxContainer>
      <Footer />
    </Container>
  );
};

export default RentalCheck;
