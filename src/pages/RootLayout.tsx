import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-h-screen max-w-270 mx-auto px-4">
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
