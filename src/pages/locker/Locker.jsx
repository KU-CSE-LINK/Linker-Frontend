import { useState } from "react";
import {
	Container,
	Title,
	SubTitle,
	LocationSelect,

	Bottom,
} from "./Locker.styles.jsx";
import polygonBottom from "../../assets/polygonBottom.svg";
// import polygonTop from "../../assets/polygonTop.svg";

import ActionButton from "../../components/button/ActionButton.jsx";
import Footer from "../../components/footer/footer.jsx";
import { locations, getLocationPartition } from "./constant/Location.js";
import LockerGrid from "./component/LockerGrid.jsx";

const dummyLockers = Array.from({ length: 30 }, (_, i) => ({
	number: `3a${10 + i}`,
	status: "available",
}));

export default function Locker() {
	const [selectedLocation, setSelectedLocation] = useState(locations[0].name);
	const [selectedLocker, setSelectedLocker] = useState(null);
    const locationNames = locations.map((loc) => loc.name);
	const handleSelectLocker = (number) => () => {
		setSelectedLocker(number);
	}
	return (
		<Container>
			<Title>LINKER</Title>
			<SubTitle>사물함 대여 신청</SubTitle>
			<LocationSelect>
				<div />
				<div>{selectedLocation}</div>
				<img src={polygonBottom} alt="select icon" />
				<select
					value={selectedLocation}
					onChange={(e) => setSelectedLocation(e.target.value)}
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
						height: "100%",
						opacity: 0,
						cursor: "pointer",
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
				direction={getLocationPartition(selectedLocation)?.type || "row"}
				maxPer={getLocationPartition(selectedLocation)?.number || 3}
			/>
			<Bottom>
				<ActionButton>대여 신청하기</ActionButton>
			</Bottom>
			<Footer />
		</Container>
	);
}
