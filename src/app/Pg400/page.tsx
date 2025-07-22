'use client';
import PageHeader from '@/components/common/PageHeader';
import InPageLinks from '@/components/pg400/InPageLinks';
import CeoMessageSection from '@/components/pg400/CeoMessageSection';
import CompanyProfileSection from '@/components/pg400/CompanyProfileSection';
import HistorySection from '@/components/pg400/HistorySection';
import AccessSection from '@/components/pg400/AccessSection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

// 链接数据现在只给 InPageLinks 组件使用
const companyNavLinks = [
    { label: 'CEOメッセージ', path: '#ceo-message' },
    { label: '会社概要', path: '#profile' },
    { label: '沿革', path: '#history' },
    { label: 'アクセス', path: '#access' },
];

export default function Page400() {

    return (
        <>
            <PageHeader
                category="会社情報"
                title="ABOUT US"
                subtitle="藍海株式会社の理念、歩み、そして未来についてご紹介します。"
                imageUrl="/images/pg400/header-image.jpg"
            />

            <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
                <InPageLinks navLinks={companyNavLinks} />
                <CeoMessageSection />

                <CompanyProfileSection />
                <HistorySection />
                <AccessSection />
                <ContactBanner />
            </main>
        </>
    );
}