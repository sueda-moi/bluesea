'use client';

import HeroSection from '@/components/top/HeroSection';
import FeatureSection from '@/components/top/FeatureSection';
import ServiceSection from '@/components/top/ServiceSection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import MvvSection from '@/components/top/MvvSection';
import NewsSection from '@/components/top/NewsSection';
import AboutUsSection from '@/components/top/AboutUsSection';


export default function TopPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <MvvSection />
      <ServiceSection />
      <NewsSection />
      <AboutUsSection />
      <ContactBanner />
    </>
  );
}