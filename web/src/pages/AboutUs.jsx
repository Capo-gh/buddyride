import React from 'react';
import Button from '../components/shared/Button';
import { ROUTES } from '../utils/routes';

const AboutUs = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'about-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .about-container { padding: 40px 20px !important; }
          .about-title { font-size: 28px !important; }
          .about-story-grid { grid-template-columns: 1fr !important; }
          .about-values-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin-left: auto !important; margin-right: auto !important; }
          .about-more-grid { grid-template-columns: 1fr !important; }
          .about-cta-box { padding: 40px 20px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const values = [
        { icon: '💛', title: 'Warmth', desc: 'Every interaction should feel like a welcome, not a transaction.' },
        { icon: '🌍', title: 'Inclusivity', desc: 'We celebrate every background, language, and culture that walks through our doors.' },
        { icon: '🤝', title: 'Community', desc: 'We believe in the power of peers helping peers, not institutions, not strangers.' },
        { icon: '🛡️', title: 'Safety', desc: 'Trust is everything. We take the safety of every rider and Buddy seriously.' },
    ];

    // Styles
    const containerStyle = {
        padding: '60px 24px',
        maxWidth: '900px',
        margin: '0 auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '56px',
    };

    const titleStyle = {
        fontSize: '36px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const subtitleStyle = {
        fontSize: '17px',
        color: '#6C757D',
        lineHeight: '1.6',
        maxWidth: '580px',
        margin: '0 auto',
    };

    // Our Story
    const storyGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        marginBottom: '72px',
    };

    const storyImageBoxStyle = {
        background: 'linear-gradient(135deg, #EBF5FA 0%, #F0F5E0 100%)',
        borderRadius: '20px',
        padding: '48px 32px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
    };

    const storyEmojiStyle = {
        fontSize: '72px',
        marginBottom: '16px',
    };

    const storyStatStyle = {
        fontSize: '42px',
        fontWeight: '700',
        color: '#5CB1D8',
    };

    const storyStatLabelStyle = {
        fontSize: '14px',
        color: '#6C757D',
        fontWeight: '600',
    };

    const sectionLabelStyle = {
        display: 'inline-block',
        backgroundColor: '#EBF5FA',
        color: '#5CB1D8',
        fontSize: '13px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        padding: '6px 16px',
        borderRadius: '50px',
        marginBottom: '14px',
    };

    const sectionTitleStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '14px',
    };

    const storyTextStyle = {
        fontSize: '15px',
        color: '#6C757D',
        lineHeight: '1.8',
        marginBottom: '16px',
    };

    // Mission & Vision
    const missionGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginBottom: '72px',
    };

    const missionCardStyle = (color, bgColor) => ({
        backgroundColor: bgColor,
        borderRadius: '16px',
        padding: '32px',
        border: `1px solid ${color}33`,
    });

    const missionIconStyle = {
        fontSize: '32px',
        marginBottom: '14px',
    };

    const missionTitleStyle = {
        fontSize: '20px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '10px',
    };

    const missionTextStyle = {
        fontSize: '15px',
        color: '#6C757D',
        lineHeight: '1.7',
    };

    // Values
    const valuesGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '72px',
    };

    const valueCardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '28px',
        border: '1px solid #DEE2E6',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    };

    const valueIconStyle = {
        fontSize: '28px',
        marginBottom: '10px',
    };

    const valueTitleStyle = {
        fontSize: '17px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '6px',
    };

    const valueDescStyle = {
        fontSize: '14px',
        color: '#6C757D',
        lineHeight: '1.6',
    };

    // CTA
    const ctaBoxStyle = {
        background: 'linear-gradient(135deg, #EBF5FA 0%, #F0F5E0 100%)',
        borderRadius: '24px',
        padding: '56px 48px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    };

    const ctaTitleStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const ctaSubtitleStyle = {
        fontSize: '16px',
        color: '#6C757D',
        marginBottom: '28px',
        lineHeight: '1.6',
        maxWidth: '500px',
        margin: '0 auto 28px auto',
    };

    const ctaButtonsStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap',
    };

    return (
        <div className="about-container" style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🌟</div>
                <h1 className="about-title" style={titleStyle}>About BuddyRide</h1>
                <p style={subtitleStyle}>We started with a simple idea: no one should have to figure out a new country alone. Now we're turning that idea into reality, one ride at a time.</p>
            </div>

            {/* Our Story — 3 chapters */}
            <div className="about-story-grid" style={storyGridStyle}>
                <div style={storyImageBoxStyle}>
                    <div style={storyEmojiStyle}>✈️</div>
                    <div style={storyStatStyle}>30+</div>
                    <div style={storyStatLabelStyle}>Students welcomed so far</div>
                    <div style={{ margin: '20px 0', height: '1px', backgroundColor: '#DEE2E6' }}></div>
                    <div style={storyStatStyle}>🌍</div>
                    <div style={storyStatLabelStyle}>From every corner of the globe</div>
                </div>
                <div>
                    <div style={sectionLabelStyle}>Our Story</div>
                    <h2 style={sectionTitleStyle}>The Crisis of Arrival</h2>
                    <p style={storyTextStyle}>Every year, thousands of ambitious students arrive in a new country, carrying not just heavy luggage but also uncertainty and quiet vulnerability. The journey can be isolating, and arriving at the airport often feels like a crisis point, turning excitement into panic instantly.</p>
                    <p style={storyTextStyle}>We, the founding members, didn't just witness that struggle; we lived it. Whether stranded at the airport or navigating unfamiliar transit with zero local context, each of us felt lost and overwhelmed at some point.</p>
                </div>
            </div>

            {/* The Turning Point */}
            <div style={{ marginBottom: '72px', backgroundColor: '#EBF5FA', borderRadius: '20px', padding: '40px', border: '1px solid #5CB1D822' }}>
                <div style={sectionLabelStyle}>The Turning Point</div>
                <h2 style={{ ...sectionTitleStyle, marginBottom: '16px' }}>One kind act changed everything</h2>
                <p style={storyTextStyle}>For each of us, the turning point came when a kind, compassionate peer either offered a free ride, guided us through complex transit, or helped us settle in. That single act of kindness gave us security, dignity, and grounded our stay in confidence.</p>
                <p style={{ ...storyTextStyle, marginBottom: 0 }}>These experiences are not just memories; they became our mission. They inspired BuddyRide. We embraced the belief that no incoming student should have to face that crippling isolation alone. Our focus is clear: to transform the terrifying hurdle of arrival into a moment of confidence, belonging, and warmth.</p>
            </div>

            {/* More Than a Ride */}
            <div className="about-more-grid" style={{ marginBottom: '72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ backgroundColor: '#F0F5E0', borderRadius: '20px', padding: '36px', border: '1px solid #9DB63733' }}>
                    <div style={{ fontSize: '36px', marginBottom: '14px' }}>🚘</div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>More Than a Ride</h3>
                    <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.75' }}>We are not a taxi service. We are your first friends in a new country, providing genuine guidance and creating a sense of community every mile of the way.</p>
                </div>
                <div style={{ backgroundColor: '#EBF5FA', borderRadius: '20px', padding: '36px', border: '1px solid #5CB1D833' }}>
                    <div style={{ fontSize: '36px', marginBottom: '14px' }}>🌱</div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>An Investment in Your Future</h3>
                    <p style={{ fontSize: '14px', color: '#6C757D', lineHeight: '1.75' }}>BuddyRide isn't just about reducing stress or saving money. It's about investing in the student's entire academic future by building a foundation of confidence and care from day one.</p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={sectionLabelStyle}>What drives us</div>
            </div>
            <div style={missionGridStyle}>
                <div style={missionCardStyle('#5CB1D8', '#EBF5FA')}>
                    <div style={missionIconStyle}>💡</div>
                    <h3 style={missionTitleStyle}>Our Vision</h3>
                    <p style={missionTextStyle}>To mobilize a thriving community of changemakers who transform the arrival experience of new international students from isolation and vulnerability into a foundation of confidence, community, and care.</p>
                </div>
                <div style={missionCardStyle('#9DB637', '#F0F5E0')}>
                    <div style={missionIconStyle}>🎯</div>
                    <h3 style={missionTitleStyle}>Our Mission</h3>
                    <p style={missionTextStyle}>To bridge the gap between arrival and adaptation by connecting newcomers with trusted peer volunteers for reliable, free transportation and immediate local guidance.</p>
                </div>
            </div>

            {/* Values */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={sectionLabelStyle}>Our Values</div>
                <h2 style={sectionTitleStyle}>What we stand for</h2>
            </div>
            <div className="about-values-grid" style={valuesGridStyle}>
                {values.map((v, i) => (
                    <div key={i} style={valueCardStyle}>
                        <div style={valueIconStyle}>{v.icon}</div>
                        <h4 style={valueTitleStyle}>{v.title}</h4>
                        <p style={valueDescStyle}>{v.desc}</p>
                    </div>
                ))}
            </div>

            {/* Meet the Team CTA */}
            <div style={{ textAlign: 'center', marginBottom: '72px', padding: '40px 32px', background: 'linear-gradient(135deg, #F0F5E0 0%, #EBF5FA 100%)', borderRadius: '20px', border: '1px solid #DEE2E6' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🏅</div>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1A1A1A', marginBottom: '10px' }}>Meet the People Behind BuddyRide</h2>
                <p style={{ fontSize: '15px', color: '#6C757D', lineHeight: '1.6', marginBottom: '24px', maxWidth: '460px', margin: '0 auto 24px auto' }}>
                    Our leadership and coordinating team are all international students who get it, because they've lived it.
                </p>
                <Button variant="primary" onClick={() => setCurrentPage(ROUTES.EXECUTIVES)}>Meet the Team →</Button>
            </div>

            {/* CTA */}
            <div className="about-cta-box" style={ctaBoxStyle}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🤍</div>
                <h2 style={ctaTitleStyle}>Be part of the story</h2>
                <p style={ctaSubtitleStyle}>Whether you want to ride with us, volunteer as a Buddy, or support our mission, there's a place for you.</p>
                <div style={ctaButtonsStyle}>
                    <Button variant="primary" onClick={() => setCurrentPage(ROUTES.REQUEST_RIDE)}>🛬 Request a Ride</Button>
                    <Button variant="secondary" onClick={() => setCurrentPage(ROUTES.BECOME_BUDDY)}>🤝 Become a Buddy</Button>
                    <Button variant="outline" onClick={() => setCurrentPage(ROUTES.DONATE)}>💚 Donate</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;