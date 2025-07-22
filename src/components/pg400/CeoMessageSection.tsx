import React from 'react';
import styles from './CeoMessageSection.module.css';

const CeoMessageSection = () => {
    return (

        <section id="ceo-message" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                </div>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>
                        未来を「想像」し、<br />
                        新しい価値を「創造」する
                    </h2>
                    <p className={styles.paragraph}>
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </p>
                    <p className={styles.paragraph}>
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                    </p>
                    <p className={styles.signature}>
                        代表取締役　許 海 南（Xu Hainan）
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CeoMessageSection;