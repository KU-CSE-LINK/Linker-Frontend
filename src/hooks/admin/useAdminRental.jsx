import useApi from '../useApi.jsx';

const useAdminRental = () => {
  const { adminApi } = useApi();

  const getAdminRental = async (id) => {
    const response = await adminApi.get('/rental', {
      params: { id },
    });

    return response.data;
  };

  const updateStatus = (id, status) => {
    return adminApi
      .post('/rental', {
        id: id,
        status: status,
      })
      .then((response) => {
        return response.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { getAdminRental, updateStatus };
};

export default useAdminRental;
