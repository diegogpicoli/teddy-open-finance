// src/app/layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-[#f5f5f5]">
      <Outlet />
    </div>
  );
}
