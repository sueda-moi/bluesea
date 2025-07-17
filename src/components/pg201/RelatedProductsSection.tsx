import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RelatedProductsSection.module.css';

// Type for a single related product
type RelatedProductProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

// Data for the related products
const relatedProductsData: RelatedProductProps[] = [
  {
    title: 'スマートロック',
    description: '物理鍵不要の最先端セキュリティ。远程での施錠・解錠も可能。',
    image: '/images/pg201/related-1.jpg', // TODO: Replace image
    href: '/products/smart-lock' // Example link
  },
  {
    title: 'KEY STATION',
    description: '24時間無人での鍵の受け渡しを実現するインテリジェントキーボックス。',
    image: '/images/pg201/related-2.jpg', // TODO: Replace image
    href: '/products/key-station'
  }
];

const RelatedProductsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>関連製品</h2>
        <div className={styles.grid}>
          {relatedProductsData.map((product) => (
            <Link href={product.href} key={product.title} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.title} width={300} height={200} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;