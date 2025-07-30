import React from 'react';
import styles from './AccessSection.module.css';

// 1. Define Props type
type AccessSectionProps = {
  title: string;
  companyName: string;
  postalCode: string;
  address: string;
  tel: string;
  mapButtonText: string;
  mapUrl: string; // Pass map link as prop
  mapEmbedUrl: string; // Pass embedded map URL as prop
};

// 2. Receive all data from props
const AccessSection = ({ title, companyName, postalCode, address, tel, mapButtonText, mapUrl, mapEmbedUrl }: AccessSectionProps) => {
  return (
    <section id="access" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.contentContainer}>
        <div className={styles.addressInfo}>
          <p className={styles.companyName}>{companyName}</p>
          <p>{postalCode}</p>
          <p>{address}</p>
          <p>{tel}</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className={styles.buttonContainer}>
            <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mapButton}
            >
                {mapButtonText}
            </a>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;