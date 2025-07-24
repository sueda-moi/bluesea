"use client";

import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import ArticleList from '@/components/pg300/ArticleList';
export default function Page300() {
    return (
        <>
            <PageHeader
                category="記事一覧"
                title="ARTICLE"
                subtitle="藍海株式会社の最新情報、プレスリリース、業界インサイトをお届けします。"
                imageUrl="/images/pg300/header-image.jpg"
            />
            <main>
                <ArticleList />
                <ContactBanner />
            </main>
        </>
    );
}