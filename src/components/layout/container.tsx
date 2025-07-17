import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("w-full mx-auto max-w-[1240px] px-4", className)}>
      {children}
    </div>
  );
};
