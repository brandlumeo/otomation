import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="section-header" style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', background: '#ffffff' }}>
                <div className="container">
                    <h1 className="section-title" style={{ color: '#000000' }}>Contact Us</h1>
                    <p className="section-intro" style={{ marginBottom: 0 }}>
                        Get in touch with our expert team for your compliance assessment.
                    </p>
                </div>
            </div>
            <Contact />

            {/* Map Section */}
            <div className="map-section" style={{ padding: '0 0 4rem 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        color: 'var(--secondary)'
                    }}>
                        Our Location
                    </h2>
                    <div className="map-wrapper" style={{
                        width: '100%',
                        height: '450px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.8329615598583!2d55.1014137!3d24.8335652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0bb15012103b%3A0xfc7f18a811c0136e!2sOTOMATION%20MAX%20ELECTRONICS%20TRADING%20LLC!5e1!3m2!1sen!2sae!4v1709637381203!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
