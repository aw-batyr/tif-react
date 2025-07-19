import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Error: FC<Props> = ({ className }) => {
  return (
    <div className={cn("container py-32", className)}>
      <h1 className="text-5xl text-center">Oops, something went wrong</h1>
    </div>
  );
};
