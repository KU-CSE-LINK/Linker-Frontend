import 'react';
import styled from 'styled-components';
import Header from '../../../components/header/Header';
import RentalEquipmentCard from '../../../components/admin/rental/RentalEquipmentCard.jsx';
import laptopStand from '../../../assets/laptopStand.svg';
import laptopPowerAdapter from '../../../assets/laptopPowerAdapter.svg';

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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;
const PageLink = styled.span`
  cursor: pointer;
  color: #3773f5;
  text-align: right;
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

const AdminRentalsByEquipment = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>신청 내역 관리</Title>
          <PageLink>대여자 별로 보기 →</PageLink>
        </TitleWrapper>
        <ItemContainer>
          {equipments.map((equipment) => (
            <RentalEquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </ItemContainer>
      </Wrapper>
    </>
  );
};

export default AdminRentalsByEquipment;

const equipments = [
  {
    id: 1,
    name: '블루투스 키보드 & 마우스 세트',
    imgUrl: laptopStand,
    totalStock: 15,
    availableStock: 10,
  },
  {
    id: 2,
    name: '노트북 거치대',
    imgUrl: laptopStand,
    totalStock: 15,
    availableStock: 5,
  },
  {
    id: 3,
    itemName: '노트북 C타입 충전기',
    imgUrl: laptopPowerAdapter,
    totalStock: 15,
    availableStock: 0,
  },
];
