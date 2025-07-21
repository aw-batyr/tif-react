import { FC, PropsWithChildren, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron, HoverMenu } from "./";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import { DropDownContent } from "@/locales/types/nav.type";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
  title?: string;
  color?: string;
  triggerClassName?: string;

  dropDownContent?: DropDownContent[];
}

export const Menu: FC<PropsWithChildren<Props>> = ({
  title,
  dropDownContent,
  color,
  triggerClassName,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const setSheet = useUiStore((state) => state.setSheet);

  const handleClick = () => {
    setIsOpen(false);
    setSheet(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        className={cn("flex items-center gap-2", triggerClassName)}
      >
        {title}
        {children}
        {!children && (
          <Chevron
            color={color}
            className={cn("transition-all", isOpen && "rotate-180")}
          />
        )}
      </PopoverTrigger>

      <PopoverContent className="w-fit relative z-[200] px-0 bg-surface_container">
        {dropDownContent &&
          dropDownContent.map((item, i) =>
            item.hover ? (
              <HoverMenu setIsOpen={setIsOpen} key={i} {...item} />
            ) : item.link ? (
              <Link
                key={i}
                to={item.link ?? ""}
                onClick={handleClick}
                className="h-14 px-3 flex gap-3 relative justify-between cursor-pointer items-center hover:bg-slate-300/50 transition-all"
                target={item.blank ? "_blank" : undefined}
                rel={item.blank ? "noopener noreferrer" : undefined}
              >
                {item.text}
                {item.blank && <img src="/pdf.svg" />}
              </Link>
            ) : item.modal ? (
              <Modal key={item.text} title={item.text} />
            ) : (
              <div className="relative" key={i}>
                <div
                  className="h-14 px-3 py-2 flex items-center cursor-pointer hover:bg-slate-300/50 transition-all"
                  onClick={handleClick}
                >
                  {item.text}
                </div>
              </div>
            )
          )}
      </PopoverContent>
    </Popover>
  );
};
