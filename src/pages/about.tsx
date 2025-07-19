import { Cover } from "@/components/layout";
import {
  AboutBron,
  AboutInfo,
  AboutPlace,
  AboutThemes,
  AboutTime,
} from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Language, useLangStore } from "@/store/lang";

export default function About() {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);

  return (
    <div className={cn("")}>
      <Cover title={lang === Language.RU ? "О выставке" : "About exhibition"} />

      <AboutInfo />
      <AboutThemes />
      <AboutTime />
      <AboutPlace />
      <AboutBron />
    </div>
  );
}
