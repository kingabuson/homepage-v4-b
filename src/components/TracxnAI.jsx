import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from 'framer-motion';
import { Search, Zap, Layers } from 'lucide-react';

const queries = [
    'Military Tech Companies in India with EBIDTA > 1M $',
    'Profitable Crypto Companies in UAE & USA',
    'Co-working Space Companies in United Kingdom',
    'List of companies specialized in Automotive interior',
    'Apparel Brands with 50-100M $ Annual Revenue'
];

const aiFeatures = [
    {
        title: 'AI Search',
        subtitle: 'Conversational search that creates tailored company lists',
        description: 'Supports complex research queries',
        tag: 'AI Search',
        icon: <Search size={24} />
    },
    {
        title: 'Tracxn MCP Integration',
        subtitle: 'Access Tracxn data through AI agents like Claude',
        description: 'Real-time structured data retrieval',
        tag: 'Tracxn MCP Integration',
        icon: <Layers size={24} />
    },
    {
        title: 'AI Filter',
        subtitle: 'Converts natural language into structured output',
        description: 'Quickly refine company and investor lists',
        tag: 'AI Filter',
        icon: <Zap size={24} />
    }
];

const TracxnAI = () => {
    const [queryIndex, setQueryIndex] = useState(0);
    const [glowPhase, setGlowPhase] = useState(0); // 0=idle, 1=animating
    const containerRef = useRef(null);
    const vOrbControls = useAnimation(); // Drops to T-junction
    const lOrbControls = useAnimation(); // Left branch to Card 1
    const cOrbControls = useAnimation(); // Center stem down to Card 2
    const rOrbControls = useAnimation(); // Right branch to Card 3

    // To create a complex scroll scrubbing sequence, we need a tall container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"] // Map 0->1 perfectly while scrolling in the container
    });

    // Dark Transition (0 -> 0.1), stay dark, Light Transition (0.85 -> 0.95)
    const backgroundColor = useTransform(scrollYProgress, [0, 0.1, 0.85, 0.95], ["#ffffff", "#0a0a0f", "#0a0a0f", "#ffffff"]);
    const textColor = useTransform(scrollYProgress, [0, 0.1, 0.85, 0.95], ["#1a1a1a", "#ffffff", "#ffffff", "#1a1a1a"]);

    // Sequence 1: "Introducing" fades in (0.1->0.15), stays till 0.35, flies up and out (0.35->0.4)
    const introOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [0, 1, 1, 0]);
    const introY = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [50, 0, 0, -100]);

    // Sequence 2: "Tracxn AI Suite" fades in below it (0.2->0.25), stays till 0.35, flies up and out (0.35->0.4)
    const titleOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
    const titleY = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [50, 0, 0, -100]);

    // Sequence 3: The Search Box fades in AFTER titles leave (0.45 -> 0.5), fades out (0.85 -> 0.9)
    // Haze / Background Orbs fade in as well
    const hazeOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 0.95], [0, 1, 1, 0]);
    const searchOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.85, 0.9], [0, 1, 1, 0]);
    const searchY = useTransform(scrollYProgress, [0.45, 0.5, 0.85, 0.9], [100, 0, 0, -50]);

    // Sequence 4: SVG connector lines fade in (0.55 -> 0.6), fade out (0.85 -> 0.9)
    const svgOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.85, 0.9], [0, 1, 1, 0]);

    // Sequence 5: Feature cards sequentially drop in (0.6 -> 0.8), fade out (0.85 -> 0.9)
    const cardOpacities = [
        useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.9], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.9], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.7, 0.8, 0.85, 0.9], [0, 1, 1, 0])
    ];
    const cardYs = [
        useTransform(scrollYProgress, [0.6, 0.7], [50, 0]),
        useTransform(scrollYProgress, [0.65, 0.75], [50, 0]),
        useTransform(scrollYProgress, [0.7, 0.8], [50, 0])
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setQueryIndex((prev) => (prev + 1) % queries.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    // 4-Stage Animation: Wait until everything is fully visible (around 0.8 scroll progress)
    const [animationTriggered, setAnimationTriggered] = useState(false);

    // Subscribe to scroll to trigger the one-time SVG animation
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest > 0.8 && !animationTriggered) {
                setAnimationTriggered(true);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, animationTriggered]);

    useEffect(() => {
        const animateOrbs = async () => {
            if (!animationTriggered) return;

            // Reset
            vOrbControls.set({ offsetDistance: "0%", opacity: 0 });
            lOrbControls.set({ offsetDistance: "0%", opacity: 0 });
            cOrbControls.set({ offsetDistance: "0%", opacity: 0 });
            rOrbControls.set({ offsetDistance: "0%", opacity: 0 });
            setGlowPhase(0);

            // Give a tiny breather after it scrolls into view
            await new Promise(r => setTimeout(r, 400));

            // Stage 1: Vertical Drop to T-split (0.6s)
            await vOrbControls.start({
                offsetDistance: "100%",
                opacity: [0, 1, 1],
                transition: { duration: 0.6, ease: "easeIn", times: [0, 0.15, 1] }
            });

            // Stage 2: Split simultaneously to 3 paths
            vOrbControls.set({ opacity: 0 });
            lOrbControls.set({ opacity: 1 });
            cOrbControls.set({ opacity: 1 });
            rOrbControls.set({ opacity: 1 });

            // Stage 3: Travel through curved paths (0.7s)
            lOrbControls.start({
                offsetDistance: "100%", opacity: [1, 1, 0],
                transition: { duration: 0.7, ease: "easeOut", times: [0, 0.8, 1] }
            });
            cOrbControls.start({
                offsetDistance: "100%", opacity: [1, 1, 0],
                transition: { duration: 0.7, ease: "easeOut", times: [0, 0.8, 1] }
            });
            await rOrbControls.start({
                offsetDistance: "100%", opacity: [1, 1, 0],
                transition: { duration: 0.7, ease: "easeOut", times: [0, 0.8, 1] }
            });

            // Stage 4: Trigger the glowing trace through the card borders
            setGlowPhase(1);
            await new Promise(r => setTimeout(r, 2600)); // wait for 2.5s animation to finish
            setGlowPhase(0);

            // Cycle naturally repeats via external effect deps or natural timing gap
        };
        animateOrbs();
    }, [queryIndex, animationTriggered, vOrbControls, lOrbControls, cOrbControls, rOrbControls]);

    return (
        <motion.section ref={containerRef} style={{ ...sty.section, backgroundColor }}>
            {/* Ambient Haze Overlay */}
            <motion.div style={{ ...sty.hazeOverlay, opacity: hazeOpacity }}>
                <div style={sty.hazeOrb1} />
                <div style={sty.hazeOrb2} />
                <div style={sty.hazeOrb3} />
            </motion.div>

            <style>{`
                /* ── Input Box ── */
                .ai-input-wrapper {
                    position: relative; border-radius: 14px; padding: 1px;
                    background: linear-gradient(90deg, #FF4B2B, #C4295A, #5B21D4);
                    box-shadow: 0 4px 20px -5px rgba(255, 75, 43, 0.15);
                }
                .ai-input-wrapper::after {
                    content: ''; position: absolute; inset: -2px; border-radius: 16px;
                    background: inherit; filter: blur(8px); opacity: 0.25; z-index: -1;
                }
                .ai-input-inner {
                    background: #111114; border-radius: 13px; padding: 8px 8px 8px 24px;
                    display: flex; align-items: center; justify-content: space-between; height: 68px;
                }
                
                /* ── Connector Orbs ── */
                .ai-orb {
                    width: 30px; height: 6px; border-radius: 3px; filter: blur(3px);
                    position: absolute; z-index: 15;
                }

                /* ── Card Flowing Border Orbs (Flashlights) ── */
                .card-flashlight-left, .card-flashlight-right {
                    position: absolute;
                    width: 80px; height: 80px;
                    margin-top: -40px; margin-left: -40px; /* perfectly centers the orb on its coordinate */
                    border-radius: 50%;
                    background: radial-gradient(circle, #ffffff 0%, #4dabf7 30%, #1a73e8 60%, transparent 100%);
                    opacity: 0;
                    pointer-events: none;
                    z-index: 0;
                }
                .card-flashlight-left.active {
                    animation: traceLeft 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .card-flashlight-right.active {
                    animation: traceRight 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }

                /* Symmetrical sweeping down the left and right border stencil */
                @keyframes traceLeft {
                    0%   { top: 0%; left: 50%; opacity: 0; }
                    5%   { top: 0%; left: 50%; opacity: 1; }
                    25%  { top: 0%; left: 0%; }
                    75%  { top: 100%; left: 0%; }
                    95%  { top: 100%; left: 50%; opacity: 1; }
                    100% { top: 100%; left: 50%; opacity: 0; }
                }
                @keyframes traceRight {
                    0%   { top: 0%; left: 50%; opacity: 0; }
                    5%   { top: 0%; left: 50%; opacity: 1; }
                    25%  { top: 0%; left: 100%; }
                    75%  { top: 100%; left: 100%; }
                    95%  { top: 100%; left: 50%; opacity: 1; }
                    100% { top: 100%; left: 50%; opacity: 0; }
                }
            `}</style>

            {/* This container needs extra height to allow scrolling through the sequence */}
            <div style={{ height: '300vh', width: '100%', position: 'relative' }}>

                {/* Fixed container that scrubs through animations while sticking to viewport */}
                <div style={{ position: 'sticky', top: '15vh', width: '100%', height: '85vh', overflow: 'hidden' }}>
                    <div className="container" style={sty.container}>

                        {/* Sequence 1 & 2: Center Titling */}
                        <div style={{ position: 'absolute', top: '15vh', left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <motion.h2
                                style={{ ...sty.introducing, color: textColor, opacity: introOpacity, y: introY }}
                            >
                                Introducing
                            </motion.h2>
                            <motion.h2
                                style={{ ...sty.mainTitle, opacity: titleOpacity, y: titleY }}
                            >
                                Tracxn AI Suite
                            </motion.h2>
                        </div>

                        {/* Sequence 3: Actual Application Area */}
                        <div style={{ ...sty.animationArea, position: 'absolute', top: '5vh', left: 0, right: 0 }}>

                            {/* Input Box */}
                            <motion.div style={{ ...sty.searchContainer, opacity: searchOpacity, y: searchY }}>
                                <div className="ai-input-wrapper" style={{ width: '100%', maxWidth: '660px', margin: '0 auto' }}>
                                    <div className="ai-input-inner">
                                        <div style={sty.searchLeft}>
                                            <Search size={22} color="#666" style={{ marginRight: '16px' }} />
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={queryIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.5 }}
                                                    style={sty.queryText}
                                                >
                                                    {queries[queryIndex]}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                        <div style={sty.searchButton}>Generate</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Connector Lines & Plunging Orbs */}
                            <motion.div style={{ ...sty.svgWrapper, opacity: svgOpacity }}>
                                {/* 1. Vertical Drop */}
                                <motion.div className="ai-orb" style={{
                                    background: 'linear-gradient(180deg, #1a73e8, #4dabf7)',
                                    offsetPath: 'path("M 500,0 L 500,64")', offsetRotate: '0deg'
                                }} animate={vOrbControls} />

                                {/* 2. Left Branch: T-junction corner -> horizontal -> drop corner -> to Card 1 */}
                                <motion.div className="ai-orb" style={{
                                    background: 'linear-gradient(90deg, #1a73e8, #4dabf7)',
                                    offsetPath: 'path("M 500,64 Q 500,80 484,80 L 174.5,80 Q 158.5,80 158.5,96 L 158.5,150")', offsetRotate: 'auto'
                                }} animate={lOrbControls} />

                                {/* 3. Center Stem: Drop straight down to Card 2 */}
                                <motion.div className="ai-orb" style={{
                                    background: 'linear-gradient(180deg, #1a73e8, #4dabf7)',
                                    offsetPath: 'path("M 500,64 L 500,150")', offsetRotate: '0deg'
                                }} animate={cOrbControls} />

                                {/* 4. Right Branch: T-junction corner -> horizontal -> drop corner -> to Card 3 */}
                                <motion.div className="ai-orb" style={{
                                    background: 'linear-gradient(270deg, #1a73e8, #4dabf7)',
                                    offsetPath: 'path("M 500,64 Q 500,80 516,80 L 825.5,80 Q 841.5,80 841.5,96 L 841.5,150")', offsetRotate: 'auto'
                                }} animate={rOrbControls} />

                                <svg width="100%" height="150" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">
                                    <g stroke="#2a2a30" strokeWidth="1" fill="none">
                                        <path d="M500 0 V150" />
                                        <path d="M500 64 Q500 80, 484 80 L174.5 80 Q158.5 80, 158.5 96 L158.5 150" />
                                        <path d="M500 64 Q500 80, 516 80 L825.5 80 Q841.5 80, 841.5 96 L841.5 150" />
                                    </g>
                                </svg>
                            </motion.div>

                            {/* Feature Cards with Stencil Flow Border Glow */}
                            <div style={sty.grid}>
                                {aiFeatures.map((feature, index) => (
                                    <motion.div key={index} style={{ position: 'relative', opacity: cardOpacities[index], y: cardYs[index] }}>
                                        {/* AURA LAYER: Bleeds outside the card (subtle glow) */}
                                        <div style={{
                                            position: 'absolute', inset: 0, borderRadius: '32px', padding: '2px',
                                            overflow: 'hidden', zIndex: 0, filter: 'blur(6px)', opacity: 0.6, pointerEvents: 'none'
                                        }}>
                                            <div className={`card-flashlight-left ${glowPhase === 1 ? 'active' : ''}`} style={{ width: '40px', height: '40px', marginTop: '-20px', marginLeft: '-20px', animationDelay: index === 1 ? '0.1s' : '0s' }} />
                                            <div className={`card-flashlight-right ${glowPhase === 1 ? 'active' : ''}`} style={{ width: '40px', height: '40px', marginTop: '-20px', marginLeft: '-20px', animationDelay: index === 1 ? '0.1s' : '0s' }} />
                                        </div>

                                        {/* CRISP BORDER LAYER: Card stencil structure */}
                                        <div style={{
                                            position: 'relative', borderRadius: '32px', padding: '1px',
                                            background: '#1f1f25', overflow: 'hidden', zIndex: 1
                                        }}>
                                            {/* These flashlights shine strictly through the 1px padding gap */}
                                            <div className={`card-flashlight-left ${glowPhase === 1 ? 'active' : ''}`} style={{ animationDelay: index === 1 ? '0.1s' : '0s' }} />
                                            <div className={`card-flashlight-right ${glowPhase === 1 ? 'active' : ''}`} style={{ animationDelay: index === 1 ? '0.1s' : '0s' }} />

                                            {/* Solid Inner Card Background */}
                                            <div style={sty.featureCard}>
                                                <div style={sty.visualContainer}>
                                                    <div style={{ color: '#1a73e8', marginBottom: '12px' }}>{feature.icon}</div>
                                                </div>
                                                <div style={sty.cardTag}>{feature.tag}</div>
                                                <h3 style={sty.cardTitle}>{feature.title}</h3>
                                                <p style={sty.cardSubtitle}>{feature.subtitle}</p>
                                                <p style={sty.cardDesc}>{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

/* ── Static Styles ── */
const sty = {
    section: {
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', zIndex: 1, padding: '0',
    },
    hazeOverlay: {
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
    },
    hazeOrb1: {
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,115,232,0.08) 0%, transparent 70%)',
        top: '15%', left: '-8%', filter: 'blur(80px)',
    },
    hazeOrb2: {
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(77,171,247,0.06) 0%, transparent 70%)',
        top: '45%', right: '-5%', filter: 'blur(100px)',
    },
    hazeOrb3: {
        position: 'absolute', width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,33,212,0.04) 0%, transparent 70%)',
        bottom: '5%', left: '25%', filter: 'blur(120px)',
    },
    container: {
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%',
        position: 'relative', zIndex: 1,
    },
    header: {
        textAlign: 'center', marginBottom: '60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
    },
    introducing: {
        fontSize: '3.5rem', fontFamily: '"PT Serif", serif', fontWeight: 400, margin: 0, lineHeight: 1,
    },
    mainTitle: {
        fontSize: '5.5rem', fontFamily: '"PT Serif", serif', fontWeight: 400,
        color: '#1a73e8', margin: '12px 0 24px 0', lineHeight: 1.1,
    },
    animationArea: { maxWidth: '1000px', margin: '0 auto', position: 'relative' },
    searchContainer: { position: 'relative', zIndex: 20, marginBottom: 0 },
    searchLeft: { display: 'flex', alignItems: 'center', flex: 1, overflow: 'hidden' },
    queryText: { fontSize: '1.25rem', color: '#ccc', fontWeight: 400, whiteSpace: 'nowrap' },
    searchButton: {
        backgroundColor: '#1a73e8', color: '#fff', padding: '12px 24px',
        borderRadius: '10px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
    },
    svgWrapper: { height: '150px', position: 'relative', zIndex: 10, marginTop: '-2px' },
    grid: {
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px',
        position: 'relative', zIndex: 5,
    },
    featureCard: {
        backgroundColor: '#111116', borderRadius: '31px', padding: '40px 24px',
        display: 'flex', flexDirection: 'column', color: '#ffffff',
        minHeight: '440px', position: 'relative', zIndex: 2,
    },
    visualContainer: {
        width: '100%', aspectRatio: '16/10', backgroundColor: '#0a0a0e',
        border: '1px solid #1a1a20', borderRadius: '24px', marginBottom: '24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    cardTag: {
        fontSize: '10px', fontWeight: 800, color: '#ffffff', backgroundColor: '#1a73e8',
        padding: '4px 10px', borderRadius: '6px', width: 'fit-content',
        marginBottom: '20px', textTransform: 'uppercase',
    },
    cardTitle: { fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px', fontFamily: '"PT Serif", serif', color: '#ffffff' },
    cardSubtitle: { fontSize: '1rem', color: '#b0b0b0', marginBottom: '14px', lineHeight: 1.4 },
    cardDesc: { fontSize: '0.85rem', color: '#666', lineHeight: 1.6 },
};

export default TracxnAI;
