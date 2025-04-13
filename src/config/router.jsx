import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootLayout from "../layouts/Root";
import OrderPage from "../pages/Order";
import SuccessPage from "../pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    breadcrumb: "Anasayfa",
    children: [
      {
        index: true,
        element: <HomePage />,
        breadcrumb: "Anasayfa",
      },
      {
        path: "order",
        element: <OrderPage />,
        breadcrumb: "Sipariş Oluştur",
      },
      {
        path: 'success',
        element: <SuccessPage />,

      }
    ]
  }
]);

export default router;
