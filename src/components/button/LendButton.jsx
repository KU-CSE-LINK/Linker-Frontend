import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  color: ${({ disabled }) => (disabled ? '#fff' : '#9D9D9D')};
  background-color: ${({ disabled }) => (disabled ? '#3773F5' : '#F1F1F1')};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'pointer' : 'not-allowed')};
`;

const LendButton = ({ onClick, type = 'button', disabled }) => {
  const buttonText = disabled ? '대여 불가' : '대여 신청';

  return (
    <Container type={type} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {buttonText}
    </Container>
  );
};

LendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default LendButton;
