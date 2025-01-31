import React from "react";
import styled from "styled-components";
import LendBtn from "../../components/Btn/LendBtn";

const GraphBox = styled.div`
  padding: 60px;
  width: 100%;
`;

const Arrange = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3개의 열을 동일한 비율로 설정 */
  text-align: center;
  align-items: stretch;
  width: 100%;
  justify-items: center;
`;

const ArrangeTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 22px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

const Grayline = styled.div`
  background: #f1f1f1;
  width: 100%;
  height: 2px;
  margin: 28px 0;
`;

const ColumnArrange = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto); /* 3개의 행을 자동 높이로 설정 */
  gap: 6rem;
  text-align: center;
`;

const ItemName = styled.div`
  font-size: 20px;
  font-weight: 300;
  white-space: pre-line; /* \n을 자동으로 줄바꿈 처리 */
`;

const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const RealNumber = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const RedNumber = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: red;
`;

const MaxNumber = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #9d9d9d;
`;

const Graph = () => {
  const [items, setItems] = React.useState([
    {
      name: `블루투스 키보드  &\n 마우스 세트`,
      available: 15,
      max: 15,
    },
    { name: "노트북 거치대", available: 8, max: 15 },
    { name: "노트북 C 타입 충전기", available: 0, max: 5 },
  ]);

  return (
    <GraphBox>
      {/* 테이블 헤더 */}
      <Arrange>
        <ArrangeTitle>물품명</ArrangeTitle>
        <ArrangeTitle>잔여수량</ArrangeTitle>
        <ArrangeTitle>대여하기</ArrangeTitle>
      </Arrange>
      <Grayline />

      {/* 테이블 내용 */}
      <Arrange>
        {/* 물품명 리스트 */}
        <ColumnArrange>
          {items.map((item, index) => (
            <ItemName key={index}>{item.name}</ItemName>
          ))}
        </ColumnArrange>

        {/* 잔여 수량 */}
        <ColumnArrange>
          {items.map((item, index) => (
            <ItemNumber key={index}>
              {item.available !== 0 ? (
                <RealNumber>{item.available}</RealNumber>
              ) : (
                <RedNumber>{item.available}</RedNumber>
              )}
              <MaxNumber>/ {item.max}</MaxNumber>
            </ItemNumber>
          ))}
        </ColumnArrange>

        {/* 대여 버튼 */}
        <ColumnArrange>
          {items.map((item, index) => (
            <LendBtn key={index} enable={item.available} />
          ))}
        </ColumnArrange>
      </Arrange>
    </GraphBox>
  );
};

export default Graph;
