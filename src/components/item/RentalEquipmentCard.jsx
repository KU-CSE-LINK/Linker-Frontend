import React from 'react';
import { CategoryItemWrapper, TitleContainer, ItemName, ItemCount, RentalInfoWrapper, RentalInfoTitle, RentalInfo } from './RentalEquipmentCard.styles';

const RentalInfoItem = ({ user }) => {
  return (
    <>
      <div>{user.userName}</div>
      <span>{user.rentalStartDate}</span>
      <span>{user.rentalEndDate}</span>
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
        <ItemCount>
          <span>(</span>
          <span>{equipmentData.totalCount - equipmentData.rentCount}</span>
          <span>/{equipmentData.totalCount}</span>
          <span>)</span>
        </ItemCount>
      </TitleContainer>
      <RentalInfoWrapper>
        {equipmentData.user.length !== 0 ? (
          <>
            <RentalInfoTitle>
              <span>대여자</span>
              <span>대여일</span>
              <span>반납일</span>
            </RentalInfoTitle>
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
