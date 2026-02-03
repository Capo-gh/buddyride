import React from 'react';
import { NAV_LINKS, ROUTES } from '../../utils/routes';
import logo from '../../assets/buddyride-logo.jpg';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const navbarStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
    };

    const logoContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
    };

    const logoTextStyle = {
        fontSize: '22px',
        fontWeight: '700',
        letterSpacing: '-0.5px',
    };

    const desktopLinksStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    };

    const getLinkStyle = (path) => ({
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: '500',
        color: currentPage === path ? '#5CB1D8' : '#343A40',
        borderBottom: currentPage === path ? '2px solid #5CB1D8' : '2px solid transparent',
        paddingBottom: '4px',
        transition: 'color 0.2s ease',
        textDecoration: 'none',
    });

    const cta = {
        cursor: 'pointer',
        backgroundColor: '#9DB637',
        color: '#FFFFFF',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '15px',
        border: 'none',
        transition: 'background-color 0.2s ease',
    };

    const hamburgerStyle = {
        display: 'none',
        flexDirection: 'column',
        gap: '5px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: '4px',
    };

    const mobileMenuStyle = {
        display: menuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'fixed',
        top: '70px',
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '16px 24px',
        gap: '4px',
        zIndex: 999,
    };

    const mobileLinkStyle = (path) => ({
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: '500',
        color: currentPage === path ? '#5CB1D8' : '#343A40',
        padding: '12px 8px',
        borderRadius: '6px',
        backgroundColor: currentPage === path ? '#EBF5FA' : 'transparent',
        border: 'none',
        textAlign: 'left',
        transition: 'background-color 0.2s ease',
    });

    // Inject responsive styles
    React.useEffect(() => {
        const styleId = 'navbar-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .navbar-desktop-links { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .navbar-mobile-menu { display: none !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    return (
        <>
            <nav style={navbarStyle}>
                {/* Logo */}
                <div style={logoContainerStyle} onClick={() => { setCurrentPage(ROUTES.HOME); setMenuOpen(false); }}>
                    <img src={logo} alt="BuddyRide" style={{ height: '40px', objectFit: 'contain' }} />
                </div>

                {/* Desktop Links */}
                <ul className="navbar-desktop-links" style={desktopLinksStyle}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <span style={getLinkStyle(link.path)} onClick={() => setCurrentPage(link.path)}>
                                {link.label}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <button
                    className="navbar-desktop-links"
                    style={cta}
                    onClick={() => setCurrentPage(ROUTES.DONATE)}
                >
                    Donate
                </button>

                {/* Hamburger Button (mobile) */}
                <button className="navbar-hamburger" style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px', transition: 'transform 0.2s' }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px', transition: 'transform 0.2s' }}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className="navbar-mobile-menu" style={mobileMenuStyle}>
                {NAV_LINKS.map((link) => (
                    <button
                        key={link.path}
                        style={mobileLinkStyle(link.path)}
                        onClick={() => { setCurrentPage(link.path); setMenuOpen(false); }}
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    style={{ ...cta, marginTop: '8px', width: '100%' }}
                    onClick={() => { setCurrentPage(ROUTES.DONATE); setMenuOpen(false); }}
                >
                    Donate
                </button>
            </div>
        </>
    );
};

export default Navbar;