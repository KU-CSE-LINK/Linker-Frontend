import LendButton from '../button/LendButton.jsx';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useEquipment from '../../hooks/equipments/useEquipment.jsx';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/GlobalStyles';

const TableContainer = styled.div`
  padding: 40px;
  ${mediaQueries[0]} {
    padding: 40px 0;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: stretch;
  width: 100%;
  justify-items: center;
`;

const TableHeader = styled.div`
  font-size: 22px;
  ${mediaQueries[0]} {
    font-size: 17px;
  }
`;

const Divider = styled.div`
  background: #f1f1f1;
  width: 100%;
  height: 2px;
  margin: 28px 0;
`;

const TableColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 6rem;
  text-align: center;
`;

const EquipmentLabel = styled.div`
  font-size: 20px;
  font-weight: 300;
  white-space: pre-line;
  ${mediaQueries[0]} {
    font-size: 15px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EquipmentCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  ${mediaQueries[0]} {
    height: 41px;
    line-height: 41px;
  }
`;

const AvailableCount = styled.div`
  font-size: 20px;
  font-weight: 300;
  ${mediaQueries[0]} {
    font-size: 15px;
  }
  color: ${({ available }) => (available ? 'inherit' : 'red')};
`;

const TotalCount = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #9d9d9d;
  ${mediaQueries[0]} {
    font-size: 15px;
  }
`;

const InventoryTable = () => {
  const { getAllEquipments } = useEquipment();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEquipments()
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
