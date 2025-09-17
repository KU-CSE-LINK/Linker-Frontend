import useApi from '../useApi.jsx';

const useLocker = () => {
  const { api } = useApi();

  const getAllLockers = () => {
    return api
      .get('/lockers')
      .then((response) => {
        console.log('📦 사물함 목록:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 사물함 조회 실패:', error);
        throw error;
      });
  };
  const getMyLockers = (studentId) => {
    return api
      .get('/lockers/my', {
        params: { studentId },
      })
      .then((response) => {
        console.log('📦 내 사물함 목록:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 사물함 조회 실패:', error);
        throw error;
      });
  };

  const postRentalLocker = (lockerId, studentId) => {
    return api
      .post(`/lockers/${lockerId}/rent`, null, {
        params: { studentId },
      })
      .then((response) => {
        console.log('📦 사물함 대여 성공:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 사물함 대여 실패:', error);
        throw error;
      });
  };
  const postReturnLocker = (studentId) => {
    return api
      .post(`/lockers/return`, null, {
        params: { studentId },
      })
      .then((response) => {
        console.log('📦 사물함 반납 성공:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 사물함 반납 실패:', error);
        throw error;
      });
  };

  return { getAllLockers, getMyLockers, postRentalLocker, postReturnLocker };
};

export default useLocker;
