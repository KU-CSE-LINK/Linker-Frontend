import 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate('/')}>LINKER</HeaderTitle>
    </HeaderContainer>
  );
};
export default Header;
