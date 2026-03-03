import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SolutionsSection.css';

const SolutionsSection = () => {
    return (
        <section id="solutions" className="solutions-section" style={{ paddingTop: '80px', paddingBottom: '80px', background: 'var(--slate-50)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center' }}>
                    <div className="section-tag">Our Solutions</div>
                    <h2 className="section-title">Technologically Advanced & Compliant</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Whether you use an ERP, accounting software, or Excel, we have the right solution for you. Our system-agnostic approach ensures seamless integration.
                    </p>

                    <div className="solutions-summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
                        <div className="summary-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>System Agnostic</h3>
                            <p style={{ color: 'var(--text-light)' }}>Compatible with SAP, Oracle, Microsoft, Zoho, Tally, and more.</p>
                        </div>
                        <div className="summary-card" style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>PINT AE Standard</h3>
                            <p style={{ color: 'var(--text-light)' }}>Fully compliant with UAE Data Dictionary specifications.</p>
                        </div>
                    </div>

                    <Link to="/contact" className="btn btn-primary">
                        Explore Solutions <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;

