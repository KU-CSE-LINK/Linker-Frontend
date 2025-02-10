import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import RentalManagement from '../pages/admin/rental-management/RentalManagement';
import ItemListManagement from '../pages/admin/rental-management/ItemListManagement';

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
      element: <ItemListManagement />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
