import React from 'react';
// Import the CSS module
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    // Use the styles object to apply classes
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          SOZO(想像)して、SOZO(創造)し、<br />
          幸せを届ける
        </h1>
        <p className={styles.heroSubtitle}>
          テクノロジーとグローバルネットワークで、日本のすみずみまで、幸せを届ける
        </p>
      </div>
    </section>
  );
};

export default HeroSection;