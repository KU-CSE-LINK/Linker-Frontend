import LendBtn from '../btn/LendBtn';
import { useState } from 'react';
import {
  TableContainer,
  TableRow,
  TableHeader,
  TableColumn,
  Divider,
  EquipmentLabel,
  EquipmentCount,
  AvailableCount,
  UnavailableCount,
  TotalCount,
} from './InventoryTable.styles';

const InventoryTable = () => {
  const [equipments, setEquipments] = useState([
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
          {equipments.map((equipment, index) => (
            <EquipmentLabel key={index}>{equipment.name}</EquipmentLabel>
          ))}
        </TableColumn>

        <TableColumn>
          {equipments.map((equipment, index) => (
            <EquipmentCount key={index}>
              {equipment.available !== 0 ? <AvailableCount>{equipment.available}</AvailableCount> : <UnavailableCount>{equipment.available}</UnavailableCount>}
              <TotalCount>/ {equipment.max}</TotalCount>
            </EquipmentCount>
          ))}
        </TableColumn>
        <TableColumn>
          {equipments.map((equipment, index) => (
            <LendBtn key={index} disabled={equipment.available} />
          ))}
        </TableColumn>
      </TableRow>
    </TableContainer>
  );
};

export default InventoryTable;
