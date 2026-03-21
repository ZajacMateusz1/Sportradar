import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import EventsContextProvider from "./store/EventsContextProvider";
function App() {
  return (
    <EventsContextProvider>
      <RouterProvider router={router} />
    </EventsContextProvider>
  );
}

export default App;
