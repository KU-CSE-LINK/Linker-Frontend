import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import Available from '../pages/available-equipment/AvailableEquipment';
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
      path: '/rental',
      element: <Rental />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
