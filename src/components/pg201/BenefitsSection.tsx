import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './BenefitsSection.module.css';

// Data for the benefits list
const benefitsData: string[] = [
  '物理的な鍵の受け渡しが不要になり、フロント業務の負担を大幅に軽減します。',
  '24時間365日、非対面でのチェックイン・アウト対応が可能になり、人件費を削減します。',
  'AIによる価格最適化で、販売機会の損失を防ぎ、施設の収益性を最大化します。',
  '運営データを一元管理・可視化することで、迅速な経営判断をサポートします。',
  'ゲストの利便性向上により顧客満足度が高まり、高評価レビューの獲得に繋がります。'
];

const BenefitsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {/* TODO: Replace with your actual image path */}
          <Image src="/images/pg201/benefits-image.jpg" alt="Benefits of Implementation" width={500} height={500} className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>導入のメリット</h2>
          <ul className={styles.benefitsList}>
            {benefitsData.map((benefit, index) => (
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