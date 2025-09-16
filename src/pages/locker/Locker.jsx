import { Container, Title, SubTitle, LocationSelect, Bottom } from './Locker.styles.jsx';
import polygonBottom from '../../assets/polygonBottom.svg';
import ActionButton from '../../components/button/ActionButton.jsx';
import Footer from '../../components/footer/footer.jsx';
import { locations, getLocationPartition } from './constant/Location.js';
import LockerGrid from './component/LockerGrid.jsx';
import { useRecoilState } from 'recoil';
import { selectedLockerState, selectedLocationState } from './recoil/selectedLockerState.js';
import { useNavigate } from 'react-router-dom';

const dummyLockers = Array.from({ length: 30 }, (_, i) => ({
  number: `3a${10 + i}`,
  status: 'available',
}));

export default function Locker() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);
  const [selectedLocker, setSelectedLocker] = useRecoilState(selectedLockerState);
  const locationNames = locations.map((loc) => loc.name);
  const handleSelectLocker = (locker) => () => {
    console.log(locker);
    setSelectedLocker(locker);
  };
  const handleSubmit = () => {
    console.log(selectedLocker);
    console.log(selectedLocation);

    if (selectedLocker && selectedLocation) {
      navigate(`/rental/locker`);
    }
  };

  return (
    <Container>
      <Title>LINKER</Title>
      <SubTitle>사물함 대여 신청</SubTitle>
      <LocationSelect>
        <div />
        <div>{selectedLocation ? selectedLocation.name : '위치를 선택하세요'}</div>
        <img src={polygonBottom} alt="select icon" />
        <select
          value={selectedLocation ? selectedLocation.name : ''}
          onChange={(e) => setSelectedLocation(locations.find((loc) => loc.name === e.target.value))}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          {locationNames.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </LocationSelect>
      <LockerGrid
        lockers={dummyLockers}
        selectedLocker={selectedLocker}
        onSelect={handleSelectLocker}
        direction={getLocationPartition(selectedLocation)?.type || 'row'}
        maxPer={getLocationPartition(selectedLocation)?.number || 3}
      />
      <Bottom>
        <ActionButton onClick={handleSubmit}>대여 신청하기</ActionButton>
      </Bottom>
      <Footer />
    </Container>
  );
}
