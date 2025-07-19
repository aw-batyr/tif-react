import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  text: string;
  title: string;
  image: { path: string };
}

export const ContactCard: FC<Props> = ({ className, text, title, image }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="bg-secondary_container size-16 rounded-[2px] p-3">
        <img src={image.path} alt="contact icon" className="size-full" />
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="text-sm text-[#454545]">{title}</h5>
        <h4 className="text-[#171717] semibold">{text}</h4>
      </div>
    </div>
  );
};
