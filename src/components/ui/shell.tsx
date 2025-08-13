import { type ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

export const Shell = ({
  className,
  ref,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("w-full max-w-[106.25rem] mx-auto py-5 px-4", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
