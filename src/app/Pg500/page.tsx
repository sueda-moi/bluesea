'use client';
import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import JobListings from '@/components/pg500/JobListings';


export default function Page500() {
  return (
    <>
      <PageHeader
        category="採用情報"
        title="CAREERS"
        subtitle="私たちと共に、未来を「想像」し、新しい価値を「創造」しませんか。あなたの挑戦をお待ちしています。"
        imageUrl="/images/pg500/header-image.jpg" 
      />
      <main>
        <JobListings />
        <ContactBanner />
      </main>
    </>
  );
}