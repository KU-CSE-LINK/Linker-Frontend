import React from 'react';
import styled from 'styled-components';
import laptopStand from '../../../assets/laptopStand.svg';
import laptopPowerAdapter from '../../../assets/laptopPowerAdapter.svg';
import Header from '../../../components/Header/Header';
import ManageCategoryItem from '../../../components/item/ManageCategoryItem';

const Wrapper = styled.div`
  padding: 50px 75px 75px 75px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 55px;
`;
const Title = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;
const PageLink = styled.span`
  cursor: pointer;
  color: #3773f5;
  text-align: right;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const ItemListManagement = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>신청 내역 관리</Title>
          <PageLink>대여자 별로 보기 →</PageLink>
        </TitleWrapper>
        <ItemContainer>
          {itemData.map((item) => (
            <ManageCategoryItem key={item.id} itemData={item} />
          ))}
        </ItemContainer>
      </Wrapper>
    </>
  );
};

export default ItemListManagement;

const itemData = [
  {
    id: 1,
    itemName: '블루투스 키보드 & 마우스 세트',
    imgSrc: laptopStand,
    totalCount: 15,
    rentCount: 3,
    user: [
      {
        studentId: '202311362',
        userName: '장유정',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
      },
      {
        studentId: '202311363',
        userName: '박지인',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
      },
      {
        studentId: '202311364',
        userName: '이수아',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
      },
    ],
  },
  {
    id: 2,
    itemName: '노트북 거치대',
    imgSrc: laptopStand,
    totalCount: 15,
    rentCount: 0,
    user: [],
  },
  {
    id: 3,
    itemName: '노트북 C타입 충전기',
    imgSrc: laptopPowerAdapter,
    totalCount: 15,
    rentCount: 0,
    user: [],
  },
];
