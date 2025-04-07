import axios from 'axios';

function useApi() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_ENVIRONMENT === 'development' ? 'http://localhost:8080' : 'https://linker-api.fly.dev',
    withCredentials: true,
  });

  const adminApi = axios.create({
    baseURL: import.meta.env.VITE_ENVIRONMENT === 'development' ? 'http://localhost:8080/admin' : 'https://linker-api.fly.dev/admin',
    withCredentials: true,
  });

  return { api, adminApi };
}

export default useApi;
