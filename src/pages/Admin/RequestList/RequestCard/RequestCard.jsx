import { Card, UserIcon, UserName, UserProfile, Date, InfoLabel, Divider, RequestInfo, InfoItem, InfoValue } from './RequestCard.styles';

const RequestCard = ({ Equipments }) => {
  return (
    <Card>
      <UserProfile>
        <Date>{Equipments.date}</Date>
        <UserIcon src="/requesturl/request.svg" alt="requestIcon" />
        <UserName>{Equipments.name}</UserName>
      </UserProfile>
      <Divider />
      <RequestInfo>
        <InfoItem>
          <InfoLabel>대여 요청 물품</InfoLabel>
          <InfoValue>{Equipments.items.join('\n')}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>학번</InfoLabel>
          <InfoValue>{Equipments.studentId}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>전화번호</InfoLabel>
          <InfoValue>{Equipments.phone}</InfoValue>
        </InfoItem>
      </RequestInfo>
    </Card>
  );
};
export default RequestCard;
