import React from 'react';
import styles from './CoreServicesSection.module.css';
import { IconType } from 'react-icons'; // 引入图标类型

// 定义单个服务和组件Props的类型
type Service = {
  icon: IconType;
  title: string;
  description: string;
};
type CoreServicesProps = {
  sectionTitle: string;
  services: Service[];
};

// 子组件接收单个服务的数据
const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <div className={styles.card}>
    <Icon className={styles.icon} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

// 主组件接收标题和服务列表作为props
const CoreServicesSection = ({ sectionTitle, services }: CoreServicesProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.grid}>
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;