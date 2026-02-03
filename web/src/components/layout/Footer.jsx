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
                            <a href={appConfig.socials.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle}>in</a>
                            <a href={appConfig.socials.instagram} target="_blank" rel="noreferrer" style={socialIconStyle}>ig</a>
                            <a href={appConfig.socials.tiktok} target="_blank" rel="noreferrer" style={socialIconStyle}>tk</a>
                            <a href={appConfig.socials.facebook} target="_blank" rel="noreferrer" style={socialIconStyle}>fb</a>
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