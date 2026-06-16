import React from 'react';
import { Helmet } from 'react-helmet-async';
import SolutionsSection from '../components/SolutionsSection';
import SystemAgnostic from '../components/SystemAgnostic';
import OurApproach from '../components/OurApproach';

const SolutionsPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>UAE E-Invoicing Solutions | SAP, Oracle, Zoho, Tally | Otomation</title>
                <meta name="description" content="Otomation provides system-agnostic e-invoicing solutions compatible with SAP, Oracle, Microsoft, Zoho, Tally, and 100+ ERPs. PINT AE compliant for UAE businesses." />
                <link rel="canonical" href="https://otomation.ae/solutions" />
                <meta property="og:title" content="UAE E-Invoicing Solutions | SAP, Oracle, Zoho, Tally | Otomation" />
                <meta property="og:description" content="Otomation provides system-agnostic e-invoicing solutions compatible with SAP, Oracle, Microsoft, Zoho, Tally, and 100+ ERPs. PINT AE compliant for UAE businesses." />
                <meta property="og:url" content="https://otomation.ae/solutions" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="section-header">
                    <h1 className="section-title">Our Solutions</h1>
                    <p className="section-intro" style={{ marginBottom: '3rem' }}>
                        Comprehensive e-invoicing solutions tailored for UAE businesses
                    </p>
                </div>
            </div>
            <SolutionsSection />
            <SystemAgnostic />
            <OurApproach />
        </div>
    );
};

export default SolutionsPage;
