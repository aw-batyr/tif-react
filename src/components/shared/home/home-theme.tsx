import { FC } from "react";
import { ThemeCard } from "../theme-card";
import { Container } from "@/components/layout";
import { useLangStore } from "@/store/lang";
import { homeTheme } from "@/data/home/home-theme.data";
import { useTranslate } from "@/hooks/use-translate";
import { useIndustries } from "@/hooks/tanstack/use-industries";
import { Loader } from "../loader";

export const HomeTheme: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useIndustries();

  if (isPending) return <Loader />;

  return (
    <section className="">
      <Container>
        <h2 className="h2 mb-10 text-center">
          {homeTheme[useTranslate(lang)].title}
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {data?.map((item, i) => (
            <ThemeCard
              key={i}
              {...item}
              className={i === 8 ? "md:col-start-2" : ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
