import { Container } from "@/components/layout";
import { aboutPlace } from "@/data/about/about-place";
import { useTranslate } from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { FC } from "react";

interface Props {
  className?: string;
}

export const AboutPlace: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className={cn("gap-6 relative overflow-hidden", className)}>
      <Container className="md:py-20 py-10 grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-0 grid">
        <div className="flex-[0_0_50%]">
          <h3 className="h2 mb-6">{aboutPlace[useTranslate(lang)].title}</h3>
          <div className="text-lg flex flex-col gap-6 text-on_surface_v normal  mb-10">
            {aboutPlace[useTranslate(lang)].data.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="h-full max-size-[600px] flex-[0_0_50%]">
          <img
            src="/about-place.jpg"
            alt=""
            className="size-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
};
