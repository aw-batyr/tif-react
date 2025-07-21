import { FC, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { Loader, MediaModal, Tabs } from "@/components/shared";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Container, Cover } from "@/components/layout";
import { usePhotos } from "@/hooks/tanstack/use-photos";
import { useVideos } from "@/hooks/tanstack/use-videos";

interface Props {
  className?: string;
}

const momentsTabs = [
  {
    id: 0,
    title: "Фото",
    titleEn: "Photo",
  },
  {
    id: 1,
    title: "Видео",
    titleEn: "Video",
  },
];

const Media: FC<Props> = ({ className }) => {
  const [state, setState] = useState(0);
  const { data, isPending } = usePhotos(1);
  const { data: videos } = useVideos(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState({ id: 0, type: "photo" });
  const { t } = useTranslation("main");

  const lang = useLangStore((state) => state.lang);

  const onItem = ({ id, type }: { id: number; type: string }) => {
    setIsModalOpen(true);
    setActiveItem({ id, type });
  };

  const [isCollapse, setIsCollapse] = useState(false);

  const getLoading = (i: number) => {
    if (i === 0 && isPending) return <Loader />;
    else return <Loader />;
  };

  const photos = useMemo(
    () => data?.photos.slice(0, isCollapse ? 1000 : 16),
    [data?.photos]
  );

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <MediaModal
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            setIsOpen={setIsModalOpen}
          />
        )}
      </AnimatePresence>

      <section className={cn("md:mb-[120px] mb-20", className)}>
        <Cover title={lang === "ru" ? "Моменты" : "Moments"} />

        <Container className="page-bottom md:pt-10 pt-6">
          <div className="flex justify-center flex-col">
            <Tabs
              state={state}
              setState={setState}
              data={momentsTabs}
              className="mb-6"
            />
            {state === 0 && isPending ? (
              getLoading(state)
            ) : (
              <>
                <h3 className="md:text-3xl text-2xl mb-6">TIF Expo-2025</h3>
                <div className="grid lg:grid-cols-4 lg:gap-y-4 lg:gap-x-6 md:gap-6 gap-4 grid-cols-2 place-items-center">
                  {state === 0
                    ? photos?.map((photo, i) => (
                        <div
                          onClick={() => onItem({ id: i, type: "photo" })}
                          key={i}
                          className="cursor-pointer embla__slide basis-1/1 overflow-hidden"
                        >
                          <img
                            src={photo?.photo?.path ?? ""}
                            alt={photo?.photo?.file_name ?? "photo"}
                            className="size-full object-cover hover:scale-105 duration-300 transition-all"
                          />
                        </div>
                      ))
                    : videos?.videos?.map((video, i) => (
                        <div
                          onClick={() => onItem({ id: i, type: "video" })}
                          key={i}
                          className="cursor-pointer group embla__slide h-[155px] w-full basis-1/1 overflow-hidden relative"
                        >
                          <Play
                            fill="white"
                            size={20}
                            color="white"
                            className="absolute group-hover:scale-125 transition-all duration-300 top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                          />
                          <div className="absolute top-0 left-0 size-full bg-[#2C57A752]/[32%]" />
                          <img
                            src={video?.video_photo?.path ?? ""}
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                </div>
              </>
            )}

            {data?.photos?.length &&
              data?.photos?.length > 16 &&
              !isCollapse && (
                <Button
                  onClick={() => setIsCollapse(true)}
                  className="mx-auto w-[288px] mt-10 text-on_surface"
                  size={"lg"}
                  variant={"outline"}
                >
                  {t("media.button")}
                </Button>
              )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Media;
