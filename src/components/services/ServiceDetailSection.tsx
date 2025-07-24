import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './ServiceDetailSection.module.css';

type Feature = {
  text: string;
};

type ServiceDetailProps = {
  id: string; // For anchor link
  title: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  features: Feature[];
  buttonText: string;
  buttonLink: string;
};

const ServiceDetailSection = ({ id, title, imageSrc, imagePosition, features, buttonText, buttonLink }: ServiceDetailProps) => {
    // Dynamically set the container class based on imagePosition prop
    const containerClass = `${styles.container} ${imagePosition === 'right' ? styles.imageRight : ''}`;

    return (
        <section id={id} className={styles.section}>
            <div className={styles.titleBar}>
                <h3>{title}</h3>
            </div>
            <div className={containerClass}>
                <div className={styles.imageWrapper}>
                    <Image src={imageSrc} alt={title} width={600} height={450} className={styles.image} />
                </div>
                <div className={styles.contentWrapper}>
                    <ul className={styles.featureList}>
                        {features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <FiCheckCircle className={styles.checkIcon} />
                                <span>{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href={buttonLink} className={styles.detailsButton}>
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailSection;