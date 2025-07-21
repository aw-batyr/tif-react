import { ContactsFormType } from "@/lib/get-contacts-form-details";
import { SponsorFormType } from "@/lib/get-sponsor-form-details";
import { StandFormType } from "@/lib/get-stend-form-details";
import axios from "axios";
import { ContactsPageType } from "./types/contacts.type";
import { LangState } from "@/store/lang";
import { StatsType } from "@/hooks/tanstack/use-stats";
import { HomeContactsType } from "./types/home-contacts.type";
import { StaticType } from "@/hooks/tanstack/use-static-words";
import { IndustriesType } from "@/hooks/tanstack/use-industries";
import { TimeType } from "@/hooks/tanstack/use-exhibition-time";
import { PartnersType } from "@/hooks/tanstack/use-partners";
import { NewsInnerType, NewsType } from "./types/news.type";
import { ParticipantsType } from "./types/participants.type";
import { PhotoTypes } from "./types/photo.type";
import { DesignersType } from "./types/designers.type";
import { VideoTypes } from "./types/videos.type";

const axios_url = axios.create({
  baseURL: "https://tif.turkmenexpo.com/app/api/v1/",
});

export const postStend = async (data: StandFormType): Promise<boolean> => {
  const res = axios_url.post(`book_stand_form`, data);

  return (await res).status === 201;
};

export const postB2b = async (data: FormData): Promise<boolean> => {
  const res = axios_url.post(`form`, data);

  return (await res).status === 201;
};

export const postSponsor = async (data: SponsorFormType): Promise<boolean> => {
  const res = axios_url.post(`become_sponsor_form`, data);

  return (await res).status === 201;
};

export const postContact = async (data: ContactsFormType): Promise<boolean> => {
  const res = axios_url.post(`contact_form`, data);

  return (await res).status === 201;
};

export const postSubscribe = async (data: { email: string }) => {
  const res = axios_url.post("subscribe_news_form", data);

  return (await res).status === 201;
};

export const getStaticWords = async (lang: LangState["lang"], id: string) => {
  const data = axios_url.get<StaticType>(`pages/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPartners = async (lang: LangState["lang"]) => {
  const data = axios_url.get<PartnersType>("partners", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getStats = async (lang: LangState["lang"]) => {
  const data = axios_url.get<StatsType>("stats", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getContacts = async (lang: LangState["lang"]) => {
  const data = axios_url.get<ContactsPageType>("contact_info", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getHomeContacts = async (lang: LangState["lang"]) => {
  const data = axios_url.get<HomeContactsType>("contact_data", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getIndustries = async (lang: LangState["lang"]) => {
  const data = axios_url.get<IndustriesType>(`industries`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getExhibitionTime = async (lang: LangState["lang"]) => {
  const data = axios_url.get<TimeType>(`exhibition_time`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

// export const getNews = async (lang: "ru" | "en") => {
//   const data = axios_url.get<NewsType>(`news?per_page=100`, {
//     headers: {
//       "Accept-Language": lang,
//     },
//   });

//   return data;
// };
export const getNews = async (lang: "ru" | "en") => {
  const data = axios_url.get<NewsType>(
    `https://turkmentextile.turkmenexpo.com/app/api/v1/news?per_page=100`,
    {
      headers: {
        "Accept-Language": lang,
      },
    }
  );

  return data;
};

export const getNewsInner = async (id: number, lang: string) => {
  const data = axios_url.get<NewsInnerType>(`news/${id}`, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getParticipants = async (lang: LangState["lang"]) => {
  const data = axios_url<ParticipantsType>("participants", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPhotos = async (id: number) => {
  const data = axios_url<PhotoTypes>("photos/category/" + id);

  return data;
};

export const getVideos = async (id: number) => {
  const data = axios_url<VideoTypes>("videos/category/" + id);

  return data;
};

export const getSponsors = async (lang: LangState["lang"]) => {
  const data = axios_url<PartnersType>("sponsors", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getDesigners = async (lang: LangState["lang"], id: number) => {
  const data = axios_url<DesignersType>("designers/category/" + id, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
