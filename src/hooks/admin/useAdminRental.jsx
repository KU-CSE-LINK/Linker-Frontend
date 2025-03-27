import useApi from '../useApi.jsx';

const useAdminRental = () => {
  const { adminApi } = useApi();

  const getAdminRental = async (id) => {
    const response = await adminApi.get('/rental', {
      params: { id },
    });

    return response.data;
  };

  return { getAdminRental };
};

export default useAdminRental;
