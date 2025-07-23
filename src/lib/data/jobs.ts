// 1. 确保类型被导出 (export type)
export type Job = {
    slug: string;
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
    applicationUrl?: string; // 之前添加过，设为可选
};

// 2. 确保数据数组也被导出
export const jobsData: Job[] = [
    {
        slug: 'it-engineer',
        title: '【経験者採用】ITエンジニア : SE/PG・PL/PM候補募集',
        tags: ['中途採用 (正社員)', '本社 (東京都千代田区)'],
        image: '/images/pg500/job-it.jpg',
        summary: {
            location: '東京都千代田区丸の内',
            salary: '月給 35万円 〜 70万円 (経験・能力を考慮)',
            type: '正社員'
        },
        description: '藍海株式会社のITインフラ関連事業の中核を担うエンジニアを募集します。国際貿易から不動産、SaaS開発まで、多岐にわたる自社プロジェクトの上流工程から保守・運用まで幅広くお任せします。',
        responsibilities: [
            'WebアプリケーションおよびSaaSプロダクトの設計、開発、テスト',
            'プロジェクトの進捗管理、チームメンバーのリード（PL/PM候補）',
            '顧客との仕様調整、要件定義',
            'AWS, Azure等のクラウドインフラの構築・運用'
        ],
        qualifications: [
            'Webアプリケーションの開発経験3年以上（言語問わず）',
            'データベース（SQL/NoSQL）の設計・運用経験',
            'チームでの開発経験、Git等のバージョン管理ツールの使用経験',
        ],
        benefits: [
            '各種社会保険完備',
            '交通費全額支給',
            '昇給年1回、賞与年2回',
        ],
        // applicationUrl: 'https://jp.indeed.com/your-company/job/12345'
    },
    // ... 其他职位
];

export const getJobBySlug = (slug: string): Job | undefined => {
    return jobsData.find(job => job.slug === slug);
};