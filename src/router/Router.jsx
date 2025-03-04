import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import RentalComplete from '../pages/rental/rentalComplete/RentalComplete';
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
      path: '/rental/comlete',
      element: <RentalComplete />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
