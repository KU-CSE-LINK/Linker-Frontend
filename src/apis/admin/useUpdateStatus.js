import axios from 'axios';
import { useEffect, useState } from 'react';

const useUpdateStatus = (id, status) => {
  const [newStatus, setNewStatus] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || !status) return;
    const updateStatus = async () => {
      setError(null);
      axios.post(
        'http://localhost:8080/admin/rental',
        {
          id: id,
          status: status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
          .then((response) => {
            setNewStatus(response.data.status);
          })
          .catch((err) => {
            setError(err);
          }),
      );
    };

    updateStatus();
  }, [id, status]);
  return { newStatus, error };
};

export default useUpdateStatus;
