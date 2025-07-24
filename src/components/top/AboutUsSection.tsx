import React from 'react';
import Link from 'next/link';
import styles from './AboutUsSection.module.css';

// 1. Define the type for the link boxes
type AboutLinkProps = {
  title: string;
  description: string;
  href: string;
};

const aboutLinks: AboutLinkProps[] = [
  {
    title: '経営理念',
    description: '私たちの使命とビジョン',
    href: '/Pg400#ceo-message' // 链接到Pg400的CEO致辞
  },
  {
    title: '会社概要',
    description: '基本的な会社情報',
    href: '/Pg400#profile' // 链接到Pg400的公司概要
  },
  {
    title: 'アクセス',
    description: '本社オフィスへの道順',
    href: '/Pg400#access' // 链接到Pg400的访问信息
  }
];

const AboutUsSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ABOUT US</h2>
        <p className={styles.sectionSubtitle}>
          藍海株式会社は、信頼と革新を軸に、多様な事業領域で新たな価値を創造する次世代型グローバル企業です。
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