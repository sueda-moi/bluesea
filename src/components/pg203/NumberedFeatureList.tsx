import React from 'react';
import styles from './NumberedFeatureList.module.css';

type FeatureItem = {
  number: string;
  title: string;
  description: string;
};

const featureData: FeatureItem[] = [
  { number: '01', title: '幅広い分野でのリーダーシップ', description: '不動産、金融、ITの各分野で豊富な経験を持つ専門家チームが、業界の垣根を越えたリーダーシップを発揮します。' },
  { number: '02', title: '技術革新とデジタルトランスフォーメーション', description: '最新のAIやブロックチェーン技術を活用し、旧来の不動産ビジネスモデルを根本から変革するDXを推進します。' },
  { number: '03', title: '顧客体験の向上に取り組むことで差別化を図る方針', description: 'テクノロジーはあくまで手段。私たちは常にお客様の体験価値を第一に考え、感動を生むサービスを追求します。' },
  { number: '04', title: '国内外の投資家との連携による不動産価値の最大化', description: 'グローバルな投資家ネットワークを活用し、国内不動産の新たな可能性を引き出し、価値を最大化させます。' }
];

const NumberedFeatureList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {featureData.map((item) => (
          <div key={item.number} className={styles.featureItem}>
            <span className={styles.featureNumber}>{item.number}</span>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberedFeatureList;