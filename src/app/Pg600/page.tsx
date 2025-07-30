'use client';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css'; 
import { useMessage } from '@/lib/useMessage';

export default function Page600() {
  const getMessage = useMessage();
  return (
    <>

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>
          {getMessage('Pg600', 'page_title')}
        </h1>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </>
  );
}