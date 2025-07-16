import React from 'react';
import styles from './MvvSection.module.css';

const MvvSection = () => {
  return (
    <section className={styles.mvvSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>OUR MVV</h2>
        <p className={styles.mainPhrase}>
          テクノロジーとグローバルネットワークで、<br />
          日本のすみずみまで、幸せを届ける
        </p>
        <p className={styles.subtitle}>
          私たちは、人、企業、社会の可能性を信じ、テクノロジーとグローバルな視点で、未来を共創します。
        </p>
      </div>
    </section>
  );
};

export default MvvSection;