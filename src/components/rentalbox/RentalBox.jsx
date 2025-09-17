import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const Container = styled.div`
  width: 750px;
  height: 200px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px 8px rgba(139, 139, 139, 0.15);
  ${mediaQueries[1]} {
    width: 100%;
    height: auto;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  gap: 9px;
  margin-top: 30px;
`;

const ItemImage = styled.img`
  margin-left: 30px;
  max-width: 65px;
  max-height: 30px;
  object-fit: contain;
`;

const ItemName = styled.span`
  color: #000;
  font-size: 22px;
  font-weight: 700;
`;

const RentInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${mediaQueries[1]} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 27px;
`;

const MainText = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const StatusText = styled.span`
  color: #3773f5;
  font-size: 16px;
  font-weight: 300;
`;

const DateText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;

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
