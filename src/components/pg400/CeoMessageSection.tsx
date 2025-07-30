import React from 'react';
import Image from 'next/image';

import styles from './CeoMessageSection.module.css';

// 1. Define the Props type for the component
type CeoMessageSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  signature: string;
};

// 2. Receive all data from props
const CeoMessageSection = ({ title, paragraph1, paragraph2, signature }: CeoMessageSectionProps) => {
    return (
        <section id="ceo-message" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    {/* 3. Use image data passed from props */}
                    {/* <Image 
                        src={imageSrc}
                        alt={imageAlt} 
                        width={200} 
                        height={240} 
                        className={styles.ceoImage} 
                    /> */}
                </div>
                <div className={styles.textWrapper}>
                    {/* 4. Render title with HTML tags using dangerouslySetInnerHTML */}
                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
                    {/* 5. Use paragraphs and signature from props */}
                    <p className={styles.paragraph}>
                        {paragraph1}
                    </p>
                    <p className={styles.paragraph}>
                        {paragraph2}
                    </p>
                    <p className={styles.signature}>
                        {signature}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CeoMessageSection;