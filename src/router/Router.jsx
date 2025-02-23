import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import Available from '../pages/available-equipment/AvailableEquipment';
import AdminMain from '../pages/Admin/AdminMain/AdminMain';
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
      path: '/admin/RequestList',
      element: <RequestList />,
    },
    {
      path: '/rental',
      element: <Rental />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
