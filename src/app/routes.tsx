import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";

import HomePage from "@/features/home/pages/home";
import LoginPage from "@/features/login/pages/login";
import AuthLayout from "./layouts/auth-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        element: <AuthLayout />,
        children: [{ path: "/", element: <HomePage /> }],
      },
    ],
  },
]);
