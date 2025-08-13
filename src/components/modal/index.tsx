import { XIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  useImperativeHandle,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

export interface IAlertDialogHandles {
  isOpen: boolean;
  onChangeIsOpen: () => void;
}

export interface IModalProps {
  trigger?: ReactNode;
  title: string;
  children?: ReactNode;
  ref?: RefObject<IAlertDialogHandles | null>;
  open?: boolean;
  onClose?: () => void;
}

export const Modal = ({ trigger, title, children, ref }: IModalProps) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      onChangeIsOpen() {
        setOpen((prev) => !prev);
      },
      isOpen: open,
    }),
    [open]
  );
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className=" max-h-[95%] max-w-[400px] overflow-auto p-5">
        <AlertDialogHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <AlertDialogTitle className="fonte-bold">{title}</AlertDialogTitle>
          </div>
          <AlertDialogCancel
            asChild
            className="!border-0 !px-0 !bg-transparent cursor-pointer text-black"
          >
            <XIcon size={24} />
          </AlertDialogCancel>
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};
