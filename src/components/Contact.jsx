import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@otomation.ae", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "New enquiry from Otomation UAE website",
                    Name: formData.name,
                    Email: formData.email,
                    Phone: formData.phone,
                    Company: formData.company,
                    Message: formData.message,
                    _template: "table"
                })
            });

            if (response.ok) {
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
                navigate('/thank-you');
            } else {
                alert("Something went wrong. Please try again or use our email directly.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again or use our email directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Get in Touch</div>
                    <h2 className="section-title">Start Your Compliance Journey</h2>
                    <p className="section-subtitle">
                        Contact our experts to schedule your Gap Analysis and reserve your slot for the July 2026 Pilot Phase.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Our team is ready to assist you with any questions regarding the new E-Invoicing mandate.</p>

                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <span className="label">Phone</span>
                                <a href="tel:+971565757475" className="value">+971 56 575 7475</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <span className="label">Email</span>
                                <a href="mailto:info@otomation.ae" className="value">info@otomation.ae</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <span className="label">Office</span>
                                <a href="https://share.google/nq7lc622zOk594zSO" target="_blank" rel="noopener noreferrer" className="value">Business Bay, Dubai, UAE</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    placeholder=""
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder=""
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : (
                                    <>Submit Inquiry <Send size={18} style={{ marginLeft: '8px' }} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
