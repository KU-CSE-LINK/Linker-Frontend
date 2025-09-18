import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/main/Main.jsx';
import Rental from '../pages/rental/Rental.jsx';
import AdminRentalsByEquipment from '../pages/admin/rental/AdminRentalsByEquipment.jsx';
import Equipments from '../pages/equipment/Equipments.jsx';
import AdminMain from '../pages/admin/main/AdminMain';
import AdminRentals from '../pages/admin/rental/AdminRentals.jsx';
import RentalComplete from '../pages/rental/rentalComplete/RentalComplete.jsx';
import Guest from '../pages/guest/Guest';
import AdminRentalStatus from '../pages/admin/rental/AdminRentalStatus.jsx';
import RentalCheck from '../pages/rentalcheck/RentalCheck.jsx';
import LoginRedirect from '../pages/admin/LoginRedirect.jsx';
import Locker from '../pages/locker/Locker.jsx';
import RentalLocker from '../pages/rentalLocker/RentalLocker.jsx';
import AdminLocker from '../pages/admin/locker/AdminLocker.jsx';

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
      path: '/rental/locker',
      element: <RentalLocker />,
    },
    {
      path: '/locker',
      element: <Locker />,
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
    {
      path: '/admin/rentals/status',
      element: <AdminRentalStatus />,
    },
    {
      path: '/admin/lockers',
      element: <AdminLocker />,
    },
    { path: '/guest', element: <Guest /> },
    { path: '/check', element: <RentalCheck /> },
    {
      path: '/login',
      element: <LoginRedirect />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
