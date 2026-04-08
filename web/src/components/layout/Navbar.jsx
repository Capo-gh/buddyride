import React from 'react';
import { ROUTES } from '../../utils/routes';
import logo from '../../assets/buddyride-logo.jpg';

const NAV_ITEMS = [
    { label: 'Home', path: ROUTES.HOME },
    {
        label: 'About',
        children: [
            { label: 'About BuddyRide', path: ROUTES.ABOUT },
            { label: 'Meet the Team', path: ROUTES.EXECUTIVES },
            { label: 'Gallery', path: ROUTES.GALLERY },
            { label: 'Partners', path: ROUTES.PARTNERS },
            { label: 'FAQ', path: ROUTES.FAQ },
        ],
    },
    {
        label: 'Services',
        children: [
            { label: 'Our Services', path: ROUTES.SERVICES },
            { label: 'Request a Ride', path: ROUTES.REQUEST_RIDE },
            { label: 'Become a Buddy', path: ROUTES.BECOME_BUDDY },
        ],
    },
    { label: 'Contact Us', path: ROUTES.CONTACT },
];

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(null);
    const [openMobileSection, setOpenMobileSection] = React.useState(null);
    const navRef = React.useRef(null);

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Inject responsive styles
    React.useEffect(() => {
        const styleId = 'navbar-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 900px) {
          .navbar-desktop-links { display: none !important; }
          .navbar-desktop-cta { display: none !important; }
          .navbar-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .navbar-mobile-menu { display: none !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const isChildActive = (item) =>
        item.children && item.children.some((c) => c.path === currentPage);

    const navbarStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
    };

    const desktopLinksStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
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
        padding: '8px 12px 6px 12px',
        borderRadius: '6px',
        display: 'inline-block',
    });

    const getDropdownTriggerStyle = (label) => {
        const isActive = isChildActive(NAV_ITEMS.find(i => i.label === label));
        return {
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '500',
            color: isActive ? '#5CB1D8' : '#343A40',
            background: openDropdown === label ? '#F8F9FA' : 'none',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'color 0.2s ease, background 0.2s ease',
            borderBottom: isActive ? '2px solid #5CB1D8' : '2px solid transparent',
            paddingBottom: '6px',
        };
    };

    const dropdownMenuStyle = (label) => ({
        display: openDropdown === label ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        border: '1px solid #DEE2E6',
        padding: '6px',
        minWidth: '200px',
        zIndex: 1001,
    });

    const dropdownItemStyle = (path) => ({
        display: 'block',
        padding: '10px 14px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: currentPage === path ? '700' : '500',
        color: currentPage === path ? '#5CB1D8' : '#343A40',
        backgroundColor: currentPage === path ? '#EBF5FA' : 'transparent',
        border: 'none',
        width: '100%',
        textAlign: 'left',
        transition: 'background 0.15s ease',
    });

    const ctaStyle = {
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
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '12px 16px 20px 16px',
        gap: '2px',
        zIndex: 999,
        maxHeight: 'calc(100vh - 70px)',
        overflowY: 'auto',
    };

    return (
        <>
            <nav ref={navRef} style={navbarStyle}>
                {/* Logo */}
                <div
                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => { setCurrentPage(ROUTES.HOME); setMenuOpen(false); setOpenDropdown(null); window.scrollTo(0, 0); }}
                >
                    <img src={logo} alt="BuddyRide" style={{ height: '40px', objectFit: 'contain' }} />
                </div>

                {/* Desktop Links */}
                <ul className="navbar-desktop-links" style={desktopLinksStyle}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label} style={{ position: 'relative' }}>
                            {item.children ? (
                                <>
                                    <button
                                        style={getDropdownTriggerStyle(item.label)}
                                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                    >
                                        {item.label}
                                        <span style={{
                                            fontSize: '10px',
                                            transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.2s ease',
                                            display: 'inline-block',
                                        }}>▼</span>
                                    </button>
                                    <div style={dropdownMenuStyle(item.label)}>
                                        {item.children.map((child) => (
                                            <button
                                                key={child.path}
                                                style={dropdownItemStyle(child.path)}
                                                onClick={() => { setCurrentPage(child.path); setOpenDropdown(null); }}
                                            >
                                                {child.label}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <span
                                    style={getLinkStyle(item.path)}
                                    onClick={() => { setCurrentPage(item.path); setOpenDropdown(null); }}
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <button
                    className="navbar-desktop-cta"
                    style={ctaStyle}
                    onClick={() => { setCurrentPage(ROUTES.DONATE); setOpenDropdown(null); }}
                >
                    Donate
                </button>

                {/* Hamburger (mobile) */}
                <button className="navbar-hamburger" style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px' }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#343A40', borderRadius: '2px' }}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className="navbar-mobile-menu" style={mobileMenuStyle}>
                {/* Home */}
                <button
                    style={{
                        cursor: 'pointer', fontSize: '15px', fontWeight: '500',
                        color: currentPage === ROUTES.HOME ? '#5CB1D8' : '#343A40',
                        padding: '12px 10px', borderRadius: '6px', border: 'none',
                        backgroundColor: currentPage === ROUTES.HOME ? '#EBF5FA' : 'transparent',
                        textAlign: 'left',
                    }}
                    onClick={() => { setCurrentPage(ROUTES.HOME); setMenuOpen(false); }}
                >
                    Home
                </button>

                {/* Grouped sections */}
                {NAV_ITEMS.filter(i => i.children).map((group) => (
                    <div key={group.label}>
                        <button
                            style={{
                                cursor: 'pointer', fontSize: '13px', fontWeight: '700',
                                color: '#9DB637', padding: '10px 10px 4px 10px',
                                background: 'none', border: 'none', textAlign: 'left',
                                textTransform: 'uppercase', letterSpacing: '1px', width: '100%',
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            }}
                            onClick={() => setOpenMobileSection(openMobileSection === group.label ? null : group.label)}
                        >
                            {group.label}
                            <span style={{ fontSize: '10px', transform: openMobileSection === group.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
                        </button>
                        {(openMobileSection === group.label || openMobileSection === null) && group.children.map((child) => (
                            <button
                                key={child.path}
                                style={{
                                    cursor: 'pointer', fontSize: '14px', fontWeight: '500',
                                    color: currentPage === child.path ? '#5CB1D8' : '#343A40',
                                    padding: '10px 10px 10px 22px', borderRadius: '6px', border: 'none',
                                    backgroundColor: currentPage === child.path ? '#EBF5FA' : 'transparent',
                                    textAlign: 'left', width: '100%',
                                }}
                                onClick={() => { setCurrentPage(child.path); setMenuOpen(false); }}
                            >
                                {child.label}
                            </button>
                        ))}
                    </div>
                ))}

                {/* Contact Us */}
                <button
                    style={{
                        cursor: 'pointer', fontSize: '15px', fontWeight: '500',
                        color: currentPage === ROUTES.CONTACT ? '#5CB1D8' : '#343A40',
                        padding: '12px 10px', borderRadius: '6px', border: 'none',
                        backgroundColor: currentPage === ROUTES.CONTACT ? '#EBF5FA' : 'transparent',
                        textAlign: 'left',
                    }}
                    onClick={() => { setCurrentPage(ROUTES.CONTACT); setMenuOpen(false); }}
                >
                    Contact Us
                </button>

                <button
                    style={{ ...ctaStyle, marginTop: '8px', width: '100%' }}
                    onClick={() => { setCurrentPage(ROUTES.DONATE); setMenuOpen(false); }}
                >
                    Donate
                </button>
            </div>
        </>
    );
};

export default Navbar;
