import axios from 'axios';
import { useState, useEffect } from 'react';

const getEquipment = async () => {
  const response = await axios.get('http://localhost:8080/equipments');

  if (response.status === 200) {
    console.log('데이터 입니다', response.data);
    return response.data;
  } else {
    throw new Error('API 호출 실패');
  }
};

const useEquipment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEquipment();
        setData(result);
      } catch (err) {
        console.error('기자재 조회 실패:', err);
        setError(err.message || '에러 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
};
export default useEquipment;
