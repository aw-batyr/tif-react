import { Container } from "@/components/layout";
import { useVideos } from "@/hooks/tanstack/use-videos";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Videos = () => {
  const { t } = useTranslation("main");
  const { pathname } = useLocation();
  const [activeVideo, setActiveVideo] = useState(1);

  const { data } = useVideos(1);

  const fashionData = data?.videos.filter(
    (item) => item.sections[0] === "fashion_shows"
  );

  const filteredData = [...(fashionData ?? [])].sort(
    (a, b) => a?.fashion_shows_order_id + b?.fashion_shows_order_id
  );

  const { videosTitle, videosTitle2 } = t("impressions", {
    returnObjects: true,
  }) as { videosTitle: string; videosTitle2: string };

  const filter = () => (pathname !== "/impressions" ? true : false);

  return (
    <section className="bg-[url('/impressions/videos-block-bg.png')] md:py-20 py-10">
      <Container>
        <h2 className="mb-10 md:text-5xl text-2xl leading-[120%] text-white text-center">
          {filter() ? videosTitle : videosTitle2}
        </h2>

        <div className="flex flex-col lg:flex-row lg:mx-20 gap-4 text-white overflow-hidden h-fit lg:h-[490px]">
          {/* FIRST BLOCK */}
          <div className="bg-gray_10 flex-auto p-2 rounded-[8px] border border-gray_09 flex flex-col justify-center h-full">
            <div className="max-h-[450px]">
              <video
                src={data?.videos?.[activeVideo]?.video?.path}
                muted
                controls
                autoPlay
                loop
                className="w-full size-full mb-2 rounded"
              />
            </div>
            <div className="flex items-center justify-between mt-auto"></div>
          </div>

          {/* SECOND BLOCK */}
          <div className="bg-gray_10 flex-[0_0_20%] px-2 pt-2 rounded-[8px] border border-gray_09 flex flex-col h-full">
            {/* <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm">Смотрите также</h3>
              <span className="text-xs normal">1/10</span>
            </div> */}

            <div className="flex flex-col gap-2 w-full overflow-y-auto overflow-x-hidden h-full">
              {filteredData?.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveVideo(i + 1)}
                  className="basis-[70px] w-[80%] cursor-pointer mx-auto  overflow-hidden"
                >
                  <img
                    src={item?.video_photo?.path}
                    alt=""
                    className="object-cover size-full rounded-tl hover:scale-105 transition-transform  rounded-bl"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* SECOND BLOCK */}
        </div>
      </Container>
    </section>
  );
};

export default Videos;
