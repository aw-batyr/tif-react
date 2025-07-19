import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ThemeCard } from "../theme-card";
import { useLangStore } from "@/store/lang";
import { useTranslate } from "@/hooks/use-translate";
import { homeTheme } from "@/data/home/home-theme.data";
import { useIndustries } from "@/hooks/tanstack/use-industries";
import { Loader } from "../loader";

interface Props {
  className?: string;
}

export const AboutThemes: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useIndustries();

  return (
    <section
      className={cn("relative w-full bg-[#FDEDEE] -z-10 py-10", className)}
    >
      <Container>
        {isPending ? (
          <Loader />
        ) : (
          <>
            <h3 className="h2 mb-4">{homeTheme[useTranslate(lang)].title}</h3>
            {/* <p className="text-lg text-on_surface_v mb-6">
              {homeTheme[useTranslate(lang)].}
            </p> */}

            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
              {data?.map((item, i) => (
                <ThemeCard key={i} {...item} />
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 text-on_surface_v text-lg">
              <div className="md:w-1 w-4 md:h-[38px] h-40 bg-teritary_08" />
              <p className="text-18">
                {homeTheme[useTranslate(lang)].bottom_text}
              </p>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
