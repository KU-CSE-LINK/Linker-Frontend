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
