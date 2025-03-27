import useApi from '../useApi.jsx';

const useEquipment = () => {
  const { api } = useApi();

  const getAllEquipments = () => {
    return api
      .get('/equipments')
      .then((response) => {
        console.log('📦 기자재 목록:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('❌ 기자재 조회 실패:', error);
        throw error;
      });
  };

  return { getAllEquipments };
};

export default useEquipment;
