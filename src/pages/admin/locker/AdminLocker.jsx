import { useEffect, useMemo, useState } from "react";
import useLocker from "../../../hooks/locker/useLocker";
import styled from "styled-components";
import LockerGrid from "../../locker/component/LockerGrid";
import { locations } from "../../locker/constant/Location";
import { useRecoilState } from "recoil";
import { selectedLocationState } from "../../locker/recoil/selectedLockerState";
import useAdminLocker from "../../../hooks/admin/useAdminLocker";

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

export default function AdminLocker() {
const [allLockers, setAllLockers] = useState([]);
  const { getAllLockers } = useLocker();
    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);
    const {patchLockerStatus} = useAdminLocker();
    const handleSelectLocker = (locker) => async () => {
        if(locker.status ==='AVAILABLE') {
            patchLockerStatus(locker.id, 'BROKEN');
            fetchLockers();
            return;
        }else {patchLockerStatus(locker.id, 'AVAILABLE')
          fetchLockers();
        };
    };
  
   async function fetchLockers() {
      const lockers = await getAllLockers();
      setAllLockers(lockers);
    }
    useEffect(() => {
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

  return (
     <Container>
      <Title>LINKER Locker Admin</Title>
      <SubTitle>사물함 관리</SubTitle>
      <LocationSelect>
        <div />
        <div>{selectedLocation ? selectedLocation.location : '위치를 선택하세요'}</div>
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
        onSelect={handleSelectLocker}
        direction={selectedLocation?.partition?.type || 'row'}
        maxPer={selectedLocation?.partition?.number || 3}
        admin={true}
      />
    </Container>
  )
}
