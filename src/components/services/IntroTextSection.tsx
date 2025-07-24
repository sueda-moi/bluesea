import React from 'react';
import styles from './IntroTextSection.module.css';

// 1. 定义组件需要接收的Props类型
type IntroTextSectionProps = {
  title: string;
  paragraph: string;
};

// 2. 从props中接收 title 和 paragraph
const IntroTextSection = ({ title, paragraph }: IntroTextSectionProps) => {
  return (
    <section className={styles.section}>
      {/* 3. 使用从props传来的数据 */}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </section>
  );
};

export default IntroTextSection;