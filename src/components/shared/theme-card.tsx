import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  image: { path: string };
  title: string;
  className?: string;
  iconClassName?: string;
}

export const ThemeCard: FC<Props> = ({
  className,
  image,
  title,
  iconClassName,
}) => {
  return (
    <article
      className={cn(
        "bg-surface_container relative hover:bg-teritary_surface_container transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        className
      )}
    >
      <div className="bg-primary size-full -z-[10] absolute top-2.5 left-2.5" />
      <div
        className={cn(
          "md:size-[84px] size-12 bg-primary_04 p-3",
          iconClassName
        )}
      >
        <img src={image.path} alt="theme icon" />
      </div>
      <h3 className="md:mt-6 mt-2 md:text-xl text-sm">{title}</h3>
    </article>
  );
};
