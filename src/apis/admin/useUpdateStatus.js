import axios from 'axios';

const useUpdateStatus = () => {
  const updateStatus = (id, status) => {
    return axios
      .post(
        'http://localhost:8080/admin/rental',
        {
          id: id,
          status: status,
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        return response.data.status;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return updateStatus;
};

export default useUpdateStatus;
