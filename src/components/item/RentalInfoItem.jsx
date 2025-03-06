import { RentalInfoTitleContainer, RentalInfoTitle, RentalInfo, RentalUserName, RentalDate } from './RentalEquipmentCard.styles';

const RentalInfoItem = ({ user }) => {
  return (
    <>
      {user.length !== 0 ? (
        <>
          <RentalInfoTitleContainer>
            <RentalInfoTitle>대여자</RentalInfoTitle>
            <RentalInfoTitle>대여일</RentalInfoTitle>
            <RentalInfoTitle>반납일</RentalInfoTitle>
          </RentalInfoTitleContainer>
          {user.map((user) => (
            <RentalInfo key={user.studentId}>
              <RentalUserName>{user.userName}</RentalUserName>
              <RentalDate>{user.rentalStartDate}</RentalDate>
              <RentalDate>{user.rentalEndDate}</RentalDate>{' '}
            </RentalInfo>
          ))}
        </>
      ) : (
        <RentalInfoTitle color="#9D9D9D">대여자가 없습니다.</RentalInfoTitle>
      )}
    </>
  );
};

export default RentalInfoItem;
