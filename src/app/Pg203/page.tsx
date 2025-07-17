"use client";

import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import IntroSection from '@/components/pg203/IntroSection';
import NumberedFeatureList from '@/components/pg203/NumberedFeatureList';


export default function Page203() {
  return (
    <>
      <PageHeader
        category="OUR SERVICE"
        title="収益不動産コンサルティング"
        subtitle="独自のデータ分析と市場知見に基づき、お客様の不動産投資における利益最大化をワンストップでサポートします。"
        imageUrl="/images/pg203/header-image.jpg"
      />
      <main>
        <IntroSection />
        <NumberedFeatureList />
        <ContactBanner />
      </main>
    </>
  );
}