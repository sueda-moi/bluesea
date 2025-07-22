import React from 'react';
import Link from 'next/link';
import { useMessage } from '@/lib/useMessage';

import styles from './ContactBanner.module.css';

const ContactBanner = () => {
  const getMessage = useMessage();

  return (

    <section className={styles.bannerSection}>
      {/* This div creates the blue background area at the top */}
      <div className={styles.blueTopBg}></div>

      {/* This div is the white, floating card */}
      <div className={styles.contentBox}>
        <Link href="/Pg600" className={styles.contactLink}>
          <span className={styles.icon}>✉️</span>
          <span>{getMessage('common', 'nav_pg600')}</span>
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;