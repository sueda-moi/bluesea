import React from 'react';
import Image from 'next/image';
// 1. Import the CSS module
import styles from './FeatureSection.module.css'; 

const FeatureSection = () => {
  return (
    // 2. Apply classes using the 'styles' object
    <section className={styles.featureSection}>
      <div className={styles.featureContent}>
        <div className={styles.featureText}>
          <h2 className={styles.featureTitle}>REAL ESTATE AS A SERVICE</h2>
          <p className={styles.featureDescription}>
            「サービスとしての不動産」をコンセプトに、遊休不動産の再生・活用、宿泊施設のDX推進、運営改善、集客支援などを通じて、不動産価値の最大化を追求します。
          </p>
        </div>
        <div className={styles.featureImage}>
          {/* TODO: Replace with your actual image path */}
          <Image src="/images/top/feature-image.jpg" alt="Real Estate Service" width={500} height={300} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;