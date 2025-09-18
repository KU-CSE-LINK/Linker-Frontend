import useApi from '../useApi.jsx';

const useLocker = () => {
  const { api } = useApi();

  const getAllLockers = () => {
    return api
      .get('/lockers')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };
  const getMyLockers = (studentId) => {
    return api
      .get('/lockers/my', {
        params: { studentId },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  const postRentalLocker = (lockerId, studentId, userName, phoneNumber) => {
    return api
      .post(`/lockers/${lockerId}/rent`, {
        studentId,
        userName,
        phoneNumber,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };
  const postReturnLocker = (studentId) => {
    return api
      .post(`/lockers/return`, null, {
        params: { studentId },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  return { getAllLockers, getMyLockers, postRentalLocker, postReturnLocker };
};

export default useLocker;
