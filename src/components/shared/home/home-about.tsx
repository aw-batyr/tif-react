import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { AboutCard } from "../about-card";
import { homeAbout } from "@/data/home/home-about.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { useStats } from "@/hooks/tanstack/use-stats";
import { useStaticWords } from "@/hooks/tanstack/use-static-words";
import { Loader } from "../";

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useStaticWords("1");

  const { data: stats } = useStats();

  const title = data?.find((item) => item.key === "index_1")?.text;
  const text = data?.find((item) => item.key === "index_2")?.text;

  const translate = useTranslate(lang);

  if (isPending) return <Loader />;

  return (
    <section className="py-20">
      <Container className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="h2 text-left">{title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: text ? text : "" }}
              className="md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]"
            />

            <div className="flex w-full gap-8">
              <Link to="/about" className="w-fit">
                <Button variant={"outline"}>
                  {homeAbout[translate].button}
                </Button>
              </Link>
              <Link
                target="_blank"
                to="https://turkmentextile.turkmenexpo.com/app/storage/app/media/Catalogue/catalogue.pdf"
              >
                <Button variant={"outline"} className="px-16">
                  {homeAbout[translate].button2}
                </Button>
              </Link>
            </div>
          </div>

          <video
            src="https://turkmentextile.turkmenexpo.com/app/storage/app/media/video/Textile2025.mp4"
            muted
            controls
            autoPlay
            loop
            className="w-full h-auto"
          />
        </div>

        <div ref={ebmblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {stats?.map((item) => (
              <AboutCard
                key={item.text}
                {...item}
                className="embla__slide flex-[0_0_288px]"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
