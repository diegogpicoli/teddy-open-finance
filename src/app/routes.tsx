import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";

import LoginPage from "@/features/login/pages/login";
import AuthLayout from "./layouts/auth-layout";
import ClientsPage from "@/features/clients/pages/clients";
import ClientsSelectedPage from "@/features/clients-selected/pages/clients-selected";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "/", element: <ClientsPage /> },
          { path: "/clientes-selecionados", element: <ClientsSelectedPage /> },
        ],
      },
    ],
  },
]);
