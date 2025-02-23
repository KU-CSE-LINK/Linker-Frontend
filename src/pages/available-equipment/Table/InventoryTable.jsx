import React from 'react';
import LendBtn from '../../../components/btn/LendBtn';
import {
  TableContainer,
  TableRow,
  TableHeader,
  TableColumn,
  Divider,
  ItemLabel,
  ItemCount,
  AvailableCount,
  UnavailableCount,
  TotalCount,
} from './InventoryTable.styles';

const InventoryTable = () => {
  const [items, setItems] = React.useState([
    { name: `블루투스 키보드  &\n 마우스 세트`, available: 15, max: 15 },
    { name: '노트북 거치대', available: 8, max: 15 },
    { name: '노트북 C 타입 충전기', available: 0, max: 5 },
  ]);

  return (
    <TableContainer>
      <TableRow>
        <TableHeader>물품명</TableHeader>
        <TableHeader>잔여수량</TableHeader>
        <TableHeader>대여하기</TableHeader>
      </TableRow>
      <Divider />

      <TableRow>
        <TableColumn>
          {items.map((item, index) => (
            <ItemLabel key={index}>{item.name}</ItemLabel>
          ))}
        </TableColumn>

        <TableColumn>
          {items.map((item, index) => (
            <ItemCount key={index}>
              {item.available !== 0 ? <AvailableCount>{item.available}</AvailableCount> : <UnavailableCount>{item.available}</UnavailableCount>}
              <TotalCount>/ {item.max}</TotalCount>
            </ItemCount>
          ))}
        </TableColumn>
        <TableColumn>
          {items.map((item, index) => (
            <LendBtn key={index} disabled={item.available} />
          ))}
        </TableColumn>
      </TableRow>
    </TableContainer>
  );
};

export default InventoryTable;
