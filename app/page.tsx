import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { FeatureList } from '@/components/sections/FeatureList';
import { SocialProof } from '@/components/sections/SocialProof';
import { CtaBand } from '@/components/sections/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeatureList />
      <SocialProof />
      <CtaBand />
    </>
  );
}
