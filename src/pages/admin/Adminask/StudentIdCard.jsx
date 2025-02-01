import React from "react";
import styled from "styled-components";
import ActionBtn from "../../../components/Btn/ActionBtn";

const ItemBox = styled.div`
  width: 352px;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 15px 5px rgba(44, 44, 44, 0.15) inset;
  margin-bottom: 1rem;
`;
const ItemPadding = styled.div`
  padding: 37px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Date = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-bottom: 16px;
`;
const Photo = styled.img`
  width: 97px;
  height: 113px;
  flex-shrink: 0;
  padding-bottom: 11px;
`;
const Name = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 21px;
`;
const GrayLine = styled.div`
  width: 268px;
  height: 2px;
  background-color: #f1f1f1;
`;
const ContentGap = styled.div`
  padding-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 302px;
  align-items: center;
`;
const Content = styled.div`
  color: #9d9d9d;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Item = styled.div`
  color: #000;
  text-align: right;
  font-family: "Pretendard";
  font-size: 13px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  white-space: pre-line;
`;
const ZeroTitle = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ZeroImo = styled.div`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ZeroPadding = styled.div`
  margin: 193px 0 324px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StudentIdCard = ({ lend }) => {
  // {
  //     date: "2025-01-26",
  //     name: "박지훈",
  //     item: "노트북 거치대",
  //     studentId: "202310987",
  //     phone: "010-9876-5432",
  // src
  //   },

  return !lend || Object.keys(lend).length === 0 ? (
    <ZeroPadding>
      <ZeroTitle>새로운 대여 요청이 없습니다.</ZeroTitle>
      <ZeroImo>（*＾-＾*）</ZeroImo>
    </ZeroPadding>
  ) : (
    <>
      <ItemBox>
        <ItemPadding>
          <Date>{lend.date}</Date>
          <Photo src={lend.src} alt="person" />
          <Name>{lend.name}</Name>
          <GrayLine />
          <ContentGap>
            <ContentItem>
              <Content>대여 요청 물품</Content>
              <Item>
                {lend.item.map((it, index) => (
                  <React.Fragment key={index}>
                    {it}
                    <br />
                  </React.Fragment>
                ))}
              </Item>
            </ContentItem>
            <ContentItem>
              <Content>학번</Content>
              <Item>{lend.studentId}</Item>
            </ContentItem>
            <ContentItem>
              <Content>전화번호</Content>
              <Item>{lend.phone}</Item>
            </ContentItem>
          </ContentGap>
        </ItemPadding>
      </ItemBox>
      <ActionBtn children="신청 내역 관리하기"></ActionBtn>
    </>
  );
};

export default StudentIdCard;
