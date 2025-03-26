import axios from 'axios';

const equipmentApi = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useEquipment = () => {
  const fetchEquipment = () => {
    return equipmentApi
      .get('/equipments')
      .then((response) => {
        console.log('📦 기자재 목록:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 기자재 조회 실패:', error);
        throw error;
      });
  };

  return fetchEquipment;
};

export default useEquipment;
