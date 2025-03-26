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
const postEquipment = async () => {
  const bluetoothSet = {
    name: '블루투스 키보드 & 마우스 세트',
    imageUrl: 'image',
    totalStock: 16,
    availableStock: 16,
  };
  const laptopStand = {
    name: '노트북 거치대',
    imageUrl: 'image',
    totalStock: 15,
    availableStock: 15,
  };
  const usbCcharger = {
    name: '노트북 C타입 충전기',
    imageUrl: 'image',
    totalStock: 5,
    availableStock: 3,
  };
  try {
    const url = 'http://localhost:8080/admin/equipment';

    const res1 = await axios.post(url, bluetoothSet, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log('✅ 블루투스 세트 등록:', res1.data);

    const res2 = await axios.post(url, laptopStand, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log('✅ 거치대 등록:', res2.data);

    const res3 = await axios.post(url, usbCcharger, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log('✅ C타입 충전기 등록:', res3.data);
  } catch (error) {
    console.error('❌ 장비 등록 중 오류 발생:', error);
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
        if (Object.keys(result).length === 0) {
          postEquipment();
        }
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
