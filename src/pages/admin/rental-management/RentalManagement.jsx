import React from 'react';
import MenuBtn from '../../../components/Btn/MenuBtn';
import styled from 'styled-components';
import Header from '../../../components/Header/Header';

const Wrapper = styled.div`
  height: 100vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 75px;
  width: 100%;
  height: 100%;
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
const BtnWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

const RentalManagement = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Title>신청 내역 관리</Title>
        <BtnWrapper>
          <MenuBtn type="button" children="물품 별로 보기" />
          <MenuBtn type="button" children="대여자 별로 보기" />
        </BtnWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default RentalManagement;

const userData = [
  {
    userName: '장유정',
    phoneNum: '010-7371-2855',
    studentId: '202311362',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
  {
    userName: '박지인',
    phoneNum: '010-7371-2855',
    studentId: '202311363',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
  {
    userName: '이수아',
    phoneNum: '010-7371-2855',
    studentId: '202311364',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
  {
    userName: '황규운',
    phoneNum: '010-7371-2855',
    studentId: '202311365',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
  {
    userName: '김석진',
    phoneNum: '010-7371-2855',
    studentId: '202311366',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
  {
    userName: '진성욱',
    phoneNum: '010-7371-2855',
    studentId: '202311367',
    rental: [
      {
        itemName: '노트북 C타입 충전기',
        rentalStartDate: '2025-01-24',
        rentalEndDate: '2025-02-24',
        rentalState: '신청 완료',
      },
    ],
  },
];
