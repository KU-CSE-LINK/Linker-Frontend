import React from "react";
import Title from "../../ask/Title";
import ItemInfo from "./Iteminfo";
import originalphoto from "../../../assets/originalphoto.svg";
import styled from "styled-components";
import ActionBtn from "../../../components/Btn/ActionBtn";
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 3rem;
  flex-direction: column;
`;
const AdminAsk = () => {
  const lendRequests = [
    {
      date: "2025-01-24",
      name: "장유정",
      item: ["노트북 C타입 충전기"],
      studentId: "202311362",
      phone: "010-7371-2855",
      src: originalphoto,
    },
    {
      date: "2025-01-25",
      name: "김민수",
      item: [
        "블루투스 키보드 & 마우스 세트",
        "노트북 거치대",
        "노트북 C타입 충전기",
      ],
      studentId: "202311478",
      phone: "010-1234-5678",
      src: originalphoto,
    },
    {
      date: "2025-01-26",
      name: "박지훈",
      item: ["노트북 거치대"],
      studentId: "202310987",
      phone: "010-9876-5432",
      src: originalphoto,
    },
    {},
  ];
  return (
    <>
      <Title title="신청 목록 조회" />
      <Center>
        <ItemInfo lend={lendRequests[3]} />
        <ActionBtn children="신청 내역 관리하기"></ActionBtn>
      </Center>
    </>
  );
};

export default AdminAsk;
