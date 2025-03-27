import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth.jsx';

const LoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { login } = useAuth();

  useEffect(() => {
    login(code);
  }, []);
};

export default LoginRedirect;
