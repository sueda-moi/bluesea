'use client';

import HeroSection from '@/components/top/HeroSection';
import FeatureSection from '@/components/top/FeatureSection';
import ServiceSection from '@/components/top/ServiceSection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import MvvSection from '@/components/top/MvvSection';
import NewsSection from '@/components/top/NewsSection';
import AboutUsSection from '@/components/top/AboutUsSection';
import { useMessage } from '@/lib/useMessage';

export default function TopPage() {
  const getMessage = useMessage();

  const heroData = {
    title: getMessage('Pg100', 'hero_title'),
    subtitle: getMessage('Pg100', 'hero_subtitle')
  };

  const featureData = {
    title: getMessage('Pg100', 'feature_title'),
    description: getMessage('Pg100', 'feature_desc'),
    imageAlt: getMessage('Pg100', 'feature_title')
  };

  const mvvData = {
    title: getMessage('Pg100', 'vision_title'),
    mainPhrase: getMessage('Pg100', 'vision_main'),
    subtitle: getMessage('Pg100', 'vision_sub')
  };

  const servicesData = {
    sectionTitle: getMessage('Pg100', 'services_title'),
    buttonText: getMessage('common', 'common_read_more'), 
    services: [
      { title: getMessage('Pg100', 'services_1_title'), description: getMessage('Pg100', 'services_1_desc'), image: '/images/top/service-1.jpg', link: '/Pg201' },
      { title: getMessage('Pg100', 'services_2_title'), description: getMessage('Pg100', 'services_2_desc'), image: '/images/top/service-2.jpg', link: '/Pg202' },
      { title: getMessage('Pg100', 'services_3_title'), description: getMessage('Pg100', 'services_3_desc'), image: '/images/top/service-3.jpg', link: '/Pg203' }
    ]
  };

 const newsData = {
    sectionTitle: getMessage('Pg100', 'news_title'),
    buttonText: getMessage('Pg100', 'news_button'),
    newsItems: [
      {
        date: '2024.01.19',
        category: getMessage('articles', 'pg301_category'),
        title: getMessage('articles', 'pg301_title'),
        href: '/news/Pg301'
      },
      {
        date: '2024.04.15',
        category: getMessage('articles', 'pg302_category'),
        title: getMessage('articles', 'pg302_title'),
        href: '/news/Pg302'
      },
      {
        date: '2025.06.20',
        category: getMessage('articles', 'pg203_category'),
        title: getMessage('articles', 'pg203_title'),
        href: '/Pg203'
      },
    ]
  };

  const aboutData = {
    sectionTitle: getMessage('Pg100', 'about_title'),
    subtitle: getMessage('Pg100', 'about_subtitle'),
    links: [
      { title: getMessage('Pg100', 'about_link_1_title'), description: getMessage('Pg100', 'about_link_1_desc'), href: '/Pg400#ceo-message' },
      { title: getMessage('Pg100', 'about_link_2_title'), description: getMessage('Pg100', 'about_link_2_desc'), href: '/Pg400#profile' },
      { title: getMessage('Pg100', 'about_link_3_title'), description: getMessage('Pg100', 'about_link_3_desc'), href: '/Pg400#access' }
    ]
  };

  return (
    <>
      <HeroSection {...heroData} />
      <FeatureSection {...featureData} />
      <MvvSection {...mvvData} />
      <ServiceSection {...servicesData} />
      <NewsSection {...newsData} />
      <AboutUsSection {...aboutData} />
      <ContactBanner />
    </>
  );
}