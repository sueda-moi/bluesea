import React from 'react';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>

        <h1 className={styles.heroTitle}>
          {title}
        </h1>
        <p className={styles.heroSubtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;