import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const RentalInfoTitleContainer = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const RentalInfoTitle = styled.span`
  color: ${({ color }) => color || '#000'};
  font-size: 20px;
  font-weight: 500;
`;

const RentalInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 20px 0;
`;

const RentalInfoCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const RentalUserName = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 80px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #f1f1f1;
  color: #9d9d9d;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const RentalDate = styled.span`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export { Container, RentalInfoTitleContainer, RentalInfoTitle, RentalInfo, RentalInfoCell, RentalUserName, RentalDate };
