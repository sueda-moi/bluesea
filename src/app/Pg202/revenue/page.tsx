"use client";

import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import Link from 'next/link';
import styles from './page.module.css';

export default function RevenueSupportPage() {
  return (
    <>
      <PageHeader
        category="不動産企画・収益化支援"
        title="資産価値を最大化する、新時代の不動産コンサルティング"
        subtitle="独自のデータ分析、ITインフラ知見、そしてグローバルな投資家ネットワークを駆使し、あらゆる不動産に眠る可能性を最大限に引き出します。"
        imageUrl="/images/pg202/revenue-header.jpg" 
      />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <section>
            <h2 className={styles.subheading}>「レッドオーシャン」から「ブルーオーシャン」へ</h2>
            <p className={styles.paragraph}>
              日本の不動産市場は成熟し、競争が激化しています。しかし、藍海株式会社は、表面的な利回り競争（レッドオーシャン）から一歩踏み出し、テクノロジーの活用、新たな運営モデルの導入、海外需要の取り込みといった手法で、競合のいない新たな価値市場（ブルーオーシャン）を創造します。
            </p>
          </section>

          <section>
            <h2 className={styles.subheading}>データが導く、不動産の新たな価値</h2>
            <p className={styles.paragraph}>
              私たちは、勘や経験だけに頼るコンサルティングは行いません。市場データ、地域人口動態、インバウンド観光客の流動データなどを多角的に分析。ITインフラ事業で培った知見を活かし、客観的なデータに基づいた最適な収益化プラン（用途変更、リノベーション、運営委託先の選定など）を立案・実行します。
            </p>
          </section>

          <section>
            <h2 className={styles.subheading}>グローバルな視点でのアセットマネジメント</h2>
            <p className={styles.paragraph}>
             シンガポールの海外拠点を活かし、世界中の投資家と日本の優良な不動産を結びつけます。ただの仲介ではなく、物件の長期的な資産価値向上を見据えたアセットマネジメント戦略を提供。国際貿易で培ったグローバルな信頼の波を、不動産ビジネスにも活かします。
            </p>
          </section>

          <div className={styles.backButtonContainer}>
            <Link href="/Pg202" className={styles.backButton}>
              ← サービス一覧に戻る
            </Link>
          </div>
        </div>
        <ContactBanner />
      </main>
    </>
  );
}