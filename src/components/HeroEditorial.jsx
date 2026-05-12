import React from 'react';
import { motion } from 'framer-motion';

const HERO_KEYFRAMES = `
@keyframes ed-underline-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes ed-orbit-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes ed-orbit-fast {
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
}
@keyframes ed-pulse-core {
  0%, 100% { transform: scale(1); opacity: 0.95; }
  50%      { transform: scale(1.12); opacity: 1; }
}
@keyframes ed-pulse-ring {
  0%   { transform: scale(0.85); opacity: 0.55; }
  100% { transform: scale(1.6);  opacity: 0;    }
}
@keyframes ed-node-pulse {
  0%, 100% { opacity: 0.55; }
  50%      { opacity: 1; }
}
@keyframes ed-line-flow {
  0%   { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -40; }
}
@keyframes ed-mesh-drift {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-3%, 2%, 0) scale(1.05); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .ed-anim * { animation: none !important; }
}
`;

const HeroEditorial = () => {
    return (
        <section style={styles.section} className="hero-editorial">
            <style>{HERO_KEYFRAMES}</style>

            {/* Soft mesh background drift (very subtle) */}
            <div style={styles.meshLayer} aria-hidden="true">
                <div style={styles.meshA} />
                <div style={styles.meshB} />
            </div>

            <div className="container" style={styles.container}>
                <div style={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={styles.eyebrowRow}
                    >
                        <span style={styles.rule} />
                        <span style={styles.eyebrowText}>Tracking innovation since 2013</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        style={styles.headline}
                    >
                        Technology<span style={styles.plus}>+</span>
                        <br />
                        <em style={styles.headlineEm}>
                            Human-in-the-Loop
                            <span style={styles.headlineUnderline} aria-hidden="true" />
                        </em>
                        <br />
                        for&nbsp;Deal&nbsp;Discovery.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={styles.pillars}
                    >
                        <div style={styles.pillar}>
                            <div style={styles.pillarTitle}>
                                <span style={styles.pillarTitleBar} />
                                Tracking Innovation
                            </div>
                            <ul style={styles.pillarList}>
                                <li style={styles.pillarItem}>
                                    <b style={styles.pillarStat}>7.1M+</b> private companies — unfunded to unicorn
                                </li>
                                <li style={styles.pillarItem}>
                                    <b style={styles.pillarStat}>3K+</b> feeds &amp;{' '}
                                    <b style={styles.pillarStat}>55.3K+</b> taxonomies, worldwide
                                </li>
                                <li style={styles.pillarItem}>
                                    <b style={styles.pillarStat}>18.3K+</b> daily additions ·{' '}
                                    <b style={styles.pillarStat}>901M+</b> domains scanned
                                </li>
                            </ul>
                        </div>

                        <div style={styles.pillar}>
                            <div style={styles.pillarTitle}>
                                <span style={styles.pillarTitleBar} />
                                Designed with Precision
                            </div>
                            <ul style={styles.pillarList}>
                                <li style={styles.pillarItem}>
                                    For <b style={styles.pillarStat}>Investors</b> — VC, PE, IB, Angels, Family Offices
                                </li>
                                <li style={styles.pillarItem}>
                                    For <b style={styles.pillarStat}>Corporates</b> — M&amp;A, Innovation, Digital Transformation
                                </li>
                                <li style={styles.pillarItem}>
                                    For <b style={styles.pillarStat}>Government</b>, Universities &amp; Industry Bodies
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.32 }}
                        style={styles.ctaRow}
                    >
                        <a href="#demo" style={styles.ctaGhost}>
                            Schedule a demo
                            <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                                <path
                                    d="M3 10h13M11 5l5 5-5 5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                        <span style={styles.ctaSep}>or</span>
                        <span style={styles.ctaHint}>explore the platform tour</span>
                    </motion.div>
                </div>

                {/* Right-side animated constellation graphic */}
                <div style={styles.constellationWrap} aria-hidden="true" className="ed-anim">
                    <svg
                        viewBox="0 0 420 420"
                        width="100%"
                        height="100%"
                        style={styles.constellationSvg}
                    >
                        <defs>
                            <radialGradient id="edHaloA" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#f9a11f" stopOpacity="0.22" />
                                <stop offset="55%" stopColor="#f9a11f" stopOpacity="0.05" />
                                <stop offset="100%" stopColor="#f9a11f" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="edHaloB" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.12" />
                                <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="edLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#04223a" stopOpacity="0.05" />
                                <stop offset="50%" stopColor="#04223a" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#04223a" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>

                        {/* Drifting halos */}
                        <circle cx="210" cy="210" r="200" fill="url(#edHaloA)" />
                        <circle cx="280" cy="160" r="120" fill="url(#edHaloB)" />

                        {/* Slow rotating outer ring with nodes */}
                        <g style={{ transformOrigin: '210px 210px', animation: 'ed-orbit-slow 60s linear infinite' }}>
                            <circle
                                cx="210"
                                cy="210"
                                r="170"
                                fill="none"
                                stroke="#04223a"
                                strokeOpacity="0.08"
                                strokeWidth="1"
                                strokeDasharray="2 8"
                            />
                            <circle cx="210" cy="40" r="3" fill="#04223a" opacity="0.55" />
                            <circle cx="380" cy="210" r="3" fill="#04223a" opacity="0.4" />
                            <circle cx="210" cy="380" r="3" fill="#04223a" opacity="0.5" />
                            <circle cx="40" cy="210" r="3" fill="#04223a" opacity="0.35" />
                        </g>

                        {/* Inner rotating ring (opposite direction) */}
                        <g style={{ transformOrigin: '210px 210px', animation: 'ed-orbit-fast 40s linear infinite' }}>
                            <circle
                                cx="210"
                                cy="210"
                                r="110"
                                fill="none"
                                stroke="#1a73e8"
                                strokeOpacity="0.18"
                                strokeWidth="1"
                            />
                            <circle cx="320" cy="210" r="4.5" fill="#1a73e8" opacity="0.7" />
                            <circle cx="100" cy="210" r="3" fill="#1a73e8" opacity="0.45" />
                        </g>

                        {/* Connecting lines with flow */}
                        <g
                            stroke="url(#edLineGrad)"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="4 6"
                            style={{ animation: 'ed-line-flow 6s linear infinite' }}
                        >
                            <line x1="120" y1="100" x2="210" y2="210" />
                            <line x1="210" y1="210" x2="320" y2="120" />
                            <line x1="210" y1="210" x2="310" y2="300" />
                            <line x1="210" y1="210" x2="120" y2="310" />
                            <line x1="120" y1="100" x2="320" y2="120" />
                            <line x1="310" y1="300" x2="120" y2="310" />
                        </g>

                        {/* Static glowing nodes with pulse */}
                        <g fill="#04223a">
                            <circle cx="120" cy="100" r="4">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="320" cy="120" r="4">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="4.1s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="310" cy="300" r="4">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.7s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="120" cy="310" r="4">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Orange core with pulsing ring */}
                        <g style={{ transformOrigin: '210px 210px' }}>
                            <circle
                                cx="210"
                                cy="210"
                                r="22"
                                fill="none"
                                stroke="#f9a11f"
                                strokeOpacity="0.55"
                                strokeWidth="1.2"
                                style={{ transformOrigin: '210px 210px', animation: 'ed-pulse-ring 2.8s ease-out infinite' }}
                            />
                            <circle
                                cx="210"
                                cy="210"
                                r="22"
                                fill="none"
                                stroke="#f9a11f"
                                strokeOpacity="0.4"
                                strokeWidth="1.2"
                                style={{
                                    transformOrigin: '210px 210px',
                                    animation: 'ed-pulse-ring 2.8s ease-out infinite',
                                    animationDelay: '1.4s',
                                }}
                            />
                            <circle
                                cx="210"
                                cy="210"
                                r="9"
                                fill="#f9a11f"
                                style={{ transformOrigin: '210px 210px', animation: 'ed-pulse-core 3.2s ease-in-out infinite' }}
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: 'clamp(20px, 3.2vw, 36px) 0 clamp(36px, 5vw, 56px)',
        background:
            'radial-gradient(circle at 92% 18%, rgba(249, 161, 31, 0.05), transparent 40%), radial-gradient(circle at 8% 90%, rgba(4, 34, 58, 0.04), transparent 40%), #ffffff',
        color: '#04223a',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    meshLayer: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
    },
    meshA: {
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '70%',
        height: '70%',
        background:
            'radial-gradient(closest-side, rgba(249,161,31,0.08), transparent 70%)',
        filter: 'blur(20px)',
        animation: 'ed-mesh-drift 18s ease-in-out infinite',
    },
    meshB: {
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '60%',
        height: '60%',
        background:
            'radial-gradient(closest-side, rgba(26,115,232,0.06), transparent 70%)',
        filter: 'blur(20px)',
        animation: 'ed-mesh-drift 24s ease-in-out infinite reverse',
    },
    container: {
        position: 'relative',
        zIndex: 1,
        flex: 1,
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        padding: 'clamp(20px, 4vw, 48px) clamp(20px, 4vw, 56px)',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
    },
    brandRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'clamp(24px, 4vw, 48px)',
    },
    brandMark: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: '"PT Serif", Georgia, serif',
        fontWeight: 700,
        fontSize: '22px',
        letterSpacing: '-0.015em',
        color: '#04223a',
    },
    brandDot: {
        width: '10px',
        height: '10px',
        borderRadius: '2px',
        background: '#04223a',
        transform: 'rotate(45deg)',
    },
    brandName: {
        letterSpacing: '-0.015em',
    },
    versionTag: {
        fontFamily: '"Roboto", -apple-system, sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#777',
    },
    grid: {
        position: 'relative',
        zIndex: 2,
        alignSelf: 'center',
        maxWidth: '1100px',
    },
    eyebrowRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '22px',
    },
    rule: {
        display: 'block',
        width: '56px',
        height: '1px',
        background: '#04223a',
    },
    eyebrowText: {
        fontFamily: '"Roboto", -apple-system, sans-serif',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#555',
    },
    headline: {
        fontFamily: '"PT Serif", Georgia, serif',
        fontWeight: 700,
        fontSize: 'clamp(38px, 6.2vw, 84px)',
        lineHeight: 1.02,
        letterSpacing: '-0.025em',
        margin: '0 0 44px',
        color: '#04223a',
    },
    plus: {
        display: 'inline-block',
        marginLeft: '10px',
        color: '#f9a11f',
        fontWeight: 400,
        transform: 'translateY(-0.04em)',
    },
    headlineEm: {
        fontStyle: 'italic',
        color: '#04223a',
        position: 'relative',
        display: 'inline-block',
    },
    headlineUnderline: {
        position: 'absolute',
        left: '-2%',
        right: '-2%',
        bottom: '0.08em',
        height: '0.16em',
        background: '#f9a11f',
        zIndex: -1,
        transformOrigin: 'left center',
        animation: 'ed-underline-grow 1.2s cubic-bezier(0.7, 0, 0.3, 1) 0.4s both',
    },
    pillars: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: 'clamp(24px, 4vw, 56px)',
        borderTop: '1px solid rgba(4, 34, 58, 0.18)',
        paddingTop: '28px',
        marginBottom: '36px',
        maxWidth: '980px',
    },
    pillar: {},
    pillarTitle: {
        fontFamily: '"PT Serif", Georgia, serif',
        fontWeight: 700,
        fontStyle: 'italic',
        fontSize: 'clamp(18px, 1.6vw, 22px)',
        color: '#04223a',
        marginBottom: '14px',
        position: 'relative',
        paddingLeft: '22px',
        display: 'flex',
        alignItems: 'center',
        gap: '0',
    },
    pillarTitleBar: {
        position: 'absolute',
        left: 0,
        top: '0.65em',
        width: '12px',
        height: '1px',
        background: '#f9a11f',
    },
    pillarList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    pillarItem: {
        fontFamily: '"Roboto", -apple-system, sans-serif',
        fontSize: '14px',
        lineHeight: 1.7,
        color: '#555',
        padding: '4px 0',
    },
    pillarStat: {
        color: '#04223a',
        fontWeight: 700,
        fontVariantNumeric: 'tabular-nums',
    },
    ctaRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        flexWrap: 'wrap',
    },
    ctaGhost: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: 'transparent',
        color: '#04223a',
        borderBottom: '2px solid #04223a',
        padding: '10px 0',
        borderRadius: 0,
        fontFamily: '"Roboto", -apple-system, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.01em',
        textDecoration: 'none',
        transition: 'color 0.18s ease, border-color 0.18s ease',
    },
    ctaSep: {
        fontFamily: '"PT Serif", Georgia, serif',
        fontStyle: 'italic',
        color: '#777',
        fontSize: '14px',
    },
    ctaHint: {
        fontFamily: '"Roboto", -apple-system, sans-serif',
        fontSize: '13px',
        color: '#555',
        borderBottom: '1px dashed rgba(4, 34, 58, 0.3)',
        paddingBottom: '1px',
    },
    constellationWrap: {
        position: 'absolute',
        right: 'clamp(-40px, -2vw, 0px)',
        top: '12%',
        width: 'clamp(280px, 30vw, 460px)',
        height: 'clamp(280px, 30vw, 460px)',
        pointerEvents: 'none',
        zIndex: 1,
    },
    constellationSvg: {
        display: 'block',
        overflow: 'visible',
    },
};

export default HeroEditorial;
