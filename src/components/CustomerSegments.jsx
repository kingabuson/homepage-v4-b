import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const segments = [
    {
        id: 'vc',
        title: 'Venture Capital Funds',
        link: 'https://w.tracxn.com/customers/solutions-for-venture-capital-funds',
        description: 'Discover emerging startups, track competitor portfolios, and source high-potential deals faster.'
    },
    {
        id: 'innovation',
        title: 'Corporate Innovation',
        link: 'https://w.tracxn.com/customers/solutions-for-corporate-innovation',
        description: 'Monitor technology trends, scout for innovative partnerships, and stay ahead of industry disruptions.'
    },
    {
        id: 'pe',
        title: 'Private Equity Funds',
        link: 'https://w.tracxn.com/customers/solutions-for-private-equity-funds',
        description: 'Identify buyout opportunities, analyze market landscapes, and access deep company financials.'
    },
    {
        id: 'corpdev',
        title: 'Corporate Development - M&A Teams',
        link: 'https://w.tracxn.com/customers/solutions-for-corporate-dev-and-ma-team',
        description: 'Streamline acquisition target searches, evaluate target synergies, and monitor market consolidation.'
    },
    {
        id: 'ib',
        title: 'Investment banks',
        link: 'https://w.tracxn.com/customers/solutions-for-investment-banks',
        description: 'Support capital raising and advisory services with comprehensive private market intelligence and comps.'
    },
    {
        id: 'journalists',
        title: 'Journalists and Publications',
        link: 'https://w.tracxn.com/customers/solutions-for-journalists-publications',
        description: 'Access reliable data on funding rounds, valuations, and key executives to build compelling industry narratives.'
    },
    {
        id: 'incubators',
        title: 'Incubators',
        link: 'https://w.tracxn.com/customers/solutions-for-incubators',
        description: 'Benchmark portfolio performance, connect with follow-on investors, and analyze successful startup models.'
    },
    {
        id: 'universities',
        title: 'Universities',
        link: 'https://w.tracxn.com/customers/solutions-for-universities',
        description: 'Support academic research, track innovation trends, and analyze emerging tech sectors comprehensively.'
    }
];

const CustomerSegments = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>
                        Built for the entire <br />
                        <span className="text-gradient-testimonial">Private Market Ecosystem</span>
                    </h2>
                </div>

                <div style={styles.columnsContainer}>
                    {/* Left Column */}
                    <div style={styles.column}>
                        {segments.slice(0, Math.ceil(segments.length / 2)).map((item, idx) => {
                            const isActive = activeIndex === item.id; // Using ID for exact matching across columns
                            return (
                                <div key={item.id} style={styles.listItemWrapper}>
                                    <motion.button
                                        style={styles.listItem}
                                        onClick={() => setActiveIndex(isActive ? null : item.id)}
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <span style={styles.itemTitle}>{item.title}</span>
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={24} color="#656565" strokeWidth={1.5} />
                                        </motion.div>
                                    </motion.button>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                style={styles.accordionContentWrapper}
                                            >
                                                <div style={styles.accordionContent}>
                                                    <p style={styles.descriptionText}>{item.description}</p>
                                                    <a href={item.link} style={styles.exploreLink}>
                                                        Explore
                                                        <ArrowRight size={18} style={styles.exploreArrow} />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div style={styles.column}>
                        {segments.slice(Math.ceil(segments.length / 2)).map((item, idx) => {
                            const isActive = activeIndex === item.id;
                            return (
                                <div key={item.id} style={styles.listItemWrapper}>
                                    <motion.button
                                        style={styles.listItem}
                                        onClick={() => setActiveIndex(isActive ? null : item.id)}
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <span style={styles.itemTitle}>{item.title}</span>
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={24} color="#656565" strokeWidth={1.5} />
                                        </motion.div>
                                    </motion.button>
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                style={styles.accordionContentWrapper}
                                            >
                                                <div style={styles.accordionContent}>
                                                    <p style={styles.descriptionText}>{item.description}</p>
                                                    <a href={item.link} style={styles.exploreLink}>
                                                        Explore
                                                        <ArrowRight size={18} style={styles.exploreArrow} />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0',
        backgroundColor: '#FCFCFC',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    heading: {
        fontSize: '3.5rem',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: 1.2,
    },
    columnsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '80px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    listItemWrapper: {
        borderBottom: '1px solid #1a1a1a',
    },
    listItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '32px 0 24px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        color: '#1a1a1a',
    },
    itemTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        fontFamily: 'var(--font-family-sans)',
        color: '#1a1a1a',
    },
    accordionContentWrapper: {
        overflow: 'hidden',
    },
    accordionContent: {
        paddingBottom: '32px',
        paddingRight: '40px',
    },
    descriptionText: {
        fontSize: '1rem',
        color: '#5f6368',
        lineHeight: 1.6,
        marginBottom: '16px',
        fontFamily: 'var(--font-family-sans)',
    },
    exploreLink: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '1rem',
        color: '#0056b3',
        textDecoration: 'none',
        fontWeight: 600,
        fontFamily: 'var(--font-family-sans)',
        transition: 'color 0.2s',
    },
    exploreArrow: {
        marginLeft: '6px',
    }
};

export default CustomerSegments;
