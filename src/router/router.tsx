import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import CalendarPage from "../pages/CalendarPage";
import EventDetailsPage from "../pages/EventDetailsPage";
import AddEventPage from "../pages/AddEventPage";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
      {
        path: "events",
        children: [
          {
            path: "add-event",
            element: <AddEventPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
