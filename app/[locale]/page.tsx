import CarouselBanner from "@/components/homepage/CarouselBanner";
import { ContactUs } from "@/components/homepage/ContactUs";
import YoutubeSection from "@/components/homepage/YoutubeSection";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CarouselBanner />
      <YoutubeSection />
      <ContactUs />
    </main>
  );
}
