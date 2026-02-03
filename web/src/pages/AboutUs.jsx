import React from 'react';
import Card from '../components/shared/Card';
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
          .about-team-grid { grid-template-columns: 1fr 1fr !important; }
          .about-coordinators-grid { grid-template-columns: 1fr 1fr !important; }
          .about-cta-box { padding: 40px 20px !important; }
        }
        @media (max-width: 400px) {
          .about-team-grid { grid-template-columns: 1fr !important; max-width: 320px !important; margin-left: auto !important; margin-right: auto !important; }
          .about-coordinators-grid { grid-template-columns: 1fr !important; max-width: 320px !important; margin-left: auto !important; margin-right: auto !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const leaders = [
        { name: 'Raphael Aidoo', role: 'President & Project Lead', initials: 'RA', color: '#5CB1D8', bio: 'PhD candidate in Bioresource Engineering at McGill. Founded RaphAid Inc. and brings deep expertise in grassroots leadership and strategic community development.' },
        { name: 'Donald Bimpong', role: 'VP, Operations & Logistics', initials: 'DB', color: '#9DB637', bio: 'PhD student in Food Science at McGill and a Mastercard Scholar. His firsthand experience as an international student drives his passion for making newcomers feel at home.' },
        { name: 'Charity O. Darkwa', role: 'VP, Communications & HR', initials: 'CD', color: '#4A95BF', bio: 'Pursuing a Master\'s in Communication & Public Policy at the University of Michigan. Founded SmilingHour and leads BuddyRide\'s outreach and team development.' },
        { name: 'Edmund Larbi Afari', role: 'VP, Finance Management', initials: 'EA', color: '#85991E', bio: 'PhD student in Food Science at Washington State University. A seasoned student leader and BuddyRide\'s Washington State Representative.' },
    ];

    const coordinators = [
        { name: 'Lindsay Kamgang', role: 'Communication & Request Co-ordinator', initials: 'LK', color: '#5CB1D8', bio: 'Ensures every ride request and communication is handled smoothly and with care.' },
        { name: 'Abbas Sadiq', role: 'Volunteer Co-ordinator', initials: 'AS', color: '#9DB637', bio: 'Recruits and supports our Buddy volunteers, keeping them motivated and well-equipped.' },
        { name: 'Cephas Amoah', role: 'Volunteer Co-ordinator', initials: 'CA', color: '#4A95BF', bio: 'Grows the volunteer base and maintains a strong, engaged community of Buddies.' },
        { name: 'Benedicta N. Biyimba', role: 'Welfare & Organization Co-ordinator', initials: 'BN', color: '#85991E', bio: 'Oversees the welfare of riders and Buddies, ensuring every experience is safe and caring.' },
        { name: 'Derrick K. Allotey', role: 'Welfare & Organization Co-ordinator', initials: 'DA', color: '#5CB1D8', bio: 'Supports organization-wide operations and coordination between all teams.' },
        { name: 'Ibrahim Sabiku', role: 'Technology & Systems Co-ordinator', initials: 'IS', color: '#9DB637', bio: 'Builds and maintains the platforms and tools that power BuddyRide\'s mission.' },
    ];

    const values = [
        { icon: '💛', title: 'Warmth', desc: 'Every interaction should feel like a welcome, not a transaction.' },
        { icon: '🌍', title: 'Inclusivity', desc: 'We celebrate every background, language, and culture that walks through our doors.' },
        { icon: '🤝', title: 'Community', desc: 'We believe in the power of peers helping peers — not institutions, not strangers.' },
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

    // Team
    const teamGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '40px',
    };

    const coordinatorsGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '72px',
    };

    const teamCardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '28px 20px',
        textAlign: 'center',
        border: '1px solid #DEE2E6',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    };

    const teamAvatarStyle = (color) => ({
        width: '76px',
        height: '76px',
        borderRadius: '50%',
        backgroundColor: color,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        fontWeight: '700',
        margin: '0 auto 14px auto',
    });

    const teamNameStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '4px',
    };

    const teamRoleStyle = {
        fontSize: '13px',
        color: '#5CB1D8',
        fontWeight: '600',
        marginBottom: '10px',
    };

    const teamBioStyle = {
        fontSize: '13px',
        color: '#6C757D',
        lineHeight: '1.5',
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
                <p style={subtitleStyle}>We started as a simple idea — no one should have to figure out a new country alone. Now we're turning that idea into reality, one ride at a time.</p>
            </div>

            {/* Our Story */}
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
                    <h2 style={sectionTitleStyle}>Born from experience</h2>
                    <p style={storyTextStyle}>BuddyRide was born from a simple but powerful observation: arriving in a new country is one of the most vulnerable moments a person can experience. No familiar faces, no idea how things work, and often a language barrier on top of it all.</p>
                    <p style={storyTextStyle}>Our founders experienced this firsthand as international students. They knew there had to be a better way — and so BuddyRide was created. A peer-driven, free service that turns the scariest part of moving abroad into a warm welcome.</p>
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

            {/* Leadership */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ ...sectionLabelStyle, backgroundColor: '#F0F5E0', color: '#9DB637' }}>Leadership</div>
                <h2 style={sectionTitleStyle}>The people behind the rides</h2>
            </div>
            <div className="about-team-grid" style={teamGridStyle}>
                {leaders.map((member, i) => (
                    <div key={i} style={teamCardStyle}>
                        <div style={teamAvatarStyle(member.color)}>{member.initials}</div>
                        <div style={teamNameStyle}>{member.name}</div>
                        <div style={teamRoleStyle}>{member.role}</div>
                        <div style={teamBioStyle}>{member.bio}</div>
                    </div>
                ))}
            </div>

            {/* Coordinating Team */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ ...sectionLabelStyle, backgroundColor: '#EBF5FA', color: '#5CB1D8' }}>Coordinating Team</div>
                <h2 style={sectionTitleStyle}>The hands that make it all work</h2>
            </div>
            <div className="about-coordinators-grid" style={coordinatorsGridStyle}>
                {coordinators.map((member, i) => (
                    <div key={i} style={teamCardStyle}>
                        <div style={teamAvatarStyle(member.color)}>{member.initials}</div>
                        <div style={teamNameStyle}>{member.name}</div>
                        <div style={teamRoleStyle}>{member.role}</div>
                        <div style={teamBioStyle}>{member.bio}</div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="about-cta-box" style={ctaBoxStyle}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🤍</div>
                <h2 style={ctaTitleStyle}>Be part of the story</h2>
                <p style={ctaSubtitleStyle}>Whether you want to ride with us, volunteer as a Buddy, or support our mission — there's a place for you.</p>
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