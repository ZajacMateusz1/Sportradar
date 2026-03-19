import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import CalendarPage from "../pages/CalendarPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
    ],
  },
]);

export default router;
