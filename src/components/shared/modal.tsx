import { FC } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SubscribeForm } from "./forms/subscribe-form";

interface Props {
  className?: string;
  title: string;
}

export const Modal: FC<Props> = ({ className, title }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
          className
        )}
      >
        {title}
      </DialogTrigger>

      <DialogContent>
        <SubscribeForm modal />
      </DialogContent>
    </Dialog>
  );
};
