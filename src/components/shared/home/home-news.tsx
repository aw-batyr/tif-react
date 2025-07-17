import { FC } from "react";
import { cn } from "@/lib/utils";
import { Loader } from "../loader";
import { useLangStore } from "@/store/lang";
import { useNews } from "@/hooks/tanstack/use-news";
import { NewsCard } from "../news-card";
import { Container } from "@/components/layout";

export const HomeNews: FC = () => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useNews(lang);

  if (isPending) return <Loader />;

  return (
    <section className={cn("md:mb-[120px] mb-20")}>
      <Container>
        <h2 className="h2 text-center md:mb-8 mb-6">
          {lang === "en" ? "News" : "Новости"}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {data?.slice(0, 3).map((item) => (
            <NewsCard {...item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};
