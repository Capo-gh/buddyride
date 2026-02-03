import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import ImpactCounter from '../components/sections/ImpactCounter';
import Testimonials from '../components/sections/Testimonials';
import Button from '../components/shared/Button';
import { ROUTES } from '../utils/routes';

const Home = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'home-cta-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .home-cta-box { padding: 48px 24px !important; }
          .home-cta-title { font-size: 26px !important; }
          .home-cta-buttons { flex-direction: column !important; align-items: center !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const ctaSectionStyle = {
        padding: '80px 24px',
        backgroundColor: '#FFFFFF',
    };

    const ctaBoxStyle = {
        maxWidth: '720px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, #EBF5FA 0%, #F0F5E0 100%)',
        borderRadius: '24px',
        padding: '64px 48px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    };

    const ctaTitleStyle = {
        fontSize: '32px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const ctaSubtitleStyle = {
        fontSize: '16px',
        color: '#6C757D',
        lineHeight: '1.6',
        maxWidth: '500px',
        margin: '0 auto 32px auto',
    };

    const ctaButtonsStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
    };

    return (
        <div>
            <Hero setCurrentPage={setCurrentPage} />
            <HowItWorks />
            <ImpactCounter />
            <Testimonials />

            {/* Bottom CTA */}
            <section style={ctaSectionStyle}>
                <div className="home-cta-box" style={ctaBoxStyle}>
                    <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌍</div>
                    <h2 className="home-cta-title" style={ctaTitleStyle}>Ready to make a difference?</h2>
                    <p style={ctaSubtitleStyle}>
                        Whether you're arriving in a new country or want to help someone who is — there's a place for you in the BuddyRide community.
                    </p>
                    <div className="home-cta-buttons" style={ctaButtonsStyle}>
                        <Button variant="primary" onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)}>
                            🛬 Request a Ride
                        </Button>
                        <Button variant="secondary" onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)}>
                            🤝 Become a Buddy
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;