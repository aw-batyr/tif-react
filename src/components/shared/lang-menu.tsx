import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Language, useLangStore } from "@/store/lang";

interface Props {
  className?: string;
  light?: boolean;
}

export const langs = [
  {
    lang: Language.RU,
  },
  {
    lang: Language.EN,
  },
];

export const LangMenu: FC<Props> = ({ className, light = false }) => {
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        className={cn(
          "flex text-white items-center gap-2",
          light ? "text-white" : "text-black",
          className
        )}
      >
        <img src={lang === Language.RU ? "/ru.svg" : "/english.svg"} alt="" />
        {lang === Language.RU ? "Ру" : "En"}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z"
            fill={light ? "#fff" : "#000"}
          />
        </svg>
      </PopoverTrigger>

      <PopoverContent className="flex flex-col gap-6">
        {langs
          .filter((item) => item.lang !== lang)
          .map((item, i) => (
            <div
              onClick={() => {
                setLang(item.lang);
                setIsOpen(false);
              }}
              key={i}
              className="flex gap-3 py-1  items-center cursor-pointer"
            >
              <img
                src={item.lang === Language.RU ? "/ru.svg" : "/english.svg"}
                alt="flag"
              />
              <h5>{item.lang === Language.RU ? "Русский" : "English"}</h5>
            </div>
          ))}
      </PopoverContent>
    </Popover>
  );
};
