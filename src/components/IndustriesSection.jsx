import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesSection = () => {
    return (
        <section id="industries" className="industries-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="section-header" style={{ background: '#000000', padding: '4rem 0', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Industries We Serve</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#cbd5e1' }}>
                        From retail and healthcare to manufacturing and government entities, our e-invoicing solutions are tailored to meet the specific compliance needs of every sector.
                    </p>

                    <Link to="/contact" className="btn btn-primary" style={{ background: 'white', color: '#0f172a', border: 'none' }}>
                        View Industries <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;

