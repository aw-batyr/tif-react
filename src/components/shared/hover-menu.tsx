import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
  text: string;
  hoverItems?: {
    text: string;
    link?: string;
    blank?: boolean;
  }[];
  setIsOpen: (val: boolean) => void;
}

export const HoverMenu: FC<Props> = ({
  className,
  text,
  hoverItems,
  setIsOpen,
}) => {
  const setSheet = useUiStore((state) => state.setSheet);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent h-14 flex  gap-3 justify-between min-w-full text-base cursor-pointer items-center hover:bg-slate-300/50 transition-all",
              className
            )}
          >
            {text}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-surface_container shadow flex flex-col pb-2 rounded-[2px] w-40 items-center justify-center pt-2">
            {hoverItems?.map((item, i) => (
              <NavigationMenuLink
                key={i}
                onClick={() => {
                  setIsOpen(false);
                  setSheet(false);
                }}
                className="h-14 py-2 flex items-center  w-40 cursor-pointer px-4 hover:bg-slate-300/50  transition-all"
              >
                <Link target={item.blank ? "_blank" : ""} to={item.link ?? ""}>
                  {item.text}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
