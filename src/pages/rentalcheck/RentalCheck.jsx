import { Container, GuestName, SubText, BoxContainer } from './RentalCheck.styles';
import Header from '../../components/header/Header';
import RentalBox from '../../components/rentalbox/RentalBox';
import Footer from '../../components/footer/footer';
import itemPlaceholder from '../../assets/Itemplaceholder.svg';
const RentalCheck = () => {
  const userData = {
    name: '장유정',
    rentals: [
      {
        id: 1,
        itemName: '블루투스 키보드 & 마우스 세트',
        imageSrc: itemPlaceholder,
        status: '신청완료',
        rentalDate: '2025-01-24',
        returnDate: '2025-02-24',
      },
      {
        id: 2,
        itemName: '노트북 거치대',
        imageSrc: itemPlaceholder,
        status: '대여 준비 완료',
        rentalDate: '2025-01-10',
        returnDate: '2025-02-20',
      },
    ],
  };

  return (
    <Container>
      <Header />
      <SubText>
        <GuestName>{userData.name}</GuestName>님의 신청내역
      </SubText>
      <BoxContainer>
        {userData.rentals.map((rental) => (
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
