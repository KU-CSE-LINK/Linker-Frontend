import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import Available from '../pages/available-equipment/AvailableEquipment';
import AdminMain from '../pages/Admin/Admin-Main/AdminMain';
import RequestList from '../pages/Admin/RequestList/RequestList';
>>>>>>> main
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
      path: '/check',
      element: <CheckApply />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
