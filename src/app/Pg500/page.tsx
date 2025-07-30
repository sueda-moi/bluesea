'use client';
import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import JobListings from '@/components/pg500/JobListings';

import { useMessage } from '@/lib/useMessage';
import { useLocaleStore } from '@/store/useLocaleStore';
import { getAllJobs } from '@/lib/data/jobs';


export default function Page500() {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  const jobsFromData = getAllJobs(locale);

  const jobsForList = jobsFromData.map(job => ({
    title: job.title,
    tags: job.tags,
    image: job.image,
    href: `/careers/${job.jobId}`
  }));
  return (
    <>
      <PageHeader
        category={getMessage('Pg500', 'header_category')}
        title={getMessage('Pg500', 'header_title')}
        subtitle={getMessage('Pg500', 'header_subtitle')}
        imageUrl="/images/pg500/header-image.jpg"
      />
      <main>
        <JobListings jobs={jobsForList} />
        <ContactBanner />
      </main>
    </>
  );
}