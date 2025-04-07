import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BoxContainer, Container, EmptyText, GuestName, SubText } from './RentalCheck.styles';
import Header from '../../components/header/Header';
import RentalBox from '../../components/rentalbox/RentalBox';
import Footer from '../../components/footer/footer';
import useRental from '../../hooks/rental/useRental.jsx';

const RentalCheck = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const studentId = searchParams.get('studentId');

  const [rentals, setRentals] = useState([]);

  const { getRentals } = useRental();

  useEffect(() => {
    if (!name || !studentId) {
      return;
    }

    (async () => {
      getRentals({ name, studentId }).then((res) => {
        setRentals(res);
      });
    })();
  }, []);

  return (
    <Container>
      <Header />
      <SubText>
        <GuestName>{name}</GuestName>님의 신청내역
      </SubText>
      <BoxContainer>
        {rentals.length === 0 ? (
          <EmptyText>대여 신청 내역이 존재하지 않습니다.</EmptyText>
        ) : (
          rentals.map((rental) => (
            <RentalBox
              key={rental.id}
              itemName={rental.equipment.name}
              imageUrl={rental.equipment.imageUrl}
              status={rental.status}
              rentalDate={rental.createdAt}
              returnDate={rental.returnDate}
            />
          ))
        )}
      </BoxContainer>
      <Footer />
    </Container>
  );
};

export default RentalCheck;
