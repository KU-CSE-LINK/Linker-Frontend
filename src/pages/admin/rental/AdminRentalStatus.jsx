import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RentalStatusCard from '../../../components/admin/rental/RentalStatusCard';
import RentalStatusButton from '../../../components/button/RentalStatusButton';
import { useParams } from 'react-router-dom';
import Header from '../../../components/header/Header';

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
  font-size: 25px;
  font-weight: 700;
`;
const PageLink = styled.span`
  cursor: pointer;
  color: #3773f5;
  text-align: right;
  font-size: 25px;
  font-weight: 700;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const AdminRentalStatus = () => {
  const statusButtons = [
    { type: 'REQUESTED', label: '신청 완료' },
    { type: 'PREPARED', label: '대여 준비 완료' },
    { type: 'RENTED', label: '대여중' },
    { type: 'RETURNED', label: '반납 완료' },
  ];
  const [rentalData, setRentalData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    console.log(id);
  }, [id]);

  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>신청 내역 관리</Title>
          <PageLink>물품 별로 보기 →</PageLink>
        </TitleWrapper>
        <ContentWrapper>
          <RentalStatusCard rental={rentalData} />
          <ButtonContainer>
            {statusButtons.map(({ type, label }) => (
              <RentalStatusButton key={type} onClick={() => console.log(type)} isClicked={rentalData.status === type}>
                {label}
              </RentalStatusButton>
            ))}
          </ButtonContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default AdminRentalStatus;
