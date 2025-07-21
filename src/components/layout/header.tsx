import { FC, useMemo } from "react";
import { Container, Burger } from "./";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LangMenu, Logo, Menu } from "../shared";
import { Language, useLangStore } from "@/store/lang";
import { Navigation } from "@/locales/types/nav.type";
import { useTranslation } from "react-i18next";
import { useWordsTranslate } from "@/hooks/use-translate";

export const Header: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const { t } = useTranslation("nav");

  const nav = t("navigation", { returnObjects: true }) as Navigation[];

  const data = useMemo(() => nav.slice(0, 3), [nav]);
  const data2 = useMemo(() => nav.slice(3, 6), [nav]);

  const address = useWordsTranslate(
    "Ашхабад, Туркменистан",
    "Ashgabat, Turkmenistan"
  );

  return (
    <header>
      <div className="h-12 hidden lg:flex bg-sur text-surface-bg items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">{address}</h4>
            </div>

            <nav className="flex items-center gap-6">
              {data.map((item) =>
                !item.drop ? (
                  <Link
                    target={item.blank ? "_blank" : ""}
                    className="py-2"
                    key={item.title}
                    to={item.link || ""}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Menu
                    key={item.title}
                    color={"black"}
                    dropDownContent={item.dropDownContent}
                    title={item.title}
                  />
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm">+99371871812</h4>
            </div>

            <LangMenu className="!text-on_surface" />
          </div>
        </Container>
      </div>

      <div className="bg-primary py-2 flex items-center justify-between h-20 overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>

            <nav className="lg:flex hidden items-center gap-6 text-white">
              {data2.map((item) =>
                !item.drop ? (
                  <Link className="py-2" key={item.title} to={item.link || ""}>
                    {item.title}
                  </Link>
                ) : (
                  <Menu
                    key={item.title}
                    dropDownContent={item.dropDownContent}
                    title={item.title}
                    color="white"
                  />
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <LangMenu className="lg:hidden" light />
            <Burger />
          </div>

          <div className="lg:flex hidden items-center gap-2">
            <Link
              to={
                lang === Language.RU
                  ? "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_ru.pdf"
                  : "https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_eng.pdf"
              }
              target="_blank"
            >
              <Button
                variant={"secondary"}
                size={"sm"}
                className="bg-white text-primary hover:bg-white/90"
              >
                {lang === "ru" ? "Официальная поддержка" : "Official Support"}
              </Button>
            </Link>

            <Link to="/become-sponsor">
              <Button
                variant={"secondary"}
                size={"sm"}
                className="bg-teritary text-white hover:bg-teritary/90"
              >
                {lang === "ru" ? "Стать спонсором" : "Become a sponsor"}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
