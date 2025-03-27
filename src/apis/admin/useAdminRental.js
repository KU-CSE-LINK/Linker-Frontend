import axios from 'axios';

const useAdminRental = () => {
  const getAdminRental = async (id) => {
    try {
      const response = await axios.get('http://localhost:8080/admin/rental', {
        params: { id },
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  return getAdminRental;
};

export default useAdminRental;
