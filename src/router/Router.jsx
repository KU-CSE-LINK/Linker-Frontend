import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import ItemListManagement from '../pages/admin/ApplicationManagement/ItemListManagement';
import ApplicationManagement from '../pages/admin/ApplicationManagement/ApplicationManagement';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/applicationmanagement',
      element: <ApplicationManagement />,
    },
    {
      path: '/itemlistmangement',
      element: <ItemListManagement />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
