import axios from 'axios';

function useApi() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_ENVIRONMENT === 'development' ? 'http://localhost:8080' : 'https://api.ku-linker.xyz',
    withCredentials: true,
  });

  const adminApi = axios.create({
    baseURL: import.meta.env.VITE_ENVIRONMENT === 'development' ? 'http://localhost:8080/admin' : 'https://api.ku-linker.xyz/admin',
    withCredentials: true,
  });

  return { api, adminApi };
}

export default useApi;
