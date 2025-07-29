import React from 'react';
import styles from './ProblemSolutionSection.module.css';
import { FiArrowRightCircle } from 'react-icons/fi';

// 1. 定义数据和Props的类型
type ProblemSolutionPair = {
  problem: string;
  solution: string;
};

type ProblemSolutionSectionProps = {
  sectionTitle: string;
  problemTitle: string;
  solutionTitle: string;
  data: ProblemSolutionPair[];
};

// 2. 从props接收 sectionTitle 和 data
const ProblemSolutionSection = ({ sectionTitle, data, problemTitle, solutionTitle }: ProblemSolutionSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.grid}>

          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.problem}>
                <h3 className={styles.cardTitle}>{problemTitle}</h3>
                <p>{item.problem}</p>
              </div>
              <div className={styles.arrow}>
                <FiArrowRightCircle />
              </div>
              <div className={styles.solution}>
                <h3 className={styles.cardTitle}>{solutionTitle}</h3>
                <p>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;