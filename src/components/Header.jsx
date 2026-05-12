import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <img src="/tracxn-logo-black.png" alt="Tracxn" style={{ height: '32px' }} />
                </div>
                <nav>
                    <ul style={styles.navList}>
                        {styles.navItems.map((item) => (
                            <li key={item.label} style={styles.navItem}>
                                <a href={`#${item.label.toLowerCase()}`} style={styles.navLink}>
                                    {item.label}
                                    {item.hasDropdown && (
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '6px' }}>
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={styles.authGroup}>
                    <a href="#login" style={styles.loginLink}>Login</a>
                    <a href="#signup" style={styles.signupBtn}>Sign Up for Free</a>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)',
        zIndex: 1000,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navItems: [
        { label: 'Customers', hasDropdown: true },
        { label: 'Offerings', hasDropdown: true },
        { label: 'Company', hasDropdown: true },
        { label: 'Pricing', hasDropdown: false }
    ],
    navList: {
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    navItem: {
        margin: '0 12px',
    },
    navLink: {
        color: 'var(--color-text-main)',
        fontWeight: 500,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
    },
    authGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
    },
    loginLink: {
        textDecoration: 'none',
        color: 'var(--color-text-main)',
        fontWeight: 500,
        fontSize: '1rem',
    },
    signupBtn: {
        backgroundColor: '#ff6b00',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: 'background-color 0.2s',
    }
};

export default Header;
