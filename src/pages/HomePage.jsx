import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import HomeExtras from '../components/HomeExtras';
import Partners from '../components/Partners';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FounderNote from '../components/FounderNote';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Otomation | E-Invoicing ASP Provider in UAE</title>
                <meta name="description" content="Otomation is UAE's trusted E-Invoicing ASP Provider. Automate VAT compliance, e-invoicing, and FTA reporting. Pilot ready July 2026. 10,000+ customers served." />
                <link rel="canonical" href="https://otomation.ae/" />
                <meta property="og:title" content="Otomation | E-Invoicing ASP Provider in UAE" />
                <meta property="og:description" content="Otomation is UAE's trusted E-Invoicing ASP Provider. Automate VAT compliance, e-invoicing, and FTA reporting. Pilot ready July 2026." />
                <meta property="og:url" content="https://otomation.ae/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Hero />
            <HomeExtras />
            <Partners />
            <ServicesSection />
            <SolutionsSection />
            <IndustriesSection />
            <WhyChooseUs />
            <FounderNote />
        </>
    );
};

export default HomePage;
