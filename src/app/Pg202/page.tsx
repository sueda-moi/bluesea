"use client";

import PageHeader from '@/components/common/PageHeader';
import WhyUsSection from '@/components/pg202/WhyUsSection';
import ServiceDetailSection from '@/components/pg202/ServiceDetailSection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

// Data for the first service detail section
const revenueSupportData = {
    id: 'revenue-support',
    title: '宿泊施設の収益化支援',
    imageSrc: '/images/pg202/revenue-support.jpg', // TODO: Replace
    imagePosition: 'left' as 'left' | 'right',
    features: [
        { text: 'AIによるダイナミックプライシングで収益最大化' },
        { text: '国内外OTAへの展開と公式サイトの最適化' },
        { text: 'データ分析に基づく販売戦略の立案と実行' },
    ],
    buttonText: '収益化支援の詳細を見る',
    buttonLink: '/Pg202/revenue' // Example link
};

// Data for the second service detail section
const marketingSupportData = {
    id: 'marketing-support',
    title: '運営・マーケティング支援',
    imageSrc: '/images/pg202/marketing-support.jpg', // TODO: Replace
    imagePosition: 'right' as 'left' | 'right',
    features: [
        { text: 'ブランドコンセプトの設計とコミュニケーション戦略' },
        { text: 'SNS運用、インフルエンサーマーケティング支援' },
        { text: 'レビュー分析と顧客満足度（GX）向上施策' },
    ],
    buttonText: 'マーケティング支援の詳細を見る',
    buttonLink: '/Pg202/marketing' // Example link
};

export default function Page202() {
  return (
    <>
      <PageHeader
        category="OUR SERVICE"
        title="宿泊施設運営・集客支援"
        subtitle="施設のポテンシャルを最大限に引き出し、競争の激しい市場で勝ち抜くための包括的なサポートを提供します。"
        imageUrl="/images/pg202/header-image.jpg"
      />
      <main>
        <WhyUsSection />
        
        {/* We use the same component twice with different data */}
        <ServiceDetailSection {...revenueSupportData} />
        <ServiceDetailSection {...marketingSupportData} />
        
        <ContactBanner />
      </main>
    </>
  );
}