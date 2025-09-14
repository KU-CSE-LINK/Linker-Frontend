import PropTypes from 'prop-types';
import { Container, LockerTitle, LockerInfo, CategoryWrapper, MainText, StatusText, LocationText, NumberText, DateText } from './LockerBox.styles';

const LockerBox = ({ status, location, number }) => {
  const statusConverter = (status) => {
    switch (status) {
      case 'REQUESTED':
        return '신청 완료';
      case 'RENTED':
        return '대여중';
      case 'RETURNED':
        return '반납완료';
      default:
        return '기타문의';
    }
  };
  const returnDate = '2025-12-19';

  return (
    <Container>
      <LockerTitle>사물함</LockerTitle>
      <LockerInfo>
        <CategoryWrapper>
          <MainText>신청 상황</MainText>
          <StatusText>{statusConverter(status)}</StatusText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>위치</MainText>
          <LocationText>{location}</LocationText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>번호</MainText>
          <NumberText>{number}</NumberText>
        </CategoryWrapper>
        <CategoryWrapper>
          <MainText>반납일</MainText>
          <DateText>{returnDate}</DateText>
        </CategoryWrapper>
      </LockerInfo>
    </Container>
  );
};

LockerBox.propTypes = {
  status: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default LockerBox;
