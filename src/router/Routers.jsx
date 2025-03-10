import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/main/Main.jsx';
import Rental from '../pages/rental/Rental.jsx';
import AdminRentalsByEquipment from '../pages/admin/rental/AdminRentalsByEquipment.jsx';
import Equipments from '../pages/equipment/Equipments.jsx';
import AdminMain from '../pages/admin/main/AdminMain';
import AdminRentals from '../pages/admin/rental/AdminRentals.jsx';
import RentalComplete from '../pages/rental/rentalComplete/RentalComplete.jsx';
import Guest from '../pages/guest/Guest';
import Check from '../pages/application-check/Check.jsx';

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/equipments',
      element: <Equipments />,
    },
    {
      path: '/rental',
      element: <Rental />,
    },
    {
      path: '/rental/complete',
      element: <RentalComplete />,
    },
    {
      path: '/admin',
      element: <AdminMain />,
    },
    {
      path: '/admin/rentals',
      element: <AdminRentals />,
    },
    {
      path: '/admin/rentals/equipments',
      element: <AdminRentalsByEquipment />,
    },
    { path: '/guest', element: <Guest /> },
    { path: '/check', element: <Check /> },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
