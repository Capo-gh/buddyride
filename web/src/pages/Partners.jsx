import React from 'react';
import FadeIn from '../components/shared/FadeIn';

const partners = [
    {
        name: 'Beaconsfield Community Church',
        address: '455 Church Street',
        city: 'Beaconsfield, QC H9W 3S6',
        type: 'Faith Community',
        description: 'A welcoming community in the West Island of Montreal that supports newcomers and international students settling into the area.',
        contactLabel: 'Contact the church',
        contactEmail: null,
    },
];

const Partners = () => {
    React.useEffect(() => {
        const styleId = 'partners-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .partners-grid { grid-template-columns: 1fr !important; }
          .partners-container { padding: 40px 20px !important; }
        }
        @media (min-width: 769px) {
          .partners-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1100px) {
          .partners-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    return (
        <div className="partners-container" style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Header */}
            <FadeIn>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '12px' }}>🤲</div>
                    <h1 style={{ fontSize: '34px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>
                        Community Partners
                    </h1>
                    <p style={{ fontSize: '16px', color: '#6C757D', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
                        BuddyRide works alongside local organizations, faith communities, cultural centres, and businesses to build a stronger welcome network for international students.
                    </p>
                </div>
            </FadeIn>

            {/* Partner Cards */}
            <div className="partners-grid" style={{ display: 'grid', gap: '28px', marginBottom: '64px' }}>
                {partners.map((partner, i) => (
                    <FadeIn key={i} delay={`${i * 0.1}s`}>
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '32px',
                            border: '1px solid #DEE2E6',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    backgroundColor: '#EBF5FA',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '22px',
                                    flexShrink: 0,
                                }}>
                                    {partner.type === 'Faith Community' ? '⛪' : '🏢'}
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        color: '#5CB1D8',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.8px',
                                    }}>{partner.type}</span>
                                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1A1A1A', margin: '2px 0 0 0' }}>{partner.name}</h3>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '14px' }}>
                                <span style={{ fontSize: '14px', marginTop: '1px' }}>📍</span>
                                <div>
                                    <div style={{ fontSize: '14px', color: '#343A40', fontWeight: '500' }}>{partner.address}</div>
                                    <div style={{ fontSize: '13px', color: '#6C757D' }}>{partner.city}</div>
                                </div>
                            </div>

                            <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.6', marginBottom: '20px' }}>
                                {partner.description}
                            </p>

                            {partner.contactEmail && (
                                <a
                                    href={`mailto:${partner.contactEmail}`}
                                    style={{
                                        display: 'inline-block',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        color: '#5CB1D8',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid #5CB1D8',
                                        paddingBottom: '1px',
                                    }}
                                >
                                    {partner.contactLabel}
                                </a>
                            )}
                        </div>
                    </FadeIn>
                ))}

                {/* Become a Partner Card */}
                <FadeIn delay={`${partners.length * 0.1}s`}>
                    <div style={{
                        borderRadius: '16px',
                        padding: '32px',
                        border: '2px dashed #9DB637',
                        backgroundColor: '#FAFDF5',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        minHeight: '220px',
                        height: '100%',
                        boxSizing: 'border-box',
                    }}>
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌱</div>
                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1A1A1A', marginBottom: '8px' }}>Become a Partner</h3>
                        <p style={{ fontSize: '13px', color: '#6C757D', lineHeight: '1.6', marginBottom: '20px', maxWidth: '260px' }}>
                            Is your organization interested in supporting international students? We would love to connect.
                        </p>
                        <a
                            href="mailto:buddyride.requests@gmail.com?subject=Partnership Inquiry"
                            style={{
                                display: 'inline-block',
                                padding: '10px 24px',
                                backgroundColor: '#9DB637',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                        >
                            Get in Touch
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Info banner */}
            <FadeIn delay="0.3s">
                <div style={{
                    background: 'linear-gradient(135deg, #EBF5FA, #F0F5E0)',
                    borderRadius: '16px',
                    padding: '32px 40px',
                    textAlign: 'center',
                    border: '1px solid #DEE2E6',
                }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>
                        Building a Stronger Welcome Network
                    </h3>
                    <p style={{ fontSize: '15px', color: '#6C757D', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto' }}>
                        Our partner network is growing. We are actively building relationships with churches, mosques, cultural centres, grocery stores, and student-friendly businesses across Montreal, Winnipeg, and Washington State to make every new arrival feel at home from day one.
                    </p>
                </div>
            </FadeIn>
        </div>
    );
};

export default Partners;
