import React from 'react';

const CTASection = ({
    headline = <>Turn Global Data into <span className="text-gradient-testimonial">Decisive&nbsp;Action</span></>,
    subhead = "Join thousands of top investors and corporates running their workflows on Tracxn.",
    ctaText = "Get started for FREE"
}) => {
    return (
        <section style={styles.section}>
            <div className="container text-center">
                <h2 style={styles.headline}>{headline}</h2>
                <p style={styles.subhead}>{subhead}</p>
                <div style={styles.ctaGroup}>
                    <a href="#search" className="btn-donate">{ctaText}</a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        backgroundColor: 'var(--color-surface)',
    },
    headline: {
        fontSize: '3.5rem',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        marginBottom: '24px',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.2,
    },
    subhead: {
        fontSize: '1.25rem',
        color: '#5f6368',
        marginBottom: '40px',
        fontFamily: 'var(--font-family-sans)',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ctaGroup: {
        display: 'flex',
        justifyContent: 'center',
    }
};

export default CTASection;
