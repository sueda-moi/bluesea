"use client";

import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import Link from 'next/link';
import styles from './page.module.css';

export default function MarketingSupportPage() {
  return (
    <>
      <PageHeader
        category="宿泊・観光施設の運営支援"
        title="DXで革新する、次世代の施設運営とマーケティング"
        subtitle="最先端のSaaSアプリケーションと血の通ったおもてなしを融合させ、運営の効率化と忘れられないゲスト体験(GX)の両立を実現します。"
        imageUrl="/images/pg202/marketing-header.jpg"
      />
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <section>
            <h2 className={styles.subheading}>テクノロジーによる、シームレスな運営体制の構築</h2>
            <p className={styles.paragraph}>
              予約管理、フロント業務、清掃管理、顧客対応まで、施設運営には無数のタスクが存在します。私たちはSaaS開発の知見を活かし、最適なITツールを選定・導入。バラバラだった業務を一元管理し、スタッフの負担を軽減することで、より質の高いサービス提供に集中できる環境を構築します。
            </p>
          </section>

          <section>
            <h2 className={styles.subheading}>施設の“物語”を紡ぐ、デジタルマーケティング</h2>
            <p className={styles.paragraph}>
              ただ部屋を売るのではなく、施設の持つ独自の魅力や“物語”を世界中の潜在顧客に届けます。公式サイトの最適化による直販率の向上、ターゲット層に響くSNS戦略、インフルエンサーとの連携、そしてOTAでの効果的な露出まで、一貫したブランド戦略で貴施設のファンを増やします。
            </p>
          </section>

          <section>
            <h2 className={styles.subheading}>ゲスト体験(GX)こそが、最高の資産</h2>
            <p className={styles.paragraph}>
              優れた運営体制は、最終的に最高のゲスト体験(Guest Experience)に繋がります。スムーズな予約から、快適な滞在、そして心に残るおもてなしまで。私たちは、良い口コミやリピーターを生み出すポジティブな循環を創り出し、貴施設の無形の資産価値を最大化させることをお約束します。
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