import axios from 'axios';

function useApi() {
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
  });

  const adminApi = axios.create({
    baseURL: 'http://localhost:8080/admin',
    withCredentials: true,
  });

  return { api, adminApi };
}

export default useApi;
