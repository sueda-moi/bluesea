'use client';

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import CoreServicesSection from '@/components/services/CoreServicesSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import { useMessage } from '@/lib/useMessage';

// 引入图标，用于数据定义
import { FiGlobe, FiTruck, FiTrendingUp } from 'react-icons/fi';

export default function Page201() {
  const getMessage = useMessage();

  // --- 从 Pg201.json 中获取所有文本数据 ---

  const introData = {
    title: getMessage('Pg201', 'intro_title'),
    paragraph: getMessage('Pg201', 'intro_paragraph')
  };

  const coreServicesData = {
    sectionTitle: getMessage('Pg201', 'core_services_title'),
    services: [
      { icon: FiGlobe, title: getMessage('Pg201', 'service_1_title'), description: getMessage('Pg201', 'service_1_desc') },
      { icon: FiTruck, title: getMessage('Pg201', 'service_2_title'), description: getMessage('Pg201', 'service_2_desc') },
      { icon: FiTrendingUp, title: getMessage('Pg201', 'service_3_title'), description: getMessage('Pg201', 'service_3_desc') }
    ]
  };

  const benefitsData = {
    title: getMessage('Pg201', 'benefits_title'),
    imageSrc: '/images/Pg201/benefits-image.jpg',
    imageAlt: getMessage('Pg201', 'benefits_title'),
    benefits: [
      getMessage('Pg201', 'benefit_1'),
      getMessage('Pg201', 'benefit_2'),
      getMessage('Pg201', 'benefit_3'),
      getMessage('Pg201', 'benefit_4'),
    ]
  };

  const caseStudiesData = {
    sectionTitle: getMessage('Pg201', 'casestudy_title'),
    studies: [
      { title: getMessage('Pg201', 'case_1_title'), description: getMessage('Pg201', 'case_1_desc'), image: '/images/Pg201/case-1.jpg', href: '/case-studies/company-a' },
      { title: getMessage('Pg201', 'case_2_title'), description: getMessage('Pg201', 'case_2_desc'), image: '/images/Pg201/case-2.jpg', href: '/case-studies/company-b' },
      { title: getMessage('Pg201', 'case_3_title'), description: getMessage('Pg201', 'case_3_desc'), image: '/images/Pg201/case-3.jpg', href: '/case-studies/company-c' }
    ]
  };

  return (
    <>
      <PageHeader
        category={getMessage('Pg201', 'header_category')}
        title={getMessage('Pg201', 'header_title')}
        subtitle={getMessage('Pg201', 'header_subtitle')}
        imageUrl="/images/Pg201/header-image.jpg"
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