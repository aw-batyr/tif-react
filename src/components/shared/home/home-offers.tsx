import { FC, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { EmblaDots, OfferCard } from "../";
import { offersData } from "@/data/home/home-offers.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

export const HomeOffers: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);
  const lang = useLangStore((state) => state.lang);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-surface_high py-10 my-20 relative overflow-hidden">
      <Container>
        <div ref={emblaRef} className="embla ">
          <div className="mb-2 flex gap-6 embla__container">
            {offersData[useTranslate(lang)].data.map((item) => (
              <OfferCard
                {...item}
                key={item.title}
                className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              />
            ))}
          </div>

          <EmblaDots
            className="xl:hidden"
            scrollTo={scrollTo}
            active={activeIndex}
            slides={2}
          />
        </div>
      </Container>
    </section>
  );
};
