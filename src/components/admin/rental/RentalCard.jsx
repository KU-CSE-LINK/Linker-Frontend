import request from '../../../assets/admin/request.svg';
import PropTypes from 'prop-types';
import ActionButton from '../../button/ActionButton.jsx';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 15px 5px rgba(44, 44, 44, 0.15) inset;
  padding-bottom: 13px;
  gap: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 0;
`;

const DateLabel = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 16px 0;
`;

const UserIcon = styled.img`
  width: 97px;
  height: 113px;
  flex-shrink: 0;
`;

const UserName = styled.div`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 11px 0;
`;

const Divider = styled.div`
  width: 268px;
  height: 2px;
  background-color: #f1f1f1;
`;

const RequestInfo = styled.div`
  padding: 0 25px 23px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoLabel = styled.div`
  color: #9d9d9d;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 91px;
`;

const InfoValue = styled.div`
  color: #000;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 172px;
  white-space: pre-line;
`;

const ButtonContent = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const RentalCard = ({ rental }) => {
  const navigate = useNavigate();
  const param = new URLSearchParams({ id: rental.id });
  const onClick = () => {
    navigate({ pathname: '/admin/rentals/status', search: param.toString() });
  };

  const rentalDate = rental.createdAt.split('T')[0];
  const returnDate = rental.returnDate.split('T')[0];
  const dateRange = `${rentalDate} ~ ${returnDate}`;

  return (
    <Container>
      <CardContainer>
        <UserProfile>
          <DateLabel>{dateRange}</DateLabel>
          <UserIcon src={request} alt="requestIcon" />
          <UserName>{rental.name}</UserName>
        </UserProfile>
        <Divider />
        <RequestInfo>
          <InfoItem>
            <InfoLabel>대여 요청 물품</InfoLabel>
            <InfoValue>{rental.equipment.name}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>학번</InfoLabel>
            <InfoValue>{rental.studentId}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>전화번호</InfoLabel>
            <InfoValue>{rental.phoneNumber}</InfoValue>
          </InfoItem>
        </RequestInfo>
      </CardContainer>
      <ActionButton size="lg">
        <ButtonContent onClick={onClick}>신청 내역 관리하기</ButtonContent>
      </ActionButton>
    </Container>
  );
};

RentalCard.propTypes = {
  rental: PropTypes.shape({
    id: PropTypes.number,
    equipment: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      totalStock: PropTypes.number,
      availableStock: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
    phoneNumber: PropTypes.string,
    name: PropTypes.string,
    studentId: PropTypes.number,
    rentalType: PropTypes.string,
    returnDate: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default RentalCard;
