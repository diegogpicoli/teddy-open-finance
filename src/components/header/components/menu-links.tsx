import { cn } from "@/lib/utils";
import { useMenu } from "../hooks/use-menu";

export const MenuLinks = () => {
  const { signOut, pathName, linksMenu } = useMenu();
  return (
    <nav className="hidden lg:flex items-center gap-8 text-lg ">
      {linksMenu.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={cn(
            pathName === href && "text-orange-500 underline underline-offset-4"
          )}
        >
          {label}
        </a>
      ))}
      <button className="cursor-pointer" onClick={signOut}>
        Sair
      </button>
    </nav>
  );
};
