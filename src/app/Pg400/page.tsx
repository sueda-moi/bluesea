'use client';
import PageHeader from '@/components/common/PageHeader';
import InPageLinks from '@/components/pg400/InPageLinks';
import CeoMessageSection from '@/components/pg400/CeoMessageSection';
import CompanyProfileSection from '@/components/pg400/CompanyProfileSection';
import HistorySection from '@/components/pg400/HistorySection';
import AccessSection from '@/components/pg400/AccessSection';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import { useMessage } from '@/lib/useMessage';


export default function Page400() {
    const getMessage = useMessage();

    const companyNavLinks = [
        { label: getMessage('Pg400', 'nav_ceo'), path: '#ceo-message' },
        { label: getMessage('Pg400', 'nav_profile'), path: '#profile' },
        { label: getMessage('Pg400', 'nav_history'), path: '#history' },
        { label: getMessage('Pg400', 'nav_access'), path: '#access' },
    ];

    const ceoData = {
        title: getMessage('Pg400', 'ceo_title'),
        paragraph1: getMessage('Pg400', 'ceo_p1'),
        paragraph2: getMessage('Pg400', 'ceo_p2'),
        signature: getMessage('Pg400', 'ceo_signature'),
    };

    const profileSectionData = {
        title: getMessage('Pg400', 'profile_title'),
        profileData: [
            { label: getMessage('Pg400', 'profile_name_label'), value: getMessage('Pg400', 'profile_name_value') },
            { label: getMessage('Pg400', 'profile_corp_num_label'), value: getMessage('Pg400', 'profile_corp_num_value') },
            { label: getMessage('Pg400', 'profile_date_label'), value: getMessage('Pg400', 'profile_date_value') },
            { label: getMessage('Pg400', 'profile_capital_label'), value: getMessage('Pg400', 'profile_capital_value') },
            { label: getMessage('Pg400', 'profile_rep_label'), value: getMessage('Pg400', 'profile_rep_value') },
            { label: getMessage('Pg400', 'profile_address_label'), value: getMessage('Pg400', 'profile_address_value') },
            { label: getMessage('Pg400', 'profile_overseas_label'), value: getMessage('Pg400', 'profile_overseas_value') },
            { label: getMessage('Pg400', 'profile_services_label'), value: getMessage('Pg400', 'profile_services_value') },
            { label: getMessage('Pg400', 'profile_contact_label'), value: getMessage('Pg400', 'profile_contact_value') },
        ]
    };

    const historyData = {
        title: getMessage('Pg400', 'history_title'),
        yearSuffix: getMessage('common', 'year_suffix'),
        monthSuffix: getMessage('common', 'month_suffix'),
        events: [
            { year: 2024, month: 1, description: getMessage('Pg400', 'history_event_1_desc') },
            { year: 2025, description: getMessage('Pg400', 'history_event_2_desc') },
            // { year: 2026, month: 3, description: getMessage('Pg400', 'history_event_3_desc') },
        ]
    };

    const accessData = {
        title: getMessage('Pg400', 'access_title'),
        companyName: getMessage('Pg400', 'access_company_name'),
        postalCode: getMessage('Pg400', 'access_postal_code'),
        address: getMessage('Pg400', 'access_address'),
        tel: getMessage('Pg400', 'access_tel'),
        mapButtonText: getMessage('Pg400', 'access_map_button'),
        mapUrl: "https://maps.app.goo.gl/kg411PheXfadWMPi7",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.01147787531!2d139.7594757128654!3d35.67671937247458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf073cb9c3f%3A0x944288a0b0839fa9!2sRegus!5e0!3m2!1szh-TW!2sjp!4v1756277130337!5m2!1szh-TW!2sjp" 
    };



    return (
        <>
            <PageHeader
                category={getMessage('Pg400', 'header_category')}
                title={getMessage('Pg400', 'header_title')}
                subtitle={getMessage('Pg400', 'header_subtitle')}
                imageUrl="/images/pg400/header-image.jpg"
            />
            <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
                <InPageLinks navLinks={companyNavLinks} />
                <CeoMessageSection {...ceoData} />
                <CompanyProfileSection {...profileSectionData} />
                <HistorySection {...historyData} />
                <AccessSection {...accessData} />
                <ContactBanner />
            </main>
        </>
    );
}