// src/app/layouts/RootLayout.tsx
import { Header } from "@/components/header";
import { Shell } from "@/components/ui/shell";
import { Navigate, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function AuthLayout() {
  const storedName = localStorage.getItem("teddy-open-finance:name");

  if (!storedName) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Fragment>
      <Header />
      <Shell>
        <Outlet />
      </Shell>
    </Fragment>
  );
}
