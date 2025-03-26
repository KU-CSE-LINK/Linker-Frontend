import LendButton from '../button/LendButton.jsx';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useEquipment from '../../apis/equipments/useEquipment.js';
import {
  AvailableCount,
  Divider,
  EquipmentCount,
  EquipmentLabel,
  TableColumn,
  TableContainer,
  TableHeader,
  TableRow,
  TotalCount,
} from './InventoryTable.styles';

const InventoryTable = () => {
  const fetchEquipment = useEquipment();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEquipment()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message || '에러 발생');
      });
  }, []);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!data) return <div>⌛ 로딩 중...</div>;

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
          {data.map((equipment) => (
            <EquipmentLabel key={equipment.id}>{equipment.name}</EquipmentLabel>
          ))}
        </TableColumn>

        <TableColumn>
          {data.map((equipment) => (
            <EquipmentCount key={equipment.id}>
              <AvailableCount available={equipment.availableStock !== 0}>{equipment.availableStock}</AvailableCount>
              <TotalCount>/ {equipment.totalStock}</TotalCount>
            </EquipmentCount>
          ))}
        </TableColumn>
        <TableColumn>
          {data.map((equipment) => (
            <LendButton key={equipment.id} disabled={equipment.availableStock === 0} onClick={() => navigate('/rental')} />
          ))}
        </TableColumn>
      </TableRow>
    </TableContainer>
  );
};

export default InventoryTable;
