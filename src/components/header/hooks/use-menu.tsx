import ClientsIcon from "@/components/icons/clients-icon";
import ClientsSelectedIcon from "@/components/icons/clients-selected-icon";
import HomeIcon from "@/components/icons/home-icon";

import { useNavigate } from "react-router-dom";

export function useMenu() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("teddy-open-finance:name");
    navigate("/login");
  };

  const pathName = window.location.pathname;

  const linksSidebar = [
    {
      href: null,
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      href: "/",
      label: "Clientes",
      icon: <ClientsIcon />,
    },
    {
      href: "/clientes-selecionados",
      label: "Clientes selecionados",
      icon: <ClientsSelectedIcon />,
    },
  ];

  const linksMenu = [
    {
      href: "/",
      label: "Clientes",
    },
    {
      href: "/clientes-selecionados",
      label: "Clientes selecionados",
    },
  ];

  return {
    signOut,
    pathName,
    linksSidebar,
    linksMenu,
  };
}
