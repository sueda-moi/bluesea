'use client';

import PageHeader from '@/components/common/PageHeader';
import IntroTextSection from '@/components/services/IntroTextSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CaseStudySection from '@/components/services/CaseStudySection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

// 引入图标，用于数据定义
import { FiDatabase, FiCloud, FiBriefcase } from 'react-icons/fi';
import ProblemSolutionSection from '@/components/services/ProblemSolutionSection';

// --- 为Pg202页面定义所有内容数据 ---

const introData = {
  title: 'ビジネスの成長を加速させる、最適なITパートナー。',
  paragraph: '現代のビジネス環境において、デジタル化（DX）はもはや選択肢ではなく必須条件です。藍海株式会社は、お客様一人ひとりのビジネスモデルを深く理解し、既製品の導入に留まらない、真に価値を生むカスタムSaaS開発と堅牢なITインフラ構築を提供します。'
};

// const coreServicesData = {
//   sectionTitle: 'ITインフラ・SaaS開発のコアサービス',
//   services: [
//     { icon: FiDatabase, title: 'カスタムSaaS開発', description: '市販のツールでは解決できない独自の業務課題に対し、要件定義から設計、開発、保守まで一貫したオーダーメイド開発を提供します。'},
//     { icon: FiCloud, title: 'クラウドインフラ構築', description: 'AWSやAzureを活用し、ビジネスの成長に合わせてスケールする、セキュアで可用性の高いクラウド環境を設計・構築します。'},
//     { icon: FiBriefcase, title: 'DXコンサルティング', description: '現状の業務プロセスを分析し、どこをデジタル化すれば最大の効果が得られるか、具体的なIT戦略を立案し、実行を支援します。'}
//   ]
// };

const problemSolutionData = {
  sectionTitle: 'ビジネスの課題を、技術で解決する',
  data: [
    {
      problem: '既存の業務フローが非効率で、手作業が多く残っている。',
      solution: '業務プロセスを徹底的に分析し、ボトルネックを特定。無駄をなくすためのカスタムSaaSアプリケーションを設計・開発します。'
    },
    {
      problem: '市販のソフトウェアでは、自社の特殊な要件を満たせない。',
      solution: 'お客様のビジネスに100%フィットするオーダーメイドのシステムを構築。拡張性・保守性の高い設計で、将来の事業成長にも対応します。'
    },
    {
      problem: 'ITインフラが古く、セキュリティやパフォーマンスに不安がある。',
      solution: 'AWSやAzureなどの主要クラウドプラットフォームを活用し、堅牢でスケーラブルな最新ITインフラへの移行を計画から実行まで支援します。'
    }
  ]
};

const benefitsData = {
  title: '藍海のITソリューションがもたらす変革',
  imageSrc: '/images/pg202/benefits-image.jpg', // TODO: 准备一张图片
  imageAlt: 'Benefits of IT Solution Service',
  benefits: [
    '属人化した手作業をなくし、全社的な業務効率を飛躍的に向上',
    'ビジネスモデルに完全に合致したシステムによる、独自の競争優位性の確立',
    'スケーラブルなクラウドインフラによる、将来の事業拡大への柔軟な対応力',
    'データの一元管理と可視化による、迅速で正確な経営判断の実現',
  ]
};

const caseStudiesData = {
  sectionTitle: '導入事例',
  studies: [
    { title: 'A社：販売管理システムのSaaS化', description: 'Excelでの管理を脱却し、リアルタイムで在庫と売上を管理できるSaaSを開発。月間40時間以上の作業時間削減を達成。', image: '/images/pg202/case-1.jpg', href: '/case-studies/saas-a' },
    { title: 'B社：大規模ECサイトのインフラ刷新', description: 'アクセス集中によるサーバーダウンが頻発。AWSへインフラを全面移行し、可用性99.99%と表示速度3倍改善を実現。', image: '/images/pg202/case-2.jpg', href: '/case-studies/infra-b' },
    { title: 'Cクリニック：オンライン予約システムの開発', description: '電話予約の負担を軽減するため、患者様向けのWeb予約・問診システムを開発。予約業務の85%を自動化。', image: '/images/pg202/case-3.jpg', href: '/case-studies/clinic-c' }
  ]
};

export default function Page202() {
  return (
    <>
      <PageHeader
        category="事業内容"
        title="ITインフラ・SaaS開発"
        subtitle="お客様のビジネスに完全特化したオーダーメイドのITソリューションで、業務効率化と新たな事業価値の創造を実現します。"
        imageUrl="/images/pg202/header-image.jpg" // TODO: 准备一张图片
      />
      <main>
        <IntroTextSection {...introData} />
        <ProblemSolutionSection {...problemSolutionData} />
        <BenefitsSection {...benefitsData} />
        <CaseStudySection {...caseStudiesData} />
        <ContactBanner />
      </main>
    </>
  );
}