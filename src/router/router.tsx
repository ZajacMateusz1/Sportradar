import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import CalendarPage from "../pages/CalendarPage";
import EventDetailsPage from "../pages/EventDetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
      {
        path: "events",
        children: [
          {
            path: ":eventID",
            element: <EventDetailsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
