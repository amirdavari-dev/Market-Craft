import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/mainLayout";
import Home from "./pages/home";
import Contact from "./pages/contant/contact";
import ConsultationRequest from "./pages/contant/consultation-request";
import Support from "./pages/contant/support";
import Seminar from "./pages/contant/seminar";
import CommonQuestions from "./pages/contant/common-questions";

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
      {
        element: <ConsultationRequest />,
        path: "contact/consultation-request",
      },
      {
        element: <Support />,
        path: "contact/support",
      },
      {
        element: <Seminar />,
        path: "contact/seminar",
      },
      {
        element: <CommonQuestions />,
        path: "contact/common-questions",
      },
    ],
  },
]);

export default router;
