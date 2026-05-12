import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        company: 'Sequoia Capital',
        title: 'Sourcing the next unicorn before anyone else',
        image: '/testimonial_sequoia.png',
        duration: '2:15'
    },
    {
        id: 2,
        company: 'Blackstone',
        title: 'Deep diligence for billion-dollar buyouts',
        image: '/testimonial_blackstone.png',
        duration: '1:45'
    },
    {
        id: 3,
        company: 'Goldman Sachs',
        title: 'Tracking market shifts for M&A advisory',
        image: '/testimonial_goldman.png',
        duration: '3:20'
    },
    {
        id: 4,
        company: 'Google',
        title: 'Monitoring global innovation trends',
        image: '/testimonial_google.png',
        duration: '2:30'
    }
];

const VideoTestimonials = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <h2 style={styles.heading}>Trusted by the world's most innovative companies</h2>

                <div style={styles.cardContainer}>
                    {testimonials.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            item={item}
                            isActive={activeId === item.id}
                            onClick={() => setActiveId(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ item, isActive, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            style={{
                ...styles.card,
                flex: isActive ? 3 : 1,
                cursor: isActive ? 'default' : 'pointer',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
            {/* Background Image */}
            <div style={styles.imageWrapper}>
                <img src={item.image} alt={item.title} style={styles.bgImage} />
                <div style={{
                    ...styles.overlay,
                    backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)' // Darker overlay for collapsed
                }} />
            </div>

            {/* Content */}
            <div style={styles.content}>
                <AnimatePresence mode="wait">
                    {isActive ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            style={styles.expandedContent}
                        >
                            <div style={styles.playButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="white" />
                                </svg>
                            </div>
                            <div style={styles.textStack}>
                                <div style={styles.logoWrapperExpanded}>
                                    {/* Text-based company name instead of logo */}
                                    <span style={styles.companyName}>{item.company}</span>
                                </div>
                                <h3 style={styles.cardTitle}>{item.title}</h3>
                                <span style={styles.duration}>{item.duration}</span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={styles.collapsedContent}
                        >
                            <div style={styles.logoWrapperCollapsed}>
                                {/* Only company name shown when collapsed */}
                                <span style={styles.companyNameCollapsed}>{item.company}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const styles = {
    section: {
        padding: '100px 0',
        backgroundColor: 'var(--color-background)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    heading: {
        fontSize: '3.5rem',
        marginBottom: '60px',
        textAlign: 'center',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
    },
    cardContainer: {
        display: 'flex',
        gap: '20px',
        height: '500px',
        width: '100%',
    },
    card: {
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    imageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: 'background-color 0.3s ease',
    },
    content: {
        position: 'relative',
        zIndex: 2,
        padding: '32px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    expandedContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start',
    },
    collapsedContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    playButton: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        marginBottom: 'auto', // Push to top if needed, or keep near text
    },
    textStack: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    logoWrapperExpanded: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    logoWrapperCollapsed: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        transform: 'rotate(-90deg)', // Optional: rotate text for vertical feel if very narrow
    },
    logo: {
        width: '32px',
        height: '32px',
        filter: 'brightness(0) invert(1)', // Make white
    },
    logoCollapsed: {
        width: '40px',
        height: '40px',
        filter: 'brightness(0) invert(1)',
    },
    companyName: {
        color: 'white',
        fontWeight: 600,
        fontSize: '1rem',
    },
    companyNameCollapsed: {
        color: 'white',
        fontWeight: 600,
        fontSize: '1.2rem',
        whiteSpace: 'nowrap',
    },
    cardTitle: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.2,
        margin: 0,
        maxWidth: '90%',
    },
    duration: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '0.9rem',
        fontWeight: 500,
    }
};

export default VideoTestimonials;
