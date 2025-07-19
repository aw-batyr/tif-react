import { FC, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollLock } from "usehooks-ts";
import { usePhotos } from "@/hooks/tanstack/use-photos";
import { useVideos } from "@/hooks/tanstack/use-videos";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  activeItem: { id: number; type: string };
  setActiveItem: ({ id, type }: { id: number; type: "string" }) => void;
  className?: string;
}

export const MediaModal: FC<Props> = ({ className, setIsOpen, activeItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const { data } = usePhotos(1);
  const { data: videos } = useVideos(1);

  useScrollLock();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !data) return;

    emblaApi.scrollTo(activeItem.id, true);
  }, [emblaApi, data, activeItem.id]);

  const slides =
    activeItem.type === "photo"
      ? data?.photos?.map((item) => (
          <div
            key={item.id}
            className="embla__slide flex-[0_0_100%] h-[350px] md:h-[500px] lg:h-[700px] lg:px-[20%] flex items-center justify-center"
          >
            <img
              src={item?.photo?.path}
              alt={item.photo.file_name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))
      : videos?.videos?.map((item) => (
          <div
            key={item.id}
            className="embla__slide flex-[0_0_100%] h-[80vh] lg:px-[20%] flex items-center justify-center"
          >
            <video
              src={item?.video?.path ?? ""}
              controls
              autoPlay
              muted
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed z-[100] top-0 left-0 pb-40 pt-20 lg:px-28 px-6 overflow-hidden min-h-screen w-full bg-black/90",
        className
      )}
    >
      <X
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 p-3 md:size-20 size-16  cursor-pointer z-50 text-white hover:scale-110 transition-all duration-300"
      />
      {
        <div className="hidden md:block">
          <ChevronLeftIcon
            onClick={() => canScrollPrev && emblaApi?.scrollPrev()}
            className={cn(
              "absolute left-10 top-1/2 -translate-y-1/2 text-white size-20 cursor-pointer hover:scale-110 transition-all duration-300 z-40",
              !canScrollPrev && "opacity-20 pointer-events-none"
            )}
          />
          <ChevronRightIcon
            onClick={() => canScrollNext && emblaApi?.scrollNext()}
            className={cn(
              "absolute right-10 top-1/2 -translate-y-1/2 text-white size-20 cursor-pointer hover:scale-110 transition-all duration-300 z-40",
              !canScrollNext && "opacity-20 pointer-events-none"
            )}
          />
        </div>
      }

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex">{slides}</div>
      </div>
    </motion.div>
  );
};
