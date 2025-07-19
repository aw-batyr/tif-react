import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "@/components/layout";
import { Loader, TimeCard } from "../";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { times } from "@/data/home/home-time.data";
import { useExhibitionTime } from "@/hooks/tanstack/use-exhibition-time";

interface Props {
  className?: string;
}

export const AboutTime: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useExhibitionTime();

  return (
    <section className={cn("bg-surface_container py-10 md:py-20", className)}>
      <Container>
        {isPending ? (
          <Loader />
        ) : (
          <>
            <h2 className="h2 mb-6">{times[useTranslate(lang)].title}</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {data?.map((item, i) => (
                <TimeCard
                  bottomClassName="!bg-white rounded-b-[2px]"
                  {...item}
                  key={i}
                  className="w-full"
                />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
