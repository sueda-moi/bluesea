import React from 'react';
import styles from './HistorySection.module.css';


type HistoryEvent = {
  year: number;
  month?: number; // 月份是可选的
  description: string;
};


// 先创建一条，并为未来扩展留出空间
const historyData: HistoryEvent[] = [
  {
    year: 2024,
    month: 1,
    description: '藍海株式会社（Blue Ocean Co., Ltd.）設立'
  },
  // {
  //   year: 2025,
  //   description: 'シンガポールに海外拠点を設立'
  // },
  // {
  //   year: 2026,
  //   month: 3,
  //   description: '自社開発SaaSプロダクト「BlueShip」をリリース'
  // },
];

const HistorySection = () => {
  return (
    
    <section id="history" className={styles.section}>
      <h2 className={styles.title}>沿革</h2>
      <div className={styles.timelineContainer}>
        {historyData.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              {event.year}年
              {event.month && <span className={styles.month}>{event.month}月</span>}
            </div>
            <div className={styles.timelineContent}>
              {event.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;