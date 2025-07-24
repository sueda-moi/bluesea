import React from 'react';
import Link from 'next/link';
import styles from './NewsSection.module.css';

// 1. Type definition for a single news item
type NewsItemProps = {
  date: string;
  category: string;
  title: string;
  href: string;
};

// 2. Update data with news relevant to "Blue Ocean Co., Ltd."
const dummyNewsData: NewsItemProps[] = [
  {
    date: '2024.01.19',
    category: 'お知らせ',
    title: '次世代型グローバル企業を目指す「藍海株式会社」設立のお知らせ',
    href: '/news/Pg301' // Link to the specific news detail page
  },
  {
    date: '2024.04.15',
    category: 'プレスリリース',
    title: 'グローバル事業拡大の拠点として、シンガポールオフィスを開設しました。',
    href: '/news/Pg302'
  },
  {
    date: '2025.06.20', // Use a more recent date
    category: '事業関連',
    title: '藍海株式会社、不動産収益化支援サービスを正式にローンチしました。',
    href: '/Pg203' // Can link directly to the service page we created
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
          {/* This button links to the main news list page (Pg300) */}
          <Link href="/pg300" className={styles.viewMoreButton}>
            ニュース一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;