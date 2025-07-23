'use client';
import { useState } from 'react';

import styles from './ApplicationForm.module.css';
import Link from 'next/link';
import { Job } from '@/lib/data/jobs';

type FormProps = {
  job: Job;
};


export default function ApplicationForm({ job }: FormProps) {

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
    });
    // State for the uploaded file
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!resumeFile) {
            alert('履歴書・職務経歴書をアップロードしてください。');
            return;
        }
        setIsSubmitting(true);

        try {
            // === 步骤 1 & 2: 请求预签名URL ===
            // TODO: 将 '/api/get-upload-url' 替换为的实际API Gateway端点
            const uploadUrlResponse = await fetch('/api/get-upload-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fileName: resumeFile.name, fileType: resumeFile.type }),
            });
            if (!uploadUrlResponse.ok) throw new Error('Failed to get upload URL');
            const { uploadUrl, fileKey } = await uploadUrlResponse.json(); // 假设API返回上传URL和文件在S3中的key

            // === 步骤 3: 前端直传文件到S3 ===
            const uploadFileResponse = await fetch(uploadUrl, {
                method: 'PUT',
                body: resumeFile,
                headers: { 'Content-Type': resumeFile.type },
            });
            if (!uploadFileResponse.ok) throw new Error('Failed to upload file to S3');

            // === 步骤 4 & 5: 提交文本数据和文件key到另一个API ===
            const applicationData = {
                jobTitle: job?.title || 'Unknown Job',
                ...formData,
                resumeFileKey: fileKey, // 将文件在S3的唯一标识符发给后端
            };

            // TODO: 将 '/api/submit-application' 替换为的实际API Gateway端点
            const submitApplicationResponse = await fetch('/api/submit-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(applicationData),
            });

            if (!submitApplicationResponse.ok) throw new Error('Failed to submit application data');

            alert(`「${job?.title}」への応募が完了しました。`);

        } catch (error) {
            console.error('Submission failed:', error);
            alert('応募中にエラーが発生しました。');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <main className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <p className={styles.applyingFor}>Applying for:</p>
                    <h1 className={styles.jobTitle}>{job.title}</h1>
                    <Link href={`/careers/${job.slug}`} className={styles.backLink}>← 募集要項に戻る</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>お名前 (Name)</label>
                        <input type="text" name="name" id="name" onChange={handleChange} required className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>メールアドレス (Email)</label>
                        <input type="email" name="email" id="email" onChange={handleChange} required className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>電話番号 (Phone)</label>
                        <input type="tel" name="phone" id="phone" onChange={handleChange} className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="coverLetter" className={styles.label}>カバーレター (Cover Letter)</label>
                        <textarea name="coverLetter" id="coverLetter" rows={6} onChange={handleChange} className={styles.textarea}></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="resume" className={styles.label}>履歴書・職務経歴書 (Resume/CV)</label>
                        <input type="file" name="resume" id="resume" onChange={handleFileChange} required className={styles.fileInput} accept=".pdf,.doc,.docx" />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? '送信中...' : '応募する'}
                    </button>
                </form>
            </div>
        </main>
    );
}