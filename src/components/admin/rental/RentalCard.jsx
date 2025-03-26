import {
  Container,
  CardContainer,
  Date,
  Divider,
  InfoItem,
  InfoLabel,
  InfoValue,
  RequestInfo,
  UserIcon,
  UserName,
  UserProfile,
  ButtonContent,
} from './RentalCard.styles.jsx';
import request from '../../../assets/admin/request.svg';
import PropTypes from 'prop-types';
import ActionButton from '../../button/ActionButton.jsx';
import { useNavigate } from 'react-router-dom';

const RentalCard = ({ rental }) => {
  const navigate = useNavigate();
  const param = new URLSearchParams({ id: rental.id });
  const onClick = () => {
    navigate({ pathname: '/admin/rentals/status', search: param.toString() });
  };

  return (
    <Container>
      <CardContainer>
        <UserProfile>
          <Date>{rental.equipment.createdAt}</Date>
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
