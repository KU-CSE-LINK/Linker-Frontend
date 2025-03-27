import axios from 'axios';

const equipmentApi = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useRentalList = () => {
  const fetchRentalList = () => {
    return equipmentApi
      .get('/admin/rentals?page=0&size=100')
      .then((response) => {
        console.log('내역 조회 성공', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('내역 조회 실패', error);
        throw error;
      });
  };

  return fetchRentalList;
};

export default useRentalList;
