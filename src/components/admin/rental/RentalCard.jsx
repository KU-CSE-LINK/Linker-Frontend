import { Container, Date, Divider, InfoItem, InfoLabel, InfoValue, RequestInfo, UserIcon, UserName, UserProfile } from './RentalCard.styles.jsx';
import request from '../../../assets/admin/request.svg';
import PropTypes from 'prop-types';

const RentalCard = ({ rental }) => {
  return (
    <Container>
      <UserProfile>
        <Date>{rental.createdAt}</Date>
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
    </Container>
  );
};

RentalCard.propTypes = {
  rental: PropTypes.shape({
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
  }).isRequired,
};

export default RentalCard;
