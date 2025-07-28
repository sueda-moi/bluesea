import React from 'react';
import Link from 'next/link';
import styles from './AboutUsSection.module.css';

// Type definitions for props
type AboutLink = {
  title: string;
  description: string;
  href: string;
};

type AboutUsSectionProps = {
  sectionTitle: string;
  subtitle: string;
  links: AboutLink[];
};

const AboutUsSection = ({ sectionTitle, subtitle, links }: AboutUsSectionProps) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <p className={styles.sectionSubtitle}>{subtitle}</p>
        <div className={styles.linksGrid}>
          {links.map(link => (
            <Link href={link.href} key={link.title} className={styles.linkBox}>
              <span className={styles.boxTitle}>{link.title}</span>
              <span className={styles.boxDescription}>{link.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;