import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSection.module.css';

// 1. 定义类型
type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

// 2. 更新数据为藍海株式会社的业务
const services: ServiceCardProps[] = [
  {
    title: '国際貿易・グローバル流通支援',
    description: '日本と世界を結ぶ信頼の架け橋として、効率的で安定したグローバルサプライチェーンを構築・支援します。',
    image: '/images/top/service-1.jpg', // TODO: Replace image
    link: '/Pg201' // 假设链接到事業内容主页
  },
  {
    title: '情報処理・SaaS開発',
    description: 'ビジネスの非効率を解消する、最先端のSaaSアプリケーションを自社開発。企業のDXを強力に推進します。',
    image: '/images/top/service-2.jpg', // TODO: Replace image
    link: '/Pg202' // 链接到ITソリューション页面
  },
  {
    title: '不動産企画・収益化支援',
    description: 'データとITを駆使し、遊休不動産の再生から運営までを一貫してサポート。資産価値の最大化を実現します。',
    image: '/images/top/service-3.jpg', // TODO: Replace image
    link: '/Pg203' // 链接到不動産コンサルティング页面
  }
];


// 2. The sub-component also uses the 'styles' object from the parent file
const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => (
  <div className={styles.serviceCard}>
    <div className={styles.cardImage}>
      <Image src={image} alt={title} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={link} className={styles.cardButton}>
        詳しく見る
      </Link>
    </div>
  </div>
);

const ServiceSection = () => {
  return (
    // 3. Apply classes in the main component
    <section className={styles.serviceSection}>
      <h2 className={styles.sectionTitle}>SERVICE</h2>
      <div className={styles.serviceGrid}>
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;