import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/',
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
