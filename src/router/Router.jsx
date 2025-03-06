import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import RentalComplete from '../pages/rental/rentalComplete/RentalComplete';
import RentalManagement from '../pages/admin/rental-management/RentalManagement';
import AdminEquipmentList from '../pages/admin/rental-management/AdminEquipmentList';
import Available from '../pages/available-equipment/AvailableEquipment';
import AdminMain from '../pages/Admin/Admin-Main/AdminMain';
import RequestList from '../pages/Admin/RequestList/RequestList';

const Router = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/rental', element: <Rental /> },
    { path: '/rental/complete', element: <RentalComplete /> }, // 오타 수정 (comlete → complete)
    { path: '/available', element: <Available /> },
    { path: '/admin/main', element: <AdminMain /> },
    { path: '/admin/requests', element: <RequestList /> },
    { path: '/admin/rental', element: <RentalManagement /> },
    { path: '/admin/rental/equipment', element: <AdminEquipmentList /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
