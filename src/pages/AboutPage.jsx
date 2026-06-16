import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Helmet>
                <title>About Otomation | TaxTech & E-Invoicing Experts in UAE</title>
                <meta name="description" content="Learn about Otomation — UAE's leading TaxTech and compliance automation platform. Trusted by 10,000+ customers with 135 million invoices processed annually." />
                <link rel="canonical" href="https://otomation.ae/about" />
                <meta property="og:title" content="About Otomation | TaxTech & E-Invoicing Experts in UAE" />
                <meta property="og:description" content="Learn about Otomation — UAE's leading TaxTech and compliance automation platform. Trusted by 10,000+ customers with 135 million invoices processed annually." />
                <meta property="og:url" content="https://otomation.ae/about" />
                <meta property="og:type" content="website" />
            </Helmet>
            <About />
        </div>
    );
};

export default AboutPage;
