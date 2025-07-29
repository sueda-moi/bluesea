import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './BenefitsSection.module.css';

// 1. 定义组件需要接收的 Props 类型
type BenefitsSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  benefits: string[]; // 接收一个字符串数组作为优点列表
};

// 2. 从 props 中解构出需要的数据
const BenefitsSection = ({ title, imageSrc, imageAlt, benefits }: BenefitsSectionProps) => {
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => ( 
              <li key={index} className={styles.benefitItem}>
                <FiCheckCircle className={styles.checkIcon} />
                <span className={styles.benefitText}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;