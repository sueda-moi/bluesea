
import JobDetailLayout from '@/components/careers/JobDetailLayout';
import { getJobBySlug } from '@/lib/data/jobs';

export default function ItEngineerPage() {

  const job = getJobBySlug('it-engineer');

  if (!job) {
    return <div>Job not found</div>;
  }

  return <JobDetailLayout job={job} />;
}