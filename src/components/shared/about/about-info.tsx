import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useStaticWords } from "@/hooks/tanstack/use-static-words";
import { useLangStore } from "@/store/lang";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Loader } from "../loader";

interface Props {
  className?: string;
}

export const AboutInfo: FC<Props> = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation("about");

  const { data, isPending } = useStaticWords("2");

  const title_1 = data?.find((item) => item.key === "about_1")?.text;
  const block_1 = data?.find((item) => item.key === "about_2")?.text;

  const title_2 = data?.find((item) => item.key === "about_3")?.text;
  const subtitle_2 = data?.find((item) => item.key === "about_4")?.text;

  const block_2 = data?.find((item) => item.key === "about_5")?.list;

  const title_3 = data?.find((item) => item.key === "about_6")?.text;
  const subtitle_3 = data?.find((item) => item.key === "about_7")?.text;
  const block_3 = data?.find((item) => item.key === "about_8")?.list;

  if (isPending) return <Loader />;

  return (
    <Container className="flex flex-col md:my-20 my-10 gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="h2">{title_1}</h2>

        <div
          className="flex flex-col p gap-3"
          dangerouslySetInnerHTML={{ __html: block_1 ?? "" }}
        ></div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="h2">{title_2}</h3>

        <h4 className="p">{subtitle_2}</h4>

        <ol type="1" className="list-decimal pl-8 flex flex-col gap-3 ">
          {block_2?.map((item, i) => (
            <li key={i} className="p">
              {lang === "ru" ? item.text_ru : item.text_en}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="h2">{title_3}</h2>

        <h3 className="p">{subtitle_3}</h3>
        <ul className="list-disc pl-8 flex flex-col gap-3 p">
          {block_3?.map((item, i) => (
            <li key={i}> {lang === "ru" ? item.text_ru : item.text_en}</li>
          ))}
        </ul>
      </div>

      <Link className="w-fit mx-auto" to="/become-sponsor">
        <Button>{t("main.button")}</Button>
      </Link>
    </Container>
  );
};
