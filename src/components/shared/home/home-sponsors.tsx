import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { useSponsors } from "@/hooks/tanstack/use-sponsors";
import { Container } from "@/components/layout";
import { Loader } from "../loader";

interface Props {
  className?: string;
}

export const HomeSponsors: FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      duration: 75,
    },
    [Autoplay({ stopOnInteraction: false, delay: 3000 })]
  );

  const { data, isPending } = useSponsors();

  const { t } = useTranslation("home", { keyPrefix: "sponsors" });

  if (isPending) return <Loader />;

  return (
    <section className={cn("md:py-20", className)}>
      <Container className="flex flex-col gap-6">
        <h2 className="h2">{t("title")}</h2>

        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex">
            {data?.map((item, i) =>
              item.link ? (
                <Link
                  target="_blank"
                  to={item.link}
                  key={i}
                  className="bg-surface_container flex flex-col embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center min-h-[128px] w-full"
                >
                  <img
                    src={item?.image?.path}
                    alt="logo"
                    className="object-contain flex-auto"
                  />
                  <div className="bg-secondary_container text-xs text-center py-1 px-2 w-full">
                    {item.name}
                  </div>
                </Link>
              ) : (
                <div
                  key={i}
                  className="bg-surface_container embla__slide mr-6 min-w-0 flex-[0_0_288px] items-center justify-center minh-[128px] w-full"
                >
                  <div className="h-[128px] w-full">
                    <img
                      src={item?.image?.path}
                      alt="logo"
                      className="object-contain size-full"
                    />
                  </div>
                  <div className="bg-secondary_container text-xs text-center py-1 px-2">
                    {item.name}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
