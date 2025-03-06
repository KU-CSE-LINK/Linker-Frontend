import React from 'react';
import {
  CategoryItemWrapper,
  TitleContainer,
  ItemName,
  ItemCountTotal,
  ItemCountAvailable,
  ItemCountParens,
  RentalInfoWrapper,
} from './RentalEquipmentCard.styles';
import RentalInfoItem from './RentalInfoItem';

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
        <RentalInfoItem user={equipmentData.user} />
      </RentalInfoWrapper>
    </CategoryItemWrapper>
  );
};

export default RentalEquipmentCard;
