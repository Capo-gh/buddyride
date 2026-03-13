import React from 'react';
import Button from '../components/shared/Button';
import FadeIn from '../components/shared/FadeIn';
import { ROUTES } from '../utils/routes';

const services = [
    {
        icon: '🛬',
        title: 'Free Airport Pickups',
        color: '#5CB1D8',
        bg: '#EBF5FA',
        desc: 'We transport you safely and freely from the airport to your destination. We operate across multiple cities in Canada and the USA. Your first moments abroad should feel like a welcome, not a wait.',
        highlights: ['100% free of charge', 'Door-to-door service', 'Peer-verified volunteers', 'Growing network of cities'],
    },
    {
        icon: '🏦',
        title: 'SIN, SIM & Bank Registration',
        color: '#9DB637',
        bg: '#F0F5E0',
        desc: 'Navigating government registration and banking as a newcomer can be overwhelming. We guide you through opening a bank account, getting your SIN, and setting up a local SIM. We will drive you there too.',
        highlights: ['Bank account setup guidance', 'SIN registration support', 'Local SIM card assistance', 'Transportation included'],
    },
    {
        icon: '💵',
        title: 'Tax Filing Guidance',
        color: '#4A95BF',
        bg: '#EBF5FA',
        desc: "Tax season doesn't have to be stressful. We connect you with the best tax filing professionals in Montreal who understand international student situations. We've been through it, and we know the right people for you.",
        highlights: ['Trusted referrals', 'International student expertise', 'Free initial guidance', 'Community-vetted professionals'],
    },
    {
        icon: '🪪',
        title: 'Student ID & Documentation',
        color: '#85991E',
        bg: '#F0F5E0',
        desc: 'From student identification cards to understanding local documentation requirements, we connect you with the right resources and people who have years of experience navigating these processes.',
        highlights: ['Student ID guidance', 'Documentation support', 'Peer-led assistance', 'Community expertise'],
    },
    {
        icon: '🚆',
        title: 'Community Exploration',
        color: '#5CB1D8',
        bg: '#EBF5FA',
        desc: 'Settling in goes beyond paperwork. We take you to visit key places: African Markets, Canadian grocery stores, Mont Royal, Old Port, and other important sites, so you can start building your new home with confidence.',
        highlights: ['Guided city tours', 'African & Caribbean markets', 'Cultural landmarks', 'Local community hubs'],
    },
];

const coverageAreas = [
    { flag: '🇨🇦', city: 'Montreal, QC', country: 'Canada' },
    { flag: '🇨🇦', city: 'Winnipeg, MB', country: 'Canada' },
    { flag: '🇨🇦', city: 'Edmonton, AB', country: 'Canada' },
    { flag: '🇨🇦', city: 'Guelph, ON', country: 'Canada' },
    { flag: '🇨🇦', city: 'Toronto, ON', country: 'Canada' },
    { flag: '🇺🇸', city: 'Fayetteville, AR', country: 'USA' },
    { flag: '🇺🇸', city: 'Pullman, WA', country: 'USA' },
    { flag: '🇺🇸', city: 'Madison, WI', country: 'USA' },
    { flag: '🇺🇸', city: 'DeKalb, IL', country: 'USA' },
];

