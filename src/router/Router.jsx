import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import RentalManagement from '../pages/admin/rental-management/RentalManagement';
import AdminEquipmentList from '../pages/admin/rental-management/AdminEquipmentList';
import Available from '../pages/available-equipment/AvailableEquipment';
import AdminMain from '../pages/Admin/Admin-Main/AdminMain';
import RequestList from '../pages/Admin/RequestList/RequestList';
const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/available',
      element: <Available />,
    },
    {
      path: '/admin/main',
      element: <AdminMain />,
    },
    {
      path: '/admin/requests',
      element: <RequestList />,
    },
    {
      path: '/rental',
      element: <Rental />,
    },
    {
      path: '/admin/rental',
      element: <RentalManagement />,
    },
    {
      path: '/admin/rental/equipment',
      element: <AdminEquipmentList />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
