import 'react';
import useApi from '../useApi.jsx';

function useAuth() {
  const { api } = useApi();

  const sendLoginUrl = () => {
    api.post('/login/url', {});
  };

  return { sendLoginUrl };
}

export default useAuth;
