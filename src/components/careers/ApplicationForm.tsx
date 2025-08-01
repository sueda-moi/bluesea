'use client';
import { useState } from 'react';

import styles from './ApplicationForm.module.css';
import Link from 'next/link';
import type { Job } from '@/lib/data/jobs';
import { useRouter } from 'next/navigation';


type UiText = {
    headerApplyingFor: string;
    headerBackLink: string;
    labelName: string;
    labelEmail: string;
    labelPhone: string;
    labelCoverLetter: string;
    labelResume: string;
    buttonApply: string;
    buttonApplying: string;
    alertFileSize: string;
    alertFileType: string;
    alertFileRequired: string;
    alertSuccess: string;
    alertErrorGeneric: string;
    alertErrorDetails: string;
    errorUnknown: string;
    errorGetUrl: string;
    errorS3Policy: string;
    errorS3Upload: string;
    errorSubmitData: string;
};


type FormProps = {
    job: Job;
    uiText: UiText;
};


export default function ApplicationForm({ job, uiText }: FormProps) {

    const router = useRouter();
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
    const MAX_FILE_SIZE_MB = 5;

    const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024; // 转换为字节

            // --- 文件大小前端校验 ---
            if (file.size > MAX_FILE_SIZE_BYTES) {
                alert(uiText.alertFileSize.replace('{size}', MAX_FILE_SIZE_MB.toString()));
                e.target.value = ''; // 清空文件选择，防止用户提交大文件
                setResumeFile(null); // 清空文件状态
                return; // 停止函数执行
            }
            // --- 文件类型前端校验 ---
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                alert(uiText.alertFileType);
                e.target.value = '';
                setResumeFile(null);
                return;
            }
            setResumeFile(file);
        } else {
            setResumeFile(null); // 如果用户取消选择文件，也清空状态
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!resumeFile) {
            alert(uiText.alertFileRequired);
            return;
        }
        setIsSubmitting(true);

        try {

            const dataToSendToLambda = { fileName: resumeFile.name, fileType: resumeFile.type };
            console.log("Sending to Lambda (get-upload-url):", dataToSendToLambda);
            // === 步骤 1 & 2: 请求预签名URL ===
            // TODO: 将 '/api/get-upload-url' 替换为的实际API Gateway端点
            const uploadUrlResponse = await fetch('/api/get-upload-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fileName: resumeFile.name, fileType: resumeFile.type }),
            });
            if (!uploadUrlResponse.ok) {
                const errorData = await uploadUrlResponse.json();
                throw new Error(`Failed to get upload URL: ${errorData.error || uploadUrlResponse.statusText}`);
            }
            // 从后端获取 S3 POST URL 和所需字段
            const { uploadUrl, fields, fileKey } = await uploadUrlResponse.json();

            // === 步骤 3: 前端构造FormData并POST文件到S3 ===
            const formDataForS3 = new FormData();
            // 必须将所有从后端接收到的fields先添加到FormData中
            for (const key in fields) {
                formDataForS3.append(key, fields[key]);
            }
            // 最后添加文件本身
            formDataForS3.append('file', resumeFile); // 'file' 是S3默认期望的文件字段名
            const uploadFileResponse = await fetch(uploadUrl, {
                method: 'POST', // **注意：这里改为POST方法**
                body: formDataForS3, // **注意：这里直接发送FormData对象，无需设置Content-Type头**
                // S3会自动处理Content-Type，因为formDataForS3会设置multipart/form-data
            });
            if (!uploadFileResponse.ok) {

                if (uploadFileResponse.status === 403) {
                    // 尝试从响应体中获取S3的XML错误信息，进行更精准的错误提示
                    const s3ErrorText = await uploadFileResponse.text();
                    console.error("S3 Upload Error Response:", s3ErrorText); // 打印到控制台方便调试
                    throw new Error(uiText.errorS3Policy);
                }
                throw new Error(uiText.errorS3Upload);
            }

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

            if (!submitApplicationResponse.ok) {
                const errorData = await submitApplicationResponse.json();
                throw new Error(uiText.errorSubmitData);
            }

            // alert(uiText.alertSuccess.replace('{jobTitle}', job?.title || ''));
            router.push('/apply/success');

        } catch (error: any) {
            console.error('Submission failed:', error);
            const details = error.message || uiText.errorUnknown;
            alert(`${uiText.alertErrorGeneric}\n${uiText.alertErrorDetails.replace('{details}', details)}`);
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
                    <p className={styles.applyingFor}>{uiText.headerApplyingFor}</p>
                    <h1 className={styles.jobTitle}>{job.title}</h1>
                    <Link href={`/careers/${job.jobId}`} className={styles.backLink}>{uiText.headerBackLink}</Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>{uiText.labelName}</label>
                        <input type="text" name="name" id="name" onChange={handleChange} required className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>{uiText.labelEmail}</label>
                        <input type="email" name="email" id="email" onChange={handleChange} required className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>{uiText.labelPhone}</label>
                        <input type="tel" name="phone" id="phone" onChange={handleChange} className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="coverLetter" className={styles.label}>{uiText.labelCoverLetter}</label>
                        <textarea name="coverLetter" id="coverLetter" rows={6} onChange={handleChange} className={styles.textarea}></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="resume" className={styles.label}>{uiText.labelResume}</label>
                        <input
                            type="file"
                            name="resume"
                            id="resume"
                            onChange={handleFileChange}
                            required
                            className={styles.fileInput}
                            accept=".pdf,.doc,.docx"
                        />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? uiText.buttonApplying : uiText.buttonApply}
                    </button>
                </form>
            </div>
        </main>
    );
}