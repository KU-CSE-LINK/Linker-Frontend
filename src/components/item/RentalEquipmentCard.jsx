import React from 'react';
import {
  CategoryItemWrapper,
  TitleContainer,
  ItemName,
  ItemCountTotal,
  ItemCountAvailable,
  ItemCountParens,
  RentalInfoWrapper,
  RentalInfoTitleContainer,
  RentalInfoTitle,
  RentalInfo,
  RentalUserName,
  RentalDate,
} from './RentalEquipmentCard.styles';

const RentalInfoItem = ({ user }) => {
  return (
    <>
      <RentalUserName>{user.userName}</RentalUserName>
      <RentalDate>{user.rentalStartDate}</RentalDate>
      <RentalDate>{user.rentalEndDate}</RentalDate>
    </>
  );
};

const RentalEquipmentCard = ({ equipmentData }) => {
  return (
    <CategoryItemWrapper>
      <TitleContainer>
        {/* 블루투스 키보드&마우스 세트 아이콘 만들어지기 전까지 임시 이미지*/}
        <img src={equipmentData.imgSrc} alt="블루투스 키보드&마우스 세트 아이콘" />
        <ItemName>{equipmentData.itemName}</ItemName>
        <ItemCountParens>(</ItemCountParens>
        <ItemCountAvailable>{equipmentData.totalCount - equipmentData.rentCount}</ItemCountAvailable>
        <ItemCountTotal>/{equipmentData.totalCount}</ItemCountTotal>
        <ItemCountParens>)</ItemCountParens>
      </TitleContainer>
      <RentalInfoWrapper>
        {equipmentData.user.length !== 0 ? (
          <>
            <RentalInfoTitleContainer>
              <RentalInfoTitle>대여자</RentalInfoTitle>
              <RentalInfoTitle>대여일</RentalInfoTitle>
              <RentalInfoTitle>반납일</RentalInfoTitle>
            </RentalInfoTitleContainer>
            {equipmentData.user.map((user) => (
              <RentalInfo key={user.studentId}>
                <RentalInfoItem user={user} />
              </RentalInfo>
            ))}
          </>
        ) : (
          <RentalInfoTitle color="#9D9D9D">대여자가 없습니다.</RentalInfoTitle>
        )}
      </RentalInfoWrapper>
    </CategoryItemWrapper>
  );
};

export default RentalEquipmentCard;
