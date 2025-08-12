// src/app/layouts/RootLayout.tsx
import { Header } from "@/components/header";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const storedName = localStorage.getItem("teddy-open-finance:name");

  if (!storedName) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
