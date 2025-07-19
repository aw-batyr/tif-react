import { FC, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "usehooks-ts";
import { useLangStore } from "@/store/lang";

const tabs = [
  { id: 0, title: "Все компании", titleEn: "All companies" },
  {
    id: 3,
    title: "Государственные учреждения ",
    titleEn: "Government Institutions",
  },
  {
    id: 1,
    title: "Местные компании",
    titleEn: "Local companies",
  },
  {
    id: 2,
    title: "Иностранные компании",
    titleEn: "Foreign companies",
  },
];

interface Props {
  className?: string;
  state: number;
  setState: (val: number) => void;
  data?: typeof tabs;
}

export const Tabs: FC<Props> = ({
  className,
  setState,
  state,
  data = tabs,
}) => {
  const lang = useLangStore((state) => state.lang);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "x",
      align: "start",
      containScroll: "trimSnaps",
    },
    []
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback(() => {
    const activeTabElement = tabRefs.current[state];
    if (!activeTabElement) return;

    if (isDesktop) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    } else if (emblaApi) {
      const emblaNode = emblaApi.rootNode();
      const emblaContainer = emblaApi.containerNode();
      if (!emblaNode || !emblaContainer) return;

      const scrollLeft = emblaContainer.scrollLeft;
      const tabLeft = activeTabElement.offsetLeft;

      setIndicatorStyle({
        left: tabLeft - scrollLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [state, isDesktop, emblaApi]);

  useEffect(() => {
    if (!isDesktop && emblaApi) return;

    emblaApi?.scrollTo(state);

    updateIndicator();
  }, [emblaApi, state, updateIndicator, isDesktop]);

  useEffect(() => {
    if (!emblaApi) return;

    updateIndicator();

    emblaApi.on("scroll", updateIndicator);
    emblaApi.on("resize", updateIndicator);

    return () => {
      emblaApi.off("scroll", updateIndicator);
      emblaApi.off("resize", updateIndicator);
    };
  }, [emblaApi, updateIndicator]);

  const handleTabClick = useCallback(
    (index: number) => {
      setState(index);
      if (!isDesktop && emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, setState, isDesktop]
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto", className)}
      style={{ width: "fit-content", maxWidth: "100%" }}
    >
      {isDesktop ? (
        <div className="flex" role="tablist">
          {data?.map((tab, index) => (
            <button
              ref={(el) => (tabRefs.current[index] = el)}
              key={tab.id}
              role="tab"
              aria-selected={state === index}
              className={cn(
                "shrink-0 text-center relative h-12 mx-4 py-2 text-sm md:text-base whitespace-nowrap transition-all",
                state === index ? "text-primary" : "text-on_surface_v"
              )}
              onClick={() => handleTabClick(index)}
            >
              {lang === "ru" ? tab.title : tab.titleEn}
            </button>
          ))}
        </div>
      ) : (
        <div ref={emblaRef} className="" role="tablist">
          <div className="flex">
            {data?.map((tab, index) => (
              <button
                ref={(el) => (tabRefs.current[index] = el)}
                key={tab.id}
                role="tab"
                aria-selected={state === index}
                className={cn(
                  "shrink-0 text-center relative after:transition-all after:rounded after:w-full after:h-0.5 after:bg-primary after:opacity-0 after:absolute after:bottom-0 after:left-0 h-12 mx-4 py-2 text-sm md:text-base whitespace-nowrap transition-all",
                  state === index
                    ? "text-primary after:opacity-100"
                    : "text-on_surface_v"
                )}
                onClick={() => handleTabClick(index)}
              >
                {lang === "ru" ? tab.title : tab.titleEn}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute md:block hidden bottom-0 h-[3px] rounded-t-[2px] bg-primary transition-all duration-200"
        style={indicatorStyle}
      />
    </div>
  );
};
