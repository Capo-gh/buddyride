import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import ImpactCounter from '../components/sections/ImpactCounter';
import Testimonials from '../components/sections/Testimonials';
import Button from '../components/shared/Button';
import FadeIn from '../components/shared/FadeIn';
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
          .home-milestones-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin-left: auto !important; margin-right: auto !important; }
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

            {/* Key Highlights / Milestones */}
            <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <div style={{
                                display: 'inline-block', backgroundColor: '#F0F5E0', color: '#9DB637',
                                fontSize: '13px', fontWeight: '700', textTransform: 'uppercase',
                                letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '14px',
                            }}>Key Highlights 🏆</div>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                                What we've achieved so far
                            </h2>
                            <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
                                Every milestone is a student who didn't arrive alone. Here's what the BuddyRide community has accomplished.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="home-milestones-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
                        <FadeIn delay="0.1s" style={{ height: '100%' }}>
                            <div style={{
                                borderRadius: '20px', padding: '36px 32px',
                                background: 'linear-gradient(135deg, #EBF5FA 0%, #dbeef8 100%)',
                                border: '1px solid #5CB1D833',
                                position: 'relative', overflow: 'hidden', height: '100%', boxSizing: 'border-box',
                            }}>
                                <div style={{
                                    position: 'absolute', top: '-20px', right: '-20px',
                                    fontSize: '90px', opacity: 0.08, pointerEvents: 'none',
                                }}>🚀</div>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#5CB1D8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Milestone</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                                    We Are Officially Launched!
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.7', margin: 0 }}>
                                    BuddyRide is officially launched. After months of planning, building, and growing our volunteer community, we are open and ready to welcome you.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay="0.2s" style={{ height: '100%' }}>
                            <div style={{
                                borderRadius: '20px', padding: '36px 32px',
                                background: 'linear-gradient(135deg, #F0F5E0 0%, #e5f0c8 100%)',
                                border: '1px solid #9DB63733',
                                position: 'relative', overflow: 'hidden', height: '100%', boxSizing: 'border-box',
                            }}>
                                <div style={{
                                    position: 'absolute', top: '-20px', right: '-20px',
                                    fontSize: '90px', opacity: 0.08, pointerEvents: 'none',
                                }}>🏅</div>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#9DB637', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Achievement</div>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                                    Our First 30 Rides
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.7', margin: '0 0 14px 0' }}>
                                    BuddyRide accomplished 30 rides for 30 international students. This is not just an accomplishment; it is a milestone in creating an ecosystem of comfort for newcomers, one ride at a time.
                                </p>
                                <p style={{ fontSize: '13px', color: '#9DB637', fontWeight: '600', margin: 0 }}>
                                    A big THANK YOU to all who contributed. 🙏
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Bottom CTA */}
            <section style={ctaSectionStyle}>
                <div className="home-cta-box" style={ctaBoxStyle}>
                    <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌍</div>
                    <h2 className="home-cta-title" style={ctaTitleStyle}>Ready to make a difference?</h2>
                    <p style={ctaSubtitleStyle}>
                        Whether you're arriving in a new country or want to help someone who is, there's a place for you in the BuddyRide community.
                    </p>
                    <div className="home-cta-buttons" style={ctaButtonsStyle}>
                        <Button variant="primary" onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)}>
                            🛬 Request a Ride
                        </Button>
                        <Button variant="secondary" onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)}>
                            🤝 Become a Buddy
                        </Button>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <a
                            href="https://outlook.office.com/book/MeetwithRaphael@McGill.onmicrosoft.com/s/MmDMK2wx-ky4prdnVlfnLQ2?ismsaljsauthenabled"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#5CB1D8',
                                textDecoration: 'none',
                                borderBottom: '1px solid #5CB1D8',
                                paddingBottom: '2px',
                            }}
                        >
                            📅 Want to know more? Book a meeting with the team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;