import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout";
import { aboutBron } from "@/data/about/about-bron";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

interface Props {
  className?: string;
}

export const AboutBron: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);
  return (
    <section
      className={cn("md:py-20 py-10 relative overflow-hidden", className)}
    >
      <img
        src="/CTA.png"
        className="absolute object-center top-0 left-0 size-full -z-10 object-cover"
      />

      <Container>
        {/* <h3 className="h2 text-center !text-on_primary mb-6">
          {aboutBron[useTranslate(lang)].title}
        </h3>
        <p className="text-center md:text-lg text-sm text-white max-w-[828px] px-5 mx-auto mb-10">
          {aboutBron[useTranslate(lang)].p}
        </p>
 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={"/stend-form"} className="w-full">
            <Button className="bg-reverse_primary w-full text-primary hover:bg-reverse_primary/90">
              {aboutBron[useTranslate(lang)].button1}
            </Button>
          </Link>
          <Link to={"/B2B-B2GS"} className="w-full">
            <Button className="bg-reverse_primary w-full hover:bg-reverse_primary/90 text-primary">
              {aboutBron[useTranslate(lang)].button2}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
