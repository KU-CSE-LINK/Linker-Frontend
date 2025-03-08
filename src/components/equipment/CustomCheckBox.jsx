import 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import CheckSvg from '../../assets/check.svg';
import UncheckSvg from '../../assets/uncheck.svg';
import DisabledCheckSvg from '../../assets/disabledCheck.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Image = styled.img``;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  color: ${(props) => (props.checked ? '#3773F5' : '#000')};
`;

const UnAvailableCheckboxLabel = styled.label`
  color: #d9d9d9;
`;

const CustomCheckBox = forwardRef(({ equipment }, ref) => {
  const [checked, setChecked] = useState(false);
  const isAvailable = equipment.availableStock > 0;

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  if (!isAvailable) {
    return (
      <Container>
        <Image src={DisabledCheckSvg} alt="체크박스" />
        <UnAvailableCheckboxLabel>{equipment.name}</UnAvailableCheckboxLabel>
      </Container>
    );
  }

  return (
    <Container onClick={handleChange}>
      <HiddenCheckbox ref={ref} checked={checked} readOnly={true} />
      <Image src={checked ? CheckSvg : UncheckSvg} alt="체크박스" />
      <CheckboxLabel $checked={checked}>{equipment.name}</CheckboxLabel>
    </Container>
  );
});

CustomCheckBox.displayName = 'CustomCheckBox';

CustomCheckBox.propTypes = {
  equipment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalStock: PropTypes.number.isRequired,
    availableStock: PropTypes.number.isRequired,
  }).isRequired,
};

export default CustomCheckBox;
