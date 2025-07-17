"use client";
import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import ProductBoxSection from '@/components/pg201/ProductBoxSection';
import FeatureGridSection from '@/components/pg201/FeatureGridSection';
import BenefitsSection from '@/components/pg201/BenefitsSection';
import CaseStudySection from '@/components/pg201/CaseStudySection';
import RelatedProductsSection from '@/components/pg201/RelatedProductsSection';


export default function Page201() {
  return (
    <>
      <PageHeader
        category="OUR SERVICE"
        title="ITソリューション・製品"
        subtitle="最先端のテクノロジーを駆使し、不動産ビジネスの非効率を解消。新たな価値創造と収益最大化を実現します。"
        imageUrl="/images/pg201/header-image.jpg" // TODO: Replace with actual image
      />

      <main>

        <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>最先端テクノロジー × 不動産 = Reasy</h2>
            <p style={{ lineHeight: 1.8 }}>
                私たちは、不動産業界が抱える複雑な課題を、自社開発のプロダクト「Reasy」シリーズで解決します。PMU（Property Management Unit）とRMU（Revenue Management Unit）を核に、運営の効率化と収益の最大化を両立させます。
            </p>
        </section>

        <ProductBoxSection />
        <FeatureGridSection /> 
        <BenefitsSection />
        <CaseStudySection />
        <RelatedProductsSection />

        <ContactBanner />
      </main>
    </>
  );
}