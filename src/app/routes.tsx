// src/app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import HomePage from "@/features/home/pages/home";
import LoginPage from "@/features/login/pages/login";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
