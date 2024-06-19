import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/mainLayout";
import Home from "./pages/home";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);

export default router;
