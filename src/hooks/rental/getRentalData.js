import axios from 'axios';

const getRentalData = async ({ name, studentId }) => {
  const response = await axios.get('http://localhost:8080/rentals', {
    params: { name, studentId },
  });

  // 데이터 가공
  const formatted = response.data.map((item) => ({
    id: item.id,
    itemName: item.equipment.name,
    imageSrc: item.equipment.imageUrl,
    status:
      item.status === 'REQUESTED'
        ? '신청완료'
        : item.status === 'PREPARED'
          ? '대여 준비 완료'
          : item.status === 'RENTED'
            ? '대여중'
            : item.status === 'RETURNED'
              ? '반납완료'
              : '기타문의',
    rentalDate: item.createdAt.slice(0, 10),
    returnDate: item.returnDate.slice(0, 10),
    name: item.name,
  }));

  return formatted;
};

export default getRentalData;
