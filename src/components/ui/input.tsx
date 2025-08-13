import { cn } from "@/lib/utils";
import { Mask, type MasksTypes } from "@/lib/masks";
import type { ChangeEvent, InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: MasksTypes;
}

function Input({ className, type, onChange, mask, ...props }: IInputProps) {
  const handleMask = (event: ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      const text = event.target.value;
      const maskedText = Mask.format(mask, text);
      const syntheticEvent = {
        target: { value: maskedText.toString() },
      } as ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    }
  };

  return (
    <input
      type={type}
      data-slot="input"
      onChange={mask ? handleMask : onChange}
      className={cn(
        "file:text-foreground placeholder:text-[#AAAAAA] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-2 border-input flex h-9 w-full min-w-0 rounded-md  bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
