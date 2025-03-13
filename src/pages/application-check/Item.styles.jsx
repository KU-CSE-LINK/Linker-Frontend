import styled from 'styled-components';

export const Container = styled.div`
  width: 750px;
  height: 200px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 15px 8px rgba(139, 139, 139, 0.15);
`;

export const ItemTitle = styled.div`
  display: flex;
  gap: 9px;
  margin-top: 30px;
  img {
    margin-left: 33px;
  }
`;

export const ItemName = styled.span`
  color: #000;
  font-size: 22px;
  font-weight: 700;
`;

export const RentInfo = styled.div`
  display: flex;
  // gap: 110.55px;
  justify-content: space-evenly;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 27px;
`;

export const MainText = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const StatusText = styled.span`
  color: #3773f5;
  font-size: 16px;
  font-weight: 300;
`;

export const DateText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 300;
`;
