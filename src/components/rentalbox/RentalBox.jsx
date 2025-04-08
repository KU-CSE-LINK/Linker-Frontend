import PropTypes from 'prop-types';
import { CategoryWrapper, Container, DateText, ItemName, ItemTitle, MainText, RentInfo, StatusText, ItemImage } from './RentalBox.styles';

const RentalBox = ({ itemName, imageUrl, status, rentalDate, returnDate }) => {
  const parsedRentalDate = rentalDate.split('T')[0];
  const parsedReturnDate = returnDate.split('T')[0];

  const statusConverter = (status) => {
    switch (status) {
      case 'REQUESTED':
        return '신청완료';
      case 'PREPARED':
        return '대여 준비 완료';
      case 'RENTED':
        return '대여중';
      case 'RETURNED':
        return '반납완료';
      default:
        return '기타문의';
    }
  };

  return (
    <Container>
      <ItemTitle>
        <ItemImage src={imageUrl} alt={`${itemName} 사진`} />
        <ItemName>{itemName}</ItemName>
      </ItemTitle>
      <RentInfo>
        <CategoryWrapper>
          <MainText>신청현황</MainText>
          <StatusText>{statusConverter(status)}</StatusText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>대여일</MainText>
          <DateText>{parsedRentalDate}</DateText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>반납일</MainText>
          <DateText>{parsedReturnDate}</DateText>
        </CategoryWrapper>
      </RentInfo>
    </Container>
  );
};

RentalBox.propTypes = {
  itemName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rentalDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
};

export default RentalBox;
