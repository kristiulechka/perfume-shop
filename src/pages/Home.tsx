import { HeroSection } from '../sections/home/hero-section/HeroSection';
import { DescriptionSection } from '../sections/home/description-section/DescriptionSection';
import { AllItemsSection } from '../sections/home/all-items-section/AllItemsSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <AllItemsSection />
    </>
  );
};