import { FC } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";

interface Props {
  className?: string;
  index: number;
  name: string;
  image?: {
    path: string;
  };
  image_country: {
    path?: string;
  };
  country: string;
  about: string;
  arr: number;
}

export const ParticipantItem: FC<Props> = ({
  className,
  index,
  name,
  image,
  image_country,
  country,
  about,
  arr,
}) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <>
      {/* MOBILE */}
      <div
        key={index}
        className={cn(
          "flex border-b md:hidden py-2 border-outline_v",
          className
        )}
      >
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex items-center w-full">
            <div className="flex items-center flex-[0_0_80%] gap-3">
              <h3 className="text-xs normal flex-[0_0_90px]">
                {lang === "ru" ? "Название" : "Company"}:
              </h3>
              <h4 className="text-xs flex-[0_0_70%]">{name}</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center w-full">
              <div className="flex items-center flex-[0_0_80%] gap-3">
                <h3 className="text-xs normal flex-[0_0_90px]">
                  {lang === "ru" ? "Страна" : "Country"}:
                </h3>

                <div className="flex items-center flex-[0_0_50%] gap-2">
                  <img
                    src={image_country?.path}
                    alt="flag"
                    className="size-4 flex-[0_0_16px] object-contain"
                  />
                  <h4 className="text-xs flex-1">{country}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="flex items-center flex-[0_0_80%] gap-3">
              <h3 className="text-xs normal flex-[0_0_90px]">
                {lang === "ru" ? "Сфера" : "Industry"}:
              </h3>
              <h4 className="text-xs flex-1">{about}</h4>
            </div>
          </div>
        </div>

        <div className="flex-[0_0_88px] size-[88px] bg-white ">
          <img
            src={image?.path}
            alt="company"
            className="size-full object-contain"
          />
        </div>
      </div>
      {/* DESKTOP */}
      <div
        className={cn(
          "md:flex hidden p-4 ",
          arr !== index + 1 && "border-b border-outline_v"
        )}
      >
        <div className="flex-[0_0_45.54%] flex gap-8">
          <div className="flex-[0_0_88px] sm:flex-[0_0_128px] size-[88px] bg-white sm:size-[128px]">
            <img
              src={image?.path}
              alt="company"
              className="size-full object-contain"
            />
          </div>
          <h3 className="text-lg xl:mr-20 mr-10">{name}</h3>
        </div>

        <div className="flex-[0_0_19.80%] flex gap-2.5">
          <img src={image_country?.path} alt="flag" className="size-4" />
          <h4 className="text-sm normal">{country}</h4>
        </div>

        <h3 className="text-sm normal md:ml-1 flex-[0_0_34.65%]">{about}</h3>
      </div>
    </>
  );
};
