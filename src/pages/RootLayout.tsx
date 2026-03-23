import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <header className="bg-main-bg text-xs text-font-secondary drop-shadow-lg mb-6">
        <div className="header-wrapper flex items-center justify-between p-3 mx-auto max-w-2xl text-xs md:text-md lg:text-lg xl:text-xl sm:p-4">
          <h1 className="font-header uppercase">Sport Event Calendar</h1>
          <nav>
            <ul className="flex gap-0.5 sm:gap-1 md:gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-main" : ""} p-0.5 hover:text-main transition`
                  }
                >
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events/add-event"
                  className={({ isActive }) =>
                    `${isActive ? "text-main" : ""} p-0.5 hover:text-main transition`
                  }
                >
                  Add event
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-270 mx-auto p-2 md:p-4">
        <Outlet />
      </main>
    </>
  );
}
