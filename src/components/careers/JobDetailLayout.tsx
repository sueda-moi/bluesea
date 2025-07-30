'use client';
import type { Job } from '@/lib/data/jobs';
import styles from './JobDetailLayout.module.css';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';
import Link from 'next/link';
import { useMessage } from '@/lib/useMessage';

import Section from './Section'; 

export default function JobDetailLayout({ job }: { job: Job }) {
  const getMessage = useMessage();
  return (
    <main className={styles.pageContainer}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.jobType}>{job.summary.type}</p>
          <h1 className={styles.title}>{job.title}</h1>
          <p className={styles.companyName}>
            {getMessage('Pg500', 'JobDetailLayout-companyName')}
          </p>
        </header>
        <div className={styles.summary}>
          <div><FiDollarSign /> {job.summary.salary}</div>
          <div><FiMapPin /> {job.summary.location}</div>
        </div>
        <div className={styles.mainContent}>
          <Section title={getMessage('Pg500', 'JobDetailLayout-jobDescription-title')} content={[job.description]} />
          <Section title={getMessage('Pg500', 'JobDetailLayout-responsibilities-title')} content={job.responsibilities} isList />
          <Section title={getMessage('Pg500', 'JobDetailLayout-qualifications-title')} content={job.qualifications} isList />
          <Section title={getMessage('Pg500', 'JobDetailLayout-benefits-title')} content={job.benefits} isList />
        </div>
        <div className={styles.applyButtonWrapper}>
          <Link href={`/apply?job=${job.jobId}`} className={styles.applyButton}>
            {getMessage('Pg500', 'JobDetailLayout-applyButton')}
          </Link>
        </div>
      </div>
    </main>
  );
}