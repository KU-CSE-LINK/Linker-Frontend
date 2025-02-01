import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import MainPage from "../src/pages/main/mainpage.jsx";
import Ask from "../src/pages/ask/Ask.jsx";
import Admin from "../src/pages/admin/adminmain/Admin.jsx";
import AdminAsk from "../src/pages/admin/askadmin/Adminask.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/main",
          element: <MainPage />,
        },
        {
          path: "/ask",
          element: <Ask />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/ask",
          element: <AdminAsk />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
