import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseStudySection.module.css';

// 定义单个案例和组件Props的类型
type CaseStudy = {
  title: string;
  description: string;
  image: string;
  href: string;
};
type CaseStudySectionProps = {
  sectionTitle: string;
  studies: CaseStudy[];
};

// 子组件
const CaseStudyCard = ({ title, description, image, href }: CaseStudy) => (
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

// 主组件
const CaseStudySection = ({ sectionTitle, studies }: CaseStudySectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.grid}>
          {studies.map(study => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;