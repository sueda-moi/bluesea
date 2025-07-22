
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css'; 

export default function Page600() {
  return (
    <>

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>
          お問い合わせ
        </h1>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </>
  );
}