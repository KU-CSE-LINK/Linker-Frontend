import React from 'react';
import useDiscordLogin from '../../apis/auth/useDiscordLogin';

const LoginRedirect = () => {
  const { loading, error } = useDiscordLogin();
  if (loading) return <div>로그인 중입니다...</div>;
  if (error) return <div>로그인 실패 : {error.message}</div>;
};

export default LoginRedirect;
