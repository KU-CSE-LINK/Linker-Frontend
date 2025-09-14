import PropTypes from 'prop-types';
import { LockerGridWrapper, LockerCell, LockerNumber } from './LockerGrid.styles.jsx';
import { getDirection } from '../constant/Location.js';

export default function LockerGrid({ lockers, selectedLocker, onSelect, maxPer, direction = 'row' }) {
  const rowCount = maxPer;
  const colCount = Math.ceil(lockers.length / rowCount);
  const rows = getDirection(direction, rowCount, colCount, lockers);

  return (
    <LockerGridWrapper>
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: 'flex' }}>
          {row.map((locker, idx) => {
            const isTopLeft = rowIdx === 0 && idx === 0;
            const isTopRight = rowIdx === 0 && idx === row.length - 1;
            const isBottomLeft = rowIdx === rows.length - 1 && idx === 0;
            const isBottomRight = rowIdx === rows.length - 1 && idx === row.length - 1;
            return (
              <LockerCell
                key={locker.number}
                disabled={locker.status === 'disabled'}
                selected={selectedLocker === locker.number}
                onClick={locker.status === 'available' ? onSelect(locker.number) : null}
                isFirstCol={idx === 0}
                isFirstRow={rowIdx === 0}
                isLastCol={idx === row.length - 1}
                isLastRow={rowIdx === rows.length - 1}
                isTopLeft={isTopLeft}
                isTopRight={isTopRight}
                isBottomLeft={isBottomLeft}
                isBottomRight={isBottomRight}
              >
                <LockerNumber>{locker.number}</LockerNumber>
              </LockerCell>
            );
          })}
        </div>
      ))}
    </LockerGridWrapper>
  );
}

LockerGrid.propTypes = {
  lockers: PropTypes.array.isRequired,
  selectedLocker: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  maxPer: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
};
