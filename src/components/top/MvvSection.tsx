import React from 'react';
import styles from './MvvSection.module.css';

const MvvSection = () => {
  return (
    <section className={styles.mvvSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>OUR VISION</h2>
        <p className={styles.mainPhrase}>
          海のように広く、<br />
          信頼と革新の波を次世代へ
        </p>
        <p className={styles.subtitle}>
          私たちは、国際貿易、IT、不動産の各分野における深い知見を融合させ、<br />
          世界市場で競争力を持つ日本発の次世代型グローバル企業を目指します。
        </p>
      </div>
    </section>
  );
};

export default MvvSection;