'use client'; 

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import ApplicationForm from '@/components/careers/ApplicationForm';
import styles from './page.module.css'; 
import { getJobBySlug, Job } from '@/lib/data/jobs';


function ApplyPageContent() {
    const searchParams = useSearchParams();
    const jobSlug = searchParams.get('job'); // 从 URL 获取 ?job=... 的值
    const [job, setJob] = useState<Job | undefined>(undefined);

    useEffect(() => {
        if (jobSlug) {
            const foundJob = getJobBySlug(jobSlug);
            setJob(foundJob);
        }
    }, [jobSlug]);

    if (!job) {
        // 可以在这里放一个加载中的状态
        return <div className={styles.loading}>Loading...</div>;
    }

    return <ApplicationForm job={job} />;
}


export default function ApplyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className={styles.pageContainer}>
                <ApplyPageContent />
            </main>
        </Suspense>
    );
}