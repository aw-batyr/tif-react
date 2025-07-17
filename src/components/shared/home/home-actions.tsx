import { FC } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "../menu";
import { Chevron } from "../chevron";

interface Props {
  className?: string;
}

export const HomeActions: FC<Props> = ({ className }) => {
  const { t } = useTranslation("home");

  const { items } = t("buttons", { returnObjects: true }) as {
    items: {
      text: string;
      link?: string;
      blank?: boolean;
      dropdown?: boolean;
      items: { text: string; link: string }[];
    }[];
  };

  return (
    <section className={cn("", className)}>
      <Container>
        <div className="grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-6">
          {items.map((item, i) =>
            !item.dropdown ? (
              <Link
                key={i}
                to={item.link ?? ""}
                target={item.blank ? "_blank" : ""}
              >
                <Button
                  variant={"teritary"}
                  size={"lg"}
                  className="w-full !flex drop-shadow-sm px-2 shadow-md md:text-lg bg-teritary text-on_teritary hover:bg-teritary/90"
                >
                  {item.text}
                </Button>
              </Link>
            ) : (
              <Menu
                key={i}
                dropDownContent={item.items}
                triggerClassName="w-full"
                className="!w-full"
              >
                <Button
                  size={"lg"}
                  variant={"teritary"}
                  className="w-full drop-shadow-sm shadow-md md:text-xl text-lg bg-teritary text-on_teritary hover:bg-teritary/90"
                >
                  {item.text}
                  <Chevron w={"40"} h={"40"} color="white" />
                </Button>
              </Menu>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
