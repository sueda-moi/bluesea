import React from 'react';
import styles from './HistorySection.module.css';

// 1. Type definition remains unchanged
type HistoryEvent = {
  year: number;
  month?: number;
  description: string;
};

// 2. Props type with added suffix properties
type HistorySectionProps = {
  title: string;
  events: HistoryEvent[];
  yearSuffix: string;
  monthSuffix: string;
};

// 3. Receive suffix from props
const HistorySection = ({ title, events, yearSuffix, monthSuffix }: HistorySectionProps) => {
  return (
    <section id="history" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.timelineContainer}>
        {events.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              {/* 4. Use suffix passed from props */}
              {event.year}{yearSuffix}
              {event.month && <span className={styles.month}>{event.month}{monthSuffix}</span>}
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