const Services = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'services-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .services-coverage { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-coverage { grid-template-columns: 1fr !important; }
          .services-container { padding: 40px 20px !important; }
          .services-title { font-size: 28px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const ServiceCard = ({ service, index }) => {
        const [hovered, setHovered] = React.useState(false);
        return (
            <FadeIn delay={`${0.05 + index * 0.08}s`}>
                <div
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '20px',
                        padding: '32px 28px',
                        border: `1px solid ${service.color}33`,
                        borderTop: `4px solid ${service.color}`,
                        boxShadow: hovered ? `0 12px 36px ${service.color}22` : '0 4px 16px rgba(0,0,0,0.06)',
                        transform: hovered ? 'translateY(-6px)' : 'none',
                        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                        height: '100%',
                        boxSizing: 'border-box',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {/* Icon bubble */}
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '16px',
                        backgroundColor: service.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '28px', marginBottom: '18px',
                        border: `1px solid ${service.color}33`,
                    }}>
                        {service.icon}
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                        {service.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.7', marginBottom: '18px' }}>
                        {service.desc}
                    </p>

                    {/* Highlights */}
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {service.highlights.map((h, i) => (
                            <li key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '13px', color: '#343A40',
                                marginBottom: i < service.highlights.length - 1 ? '6px' : 0,
                            }}>
                                <span style={{
                                    width: '18px', height: '18px', borderRadius: '50%',
                                    backgroundColor: service.bg, color: service.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '11px', fontWeight: '700', flexShrink: 0,
                                }}>✓</span>
                                {h}
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
        );
    };

    return (
        <div className="services-container" style={{ padding: '60px 24px', maxWidth: '1040px', margin: '0 auto' }}>

            {/* Header */}
            <FadeIn>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '12px' }}>🤲</div>
                    <h1 className="services-title" style={{ fontSize: '36px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>
                        Our Services
                    </h1>
                    <p style={{ fontSize: '17px', color: '#6C757D', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto' }}>
                        We're more than a ride. We're your first friends in a new country, here to help you land, settle, and belong.
                    </p>
                </div>
            </FadeIn>

            {/* Free badge */}
            <FadeIn delay="0.05s">
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    backgroundColor: '#F0F5E0', border: '1px solid #9DB63744',
                    borderRadius: '12px', padding: '14px 20px',
                    marginBottom: '48px', maxWidth: '560px', margin: '0 auto 48px auto',
                }}>
                    <span style={{ fontSize: '22px' }}>💚</span>
                    <p style={{ margin: 0, fontSize: '14px', color: '#5a6a1a', lineHeight: '1.5' }}>
                        <strong>All our services are completely free.</strong> We are a peer-driven, volunteer-powered organization. No payment, no hidden fees. Ever.
                    </p>
                </div>
            </FadeIn>

            {/* Services Grid */}
            <div className="services-grid" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                gap: '28px', marginBottom: '80px',
                alignItems: 'start',
            }}>
                {services.map((service, i) => (
                    <ServiceCard key={i} service={service} index={i} />
                ))}
            </div>

            {/* Coverage Areas */}
            <FadeIn>
                <div style={{
                    background: 'linear-gradient(135deg, #5CB1D8 0%, #4A95BF 40%, #9DB637 100%)',
                    borderRadius: '24px', padding: '48px 40px', marginBottom: '64px', textAlign: 'center',
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>📍</div>
                    <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>Where We Operate</h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px auto' }}>
                        Currently serving international students arriving in these cities. More locations coming soon.
                    </p>
                    <div className="services-coverage" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
                        {coverageAreas.map((area, i) => (
                            <div key={i} style={{
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '14px', padding: '20px 16px',
                                border: '1px solid rgba(255,255,255,0.25)',
                            }}>
                                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{area.flag}</div>
                                <div style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '2px' }}>{area.city}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>{area.country}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay="0.05s">
                <div style={{
                    background: 'linear-gradient(135deg, #EBF5FA, #F0F5E0)',
                    borderRadius: '20px', padding: '48px 32px', textAlign: 'center',
                    border: '1px solid #DEE2E6',
                }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>✈️</div>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>Ready to arrive with confidence?</h2>
                    <p style={{ fontSize: '15px', color: '#6C757D', lineHeight: '1.6', marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px auto' }}>
                        Submit your ride request at least 4 days before your arrival so we can match you with the right Buddy.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <Button variant="primary" onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)}>🛬 Request a Ride</Button>
                        <Button variant="secondary" onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)}>🤝 Become a Buddy</Button>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default Services;
