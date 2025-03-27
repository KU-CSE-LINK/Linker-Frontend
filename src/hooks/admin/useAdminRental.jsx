import useApi from '../useApi.jsx';

const useAdminRental = () => {
  const { adminApi } = useApi();

  const getRentalById = async (id) => {
    const response = await adminApi.get('/rental', {
      params: { id },
    });

    return response.data;
  };

  const getAllRentals = () => {
    return adminApi
      .get('/rentals')
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
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

  return { getAdminRental: getRentalById, updateStatus, getAllRentals };
};

export default useAdminRental;
