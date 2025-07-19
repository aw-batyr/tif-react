import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  slides: number;
  active: number;
  scrollTo?: (index: number) => void;
}

export const EmblaDots: FC<Props> = ({
  className,
  slides,
  active,
  scrollTo,
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: slides }).map((_, index) => (
        <span
          onClick={() => scrollTo?.(index)}
          key={index}
          className={cn(active === index ? "dot-active" : "dot")}
        />
      ))}
    </div>
  );
};
