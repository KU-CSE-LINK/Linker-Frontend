import 'react';
import styled from 'styled-components';
import profileIcon from '../../assets/profileIcon.svg';
import postDiscordLink from '../../apis/auth/postDiscordLink';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -1.5px;
  cursor: pointer;
`;

const HiddenIcon = styled.img`
  visibility: hidden;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HiddenIcon src={profileIcon} alt="헤더바 아이콘" />
      <HeaderTitle onClick={() => postDiscordLink()}>LINKER</HeaderTitle>
      <img src={profileIcon} alt="헤더바 아이콘" />
    </HeaderContainer>
  );
};

export default Header;
