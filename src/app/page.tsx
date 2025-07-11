
import Banner from "@/components/BannerSection/Banner";
import DiscoverSection from "@/components/DiscoverSection/discover";
import DreamQuote from "@/components/DreamQuote/quote";
import ExclusivitySection from "@/components/ExclusiveSection/exclusivitySection";
import Footer from "@/components/footer/footer";
import TripGallery from "@/components/GallerySection/tripGallery";
import TravelSection from "@/components/TravelSection/TravelSection";
import WhyBookSection from "@/components/WhyBookSection/WhyBook";

export default function Home() {
  return (
    <>
      <Banner />
      <TravelSection />
      <ExclusivitySection/>
      <WhyBookSection />
      <TripGallery/>
      <DiscoverSection/>
      <DreamQuote />
      <Footer />
    </>
  );
}
