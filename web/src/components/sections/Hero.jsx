import React from 'react';
import { ROUTES } from '../../utils/routes';
import Button from '../shared/Button';

const Hero = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'hero-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .hero-container { padding: 60px 20px !important; }
          .hero-title { font-size: 32px !important; }
          .hero-subtitle { font-size: 17px !important; }
          .hero-buttons { flex-direction: column !important; align-items: center !important; }
          .hero-badges { flex-wrap: wrap !important; justify-content: center !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const heroWrapperStyle = {
        background: 'linear-gradient(135deg, #EBF5FA 0%, #F0F5E0 50%, #EBF5FA 100%)',
        position: 'relative',
        overflow: 'hidden',
    };

    const heroContainerStyle = {
        maxWidth: '780px',
        margin: '0 auto',
        padding: '100px 24px',
        textAlign: 'center',
    };

    const taglineStyle = {
        display: 'inline-block',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DEE2E6',
        borderRadius: '50px',
        padding: '8px 18px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#5CB1D8',
        marginBottom: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    };

    const titleStyle = {
        fontSize: '48px',
        fontWeight: '700',
        color: '#1A1A1A',
        lineHeight: '1.15',
        marginBottom: '20px',
    };

    const subtitleStyle = {
        fontSize: '19px',
        color: '#6C757D',
        lineHeight: '1.6',
        marginBottom: '36px',
        maxWidth: '600px',
        margin: '0 auto 36px auto',
    };

    const buttonsStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '48px',
    };

    const badgesStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
    };

    const badgeStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        color: '#6C757D',
    };

    const badgeIconStyle = {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DEE2E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    };

    // Decorative blobs
    const blobStyle = (top, left, width, color, opacity) => ({
        position: 'absolute',
        top,
        left,
        width,
        height: width,
        borderRadius: '50%',
        backgroundColor: color,
        opacity,
        filter: 'blur(80px)',
        pointerEvents: 'none',
    });

    return (
        <section style={heroWrapperStyle}>
            {/* Decorative blobs */}
            <div style={blobStyle('-60px', '-80px', '300px', '#5CB1D8', 0.15)}></div>
            <div style={blobStyle('40px', '70%', '250px', '#9DB637', 0.12)}></div>
            <div style={blobStyle('60%', '10%', '200px', '#9DB637', 0.1)}></div>

            <div className="hero-container" style={heroContainerStyle}>
                {/* Tagline Pill */}
                <div style={taglineStyle}>✈️ your first friend abroad is waiting</div>

                {/* Title */}
                <h1 className="hero-title" style={titleStyle}>
                    Arrive in a new country.<br />
                    <span style={{ color: '#5CB1D8' }}>Never arrive alone.</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle" style={subtitleStyle}>
                    BuddyRide connects international students with local peer volunteers
                    for free, reliable airport rides — so your first moments abroad feel
                    like a welcome, not a wait.
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons" style={buttonsStyle}>
                    <Button variant="primary" onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)} fullWidth={false}>
                        🛬 Request a Ride
                    </Button>
                    <Button variant="secondary" onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)} fullWidth={false}>
                        🤝 Become a Buddy
                    </Button>
                </div>

                {/* Trust Badges */}
                <div className="hero-badges" style={badgesStyle}>
                    <div style={badgeStyle}>
                        <div style={badgeIconStyle}>✓</div>
                        Completely Free
                    </div>
                    <div style={badgeStyle}>
                        <div style={badgeIconStyle}>🛡️</div>
                        Peer Verified
                    </div>
                    <div style={badgeStyle}>
                        <div style={badgeIconStyle}>💚</div>
                        30+ Rides Done
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;