import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Although we don't have a button, the card itself could be a link
import styles from './CaseStudySection.module.css';

// Type for a single case study
type CaseStudyCardProps = {
  title: string;
  description: string;
  image: string;
  href: string; // The whole card will be clickable
};

// Dummy data for case studies
const caseStudiesData: CaseStudyCardProps[] = [
  {
    title: '都市型ホテルA',
    description: 'PMUとRMUの導入により、フロント業務の80%を自動化。稼働率は前年比15%向上。',
    image: '/images/pg201/case-1.jpg', // TODO: Replace image
    href: '/case-studies/hotel-a' // Example link
  },
  {
    title: 'リゾート旅館B',
    description: 'STAYKEYパッケージで鍵の受け渡しを無人化。顧客満足度が向上し、口コミ評価が4.2→4.8に。',
    image: '/images/pg201/case-2.jpg', // TODO: Replace image
    href: '/case-studies/ryokan-b'
  },
  {
    title: '長期滞在型レジデンスC',
    description: 'STAYNETによる高速インターネットが決め手となり、法人契約率が30%増加しました。',
    image: '/images/pg201/case-3.jpg', // TODO: Replace image
    href: '/case-studies/residence-c'
  }
];

// Sub-component for a single card
const CaseStudyCard = ({ title, description, image, href }: CaseStudyCardProps) => (
  <Link href={href} className={styles.caseStudyCard}>
    <div className={styles.cardImage}>
      <Image src={image} alt={title} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </Link>
);


const CaseStudySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>導入事例</h2>
        <div className={styles.grid}>
          {caseStudiesData.map(study => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;