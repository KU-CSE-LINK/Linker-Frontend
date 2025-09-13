import PropTypes from 'prop-types';
import { Container, ToggleBox, ToggleButton } from './RentalType.styles';

export default function RentalType({ type, onChange }) {

  return (
    <Container>
      <ToggleBox>
        <ToggleButton selected={type === 'equipment'} onClick={() => onChange('equipment')}>
          기자재
        </ToggleButton>
        <ToggleButton selected={type === 'locker'} onClick={() => onChange('locker')}>
          사물함
        </ToggleButton>
      </ToggleBox>
    </Container>
  );
}

RentalType.propTypes = {
  type: PropTypes.oneOf(['equipment', 'locker']),
  onChange: PropTypes.func,
};
