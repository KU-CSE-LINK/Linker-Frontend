import 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizeStyle = {
  lg: {
    width: '332px',
    height: '26px',
  },
  xl: {
    width: '360px',
    height: '40px',
  },
};

const Container = styled.button`
  width: ${({ size }) => sizeStyle[size]?.width};
  height: ${({ size }) => sizeStyle[size]?.height};
  display: flex;
  box-sizing: content-box;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #3773f5;
  border: none;
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ActionButton = ({ children, onClick, type = 'button', size = 'xl' }) => {
  return (
    <Container type={type} size={size} onClick={onClick}>
      {children}
    </Container>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default ActionButton;
