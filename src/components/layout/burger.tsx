import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales/types/nav.type";
import { Menu } from "../shared";
import { useUiStore } from "@/store/ui";
import { useLangStore } from "@/store/lang";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const { t } = useTranslation("nav");
  const lang = useLangStore((state) => state.lang);

  const sheet = useUiStore((state) => state.sheet);
  const setSheet = useUiStore((state) => state.setSheet);

  const nav = t("navigation", { returnObjects: true }) as Navigation[];

  return (
    <Sheet onOpenChange={() => setSheet(!sheet)} open={sheet}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto z-[100]">
        <SheetClose />

        <SheetHeader className="mt-16 flex flex-col gap-2">
          <Link
            to={
              // lang === Language.RU
              //   ? "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_ru.pdf"
              //   : "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_eng.pdf"
              ""
            }
          >
            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-teritary w-full text-on_teritary hover:bg-teritary/90"
            >
              {lang === "ru" ? "Официальная поддержка" : "Official Support"}
            </Button>
          </Link>

          <Link to="/become-sponsor">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-primary w-full text-white hover:bg-primary/90"
            >
              {lang === "ru" ? "Стать спонсором" : "Become a sponsor"}
            </Button>
          </Link>
        </SheetHeader>
        <hr className="border-slate-500/20 my-8" />

        <div className="flex flex-col gap-6">
          {nav.map((item) =>
            !item.drop ? (
              <Link
                target={item.blank ?? ""}
                className="py-2"
                key={item.title}
                to={item.link || ""}
                onClick={() => setSheet(false)}
              >
                {item.title}
              </Link>
            ) : (
              <Menu
                className="w-full"
                triggerClassName="justify-between py-2"
                key={item.title}
                color={"black"}
                dropDownContent={item.dropDownContent}
                title={item.title}
              />
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
