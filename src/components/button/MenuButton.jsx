import 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mediaQueries } from '../../styles/GlobalStyles';
const Container = styled.button`
  display: flex;
  box-sizing: content-box;
  width: 280px;
  height: 52px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: white;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: #3773f5;
    color: #fff;
    font-weight: 600;
    border: none;
  }
  ${mediaQueries[0]} {
    max-width: 210px;
    aspect-ratio: 280/52;
    font-size: 17px;
    height: auto;
  }
`;

const MenuButton = ({ children, onClick, type = 'button' }) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default MenuButton;
