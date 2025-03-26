import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, GuestName, SubText, BoxContainer } from './RentalCheck.styles';
import Header from '../../components/header/Header';
import RentalBox from '../../components/rentalbox/RentalBox';
import Footer from '../../components/footer/footer';
import getRentalData from '../../apis/rental/getRentalData';

const RentalCheck = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const studentId = searchParams.get('studentId');

  const [rentalData, setRentalData] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRentalData({ name, studentId });
        setRentalData(data);
        if (data.length > 0) setUserName(data[0].name);
        console.log(data);
      } catch (error) {
        alert('대여 내역 조회 중 문제가 발생했습니다.');
        console.error('[ERROR] 대여 내역 불러오기 실패:', error);
      }
    };

    if (name && studentId) {
      fetchData();
    }
  }, [name, studentId]);

  return (
    <Container>
      <Header />
      <SubText>
        <GuestName>{userName}</GuestName>님의 신청내역
      </SubText>
      <BoxContainer>
        {rentalData.map((rental) => (
          <RentalBox
            key={rental.id}
            itemName={rental.itemName}
            imageSrc={rental.imageSrc}
            status={rental.status}
            rentalDate={rental.rentalDate}
            returnDate={rental.returnDate}
          />
        ))}
      </BoxContainer>
      <Footer />
    </Container>
  );
};

export default RentalCheck;
