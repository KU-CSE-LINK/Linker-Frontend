import PropTypes from 'prop-types';
import { Container, ItemTitle, ItemName, RentInfo, CategoryWrapper, MainText, StatusText, DateText } from './RentalBox.styles';

const Item = ({ itemName, imageSrc, status, rentalDate, returnDate }) => {
  return (
    <Container>
      <ItemTitle>
        <img src={imageSrc} alt={`${itemName} 사진`} />
        <ItemName>{itemName}</ItemName>
      </ItemTitle>
      <RentInfo>
        <CategoryWrapper>
          <MainText>신청현황</MainText>
          <StatusText>{status}</StatusText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>대여일</MainText>
          <DateText>{rentalDate}</DateText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>반납일</MainText>
          <DateText>{returnDate}</DateText>
        </CategoryWrapper>
      </RentInfo>
    </Container>
  );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rentalDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
};

export default Item;
