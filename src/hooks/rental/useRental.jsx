import { useNavigate } from 'react-router-dom';
import useApi from '../useApi.jsx';

const useRental = () => {
  const navigate = useNavigate();
  const { api } = useApi();

  const getRentals = (data) => {
    console.log(data);
    return api
      .get('/rentals', { params: data })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('[ERROR] 대여 신청 조회 실패:', error);
        alert('대여 신청 조회 중 문제가 발생했습니다.');
      });
  };

  const submitRental = (data) => {
    return api
      .post('/rental', data)
      .then((response) => {
        console.log('[DEBUG] 대여 신청 성공:', response.data);

        const param = new URLSearchParams(data);
        navigate({ pathname: '/rental/complete', search: param.toString() });
      })
      .catch((error) => {
        console.error('[ERROR] 대여 신청 실패:', error);
        alert('대여 신청 중 문제가 발생했습니다.');
      });
  };
  return { submitRental, getRentals };
};

export default useRental;
