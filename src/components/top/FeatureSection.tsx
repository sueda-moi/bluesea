import React from 'react';
import Image from 'next/image';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContent}>
        <div className={styles.featureText}>
          {/* 结合业务内容 ⑤ */}
          <h2 className={styles.featureTitle}>不動産企画・収益化支援</h2>
          <p className={styles.featureDescription}>
            藍海株式会社は、データ分析とグローバルな視点を組み合わせ、あらゆる不動産のポテンシャルを最大化します。遊休不動産の再生から宿泊施設の運営支援まで、お客様の資産価値向上に貢献する、新しい時代の不動産ソリューションを提供します。
          </p>
        </div>
        <div className={styles.featureImage}>
          <Image src="/images/top/feature-image.jpg" alt="不動産企画・収益化支援" width={500} height={300} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;