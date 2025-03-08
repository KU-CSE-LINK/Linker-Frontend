import 'react';
import { Container, ItemCountAvailable, ItemCountParens, ItemCountTotal, ItemName, RentalInfoWrapper, TitleContainer } from './RentalEquipmentCard.styles.jsx';
import RentalInfos from './RentalInfos.jsx';
import PropTypes from 'prop-types';
import laptopStand from '../../../assets/laptopStand.svg';

const RentalEquipmentCard = ({ equipment }) => {
  return (
    <Container>
      <TitleContainer>
        {/* 블루투스 키보드&마우스 세트 아이콘 만들어지기 전까지 임시 이미지*/}
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
