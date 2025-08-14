import { XIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  useImperativeHandle,
  useState,
  forwardRef,
  type ReactNode,
} from "react";

export interface IAlertDialogHandles {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface IModalProps {
  trigger?: ReactNode;
  title: string;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal = forwardRef<IAlertDialogHandles, IModalProps>(
  ({ trigger, title, children, onClose }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen((v) => !v),
      }),
      []
    );

    return (
      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) onClose();
        }}
      >
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="max-h-[95%] max-w-[400px] overflow-auto p-5">
          <DialogHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <DialogTitle className="font-bold">{title}</DialogTitle>
            </div>
            <DialogClose asChild>
              <button
                className="border-0 px-0 bg-transparent cursor-pointer text-black"
                aria-label="Fechar"
              >
                <XIcon size={24} />
              </button>
            </DialogClose>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
);
