import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSection.module.css';

// 1. Service 类型定义不变
type Service = {
  title: string;
  description: string;
  image: string;
  link: string;
};


type ServiceSectionProps = {
    sectionTitle: string;
    services: Service[];
    buttonText: string; // 新增
};

type ServiceCardProps = Service & {
  buttonText: string;
};

const ServiceCard = ({ title, description, image, link, buttonText }: ServiceCardProps) => (
  <div className={styles.serviceCard}>
    <div className={styles.cardImage}>
      <Image src={image} alt={title} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link href={link} className={styles.cardButton}>

        {buttonText}
      </Link>
    </div>
  </div>
);

const ServiceSection = ({ sectionTitle, services,buttonText }: ServiceSectionProps) => {
  return (
    // 3. Apply classes in the main component
    <section className={styles.serviceSection}>
     <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.serviceGrid}>
        {services.map(service => (

          <ServiceCard key={service.title} {...service} buttonText={buttonText} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;