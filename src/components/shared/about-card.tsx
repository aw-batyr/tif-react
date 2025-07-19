import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const AboutCard: FC<Props> = ({ className, title, text }) => {
  return (
    <article
      className={cn(
        "px-6 py-4 relative bg-surface_container h-[160px] w-full overflow-hidden",
        className
      )}
    >
      <img src="/about-card-bg.png" className="absolute top-5 right-0" />
      <h2 className="text-primary text-[32px] semibold leading-[130%] mb-4">
        {text}
      </h2>

      <h4 className="text-on_surface normal text-base">{title}</h4>
    </article>
  );
};
