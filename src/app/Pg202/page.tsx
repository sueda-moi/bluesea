'use client';

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import { useMessage } from '@/lib/useMessage';

import ProblemSolutionSection from '@/components/services/ProblemSolutionSection';




export default function Page202() {
 const getMessage = useMessage();
  const introData = {
    title: getMessage('Pg202', 'intro_title'),
    paragraph: getMessage('Pg202', 'intro_paragraph')
  };

  const problemSolutionData = {
    sectionTitle: getMessage('Pg202', 'problem_section_title'),
    problemTitle: getMessage('Pg202', 'problem_card_title'),
    solutionTitle: getMessage('Pg202', 'solution_card_title'),
    data: [
      { problem: getMessage('Pg202', 'problem_1_q'), solution: getMessage('Pg202', 'problem_1_a') },
      { problem: getMessage('Pg202', 'problem_2_q'), solution: getMessage('Pg202', 'problem_2_a') },
      { problem: getMessage('Pg202', 'problem_3_q'), solution: getMessage('Pg202', 'problem_3_a') }
    ]
  };

  const benefitsData = {
    title: getMessage('Pg202', 'benefits_title'),
    imageSrc: '/images/Pg202/benefits-image.jpg',
    imageAlt: getMessage('Pg202', 'benefits_title'),
    benefits: [
      getMessage('Pg202', 'benefit_1'),
      getMessage('Pg202', 'benefit_2'),
      getMessage('Pg202', 'benefit_3'),
      getMessage('Pg202', 'benefit_4'),
    ]
  };

  const caseStudiesData = {
    sectionTitle: getMessage('Pg202', 'casestudy_title'),
    studies: [
      { title: getMessage('Pg202', 'case_1_title'), description: getMessage('Pg202', 'case_1_desc'), image: '/images/Pg202/case-1.jpg', href: '/case-studies/saas-a' },
      { title: getMessage('Pg202', 'case_2_title'), description: getMessage('Pg202', 'case_2_desc'), image: '/images/Pg202/case-2.jpg', href: '/case-studies/infra-b' },
      { title: getMessage('Pg202', 'case_3_title'), description: getMessage('Pg202', 'case_3_desc'), image: '/images/Pg202/case-3.jpg', href: '/case-studies/clinic-c' }
    ]
  };

  return (
    <>
      <PageHeader
        category={getMessage('Pg202', 'header_category')}
        title={getMessage('Pg202', 'header_title')}
        subtitle={getMessage('Pg202', 'header_subtitle')}
        imageUrl="/images/Pg202/header-image.jpg"
      />
      <main>
        <IntroTextSection {...introData} />
        <ProblemSolutionSection {...problemSolutionData} />
        <BenefitsSection {...benefitsData} />
        <CaseStudySection {...caseStudiesData} />
        <ContactBanner />
      </main>
    </>
  );
}