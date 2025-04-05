import 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/auth/useAuth';

const Container = styled.div`
  width: 100%;
  text-align: center;
  color: #dbdbdb;
  font-size: 15px;
  font-weight: 400;
`;

function Footer() {
  const { sendLoginUrl } = useAuth();
  return <Container onClick={sendLoginUrl}>제6대 컴퓨터공학부 학생회 LINK</Container>;
}

export default Footer;
