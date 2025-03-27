import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useDiscordLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (!code) return;

    const postDiscordLogin = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/login',
          {
            code: code,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        );
        navigate('/admin');
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    postDiscordLogin();
  }, [location.search]);

  return { loading, error };
};

export default useDiscordLogin;
