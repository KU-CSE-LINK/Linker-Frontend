import styled from 'styled-components';

export const TableContainer = styled.div`
  padding: 40px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: stretch;
  width: 100%;
  justify-items: center;
`;

export const TableHeader = styled.div`
  font-size: 22px;
`;

export const Divider = styled.div`
  background: #f1f1f1;
  width: 100%;
  height: 2px;
  margin: 28px 0;
`;

export const TableColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 6rem;
  text-align: center;
`;

export const EquipmentLabel = styled.div`
  font-size: 20px;
  font-weight: 300;
  white-space: pre-line;
`;

export const EquipmentCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const AvailableCount = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: ${({ available }) => (available ? 'inherit' : 'red')};
`;

export const TotalCount = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #9d9d9d;
`;
