import styled from 'styled-components';

const CategoryItemWrapper = styled.div`
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
  border-radius: 10px 10px 0px 0px;
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
const ItemCount = styled.span`
  color: #9d9d9d;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 5px;
  > span:nth-of-type(2) {
    color: #3773f5;
  }
  > span:nth-of-type(3) {
    font-size: 16px;
    font-weight: 400;
  }
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
const RentalInfoTitle = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: ${(props) => props.color || '#000'};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
const RentalInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  > div {
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
  }
  > span {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export { CategoryItemWrapper, TitleContainer, ItemName, ItemCount, RentalInfoWrapper, RentalInfoTitle, RentalInfo };
