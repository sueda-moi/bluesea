import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>宿泊ビジネスのデジタル革新と<br />収益最大化のプロフェッショナルサポート</h2>
        <p className={styles.description}>
          BLUESEAのコンサルティングは、単なるアドバイスに留まりません。市場分析から具体的な運営戦略、最新DXツールの導入、そして日々のオペレーション改善まで、現場に深く入り込み、クライアント様と一体となって成果を追求します。私たちは、貴施設の“第二の経営企画室”として機能します。
        </p>
        <div className={styles.columnsWrapper}>
          <div className={styles.column}>
            <Image src="/images/pg203/intro-1.jpg" alt="デジタル変革" width={400} height={200} className={styles.columnImage} />
            <h3 className={styles.columnTitle}>宿泊施設のデジタル変革</h3>
            <p className={styles.columnText}>予約管理から会計、顧客管理まで。業務プロセスを抜本的に見直し、最適なDXソリューションを導入・定着させます。</p>
          </div>
          <div className={styles.column}>
            <Image src="/images/pg203/intro-2.jpg" alt="コンサルティング" width={400} height={200} className={styles.columnImage} />
            <h3 className={styles.columnTitle}>データドリブン・コンサルティング</h3>
            <p className={styles.columnText}>市場動向、競合分析、自社データを統合的に分析。勘や経験に頼らない、データに基づいた客観的な戦略を立案します。</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/pg600" className={styles.ctaButton}>
            事業内容について問い合わせる
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;