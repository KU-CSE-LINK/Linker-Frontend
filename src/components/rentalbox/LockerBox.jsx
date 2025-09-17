import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const Container = styled.div`
  width: 100%;
  min-height: 160px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px 8px rgba(139, 139, 139, 0.15);
  padding: 30px 0;
  ${mediaQueries[1]} {
    width: 100%;
    height: auto;
  }
`;

const LockerTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  margin-left: 32px;
  margin-bottom: 40px;
`;

const LockerInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
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
  min-width: 110px;
  align-items: center;
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

const LocationText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  white-space: pre-line;
`;

const NumberText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;

const DateText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;

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
