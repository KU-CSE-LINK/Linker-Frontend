import PropTypes from 'prop-types';
import { getDirection } from '../util/getDirection';
import styled from 'styled-components';

const LockerGridWrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  overflow-x: auto;
  white-space: nowrap;
`;

const LockerCell = styled.button`
  height: 80px;
  min-width: 80px;
  border-bottom: 1px solid #3773f5;
  border-right: 1px solid #3773f5;
  background: ${({ selected, disabled }) => (selected ? '#3773f5' : disabled ? '#f0f0f0' : '#fff')};
  color: #222;
  font-size: 12px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  margin: 0;
  padding-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${({ $isFirstCol }) => ($isFirstCol ? '1px solid #3773f5' : 'none')};
  border-top: ${({ $isFirstRow }) => ($isFirstRow ? '1px solid #3773f5' : 'none')};
  border-radius: ${({ $isTopLeft, $isTopRight, $isBottomLeft, $isBottomRight }) => {
    const tl = $isTopLeft ? '10px' : '0';
    const tr = $isTopRight ? '10px' : '0';
    const br = $isBottomRight ? '10px' : '0';
    const bl = $isBottomLeft ? '10px' : '0';
    return `${tl} ${tr} ${br} ${bl}`;
  }};
`;

const LockerNumber = styled.div`
  display: flex;
  width: 41px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 2px solid #d9d9d9;
  background: #f1f1f1;
`;

export default function LockerGrid({ lockers, selectedLocker, onSelect, maxPer, direction = 'row', admin = false }) {
  const rowCount = maxPer;
  const colCount = Math.ceil(lockers.length / rowCount);
  const rows = getDirection(direction, rowCount, colCount, lockers);

  return (
    <LockerGridWrapper>
      {rows.map((row, rowIdx) => (
        <div key={row[0] && row[0].id ? `row-${row[0].id}` : `row-${rowIdx}`} style={{ display: 'flex' }}>
          {row.map((locker, idx) => {
            if (!locker) return null;
            const isTopLeft = rowIdx === 0 && idx === 0;
            const isTopRight = rowIdx === 0 && idx === row.length - 1;
            const isBottomLeft = rowIdx === rows.length - 1 && idx === 0;
            const isBottomRight = rowIdx === rows.length - 1 && idx === row.length - 1;
            return (
              <LockerCell
                key={locker.id}
                disabled={locker.status != 'AVAILABLE' && !admin}
                selected={selectedLocker && selectedLocker.id === locker.id}
                onClick={locker.status === 'AVAILABLE' || admin ? onSelect(locker) : null}
                $isFirstCol={idx === 0}
                $isFirstRow={rowIdx === 0}
                $isTopLeft={isTopLeft}
                $isTopRight={isTopRight}
                $isBottomLeft={isBottomLeft}
                $isBottomRight={isBottomRight}
              >
                <LockerNumber>{locker.lockerName}</LockerNumber>
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
  selectedLocker: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onSelect: PropTypes.func.isRequired,
  maxPer: PropTypes.number,
  direction: PropTypes.oneOf(['row', 'column']),
  admin: PropTypes.bool,
};
