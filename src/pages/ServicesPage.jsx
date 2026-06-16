import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>E-Invoicing Services UAE | Otomation ASP Provider</title>
                <meta name="description" content="Otomation offers end-to-end UAE e-invoicing services — readiness assessment, ERP integration, FTA compliance, and managed compliance support for all business sizes." />
                <link rel="canonical" href="https://otomation.ae/services" />
                <meta property="og:title" content="E-Invoicing Services UAE | Otomation ASP Provider" />
                <meta property="og:description" content="Otomation offers end-to-end UAE e-invoicing services — readiness assessment, ERP integration, FTA compliance, and managed compliance support for all business sizes." />
                <meta property="og:url" content="https://otomation.ae/services" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Services />
        </div>
    );
};

export default ServicesPage;
