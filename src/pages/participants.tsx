import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useLangStore } from "@/store/lang";
import { Container } from "@/components/layout";
import { Loader, ParticipantItem, Tabs } from "@/components/shared";
import { useParticipants } from "@/hooks/tanstack/use-participants";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface Props {
  className?: string;
}

const Participants: FC<Props> = ({ className }) => {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  const { data, isPending } = useParticipants();

  const dataHeader = {
    company: lang === "ru" ? "Название компании" : "Company name",
    country: lang === "ru" ? "Страна" : "Country",
    industry: lang === "ru" ? "Сфера деятельности" : "Industry",
  };

  const [activeTab, setActiveTab] = useState(0);

  const splitedData = data?.[0]?.participants.concat(
    data?.[1]?.participants,
    data?.[2]?.participants
  );

  const filteredData = data?.filter((item) =>
    activeTab === 1
      ? item.id === 3
      : activeTab === 2
      ? item.id === 1
      : item.id === 2
  );

  console.log(activeTab);

  return (
    <Container>
      <section className={cn("page-padding overflow-x-hidden", className)}>
        <h1 className="text-center md:text-5xl text-3xl mb-4">
          {lang === "ru" ? "Список участников" : "List of participants"}
        </h1>
        <Tabs
          state={activeTab}
          setState={setActiveTab}
          className="mb-6 md:w-fit"
        />

        <div className="p-2 sm:p-0 bg-surface_container overflow-hidden">
          <div className="sm:flex items-center hidden h-[52px]  border-b border-outline_v">
            <h3 className="flex-[0_0_45.54%] pl-4">{dataHeader?.company}</h3>
            <h3 className="flex-[0_0_19.80%]">{dataHeader?.country}</h3>
            <h3 className="flex-[0_0_34.65%]">{dataHeader?.industry}</h3>
          </div>

          {isPending ? (
            <Loader />
          ) : activeTab === 0 ? (
            splitedData?.map((item, index, arr) => (
              <ParticipantItem
                {...item}
                arr={arr?.length}
                index={index}
                image={item.image ?? { path: "" }}
                image_country={item.image_country ?? { path: "" }}
              />
            ))
          ) : (
            filteredData?.[0]?.participants?.map((item, index, arr) => (
              <ParticipantItem
                {...item}
                arr={arr?.length}
                index={index}
                image={item.image ?? { path: "" }}
                image_country={item.image_country ?? { path: "" }}
              />
            ))
          )}
        </div>
      </section>
    </Container>
  );
};

export default Participants;
