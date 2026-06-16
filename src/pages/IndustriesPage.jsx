import React from 'react';
import { Helmet } from 'react-helmet-async';
import IndustriesSection from '../components/IndustriesSection';
import WhoWeServe from '../components/WhoWeServe';

const IndustriesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>Industries We Serve | E-Invoicing UAE | Otomation</title>
                <meta name="description" content="Otomation delivers tailored UAE e-invoicing solutions for retail, healthcare, manufacturing, logistics, and government sectors. FTA-compliant for every industry." />
                <link rel="canonical" href="https://otomation.ae/industries" />
                <meta property="og:title" content="Industries We Serve | E-Invoicing UAE | Otomation" />
                <meta property="og:description" content="Otomation delivers tailored UAE e-invoicing solutions for retail, healthcare, manufacturing, logistics, and government sectors. FTA-compliant for every industry." />
                <meta property="og:url" content="https://otomation.ae/industries" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="section-header">
                    <h1 className="section-title">Industries We Serve</h1>
                    <p className="section-intro" style={{ marginBottom: '3rem' }}>
                        Specialized e-invoicing solutions for diverse industry sectors
                    </p>
                </div>
            </div>
            <IndustriesSection />
            <WhoWeServe />
        </div>
    );
};

export default IndustriesPage;
