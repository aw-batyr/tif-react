import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <img src="/logo.png" alt="logo" className="md:size-auto h-10" />
    </div>
  );
};
