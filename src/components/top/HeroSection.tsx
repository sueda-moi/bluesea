import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        {/* 基于您提供的 "経営理念・ビジョン" */}
        <h1 className={styles.heroTitle}>
          海のように広く、<br />
          信頼と革新の波を次世代へ
        </h1>
        <p className={styles.heroSubtitle}>
          世界市場における日本発の次世代型グローバル企業を目指します。
        </p>
      </div>
    </section>
  );
};

export default HeroSection;