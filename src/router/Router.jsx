import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import RentalManagement from '../pages/admin/rental-management/RentalManagement';
import AdminEquipmentList from '../pages/admin/rental-management/AdminEquipmentList';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
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
