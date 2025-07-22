import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './JobListings.module.css';


type JobPosting = {
  title: string;
  tags: string[];
  image: string;
  href: string; 
};


const jobsData: JobPosting[] = [
  {
    title: '【経験者採用】ITエンジニア : SE/PG・PL/PM候補募集【上流工程から保守・運用まで】',
    tags: ['中途採用 (正社員)', '本社 (東京都千代田区)'],
    image: '/images/pg500/job-01.jpg', // TODO: Replace image
    href: '/careers/it-engineer' // Example link
  },
  {
    title: '宿泊施設や遊休施設のカスタマーサービス担当者',
    tags: ['正社員', '本社 (東京都千代田区)'],
    image: '/images/pg500/job-02.jpg', // TODO: Replace image
    href: '/careers/customer-service'
  },
];

const JobListings = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {jobsData.map((job, index) => (
          <article key={index} className={styles.jobCard}>
            <div className={styles.imageWrapper}>
              <Image src={job.image} alt={job.title} width={150} height={150} className={styles.jobImage} />
            </div>
            <div className={styles.contentWrapper}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <div className={styles.tagsContainer}>
                {job.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Link href={job.href} className={styles.readMoreButton}>
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JobListings;