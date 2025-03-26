import LendButton from '../button/LendButton.jsx';
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
  const { data, loading, error } = useEquipment();
  const navigate = useNavigate();

  if (loading) return <p>🔄 기자재 목록을 불러오는 중...</p>;
  if (error) return <p>❌ 오류 발생: {error}</p>;
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
