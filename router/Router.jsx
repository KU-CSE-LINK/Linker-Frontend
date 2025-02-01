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
      element: <Layout />, // Layout으로 감싸기
      children: [
        {
          path: "/main",
          element: <MainPage />, // 메인 페이지
        },
        {
          path: "/ask",
          element: <Ask />, // 다른 페이지
        },
        {
          path: "/admin",
          element: <Admin />, // 다른 페이지
        },
        {
          path: "/admin/ask",
          element: <AdminAsk />, // 다른 페이지
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
