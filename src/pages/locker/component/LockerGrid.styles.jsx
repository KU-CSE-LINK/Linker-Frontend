import styled from 'styled-components';

export const LockerGridWrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  overflow-x: auto;
  white-space: nowrap;
`;

export const LockerCell = styled.button`
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
  border-left: ${({ isFirstCol }) => (isFirstCol ? '1px solid #3773f5' : 'none')};
  border-top: ${({ isFirstRow }) => (isFirstRow ? '1px solid #3773f5' : 'none')};
  border-radius: ${({ isTopLeft, isTopRight, isBottomLeft, isBottomRight }) => {
    if (isTopLeft) return '10px 0 0 0';
    if (isTopRight) return '0 10px 0 0';
    if (isBottomLeft) return '0 0 0 10px';
    if (isBottomRight) return '0 0 10px 0';
    return '0';
  }};
`;

export const LockerNumber = styled.div`
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
