import React from 'react';
import Link from 'next/link';
import styles from './WhyUsSection.module.css';

const WhyUsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>なぜBLUESEAが選ばれるか？</h2>
                <p className={styles.description}>
                    私たちは単なる運営代行ではありません。データ分析、最新テクノロジーの活用、そして独自のグローバルネットワークを駆使したマーケティング戦略を組み合わせることで、貴施設のブランド価値を高め、持続可能な成長を実現するパートナーです。一施設ごとに最適化されたソリューションで、他社にはない圧倒的な成果をお約束します。
                </p>
                <div className={styles.buttonGroup}>
                    {/* These links point to sections on the same page */}
                    <Link href="#revenue-support" className={styles.outlineButton}>
                        宿泊施設の収益化支援
                    </Link>
                    <Link href="#marketing-support" className={styles.outlineButton}>
                        運営・マーケティング支援
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default WhyUsSection;