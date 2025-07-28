import React from 'react';
import styles from './MvvSection.module.css';

type mvvDataSectionProps = {
  title: string;
  mainPhrase: string;
  subtitle: string;

};


const MvvSection = ({ title, mainPhrase, subtitle }: mvvDataSectionProps) => {
  return (
    <section className={styles.mvvSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.mainPhrase}>
          {mainPhrase}
        </p>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default MvvSection;