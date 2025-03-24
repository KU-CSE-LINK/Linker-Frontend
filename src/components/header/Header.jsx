import 'react';
import styled from 'styled-components';
import profileIcon from '../../assets/profileIcon.svg';
<<<<<<< HEAD
import useAuth from '../../hooks/auth/useAuth.jsx';
=======
import postDiscordLink from '../../apis/auth/postDiscordLink';
>>>>>>> e622ded (Feat: Header에 연결)

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
  const { sendLoginUrl } = useAuth();

  return (
    <HeaderContainer>
      <HiddenIcon src={profileIcon} alt="헤더바 아이콘" />
<<<<<<< HEAD
      <HeaderTitle onClick={sendLoginUrl}>LINKER</HeaderTitle>
=======
      <HeaderTitle onClick={() => postDiscordLink()}>LINKER</HeaderTitle>
>>>>>>> e622ded (Feat: Header에 연결)
      <img src={profileIcon} alt="헤더바 아이콘" />
    </HeaderContainer>
  );
};

export default Header;
