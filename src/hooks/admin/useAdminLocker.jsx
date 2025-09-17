import useApi from '../useApi.jsx';

const useAdminLocker = () => {
  const { adminApi } = useApi();

  const patchLockerStatus = (lockerId, status) => {
    return adminApi
      .patch(`/lockers/${lockerId}/status`, {
        status: status,
      })
      .then((response) => {
        return response.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { patchLockerStatus };
};

export default useAdminLocker;
