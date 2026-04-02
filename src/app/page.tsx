import TopMarquee from '@/components/TopMarquee';
import HeroSection from '@/components/HeroSection';
import AlertBanner from '@/components/AlertBanner';
import ConstructionBanner from '@/components/ConstructionBanner';
import RainbowDivider from '@/components/RainbowDivider';
import AboutSection from '@/components/AboutSection';
import CrewSection from '@/components/CrewSection';
import GallerySection from '@/components/GallerySection';
import GuestbookSection from '@/components/GuestbookSection';
import MidiNotice from '@/components/MidiNotice';
import SiteFooter from '@/components/SiteFooter';
import BottomMarquee from '@/components/BottomMarquee';
import ClippyLoader from '@/components/ClippyLoader';

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#000011] text-white" style={{ fontFamily: "'Comic Sans MS', 'Comic Neue', cursive" }}>
      <TopMarquee />
      <HeroSection />
      <RainbowDivider />
      <AlertBanner />
      <ConstructionBanner />
      <RainbowDivider />
      <AboutSection />
      <RainbowDivider />
      <CrewSection />
      <RainbowDivider />
      <GallerySection />
      <RainbowDivider />
      <GuestbookSection />
      <RainbowDivider />
      <MidiNotice />
      <SiteFooter />
      <BottomMarquee />
      <ClippyLoader />
    </main>
  );
}
