import React from 'react';
import { Quote } from 'lucide-react';
import './FounderNote.css';

const FounderNote = () => {
    return (
        <section className="section founder-note">
            <div className="container">
                <div className="note-card glass-panel">
                    <Quote size={48} className="quote-icon" />
                    <div className="note-content">
                        <blockquote>
                            "With the UAE's digital transformation accelerating, businesses need more than just software—they need a partner who understands the nuance of compliance. Otomation was built to bridge the gap between complex regulations and seamless business operations."
                        </blockquote>
                        <div className="founder-profile">
                            <div className="avatar">
                                <span className="initials">JD</span>
                            </div>
                            <div className="founder-info">
                                <p className="founder-role">CEO & Founder, Otomation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;
