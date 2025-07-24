'use client';

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import CoreServicesSection from '@/components/services/CoreServicesSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

// 引入图标，用于数据定义
import { FiGlobe, FiTruck, FiTrendingUp } from 'react-icons/fi';

// --- 为Pg201页面定义所有内容数据 ---
const introData = {
  title: '複雑化する国際情勢の中で、安定したサプライチェーンはビジネスの生命線です。',
  paragraph: '藍海株式会社は、ITインフラ事業で培ったテクノロジーと独自のグローバルネットワークを融合させ、単なる物流手配に留まらない、次世代の国際貿易・流通ソリューションを提供。お客様の海外事業におけるあらゆる課題を解決に導きます。'
};

const coreServicesData = {
  sectionTitle: '提供するコアサービス',
  services: [
    { icon: FiGlobe, title: 'グローバル・サプライチェーン構築', description: 'お客様のビジネスに最適な国際物流網を設計・構築。コストとリードタイムを最適化し、安定した供給を実現します。'},
    { icon: FiTruck, title: '輸出入・通関業務サポート', description: '複雑な貿易手続き、関税計算、法規制対応をワンストップでサポート。スムーズな国際間取引を実現します。'},
    { icon: FiTrendingUp, title: '市場調査・海外販路開拓', description: '独自のネットワークとデータ分析を駆使し、新たな海外市場を発掘。貴社の製品・サービスを世界へ届けます。'}
  ]
};

const benefitsData = {
  title: '藍海が提供する貿易支援の価値',
  imageSrc: '/images/pg201/benefits-image.jpg',
  imageAlt: 'Benefits of International Trade Service',
  benefits: [
    '海外市場へのスムーズな参入とスピーディーな販路拡大',
    'IT活用による物流コストの最適化とリードタイムの短縮',
    '複雑で時間のかかる貿易実務からの解放とコア業務への集中',
    'グローバル基準のリスク管理による、安定的で持続可能な事業運営',
  ]
};

const caseStudiesData = {
  sectionTitle: '導入事例',
  studies: [
    { title: 'A社：アジア市場への化粧品輸出支援', description: '市場調査から現地パートナー開拓、複雑な許認可取得までをサポート。半年で売上300%増を達成。', image: '/images/pg201/case-1.jpg', href: '/case-studies/company-a' },
    { title: 'B社：欧州からの精密機器輸入', description: 'サプライチェーンを再設計し、物流コストを20%削減。ITツール導入で在庫管理も最適化。', image: '/images/pg201/case-2.jpg', href: '/case-studies/company-b' },
    { title: 'C社：越境ECプラットフォーム構築', description: 'SaaS開発チームと連携し、多言語・多通貨対応のECサイトを構築。世界中の顧客への直販を実現。', image: '/images/pg201/case-3.jpg', href: '/case-studies/company-c' }
  ]
};


export default function Page201() {
  return (
    <>
      <PageHeader
        category="事業内容"
        title="国際貿易・流通支援"
        subtitle="信頼と革新の波に乗り、日本と世界を繋ぐ。藍海株式会社が、貴社のグローバルビジネスをフルサポートします。"
        imageUrl="/images/pg201/header-image.jpg"
      />
      <main>
        <IntroTextSection {...introData} />
        <CoreServicesSection {...coreServicesData} />
        <BenefitsSection {...benefitsData} />
        <CaseStudySection {...caseStudiesData} />
        <ContactBanner />
      </main>
    </>
  );
}