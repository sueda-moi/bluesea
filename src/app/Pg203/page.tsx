"use client";

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import CoreServicesSection from '@/components/services/CoreServicesSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

// 引入图标
import { FiTrendingUp, FiLock, FiCpu } from 'react-icons/fi';

// --- 为Pg203页面定义所有内容数据 ---

const introData = {
  title: '不動産に、新たな「藍海」を。',
  paragraph: '変化の激しい時代において、不動産の価値はもはや立地や築年数だけでは決まりません。藍海株式会社は、IT、金融、国際貿易の知見を融合させ、データに基づいた科学的アプローチで、あらゆる不動産に眠るまだ見ぬ価値（ブルーオーシャン）を発見し、収益を最大化します。'
};

const coreServicesData = {
  sectionTitle: '不動産コンサルティングの核心',
  services: [
    { icon: FiTrendingUp, title: '市場・データ分析', description: '地域人口動態、インバウンド需要、競合データを多角的に分析し、客観的な根拠に基づいた最適な事業計画（宿泊施設、商業施設、住居など）を策定します。' },
    { icon: FiLock, title: 'アセットマネジメント', description: '遊休不動産の価値再生から、運営中の施設の収益改善、売却戦略まで。お客様の資産価値を長期的な視点で最大化します。' },
    { icon: FiCpu, title: '不動産DX支援', description: '自社SaaS開発の知見を活かし、不動産管理（PM）や収益管理（RM）のDXを推進。運営を効率化し、収益性を向上させます。' }
  ]
};

const benefitsData = {
  title: '藍海のコンサルティングがもたらすメリット',
  imageSrc: '/images/pg203/benefits-image.jpg', // TODO: 准备一张图片
  imageAlt: 'Benefits of Real Estate Consulting',
  benefits: [
    'データ駆動型アプローチによる、投資リターンの最大化',
    'ホテル・民泊など、トレンドに合わせた最適な用途転換による遊休不動産の価値再生',
    'テクノロジー導入による、不動産運営の効率化とコスト削減',
    '海外投資家ネットワークを活用した、新たな売却・資金調達チャネルの開拓',
  ]
};

const caseStudiesData = {
  sectionTitle: '実績・事例',
  studies: [
    { title: '地方の空き家を人気宿泊施設へ再生', description: 'インバウンド需要を予測し、古民家をリノベーション。OTAとSNSマーケティングを駆使し、稼働率85%の人気施設に。', image: '/images/pg203/case-1.jpg', href: '/case-studies/kominka' },
    { title: '都心商業ビルの収益改善プロジェクト', description: 'テナント構成と賃料設定を全面的に見直し、空室率を20%から2%に改善。ビル全体の資産価値が1.5倍に向上。', image: '/images/pg203/case-2.jpg', href: '/case-studies/building' },
    { title: '海外投資家向けポートフォリオ構築', description: '日本の収益不動産市場を分析し、リスクとリターンを最適化した投資ポートフォリオを構築・提案。', image: '/images/pg203/case-3.jpg', href: '/case-studies/portfolio' }
  ]
};


export default function Page203() {
  return (
    <>
      <PageHeader
        category="事業内容"
        title="不動産企画・収益化支援"
        subtitle="IT、金融、国際貿易の知見を融合させた独自の不動産コンサルティングで、資産価値の最大化を実現します。"
        imageUrl="/images/pg203/header-image.jpg" // TODO: 准备一张图片
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