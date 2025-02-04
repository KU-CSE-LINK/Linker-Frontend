import React from 'react';
import labtopStand from '../../../assets/labtopStand.svg';
import labtopPowerAdapter from '../../../assets/labtopPowerAdapter.svg';
import styled from 'styled-components';

const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 0 27px;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #000;
  border-bottom: none;
  background: #fff;
`;
const ItmeName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ItemCount = styled.span`
  color: #9d9d9d;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  > span:nth-of-type(1) {
    color: #3773f5;
  }
  > span:nth-of-type(2) {
    font-size: 16px;
    font-weight: 400;
  }
`;

const RentalInfoWrapper = styled.div``;

const ManageCategoryItem = () => {
  return (
    <CategoryItemWrapper>
      <TitleContainer>
        {/* 블루투스 키보드&마우스 세트 아이콘 만들어지기 전까지 임시 이미지*/}
        <img src={labtopStand} alt="블루투스 키보드&마우스 세트 아이콘" />
        <ItmeName>{itemName}</ItmeName>
        <ItemCount>
          <span>(</span>
          <span>14</span>
          <span>/15</span>
          <span>)</span>
        </ItemCount>
      </TitleContainer>
      <RentalInfoWrapper>
        <p>
          <span>대여자</span>
          <span>대여일</span>
          <span>반납일</span>
        </p>
        <RentalInfo>
          <div>{userName}</div>
          <span>{rentalStartDate}</span>
          <span>{rentalEndDate}</span>
        </RentalInfo>
      </RentalInfoWrapper>
    </CategoryItemWrapper>
  );
};

export default ManageCategoryItem;
