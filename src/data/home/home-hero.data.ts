import { Language } from "@/store/lang";

export const btns = [
  {
    lang: Language.RU,
    data: [
      {
        title: "План выставки",
        link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
        blank: true,
      },
      {
        title: "Забронировать стенд",
        link: "/stend-form",
      },
      {
        title: "Список участников",
        link: "/participants",
      },
      {
        title: "B2B | B2G встречи",
        link: "/B2B-B2G",
      },
    ],
  },

  {
    lang: Language.EN,
    data: [
      {
        title: "Floor Plan",
        link: "https://turkmentextile.turkmenexpo.com/app/storage/app/media/Floor%20plan/floor%20plan.pdf",
        blank: true,
      },
      {
        title: "Book a stand",
        link: "/stend-form",
      },
      {
        title: "List of participants",
        link: "/participants",
      },
      {
        title: "B2B | B2G meetings",
        link: "/B2B-B2G",
      },
    ],
  },
];
