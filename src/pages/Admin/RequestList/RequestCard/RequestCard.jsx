import { Card, UserIcon, UserName, UserProfile, Date, InfoLabel, Divider, RequestInfo, InfoItem, InfoValue } from './RequestCard.styles';

const RequestCard = ({ item }) => {
  return (
    <Card>
      <UserProfile>
        <Date>{item.date}</Date>
        <UserIcon src="/requesturl/request.svg" alt="requestIcon" />
        <UserName>{item.name}</UserName>
      </UserProfile>
      <Divider />
      <RequestInfo>
        <InfoItem>
          <InfoLabel>대여 요청 물품</InfoLabel>
          <InfoValue>{item.items.join('\n')}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>학번</InfoLabel>
          <InfoValue>{item.studentId}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>전화번호</InfoLabel>
          <InfoValue>{item.phone}</InfoValue>
        </InfoItem>
      </RequestInfo>
    </Card>
  );
};
export default RequestCard;
