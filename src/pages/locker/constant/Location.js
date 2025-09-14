export const locations = [
  { name: 'A동 301호 앞', partition: { type: 'column', number: 3 } },
  { name: 'A동 3층 계단 앞', partition: { type: 'column', number: 3 } },
  { name: 'A동 2층 217호 앞', partition: { type: 'column', number: 3 } },
  { name: 'B동 3층 중앙계단', partition: { type: 'column', number: 3 } },
  { name: 'B동 안뜰로 가는 통로', partition: { type: 'row', number: 3 } },
  { name: 'C동 3층 경사로', partition: { type: 'row', number: 3 } },
  { name: '새천년관 3층', partition: { type: 'row', number: 4 } },
  { name: '새천년관 4층', partition: { type: 'row', number: 4 } },
  { name: '새천년관 5층', partition: { type: 'row', number: 4 } },
];

export function getLocationPartition(name) {
  const found = locations.find((loc) => loc.name === name);
  return found ? found.partition : null;
}

export function getDirection(direction, rowCount, colCount, lockers) {
  let rows = [];
  if (direction === 'row') {
    for (let row = 0; row < rowCount; row++) {
      const rowItems = [];
      for (let col = 0; col < colCount; col++) {
        const idx = row * colCount + col;
        if (lockers[idx]) rowItems.push(lockers[idx]);
      }
      rows.push(rowItems);
    }
  } else {
    for (let row = 0; row < rowCount; row++) {
      const rowItems = [];
      for (let col = 0; col < colCount; col++) {
        const idx = col * rowCount + row;
        if (lockers[idx]) rowItems.push(lockers[idx]);
      }
      rows.push(rowItems);
    }
  }
  return rows;
}
