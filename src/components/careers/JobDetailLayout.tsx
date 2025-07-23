
import styles from './JobDetailLayout.module.css'; 
import { FiMapPin, FiDollarSign } from 'react-icons/fi';
import Link from 'next/link';
import { Job } from '@/lib/data/jobs';

type LayoutProps = {
  job: Job;
};

type SectionProps = {
  title: string;
  content: string[];
  isList?: boolean;
};


const Section = ({ title, content, isList = false }: SectionProps) => (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {isList ? (
        <ul className={styles.list}>
          {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <p className={styles.description}>{content[0]}</p>
      )}
    </section>
  );
  

export default function JobDetailLayout({ job }: LayoutProps) {

  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.jobType}>{job.summary.type}</p>
          <h1 className={styles.title}>{job.title}</h1>
          <p className={styles.companyName}>藍海株式会社</p>
        </header>
        <div className={styles.summary}>
          <div><FiDollarSign /> {job.summary.salary}</div>
          <div><FiMapPin /> {job.summary.location}</div>
        </div>
        <div className={styles.mainContent}>
          <Section title="仕事内容詳細" content={[job.description]} />
          <Section title="主な職務内容" content={job.responsibilities} isList />
          <Section title="応募資格" content={job.qualifications} isList />
          <Section title="福利厚生" content={job.benefits} isList />
        </div>
        <div className={styles.applyButtonWrapper}>
          <Link href={`/apply?job=${job.slug}`} className={styles.applyButton}>このポジションに応募する</Link>
        </div>
      </div>
    </main>
  );
}