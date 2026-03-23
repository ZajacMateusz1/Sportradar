import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen max-w-270 mx-auto px-4">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events/add-event"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Add Event Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
