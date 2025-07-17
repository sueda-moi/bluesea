import React from 'react';
import Link from 'next/link';
import styles from './ProductBoxSection.module.css';

const products = [
    { name: 'PMU', description: '宿泊施設の運営管理を効率化するプロパティマネジメントユニット。予約管理から清掃管理まで一元化。', link: '#' },
    { name: 'RMU', description: '最適な価格設定をAIが提案するレベニューマネジメントユニット。機会損失を最小限に抑え、収益を最大化。', link: '#' }
];

const ProductBoxSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>PMU / RMUが宿泊施設のDXを加速する</h2>
                <div className={styles.grid}>
                    {products.map(product => (
                        <div key={product.name} className={styles.productBox}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productDescription}>{product.description}</p>
                            <Link href={product.link} className={styles.button}>
                                詳しくはこちら
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductBoxSection;