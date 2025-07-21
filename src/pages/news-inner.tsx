import { Container } from "@/components/layout";
import { Loader } from "@/components/shared";
import { NewsCard } from "@/components/shared/news-card";
import { useNews } from "@/hooks/tanstack/use-news";
import { useNewsInner } from "@/hooks/tanstack/use-news-inner";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useLangStore } from "@/store/lang";
import { useParams } from "react-router-dom";

export default function NewsInner() {
  const { id } = useParams();
  const lang = useLangStore((state) => state.lang);

  const pageId = Number(id);
  useScrollTop();

  const { data, isPending } = useNewsInner(pageId, lang);
  const { data: news } = useNews(lang);

  if (isPending) return <Loader />;

  return (
    <Container className="pt-10 pb-20 md:pt-20 md:pb-[120px]">
      <section className="max-w-[888px] py-5 mx-auto flex flex-col md:gap-10 gap-6">
        <div>
          <h1 className="text-on_surface md:text-[32px] text-3xl leading-10 mb-2">
            {data?.title}
          </h1>
          <h4>
            {data?.published_at.slice(0, 10).split("-").reverse().join(".")}
          </h4>
        </div>

        <div className="w-full h-[300px] md:h-[480px]">
          <img
            src={data?.featured_images[0]?.path || ""}
            alt="news image"
            className="size-full object-cover"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          className="news-inner md:text-lg flex flex-col gap-6 text-base md:medium normal text-on_surface_v"
        />
      </section>

      <hr className="mt-10 md:mb-20 mb-[60px]" />

      <section>
        <h2 className="h2 mb-6">
          {lang === "ru" ? "Читайте также:" : "Read more:"}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {news
            ?.filter((item) => item.id !== pageId)
            .slice(0, 3)
            .map((item) => (
              <NewsCard {...item} key={item.title} />
            ))}
        </div>
      </section>
    </Container>
  );
}
