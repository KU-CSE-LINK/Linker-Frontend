import 'react';
import styled from 'styled-components';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: 600;
`;

const Input = styled.input`
  width: ${({ width }) => `${width}px`};
  height: 46px;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
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
