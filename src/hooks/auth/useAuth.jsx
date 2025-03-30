import 'react';
import useApi from '../useApi.jsx';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const { api } = useApi();
  const navigate = useNavigate();

  const sendLoginUrl = () => {
    api.post('/login/url', {});
  };

  const login = (code) => {
    api.post('/login', { code }).then(() => {
      navigate('/admin');
    });
  };

  return { sendLoginUrl, login };
}

export default useAuth;
