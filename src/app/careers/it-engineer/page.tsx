
import JobDetailLayout from '@/components/careers/JobDetailLayout';
import { getJobBySlug } from '@/lib/data/jobs';

export default function ItEngineerPage() {
  // 1. 直接获取特定职位的数据
  const job = getJobBySlug('it-engineer');

  if (!job) {
    return <div>Job not found</div>;
  }

  // 2. 将数据传入模板组件进行渲染
  return <JobDetailLayout job={job} />;
}