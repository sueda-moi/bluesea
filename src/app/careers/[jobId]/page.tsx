'use client';
import { getJobById, Job } from '@/lib/data/jobs';
import JobDetailLayout from '@/components/careers/JobDetailLayout';
import { useLocaleStore } from '@/store/useLocaleStore';

type Props = {
  params: { jobId: string };
};

export default function CareerDetailPage({ params }: Props) {
  const { locale } = useLocaleStore();
  const job = getJobById(params.jobId, locale);

  if (!job) {
    return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading Job Details...</div>;
  }

  return <JobDetailLayout job={job} />;
}