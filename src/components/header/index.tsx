"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { LogoTeddy } from "../ui/logo-teddy";
import { MenuLinks } from "./components/menu-links";
import { MenuLinksSheet } from "./components/menu-links-sheet";

export const Header = () => {
  const storedName = localStorage.getItem("teddy-open-finance:name");

  return (
    <header className="grid grid-cols-3 items-center h-24 pl-4 pr-4 md:pl-12 md:pr-32 z-50 bg-white dark:bg-dark shadow-lg">
      <div className="flex items-center gap-10">
        <Sheet>
          <SheetTrigger>
            <Menu color="#666666" size={30} />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[270px] 2xl:w-72 rounded-tr-2xl"
          >
            <SheetHeader className="bg-[#363636] min-h-32 w-full rounded-tr-2xl  flex justify-center items-center">
              <SheetTitle />
              <div className="h-12">
                <LogoTeddy />
              </div>
              <SheetDescription />
            </SheetHeader>
            <MenuLinksSheet />
          </SheetContent>
        </Sheet>
        <LogoTeddy />
      </div>

      <div className="justify-self-center">
        <MenuLinks />
      </div>

      <div className="justify-self-end">
        <h3>
          Olá, <span className="font-bold">{storedName}</span>
        </h3>
      </div>
    </header>
  );
};
