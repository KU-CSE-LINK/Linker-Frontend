import polygonBottom from '../../assets/polygonBottom.svg';
import ActionButton from '../../components/button/ActionButton.jsx';
import Footer from '../../components/footer/footer.jsx';
import { locations } from './constant/Location.js';
import LockerGrid from './component/LockerGrid.jsx';
import { useRecoilState } from 'recoil';
import { selectedLockerState, selectedLocationState } from './recoil/selectedLockerState.js';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLocker from '../../hooks/locker/useLocker.jsx';
import { useState, useEffect, useMemo } from 'react';

const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  padding: 48px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`;

const LocationSelect = styled.div`
  width: 210px;
  padding: 5px 11px;
  border-radius: 50px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  position: relative;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;

export const StyledSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

/*컴포넌트 내부에서는 Recoil 상태 관리 라이브러리의 useRecoilState 훅을 사용하여 상태 변수를 설정해버립니다
이 상태 변수들은 selectedLocation과 selectedLocker이며, 각각 선택된 위치와 선택된 사물함을 관리하는 데 사용됨*/
export default function Locker() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);
  const [selectedLocker, setSelectedLocker] = useRecoilState(selectedLockerState);
  const [allLockers, setAllLockers] = useState([]);
  const { getAllLockers } = useLocker();

  async function fetchLockers() {
    const lockers = await getAllLockers();
    setAllLockers(lockers);
  }
  useEffect(() => {
    setSelectedLocation(null);
    setSelectedLocker(null);
    fetchLockers();
  }, []);

  const lockersByLocation = useMemo(() => {
    const map = {};
    allLockers.forEach((locker) => {
      if (!map[locker.location]) map[locker.location] = [];
      map[locker.location].push(locker);
    });
    return map;
  }, [allLockers]);

  const filteredLockers = lockersByLocation[selectedLocation?.location] || [];

  const handleSelectLocker = (locker) => () => {
    setSelectedLocker(locker);
  };
  const handleSubmit = () => {
    if (selectedLocker && selectedLocation) {
      navigate(`/rental/locker`);
    }
  };

  return (
    <Container>
      <Title>LINKER</Title>
      <SubTitle>사물함 대여 신청</SubTitle>
      <LocationSelect>
        <div>{selectedLocation ? selectedLocation.location : '위치를 선택하세요'}</div>
        <img src={polygonBottom} alt="select icon" />
        <StyledSelect
          value={selectedLocation ? selectedLocation.location : ''}
          onChange={(e) => setSelectedLocation(locations.find((loc) => loc.location === e.target.value))}
        >
          {locations.map((loc) => (
            <option key={loc.location} value={loc.location}>
              {loc.location}
            </option>
          ))}
        </StyledSelect>
      </LocationSelect>
      <LockerGrid
        lockers={filteredLockers}
        selectedLocker={selectedLocker}
        onSelect={handleSelectLocker}
        direction={selectedLocation?.partition?.type || 'row'}
        maxPer={selectedLocation?.partition?.number || 3}
      />
      <Bottom>
        <ActionButton onClick={handleSubmit}>대여 신청하기</ActionButton>
      </Bottom>
      <Footer />
    </Container>
  );
}
