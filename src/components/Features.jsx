import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartIcon, SearchIcon, RocketIcon, BulbIcon } from './AnimatedIcons';
import FeatureMockup from './FeatureMockup';

const features = [
    {
        id: '01',
        title: 'Coverage',
        tag: 'Companies · Investors · Funding',
        heading: "If it exists, it's on Tracxn — and it's verified.",
        subtext: "Deepest coverage of Companies, Investors, Funding Rounds, Financials, and Cap Tables — 6M+ entities across 3,000+ sectors. Every data point is verified by human analysts, not just scraped.",
        bullets: [
            '6M+ companies, 1.2M+ funding rounds tracked live',
            'Human-in-the-loop accuracy you can trust in diligence',
            'Cap tables, financials & transaction history, exportable to your models'
        ],
        color: '#202124',
        bg: '#f2f0e6',
        icon: <SearchIcon color="#202124" />,
        videoSrc: 'https://cdn.tracxn.com/marketing-campaigns/Homepage_illustrations_iYYiQe2VRsrWsrBtEFYTi.mp4',
        mediaType: 'video',
        animationType: 'scroll'
    },
    {
        id: '02',
        title: 'Sectors & Intelligence',
        tag: '3,000+ Sectors · Soonicorns · Reports',
        heading: '3,000+ sectors, mapped and tracked across every major geography.',
        subtext: '"Soonicorn" lists, predictive scoring, and curated sector reports across 30+ geographies — so you see the market shift before it hits the news.',
        bullets: [
            '3,000+ sectors mapped with emerging business models',
            'Soonicorn lists & predictive scoring to prioritise targets',
            'Handcrafted research on trends, hubs, and investor movements'
        ],
        color: '#202124',
        bg: '#ECFAE5',
        icon: <BulbIcon color="#202124" />,
        imageSrc: '/images/feature-4.png',
        animationType: 'float'
    },
    {
        id: '03',
        title: 'Regulatory Filings',
        tag: 'Fin · EC · CT',
        heading: 'Regulatory filings most platforms don\'t touch.',
        subtext: 'We\'re one of the few providers that ingests and structures Financial filings, Registrar of Companies (EC) filings, and Court (CT) filings — giving you signal your competitors simply cannot see.',
        bullets: [
            'Financial filings (Fin) — audited statements & revenue trails',
            'Registrar / EC filings — ownership, directors, and charges',
            'Court (CT) filings — litigation and judgments surfaced early'
        ],
        color: '#202124',
        bg: '#dff3ff',
        icon: <ChartIcon color="#202124" />,
        imageSrc: '/images/feature-2.png',
        animationType: 'scroll',
        isNew: true
    },
    {
        id: '04',
        title: 'Workflow Solutions',
        tag: 'Cap Tables · Financials · Exports',
        heading: 'Built to slot into the work you already do.',
        subtext: 'Visualize ownership structures, export detailed financials, and plug Tracxn into your existing diligence workflow — so insights move with you, not against you.',
        bullets: [
            'Visual cap tables & ownership structures',
            'Downloadable financials for modelling',
            'Native exports + APIs for your stack'
        ],
        color: '#202124',
        bg: '#F5DAD2',
        icon: <RocketIcon color="#202124" />,
        imageSrc: '/images/feature-3.png',
        animationType: 'float'
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section id="features" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.heroRow}>
                    <h2 style={styles.heading}>
                        Identify, analyze, and track <br />
                        the world's private markets.
                    </h2>
                </div>

                <div style={styles.contentWrapper}>
                    <div style={styles.stickyCol}>
                        <div style={styles.tabs}>
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.id}
                                    style={{
                                        ...styles.tab,
                                        color: activeTab === feature.id ? '#111827' : '#9CA3AF',
                                        fontWeight: activeTab === feature.id ? 600 : 400,
                                        borderLeft: activeTab === feature.id ? '2px solid #111827' : '2px solid #E5E7EB',
                                    }}
                                    onClick={() => {
                                        const el = document.getElementById(`feature-${feature.id}`);
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    whileHover={{ x: 4 }}
                                >
                                    <span style={styles.tabId}>{feature.id}</span>
                                    <span style={styles.tabTitle}>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={styles.contentCol}>
                        {features.map((feature) => (
                            <FeatureSection
                                key={feature.id}
                                feature={feature}
                                setActiveTab={setActiveTab}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureSection = ({ feature, setActiveTab }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            setActiveTab(feature.id);
        }
    }, [inView, feature.id, setActiveTab]);

    return (
        <div id={`feature-${feature.id}`} ref={ref} style={styles.featureBlock}>
            <motion.div
                style={{
                    ...styles.card,
                    backgroundColor: feature.bg,
                    color: feature.color
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={styles.cardContent}>
                    {feature.isNew && (
                        <div style={styles.cardTagRow}>
                            <span style={styles.newBadge}>NEW</span>
                        </div>
                    )}
                    <h3 style={{ ...styles.cardTitle, color: feature.color }}>{feature.heading}</h3>
                    <p style={{ ...styles.cardDesc, color: feature.color, opacity: 0.85 }}>{feature.subtext}</p>

                    {feature.bullets && (
                        <ul style={styles.bullets}>
                            {feature.bullets.map((b, i) => (
                                <li key={i} style={styles.bullet}>
                                    <span style={styles.bulletDot} />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div style={styles.buttonWrapper}>
                        <button style={{
                            ...styles.learnMoreBtn,
                            color: feature.bg,
                            backgroundColor: feature.color
                        }}>
                            Learn more
                        </button>
                    </div>
                </div>

                <div style={styles.mockupWrapper}>
                    <div style={styles.mockupContainer}>
                        <FeatureMockup
                            imageSrc={feature.imageSrc}
                            videoSrc={feature.videoSrc}
                            mediaType={feature.mediaType}
                            inView={inView}
                            type={feature.animationType}
                            altText={feature.title}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const styles = {
    section: {
        padding: '100px 0 80px',
        backgroundColor: 'var(--color-background)',
    },
    container: {
        position: 'relative',
    },
    heroRow: {
        textAlign: 'center',
        maxWidth: '820px',
        margin: '0 auto 72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    eyebrow: {
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '999px',
        backgroundColor: 'rgba(26,115,232,0.08)',
        color: '#0b3d91',
        fontFamily: 'var(--font-family-sans)',
        fontSize: '0.82rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        marginBottom: '20px',
        border: '1px solid rgba(26,115,232,0.14)',
    },
    heading: {
        fontSize: '3.4rem',
        marginBottom: '20px',
        lineHeight: 1.15,
        textAlign: 'center',
        margin: '0 0 20px',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#111827',
    },
    subheading: {
        fontSize: '1.1rem',
        color: '#5f6368',
        lineHeight: 1.6,
        fontFamily: 'var(--font-family-sans)',
        maxWidth: '700px',
        margin: '0 auto',
    },
    contentWrapper: {
        display: 'flex',
        gap: '60px',
        alignItems: 'flex-start',
    },
    stickyCol: {
        width: '22%',
        position: 'sticky',
        top: '120px',
        height: 'fit-content',
    },
    contentCol: {
        width: '78%',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        paddingBottom: '100px',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    tab: {
        padding: '14px 16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'baseline',
        gap: '10px',
        transition: 'all 0.2s ease',
        fontSize: '1rem',
        fontFamily: 'var(--font-family-sans)',
    },
    tabId: {
        fontSize: '0.75rem',
        color: '#9CA3AF',
        fontWeight: 500,
        letterSpacing: '0.05em',
    },
    tabTitle: {
        fontSize: '1rem',
    },
    featureBlock: {
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        borderRadius: '28px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px',
        position: 'relative',
        minHeight: '560px',
    },
    cardContent: {
        maxWidth: '640px',
        marginBottom: '32px',
        zIndex: 2,
    },
    cardTagRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    cardTag: {
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#0b3d91',
        backgroundColor: 'rgba(255,255,255,0.55)',
        padding: '6px 12px',
        borderRadius: '999px',
        border: '1px solid rgba(26,115,232,0.2)',
    },
    newBadge: {
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: '#fff',
        backgroundColor: '#0b3d91',
        padding: '5px 10px',
        borderRadius: '999px',
    },
    cardTitle: {
        fontSize: '2rem',
        fontFamily: '"PT Serif", serif',
        marginBottom: '18px',
        fontWeight: 400,
        lineHeight: 1.2,
    },
    cardDesc: {
        fontSize: '1.12rem',
        marginBottom: '20px',
        lineHeight: 1.55,
        fontFamily: 'var(--font-family-sans)',
    },
    bullets: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    bullet: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        fontSize: '0.98rem',
        lineHeight: 1.5,
        fontFamily: 'var(--font-family-sans)',
    },
    bulletDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#0b3d91',
        marginTop: '8px',
        flexShrink: 0,
    },
    buttonWrapper: {
        marginTop: '12px',
    },
    learnMoreBtn: {
        padding: '12px 24px',
        borderRadius: '10px',
        border: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
    },
    mockupWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: '8px',
    },
    mockupContainer: {
        width: '100%',
        height: '380px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    }
};

export default Features;
