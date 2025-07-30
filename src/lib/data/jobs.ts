import type { Locale } from '@/store/useLocaleStore';

export type Job = {
    jobId: string;
    title: string;
    tags: string[];
    image: string;
    summary: {
        location: string;
        salary: string;
        type: string;
    };
    description: string;
    responsibilities: string[];
    qualifications: string[];
    benefits: string[];
};

const jobs: Record<Locale, Job[]> = {
  // --- JAPANESE DATA ---
  ja: [
    {
      jobId: 'it-engineer',
      title: '【経験者採用】ITエンジニア : SE/PG・PL/PM候補募集',
      tags: ['中途採用 (正社員)', '本社 (東京都千代田区)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: '東京都千代田区丸の内', salary: '月給 35万円 〜 70万円 (経験・能力を考慮)', type: '正社員' },
      description: '藍海株式会社のITインフラ関連事業の中核を担うエンジニアを募集します。国際貿易から不動産、SaaS開発まで、多岐にわたる自社プロジェクトの上流工程から保守・運用まで幅広くお任せします。',
      responsibilities: ['WebアプリケーションおよびSaaSプロダクトの設計、開発、テスト', 'プロジェクトの進捗管理、チームメンバーのリード（PL/PM候補）', '顧客との仕様調整、要件定義', 'AWS, Azure等のクラウドインフラの構築・運用'],
      qualifications: ['Webアプリケーションの開発経験3年以上（言語問わず）', 'データベース（SQL/NoSQL）の設計・運用経験', 'チームでの開発経験、Git等のバージョン管理ツールの使用経験'],
      benefits: ['各種社会保険完備', '交通費全額支給', '昇給年1回、賞与年2回'],
    },
    // ... add other Japanese jobs here
  ],
  // --- ENGLISH DATA ---
  en: [
    {
      jobId: 'it-engineer',
      title: '[Experienced Hire] IT Engineer: SE/PG/PL/PM Candidate',
      tags: ['Full-time', 'Head Office (Chiyoda-ku, Tokyo)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: 'Marunouchi, Chiyoda-ku, Tokyo', salary: 'Monthly Salary: ¥350,000 - ¥700,000 (DOE)', type: 'Full-time Employee' },
      description: 'We are looking for an engineer to be at the core of Blue Ocean Co., Ltd.\'s IT infrastructure business. You will be responsible for a wide range of tasks from upstream processes to maintenance and operation for our diverse in-house projects, spanning international trade, real estate, and SaaS development.',
      responsibilities: ['Design, development, and testing of web applications and SaaS products', 'Project progress management and team leadership (for PL/PM candidates)', 'Specification adjustment and requirements definition with clients', 'Construction and operation of cloud infrastructure such as AWS, Azure, etc.'],
      qualifications: ['3+ years of web application development experience (language agnostic)', 'Experience with database design and operation (SQL/NoSQL)', 'Experience with team-based development and version control tools like Git'],
      benefits: ['Full social insurance coverage', 'Full transportation allowance', 'Annual salary review, Bi-annual bonuses'],
    },
    // ... Add other English jobs here
  ],
  // --- CHINESE DATA ---
  zh: [
    {
      jobId: 'it-engineer',
      title: '【社招】IT工程师 : 诚聘SE/PG/PL/PM候选人',
      tags: ['正式员工', '总公司 (东京都千代田区)'],
      image: '/images/pg500/job-it.jpg',
      summary: { location: '东京都千代田区丸之内', salary: '月薪 35万日元 〜 70万日元 (依经验和能力)', type: '正式员工' },
      description: '我们正在招聘能在蓝海株式会社的IT基础建设业务中担当核心角色的工程师。您将广泛负责公司内部从国际贸易到不动产、SaaS开发的各类项目，涵盖从上游工程到维护运营的全部流程。',
      responsibilities: ['Web应用程序及SaaS产品的设计、开发与测试', '项目进度管理、团队成员领导（PL/PM候选人）', '与客户进行规格协调、需求定义', 'AWS、Azure等云基础设施的构建与运维'],
      qualifications: ['3年以上的Web应用程序开发经验（不限语言）', '数据库（SQL/NoSQL）的设计与运维经验', '团队开发经验、Git等版本管理工具的使用经验'],
      benefits: ['各类社会保险齐全', '交通费全额报销', '每年一次加薪、每年两次奖金'],
    },
    // ... add other Chinese jobs here
  ],
};

// 新的数据获取函数
export const getAllJobs = (locale: Locale): Job[] => {
  return jobs[locale] || [];
};

export const getJobById = (jobId: string, locale: Locale): Job | undefined => {
  return (jobs[locale] || []).find(job => job.jobId === jobId);
};