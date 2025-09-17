import 'react';
import RentalInfos from './RentalInfos.jsx';
import PropTypes from 'prop-types';
import laptopStand from '../../../assets/laptopStand.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  height: 45px;
  padding: 0 27px;
  white-space: nowrap;
  border-radius: 10px 10px 0 0;
  border: 1px solid #000;
  border-bottom: none;
  background: #fff;
`;

const ItemName = styled.span`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 13px;
`;

const ItemCountTotal = styled.span`
  color: #9d9d9d;
  font-size: 16px;
  font-weight: 400;
  margin-left: 5px;
`;

const ItemCountAvailable = styled.span`
  color: #3773f5;
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
`;

const ItemCountParens = styled.span`
  color: #9d9d9d;
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
`;

const RentalInfoWrapper = styled.div`
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding: 50px;
  border-radius: 0px 10px 10px 10px;
  border: 1px solid #000;
  background: #fff;
`;

const RentalEquipmentCard = ({ equipment }) => {
  return (
    <Container>
      <TitleContainer>
        <img src={equipment.imgUrl} alt="블루투스 키보드&마우스 세트 아이콘" />
        <ItemName>{equipment.name}</ItemName>
        <ItemCountParens>(</ItemCountParens>
        <ItemCountAvailable>{equipment.availableStock}</ItemCountAvailable>
        <ItemCountTotal>/{equipment.totalStock}</ItemCountTotal>
        <ItemCountParens>)</ItemCountParens>
      </TitleContainer>
      <RentalInfoWrapper>
        <RentalInfos rentals={rentals} />
      </RentalInfoWrapper>
    </Container>
  );
};

RentalEquipmentCard.propTypes = {
  equipment: PropTypes.shape({
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    totalStock: PropTypes.number,
    availableStock: PropTypes.number,
  }),
};

export default RentalEquipmentCard;

const rentals = [
  {
    id: 1,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '김철수',
    studentId: 202011299,
    rentalType: 'SHORT_TERM',
    status: 'REQUESTED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
  {
    id: 2,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '이철수',
    studentId: 202011299,
    rentalType: 'LONG_TERM',
    status: 'PREPARED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
  {
    id: 3,
    equipment: {
      id: 1,
      name: '블루투스 키보드&마우스 세트',
      imgUrl: laptopStand,
      totalStock: 10,
      availableStock: 5,
    },
    phoneNumber: '010-1234-5678',
    name: '박철수',
    studentId: 202011299,
    rentalType: 'SHORT_TERM',
    status: 'RENTED',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-11',
  },
];
