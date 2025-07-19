import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  title: string;
  text: string;
  bottomClassName?: string;
}

export const TimeCard: FC<Props> = ({
  className,
  title,
  text,
  bottomClassName,
}) => {
  return (
    <div className={cn("rounded-t-[4px] overflow-hidden", className)}>
      <div className="bg-teritary text-white flex items-center h-11 px-4">
        {title}
      </div>

      <div
        className={cn(
          "h-14 bg-surface_container semibold flex items-center text-lg px-4",
          bottomClassName
        )}
      >
        {text}
      </div>
    </div>
  );
};
