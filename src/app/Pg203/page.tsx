"use client";

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import CoreServicesSection from '@/components/services/CoreServicesSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

import { useMessage } from '@/lib/useMessage';
import { FiTrendingUp, FiLock, FiCpu } from 'react-icons/fi';

export default function Page203() {
  const getMessage = useMessage();

  const introData = {
    title: getMessage('Pg203', 'intro_title'),
    paragraph: getMessage('Pg203', 'intro_paragraph')
  };

  const coreServicesData = {
    sectionTitle: getMessage('Pg203', 'core_services_title'),
    services: [
      { icon: FiTrendingUp, title: getMessage('Pg203', 'service_1_title'), description: getMessage('Pg203', 'service_1_desc') },
      { icon: FiLock, title: getMessage('Pg203', 'service_2_title'), description: getMessage('Pg203', 'service_2_desc') },
      { icon: FiCpu, title: getMessage('Pg203', 'service_3_title'), description: getMessage('Pg203', 'service_3_desc') }
    ]
  };

  const benefitsData = {
    title: getMessage('Pg203', 'benefits_title'),
    imageSrc: '/images/Pg203/benefits-image.jpg',
    imageAlt: getMessage('Pg203', 'benefits_title'),
    benefits: [
      getMessage('Pg203', 'benefit_1'),
      getMessage('Pg203', 'benefit_2'),
      getMessage('Pg203', 'benefit_3'),
      getMessage('Pg203', 'benefit_4'),
    ]
  };

  const caseStudiesData = {
    sectionTitle: getMessage('Pg203', 'casestudy_title'),
    studies: [
      { title: getMessage('Pg203', 'case_1_title'), description: getMessage('Pg203', 'case_1_desc'), image: '/images/Pg203/case-1.jpg', href: '/case-studies/kominka' },
      { title: getMessage('Pg203', 'case_2_title'), description: getMessage('Pg203', 'case_2_desc'), image: '/images/Pg203/case-2.jpg', href: '/case-studies/building' },
      { title: getMessage('Pg203', 'case_3_title'), description: getMessage('Pg203', 'case_3_desc'), image: '/images/Pg203/case-3.jpg', href: '/case-studies/portfolio' }
    ]
  };

  return (
    <>
      <PageHeader
        category={getMessage('Pg203', 'header_category')}
        title={getMessage('Pg203', 'header_title')}
        subtitle={getMessage('Pg203', 'header_subtitle')}
        imageUrl="/images/Pg203/header-image.jpg"
      />
      <main>
        <IntroTextSection {...introData} />
        <CoreServicesSection {...coreServicesData} />
        <BenefitsSection {...benefitsData} />
        <CaseStudySection {...caseStudiesData} />
        <ContactBanner />
      </main>
    </>
  );
}