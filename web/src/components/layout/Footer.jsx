import React from 'react';
import { FOOTER_LINKS, ROUTES } from '../../utils/routes';
import { appConfig } from '../../../../shared/constants/config';
import { colors } from '../../../../shared/constants/colors';

const Footer = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'footer-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-social { justify-content: center !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const footerStyle = {
        backgroundColor: '#1A1A1A',
        color: '#FFFFFF',
        padding: '60px 24px 24px 24px',
    };

    const containerStyle = {
        maxWidth: '1100px',
        margin: '0 auto',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '48px',
        paddingBottom: '40px',
        borderBottom: '1px solid #343A40',
    };

    const brandLogoStyle = {
        fontSize: '26px',
        fontWeight: '700',
        marginBottom: '12px',
    };

    const taglineStyle = {
        fontSize: '15px',
        color: '#ADB5BD',
        fontStyle: 'italic',
        marginBottom: '16px',
    };

    const descriptionStyle = {
        fontSize: '14px',
        color: '#ADB5BD',
        lineHeight: '1.6',
        maxWidth: '320px',
    };

    const socialStyle = {
        display: 'flex',
        gap: '12px',
        marginTop: '20px',
    };

    const socialIconStyle = {
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        backgroundColor: '#343A40',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        textDecoration: 'none',
        fontSize: '16px',
    };

    const columnTitleStyle = {
        fontSize: '15px',
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    };

    const linkStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#ADB5BD',
        cursor: 'pointer',
        marginBottom: '10px',
        border: 'none',
        background: 'none',
        padding: 0,
        textAlign: 'left',
        transition: 'color 0.2s ease',
    };

    const bottomStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '24px',
        fontSize: '13px',
        color: '#6C757D',
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div className="footer-grid" style={gridStyle}>

                    {/* Brand Column */}
                    <div>
                        <div style={brandLogoStyle}>
                            <span style={{ color: colors.green }}>Buddy</span>
                            <span style={{ color: colors.blue }}>Ride</span>
                        </div>
                        <p style={taglineStyle}>"{appConfig.tagline}"</p>
                        <p style={descriptionStyle}>{appConfig.description}</p>
                        <div className="footer-social" style={socialStyle}>
                            <a href={appConfig.socials.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                            </a>
                            <a href={appConfig.socials.instagram} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
                            </a>
                            <a href={appConfig.socials.tiktok} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="TikTok">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                            </a>
                            <a href={appConfig.socials.facebook} target="_blank" rel="noreferrer" style={socialIconStyle} aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={columnTitleStyle}>Quick Links</h4>
                        <button style={linkStyle} onClick={() => setCurrentPage(ROUTES.HOME)}>Home</button>
                        <button style={linkStyle} onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)}>Request a Ride</button>
                        <button style={linkStyle} onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)}>Become a Buddy</button>
                        <button style={linkStyle} onClick={() => setCurrentPage(ROUTES.ABOUT)}>About Us</button>
                        <button style={linkStyle} onClick={() => setCurrentPage(ROUTES.FAQ)}>FAQ</button>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={columnTitleStyle}>Support</h4>
                        {FOOTER_LINKS.map((link) => (
                            <button key={link.path} style={linkStyle} onClick={() => setCurrentPage(link.path)}>
                                {link.label}
                            </button>
                        ))}
                        <a href={`mailto:${appConfig.email}`} style={{ ...linkStyle, marginTop: '12px' }}>
                            {appConfig.email}
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom" style={bottomStyle}>
                    <span>© 2025 BuddyRide Inc. All rights reserved.</span>
                    <span>Built with care for international students</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;