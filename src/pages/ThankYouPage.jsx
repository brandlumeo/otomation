import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import './ThankYouPage.css';

const ThankYouPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="thankyou-page">
            {/* Hero Thank You Section */}
            <div className="thankyou-hero">
                <div className="thankyou-hero-bg"></div>
                <div className="container thankyou-hero-content">
                    <div className="check-icon-wrapper">
                        <CheckCircle size={72} className="check-icon" />
                    </div>
                    <div className="thankyou-tag">Message Received</div>
                    <h1 className="thankyou-title">Thank You for Reaching Out!</h1>
                    <p className="thankyou-subtitle">
                        Your inquiry has been successfully submitted. One of our e-Invoicing compliance
                        experts will get back to you within <strong>24 business hours</strong>.
                    </p>
                    <div className="thankyou-actions">
                        <Link to="/" className="btn btn-white">
                            <Home size={18} style={{ marginRight: '8px' }} />
                            Back to Home
                        </Link>
                        <Link to="/services" className="btn btn-outline-white">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* What Happens Next */}
            <div className="thankyou-next">
                <div className="container">
                    <h2 className="next-title">What Happens Next?</h2>
                    <div className="next-steps-grid">
                        <div className="next-step-card">
                            <div className="step-number">01</div>
                            <h3>Review</h3>
                            <p>Our team reviews your inquiry and assigns the right compliance expert for your business.</p>
                        </div>
                        <div className="next-step-card">
                            <div className="step-number">02</div>
                            <h3>Contact</h3>
                            <p>We'll reach out within 24 hours to schedule your free Gap Analysis consultation.</p>
                        </div>
                        <div className="next-step-card">
                            <div className="step-number">03</div>
                            <h3>Compliance</h3>
                            <p>Get a tailored roadmap to achieve full UAE e-Invoicing compliance before the July 2026 deadline.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info + Social */}
            {/* <div className="thankyou-contact-strip">
                <div className="container thankyou-contact-inner">
                    <div className="contact-strip-info">
                        <h3>Need Immediate Assistance?</h3>
                        <div className="strip-info-items">
                            <a href="tel:+971565757475" className="strip-info-item">
                                <Phone size={18} />
                                <span>+971 56 575 7475</span>
                            </a>
                            <a href="mailto:info@otomation.ae" className="strip-info-item">
                                <Mail size={18} />
                                <span>info@otomation.ae</span>
                            </a>
                            <div className="strip-info-item">
                                <MapPin size={18} />
                                <span>Business Bay, Dubai, UAE</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-strip-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/company/otomation-uae/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="https://www.instagram.com/otomation.ae/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Instagram"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61587152263769"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Facebook"
                            >
                                <Facebook size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ThankYouPage;
