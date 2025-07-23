import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSection.module.css'; // 1. Import the CSS module

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const services = [
  {
    title: 'ソリューション事業',
    description: '不動産テック、リーガルテック、M&Aテックなど、各分野の専門家がDXを推進し、新たな価値を創造します。',
    image: '/images/top/service-1.jpg', // TODO: Replace image
    link: '/Pg201'
  },
  {
    title: '宿泊施設運営・集客支援',
    description: 'ホテル・旅館などの宿泊施設の運営改善、集客支援、DX導入をサポートし、収益性の向上に貢献します。',
    image: '/images/top/service-2.jpg', // TODO: Replace image
    link: '/Pg202'
  },
  {
    title: '収益不動産コンサルティング',
    description: '収益不動産の購入・売却、資産価値向上、ファイナンス戦略など、総合的なコンサルティングを提供します。',
    image: '/images/top/service-3.jpg', // TODO: Replace image
    link: '/Pg203'
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