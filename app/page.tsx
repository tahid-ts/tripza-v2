import MainLayout from "@/components/layout/MainLayout";
import BannerSection from "@/components/banner/BannerSection";
import AdventuresSection from "@/components/home/adventures/AdventuresSection";
import ExploreSection from "@/components/home/explore/ExploreSection";
import ECPSection from "@/components/home/ecp/ECPSection";
import TravellersReviewSection from "@/components/home/travellersReview/TravellersReviewSection";
import BannerSection1 from "@/components/banner/BannerSection1";
import AttractionSection from "@/components/home/attraction/AttractionSection";
import FAQSection from "@/components/home/faq/FAQSection";
import TravelEssentials from "@/components/home/travelEssentials/TravelEssentials";
import TravellersStories from "@/components/home/travellersStories/TravellersStories";
import PromiseSection from "@/components/home/promise/PromiseSection";

export default function Home() {
  return (
    <MainLayout homeFooterUI toggleDeskNavCls>
      <BannerSection />
      <AdventuresSection />
      <ExploreSection />
      <ECPSection />
      <TravellersReviewSection />
      <BannerSection1 />
      <AttractionSection />
      <FAQSection />
      <TravelEssentials />
      <TravellersStories />
      <PromiseSection />
    </MainLayout>
  );
}
