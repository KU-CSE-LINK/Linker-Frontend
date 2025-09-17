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

export const locationNames = locations.map((loc) => loc.name);
