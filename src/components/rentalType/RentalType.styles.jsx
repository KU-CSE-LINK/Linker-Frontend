import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const ToggleBox = styled.div`
  display: flex;
  padding: 1px 8px;
  border: 2px solid #222;
  border-radius: 32px;
  overflow: hidden;
  background: #fff;
  box-sizing: border-box;
  min-width: 220px;
  height: 56px;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ToggleButton = styled.button`
  flex: 1;
  width: 90%;
  height: 90%;
  border: none;
  outline: none;
  background: none;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  border: 2px solid white;
  color: #222;
  border-radius: 32px;
  ${({ selected }) =>
    selected &&
    `
      background: #eaf1ff;
      color: #222;
      border: 2px solid #4a7cff;
    box-sizing: border-box;
    `}
`;
