import { HeroSection } from '../sections/home/hero-section/HeroSection';
import { DescriptionSection } from '../sections/home/description-section/DescriptionSection';
import { AllItemsSection } from '../sections/home/all-items-section/AllItemsSection';
import { PresentationSection } from '../sections/home/presentation-section/PresentationSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <div style={{ height: '150vh' }} />
      <DescriptionSection />
      <AllItemsSection />
      <PresentationSection />
    </>
  );
};