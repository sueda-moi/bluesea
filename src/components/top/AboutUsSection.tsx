import React from 'react';
import Link from 'next/link';
import styles from './AboutUsSection.module.css';

// 1. Define the type for the link boxes
type AboutLinkProps = {
  title: string;
  description: string;
  href: string;
};

// 2. Data for the three boxes
const aboutLinks: AboutLinkProps[] = [
  {
    title: '経営理念',
    description: '私たちの使命と価値観',
    href: '/pg401' // 假设链接到CEOメッセージ或独立的理念页面
  },
  {
    title: '会社概要',
    description: '基本的な会社情報',
    href: '/pg402' // 链接到会社概要页面
  },
  {
    title: 'アクセス',
    description: 'オフィスへの道順',
    href: '/pg405' // 链接到アクセス页面
  }
];


const AboutUsSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ABOUT US</h2>
        <p className={styles.sectionSubtitle}>
          SOZONEXTは、テクノロジーと不動産の融合で、新しい価値を創造する企業です。
        </p>
        <div className={styles.linksGrid}>
          {aboutLinks.map(link => (
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