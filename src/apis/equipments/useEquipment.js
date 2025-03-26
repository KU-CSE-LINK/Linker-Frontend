import axios from 'axios';
import { useState, useEffect } from 'react';

const equipmentApi = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useEquipment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEquipment = () => {
    return equipmentApi
      .get('/equipments')
      .then((response) => {
        console.log('📦 기자재 목록 데이터입니다.', response.data);
        setData(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 기자재 조회 실패:', error);
        setError(error.message || '에러 발생');
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return { data, loading, error };
};

export default useEquipment;
