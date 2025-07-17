import React from 'react';
// We'll use icons from the 'react-icons' library you already have.
import { FiLock, FiKey, FiWifi, FiSmartphone } from 'react-icons/fi';
import styles from './FeatureGridSection.module.css';

// 1. Define the type for the props of a single feature card
type FeatureCardProps = {
  icon: React.ElementType; // The type for a component passed as a prop
  title: string;
  description: string;
};

// 2. Data for the feature grid
const featuresData: FeatureCardProps[] = [
  {
    icon: FiLock,
    title: 'STAYKEY',
    description: 'スマートロックを活用し、物理的な鍵の受け渡しを不要に。ゲストは暗証番号で入室可能。'
  },
  {
    icon: FiKey,
    title: 'KEY STATION',
    description: '無人での鍵の受け渡し・返却を実現するキーボックス。24時間対応で利便性が向上。'
  },
  {
    icon: FiWifi,
    title: 'STAYNET',
    description: '快適な高速インターネット環境を提供。ゲストの満足度を高め、ポジティブなレビューに繋げます。'
  },
  {
    icon: FiSmartphone,
    title: 'PMU/RMU連携',
    description: '運営管理・収益管理システムと連携し、予約からチェックアウトまで一気通貫で自動化。'
  }
];

// Sub-component for a single card
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={32} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

// Main section component
const FeatureGridSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>STAYKEYパッケージ</h2>
        <div className={styles.grid}>
          {featuresData.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;