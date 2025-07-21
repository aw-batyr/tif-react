import {
  HomeAbout,
  HomeActions,
  HomeHero,
  // HomeNews,
  HomeOffers,
  HomeSponsors,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeActions />
      <HomeAbout />
      <HomeSponsors />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
      {/* <HomeNews /> */}
    </div>
  );
}
