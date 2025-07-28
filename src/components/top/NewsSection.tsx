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

// 2. New type definition for the component's props
type NewsSectionProps = {
  sectionTitle: string;
  buttonText: string;
  newsItems: NewsItemProps[];
};

// 3. The component now accepts data via props
const NewsSection = ({ sectionTitle, buttonText, newsItems }: NewsSectionProps) => {
  // The hardcoded dummyNewsData array has been removed
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* 4. Use the sectionTitle from props */}
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.newsList}>
          {/* 5. Map over the newsItems array from props */}
          {newsItems.map((item) => (
            <Link href={item.href} key={item.title} className={styles.newsItem}>
              <p className={styles.date}>{item.date}</p>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>
            </Link>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {/* This button links to the main news list page (Pg300) */}
          <Link href="/Pg300" className={styles.viewMoreButton}>
            {/* 6. Use the buttonText from props */}
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;