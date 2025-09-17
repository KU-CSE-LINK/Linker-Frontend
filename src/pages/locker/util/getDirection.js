export function getDirection(direction, rowCount, colCount, lockers) {
  const rows = [];
  for (let row = 0; row < rowCount; row++) {
    const rowItems = [];
    for (let col = 0; col < colCount; col++) {
      const idx = getIndex(direction, row, col, rowCount, colCount);
      if (lockers[idx]) rowItems.push(lockers[idx]);
    }
    rows.push(rowItems);
  }

  return rows;
}
function getIndex(direction, row, col, rowCount, colCount) {
  return direction === 'row' ? row * colCount + col : col * rowCount + row;
}
