import axios from 'axios';
import { useState, useEffect } from 'react';

const equipmentApi = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
const getEquipment = () => {
  return equipmentApi
    .get('/equipments')
    .then((response) => {
      console.log('기자재 목록 데이터 입니다.', response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('기자재 조회 실패', error);
      throw error;
    });
};

const useEquipment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEquipment()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error(' useEquipment 에러 ', err);
        setError(err.message || '에러 발생');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
};
export default useEquipment;
