import { Container, RentalDate, RentalInfo, RentalInfoCell, RentalInfoTitle, RentalInfoTitleContainer, RentalUserName } from './RentalInfos.styles.jsx';
import PropTypes from 'prop-types';

const RentalInfos = ({ rentals }) => {
  if (!rentals.length) {
    return <RentalInfoTitle color="#9D9D9D">대여자가 없습니다.</RentalInfoTitle>;
  }
  return (
    <Container>
      <RentalInfoTitleContainer>
        <RentalInfoTitle>대여자</RentalInfoTitle>
        <RentalInfoTitle>대여일</RentalInfoTitle>
        <RentalInfoTitle>반납일</RentalInfoTitle>
      </RentalInfoTitleContainer>
      {rentals.map((rental) => {
        const rentalDate = rental.createdAt?.split('T')[0] ?? '';
        return (
          <RentalInfo key={rental.studentId}>
            <RentalInfoCell>
              <RentalUserName>{rental.name}</RentalUserName>
            </RentalInfoCell>
            <RentalInfoCell>
              <RentalDate>{rentalDate}</RentalDate>
            </RentalInfoCell>
            <RentalInfoCell>
              <RentalDate>{rental.rentalEndDate}</RentalDate>
            </RentalInfoCell>
          </RentalInfo>
        );
      })}
    </Container>
  );
};

RentalInfos.propTypes = {
  rentals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      equipment: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        totalStock: PropTypes.number,
        availableStock: PropTypes.number,
      }),
      phoneNumber: PropTypes.string,
      name: PropTypes.string,
      studentId: PropTypes.number,
      rentalType: PropTypes.string,
      status: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
};

export default RentalInfos;
