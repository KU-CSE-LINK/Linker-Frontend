import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Rental from '../pages/rental/Rental';
import CheckApply from '../pages/checkApply/CheckApply';
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
      path: '/check',
      element: <CheckApply />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
