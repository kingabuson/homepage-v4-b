import React, { useState } from 'react';

const geoData = {
    'Global': [
        { value: '5.5M+', label: 'Companies', sub: "The industry's deepest coverage of global startups." },
        { value: '1.2M+', label: 'Funding Rounds', sub: 'Granular tracking of emerging verticals.' },
        { value: '272K+', label: 'Financials', sub: 'Rich financial data for major hubs.' },
        { value: '138K+', label: 'Cap Tables', sub: 'Expert-curated insights.' }
    ],
    'US & Canada': [
        { value: '1.4M+', label: 'Companies', sub: 'Comprehensive coverage of the US ecosystem.' },
        { value: '650K+', label: 'Funding Rounds', sub: 'Deep dive into Silicon Valley and beyond.' },
        { value: '19.2K+', label: 'Financials', sub: 'Local insights for every region.' },
        { value: '9.6K+', label: 'Cap Tables', sub: 'Market-specific US intelligence.' }
    ],
    'Europe': [
        { value: '1.3M+', label: 'Companies', sub: 'In-depth tracking of the UK startup scene.' },
        { value: '286K+', label: 'Funding Rounds', sub: 'Focus on London and regional hubs.' },
        { value: '164K+', label: 'Financials', sub: 'Coverage across England, Scotland, etc.' },
        { value: '64.1K+', label: 'Cap Tables', sub: 'UK-specific sector deep dives.' }
    ],
    'India': [
        { value: '505K+', label: 'Companies', sub: 'Tracking the rapidly growing Indian market.' },
        { value: '47K+', label: 'Funding Rounds', sub: 'From Fintech to SaaS and beyond.' },
        { value: '65.1K+', label: 'Financials', sub: 'Focused intelligence on India.' },
        { value: '38.5K+', label: 'Cap Tables', sub: 'Specific India market landscapes.' }
    ],
    'SEA': [
        { value: '137K+', label: 'Companies', sub: 'Tracking the rapidly growing Indian market.' },
        { value: '12.2K+', label: 'Funding Rounds', sub: 'From Fintech to SaaS and beyond.' },
        { value: '9.3K+', label: 'Financials', sub: 'Focused intelligence on India.' },
        { value: '6.4K+', label: 'Cap Tables', sub: 'Specific India market landscapes.' }
    ],
    'Africa': [
        { value: '115K+', label: 'Companies', sub: 'Tracking the rapidly growing Indian market.' },
        { value: '10.8K+', label: 'Funding Rounds', sub: 'From Fintech to SaaS and beyond.' },
        { value: '2K+', label: 'Acquisitions', sub: 'Focused intelligence on India.' },
        { value: '2.2K+', label: 'Investors', sub: 'Specific India market landscapes.' }
    ]
};

const Stats = () => {
    const [selectedGeo, setSelectedGeo] = useState('Global');
    const tracxnStats = geoData[selectedGeo];

    const styles = {
        section: {
            padding: '100px 20px',
            backgroundColor: 'var(--color-background)',
            display: 'flex',
            justifyContent: 'center',
        },
        container: {
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // Split layout: Stats | Text
            gap: '80px',
            alignItems: 'center',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // 2x2 grid for stats
            gap: '40px',
        },
        statItem: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        value: {
            fontSize: '56px',
            fontWeight: '400', // Reduced font weight
            fontFamily: '"PT Serif", serif', // Changed to PT Serif
            lineHeight: '1',
            // Removed custom gradient to let text-shimmer-theme handle it or use default
        },
        label: {
            fontSize: '20px',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-heading)',
            margin: 0, // Remove default h3 margin
        },
        sub: {
            fontSize: '16px',
            lineHeight: '1.5',
            color: 'var(--color-text-light)', // Changed to match Hero subheading
            margin: 0, // Remove default p margin
        },
        textColumn: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            textAlign: 'left',
            alignItems: 'flex-start',
        },
        heading: {
            fontSize: '3.5rem',
            fontWeight: '400',
            lineHeight: '1.2',
            fontFamily: '"PT Serif", serif',
            color: 'var(--color-text-primary)',
            textAlign: 'left',
            margin: 0,
            maxWidth: '800px',
        },
        description: {
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'var(--color-text-light)', // Changed to match Hero subheading
            margin: 0,
            textAlign: 'left',
        },
        geoSelector: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '8px',
            marginBottom: '16px',
        },
        geoLabel: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#5f6368',
            fontFamily: 'var(--font-family-sans)',
        },
        select: {
            padding: '8px 16px',
            fontSize: '1rem',
            borderRadius: '10px',
            border: '1px solid #dadce0',
            backgroundColor: '#fff',
            color: '#1a73e8',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-family-sans)',
            outline: 'none',
            transition: 'all 0.2s',
            appearance: 'none',
            minWidth: '150px',
            textAlign: 'center',
        },
        '@media (max-width: 968px)': {
            container: {
                gridTemplateColumns: '1fr',
                gap: '60px',
            },
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                {/* Left Column: Stats Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {/* Geo Dropdown Moved Here */}
                    <div style={{ ...styles.geoSelector, marginTop: 0, marginBottom: 0 }}>
                        <label style={styles.geoLabel}>Select Geography:</label>
                        <select
                            style={styles.select}
                            value={selectedGeo}
                            onChange={(e) => setSelectedGeo(e.target.value)}
                        >
                            {Object.keys(geoData).map(geo => (
                                <option key={geo} value={geo}>{geo}</option>
                            ))}
                        </select>
                    </div>

                    {/* Stats Grid */}
                    <div style={styles.statsGrid}>
                        {tracxnStats.map((stat, index) => (
                            <div key={index} style={styles.statItem}>
                                <div className="text-shimmer-theme" style={styles.value}>{stat.value}</div>
                                <h3 style={styles.label}>{stat.label}</h3>
                                <p style={styles.sub}>{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div style={styles.textColumn}>
                    <h2 style={styles.heading}>
                        Coverage You Can <br />
                        <span className="text-gradient-theme">Count On</span>
                    </h2>

                    <p style={styles.description}>
                        Navigate private markets with confidence. We combine AI-scale discovery with human-verified accuracy to deliver the world's most comprehensive startup dataset.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
                        <button style={{
                            backgroundColor: 'transparent',
                            border: '1px solid #1a73e8',
                            color: '#1a73e8',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            View our coverage
                        </button>
                        <button className="btn-donate" style={{ margin: 0 }}>
                            Request for demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
