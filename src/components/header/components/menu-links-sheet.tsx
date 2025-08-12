import { cn } from "@/lib/utils";
import { useMenu } from "../hooks/use-menu";

export const MenuLinksSheet = () => {
  const { pathName, linksSidebar } = useMenu();

  return (
    <nav className="flex flex-col gap-6 px-4 py-6 text-lg">
      {linksSidebar.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href ?? undefined}
          className={cn(
            "flex items-center gap-3 font-semibold",
            pathName === href ? "text-orange-500 font-medium" : "text-black"
          )}
        >
          {icon}
          {label}
        </a>
      ))}
    </nav>
  );
};
