import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useRentalRequest = () => {
  const navigate = useNavigate();

  const submitRental = async (data) => {
    axios
      .post('http://localhost:8080/rental', data)
      .then((response) => {
        console.log('[DEBUG] 대여 신청 성공:', response.data);
        navigate('/rental/complete');
      })
      .catch((error) => {
        console.error('[ERROR] 대여 신청 실패:', error);
        alert('대여 신청 중 문제가 발생했습니다.');
      });
  };
  return submitRental;
};

export default useRentalRequest;
