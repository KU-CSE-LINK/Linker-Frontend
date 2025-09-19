import styled from 'styled-components';
import profileIcon from '../../../assets/profileIcon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 41px 26px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;
const UserProfile = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 43px;
`;
const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const UserName = styled.span`
  color: #000;
  font-size: 22px;
  font-weight: 700;
`;
const UserInfo = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 300;
`;
const RequestInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InfoItem = styled.p`
  display: flex;
  gap: 16px;
`;
const InfoLabel = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  width: 80px;
  text-align: right;
`;
const InfoValue = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
  width: 130px;
`;
const RentalStatus = styled.span`
  color: #3773f5;
  font-size: 16px;
  font-weight: 300;
`;

const RentalStatusCard = ({ rental }) => {
  const convertRentalStatus = (status) => {
    switch (status) {
      case 'REQUESTED':
        return '신청 완료';
      case 'PREPARED':
        return '대여 준비 완료';
      case 'RENTED':
        return '대여중';
      case 'RETURNED':
        return '반납 완료';
    }
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return `${String(formattedDate.getFullYear()).padStart(2, '0')}-${String(formattedDate.getMonth() + 1).padStart(2, '0')}-${String(formattedDate.getDate()).padStart(2, '0')}`;
  };
  return (
    <Container>
      <UserProfile>
        <img src={profileIcon} alt="유저 프로필 아이콘" />
        <UserInfos>
          <UserName>{rental.name}</UserName>
          <UserInfo>{rental.studentId}</UserInfo>
          <UserInfo>{rental.phoneNumber}</UserInfo>
        </UserInfos>
      </UserProfile>
      <RequestInfo>
        <InfoItem>
          <InfoLabel>대여 물품</InfoLabel>
          <InfoValue>{rental.equipment.name}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>대여일</InfoLabel>
          <InfoValue>{formatDate(rental.createdAt)}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>반납일</InfoLabel>
          <InfoValue>{formatDate(rental.returnDate)}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>신청 상황</InfoLabel>
          <RentalStatus>{convertRentalStatus(rental.status)}</RentalStatus>
        </InfoItem>
      </RequestInfo>
    </Container>
  );
};

export default RentalStatusCard;
