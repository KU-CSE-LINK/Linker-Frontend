import React from 'react';
import { CategoryItemWrapper, TitleContainer, ItmeName, ItemCount, RentalInfoWrapper, RentalInfoContent, RentalInfo } from './ManageCategoryItem.styles';

const ManageCategoryItem = ({ itemData }) => {
  return (
    <CategoryItemWrapper>
      <TitleContainer>
        {/* 블루투스 키보드&마우스 세트 아이콘 만들어지기 전까지 임시 이미지*/}
        <img src={itemData.imgSrc} alt="블루투스 키보드&마우스 세트 아이콘" />
        <ItmeName>{itemData.itemName}</ItmeName>
        <ItemCount>
          <span>(</span>
          <span>{itemData.totalCount - itemData.rentCount}</span>
          <span>/{itemData.totalCount}</span>
          <span>)</span>
        </ItemCount>
      </TitleContainer>
      <RentalInfoWrapper>
        {itemData.user.length !== 0 ? (
          <>
            <RentalInfoContent>
              <span>대여자</span>
              <span>대여일</span>
              <span>반납일</span>
            </RentalInfoContent>
            {itemData.user.map((user) => (
              <RentalInfo key={user.studentId}>
                <div>{user.userName}</div>
                <span>{user.rentalStartDate}</span>
                <span>{user.rentalEndDate}</span>
              </RentalInfo>
            ))}
          </>
        ) : (
          <RentalInfoContent color="#9D9D9D">대여자가 없습니다.</RentalInfoContent>
        )}
      </RentalInfoWrapper>
    </CategoryItemWrapper>
  );
};

export default ManageCategoryItem;
