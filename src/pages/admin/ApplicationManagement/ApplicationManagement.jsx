import React from 'react';
import MenuBtn from '../../../components/Btn/MenuBtn';
import styled from 'styled-components';
import laptopStand from '../../../assets/laptopStand.svg';
import laptopPowerAdapter from '../../../assets/laptopPowerAdapter.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 54px;
  width: 100%;
  > h3 {
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

const ApplicationManagement = () => {
  return (
    <Wrapper>
      <h3>신청 내역 관리</h3>
      <BtnWrapper>
        <MenuBtn type="button" children="물품 별로 보기" itemData={itemData} />
        <MenuBtn type="button" children="대여자 별로 보기" />
      </BtnWrapper>
    </Wrapper>
  );
};

export default ApplicationManagement;

const itemData = [
  {
    id: 1,
    itemName: '블루투스 키보드 & 마우스 세트',
    imgSrc: { laptopStand },
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
    imgSrc: { laptopStand },
    totalCount: 15,
    rentCount: 0,
    user: [],
  },
  {
    id: 3,
    itemName: '노트북 C타입 충전기',
    imgSrc: { laptopPowerAdapter },
    totalCount: 15,
    rentCount: 0,
    user: [],
  },
];

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
