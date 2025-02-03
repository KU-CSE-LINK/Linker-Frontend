import React from 'react';
import styled from 'styled-components';
import profileIcon from '../../assets/profileIcon.svg';
import alarmIcon from '../../assets/alarmIcon.svg';

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  > img {
    position: absolute;
    right: 20px;
  }
`;
const HeaderTitle = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -1.5px; /* 글자 간격 줄이기 */
`;

const Header = ({ admin }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>LINKER</HeaderTitle>
      <img src={admin ? alarmIcon : profileIcon} alt="헤더바 아이콘" />
    </HeaderContainer>
  );
};

export default Header;
