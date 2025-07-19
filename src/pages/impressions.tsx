import { Designers, Hero, Videos } from "@/components/shared/impressions";
import { useScrollTop } from "@/hooks/use-scroll-top";

export default function Impressions() {
  useScrollTop();

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Videos />
      <Designers />
    </div>
  );
}
