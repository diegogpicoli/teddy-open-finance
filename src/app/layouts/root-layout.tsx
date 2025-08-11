// src/app/layouts/RootLayout.tsx
import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh p-6">
      <nav className="mb-4 flex gap-4 border-b pb-2">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}
