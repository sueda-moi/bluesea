import React from 'react';
import Link from 'next/link';
import styles from './NewsSection.module.css';

// 1. Define the type for a single news item
type NewsItemProps = {
  date: string;
  category: string;
  title: string;
  href: string;
};

// 2. Create some dummy data for demonstration
const dummyNewsData: NewsItemProps[] = [
  {
    date: '2025.07.16',
    category: 'プレスリリース',
    title: '新サービス「不動産価値最大化プラン」の提供を開始しました。',
    href: '/pg301' // Example link to a specific news article
  },
  {
    date: '2025.07.10',
    category: 'お知らせ',
    title: '夏季休業に関するご案内（2025年8月11日～8月15日）',
    href: '/pg302'
  },
  {
    date: '2025.06.28',
    category: 'メディア掲載',
    title: '「週刊不動産テック」に弊社代表のインタビューが掲載されました。',
    href: '/pg303'
  },
];


const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>NEWS</h2>
        <div className={styles.newsList}>
          {dummyNewsData.map((item) => (
            <Link href={item.href} key={item.title} className={styles.newsItem}>
              <p className={styles.date}>{item.date}</p>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>
            </Link>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {/* This button links to the main news list page (pg300) */}
          <Link href="/pg300" className={styles.viewMoreButton}>
            ニュース一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;