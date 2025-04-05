import 'react';
import styled from 'styled-components';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { mediaQueries } from '../../styles/GlobalStyles';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 600;
  ${mediaQueries[0]} {
    font-size: 17px;
  }
`;

const Input = styled.input`
  width: ${({ width }) => `${width}px`};
  height: 46px;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  ${mediaQueries[1]} {
    height: 35px;
  }
`;

const InputWithLabel = forwardRef(({ text, width }, ref) => {
  return (
    <Container>
      <Label>{text}</Label>
      <Input width={width} ref={ref} type="text" />
    </Container>
  );
});

InputWithLabel.displayName = 'InputWithLabel';

InputWithLabel.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default InputWithLabel;
