import React from 'react';
import Image from 'next/image';
import styles from './FeatureSection.module.css';

type FeatureSectionProps = {
  title: string;
  description: string;
  imageAlt: string;
};


const FeatureSection = ({ title, description, imageAlt }: FeatureSectionProps) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContent}>
        <div className={styles.featureText}>

          <h2 className={styles.featureTitle}>{title}</h2>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div className={styles.featureImage}>
          <Image src="/images/top/feature-image.jpg" alt={imageAlt} width={500} height={300} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;