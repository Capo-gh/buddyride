import React from 'react';
import Button from '../components/shared/Button';
import FadeIn from '../components/shared/FadeIn';
import { ROUTES } from '../utils/routes';

import RaphaelPhoto from '../assets/team/Raphael.png';
import DonaldPhoto from '../assets/team/Donald.jpg';
import CharityPhoto from '../assets/team/Charity.jpg';
import EdmundPhoto from '../assets/team/Edmund.jpg';
import LindsayPhoto from '../assets/team/Lindsay.jpg';
import AbbasPhoto from '../assets/team/Abbas.jpg';
import CephasPhoto from '../assets/team/Cephas.png';
import BenedictaPhoto from '../assets/team/Benedicta.jpg';
import DerrickPhoto from '../assets/team/Derrick.jpg';
import NaomiPhoto from '../assets/team/Naomi.jpeg';
import RayPhoto from '../assets/team/Ray.jpeg';
import OluwafemiPhoto from '../assets/team/Oluwafemi .jpeg';

const LinkedInIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
);

const executives = [
    {
        name: 'Raphael Aidoo',
        role: 'President & Project Lead',
        color: '#5CB1D8',
        photo: RaphaelPhoto,
        email: 'raphael.aidoo@mail.mcgill.ca',
        linkedin: 'https://www.linkedin.com/in/raphaelaidoo/',
        shortBio: 'PhD candidate in Bioresource Engineering at McGill. Founded RaphAid Inc. and brings deep expertise in grassroots leadership and strategic community development.',
        fullBio: [
            'Raphael is a PhD candidate in Bioresource Engineering at McGill University, where his research focuses on advancing sustainable and technologically informed industrial bioprocessing solutions. His academic discipline is augmented by extensive experience in grassroots leadership and strategic community development.',
            'He founded RaphAid Incorporated, implementing a comprehensive three-year capacity-building program for high school students in marginalized communities across Ghana, and established the Training the Trainers initiative to cultivate leadership competencies among youth from rural backgrounds.',
            'Raphael also directed an education transition program that successfully intermediated the matriculation of high-achieving, financially disadvantaged students into tertiary institutions. He serves as a Mentorship Committee Member for the African Network Group of ASABE, and is co-founder of the Ghana Association of Montreal Students.',
        ],
    },
    {
        name: 'Donald Bimpong',
        role: 'VP, Operations & Logistics',
        color: '#9DB637',
        photo: DonaldPhoto,
        email: 'donald.bimpong@mail.mcgill.ca',
        linkedin: 'https://www.linkedin.com/in/donald-bimpong-373aa5177/',
        shortBio: 'PhD student in Food Science at McGill and a Mastercard Scholar. His firsthand experience as an international student drives his passion for making newcomers feel at home.',
        fullBio: [
            'Donald is currently pursuing his PhD in the Department of Food Science at McGill University. His rigorous commitment to scientific excellence is paralleled by an extensive, proven record as a leader who prioritizes care, service, and organizational efficacy.',
            'As both an international student and a distinguished Mastercard Scholar, he possesses a firsthand, nuanced understanding of the challenges associated with integration, transition, and establishing a sense of belonging far from home. This lived experience directly informs his passion for BuddyRide.',
            'Donald offers a compelling mix of scientific diligence, operational leadership, and profound human empathy. He ensures the initiative operates with strategic clarity, efficiency, and genuine commitment to inclusion.',
        ],
    },
    {
        name: 'Charity O. Darkwa',
        role: 'VP, Communications & HR',
        color: '#4A95BF',
        photo: CharityPhoto,
        email: 'charchaa240@gmail.com',
        linkedin: 'https://www.linkedin.com/in/charityodarkwa/',
        shortBio: "Pursuing a Master's in Communication & Public Policy at the University of Michigan. Founded SmilingHour and leads BuddyRide's outreach and team development.",
        fullBio: [
            "Charity is a dedicated leader currently deepening her expertise through a second master's program in Communication and Public Policy at the University of Michigan, USA, merging rigorous policy analysis with the nuanced art of strategic communication.",
            "Her professional track record demonstrates a profound understanding of how to catalyze community growth. Her roles have been central to successful outreach design, campaign leadership, and capacity building, empowering local organizations and individuals for long-term self-sufficiency.",
            "The depth of Charity's personal passion is embodied in SmilingHour, an initiative she founded with the mission of 'building young people and presenting hope to dying dreams.' She is uniquely prepared to ensure BuddyRide's mission translates into widespread, sustainable public benefit.",
        ],
    },
    {
        name: 'Edmund Larbi Afari',
        role: 'VP, Finance & WA State Rep',
        color: '#85991E',
        photo: EdmundPhoto,
        email: 'afarilarbiedmund19@gmail.com',
        linkedin: 'https://www.linkedin.com/in/edmundafari/',
        shortBio: "PhD student in Food Science at Washington State University. A seasoned student leader and BuddyRide's Washington State Representative.",
        fullBio: [
            "Edmund is a distinguished PhD student in the Department of Food Science at Washington State University, USA. His academic path is underpinned by an enviable record of community impact, strategic leadership, and consistent academic excellence.",
            "His leadership experience includes serving as Student Representative of Queen's University Belfast Graduate Student Body, Past Lead for the AFSTS Mentorship Program at KNUST, and currently as a Senator at the WSU Graduate and Professional Students Association.",
            "As BuddyRide's Washington State Representative and Finance Manager, Edmund leads local establishment and outreach efforts, ensuring the systematic expansion of services within the state. His proven capacity to govern and organize ensures a sustainable and highly motivated support base.",
        ],
    },
];

const coordinators = [
    {
        name: 'Lindsay Kamgang',
        role: 'Communication & Request Co-ordinator',
        color: '#5CB1D8',
        photo: LindsayPhoto,
        linkedin: 'https://www.linkedin.com/in/lindsay-k-124939211/',
        bio: 'Ensures every ride request and communication is handled smoothly and with care.',
    },
    {
        name: 'Abbas Sadiq',
        role: 'Volunteer Co-ordinator',
        color: '#9DB637',
        photo: AbbasPhoto,
        linkedin: 'https://www.linkedin.com/in/abbas-sadiq-4aaa01167/',
        bio: 'Recruits and supports our Buddy volunteers, keeping them motivated and well-equipped.',
    },
    {
        name: 'Cephas Amoah',
        role: 'Volunteer Co-ordinator',
        color: '#4A95BF',
        photo: CephasPhoto,
        linkedin: 'https://www.linkedin.com/in/cephas-amoah-954350118',
        bio: 'Grows the volunteer base and maintains a strong, engaged community of Buddies.',
    },
    {
        name: 'Benedicta N. Biyimba',
        role: 'Welfare & Organization Co-ordinator',
        color: '#85991E',
        photo: BenedictaPhoto,
        linkedin: 'https://www.linkedin.com/in/benenji-biyimba/',
        bio: 'Oversees the welfare of riders and Buddies, ensuring every experience is safe and caring.',
    },
    {
        name: 'Derrick K. Allotey',
        role: 'Welfare & Organization Co-ordinator',
        color: '#5CB1D8',
        photo: DerrickPhoto,
        linkedin: 'https://www.linkedin.com/in/derrick-kpakpo-allotey-7bb32b14a/',
        bio: 'Supports organization-wide operations and coordination between all teams.',
    },
    {
        name: 'Naomi Fokuo',
        role: 'Outreach & Partnership Co-ordinator',
        color: '#9DB637',
        photo: NaomiPhoto,
        linkedin: 'https://www.linkedin.com/in/naomi-fokuo-9354a9184',
        bio: 'Drives community partnerships and extends BuddyRide\'s reach to more campuses and cities across North America.',
    },
];

const volunteers = [
    {
        name: 'Ray Johnson',
        role: 'Finance & Welfare Volunteer',
        color: '#5CB1D8',
        photo: RayPhoto,
        university: 'McGill University',
        bio: 'I joined BuddyRide because I believe no student should feel alone when arriving in a new country. I am excited to help new students feel connected and at home from the very beginning.',
    },
    {
        name: 'Oluwafemi Oke',
        role: 'Communications & Media Volunteer',
        color: '#9DB637',
        photo: OluwafemiPhoto,
        university: 'McGill University',
        bio: 'I joined BuddyRide because it stands for everything I value: kindness, community, and meaningful impact. Students arriving in a new country often face excitement mixed with uncertainty and vulnerability, and BuddyRide turns that moment into one of guidance, support, and belonging. I\'m proud to help create a welcoming start that builds confidence and makes their journey brighter from day one.',
    },
];

const openRoles = [
    {
        role: 'Technology & Systems Co-ordinator',
        color: '#9DB637',
        desc: "Build and maintain the platforms and tools that power BuddyRide's mission. We're looking for someone passionate about tech for good.",
    },
];

const Executives = ({ setCurrentPage }) => {
    React.useEffect(() => {
        const styleId = 'executives-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 900px) {
          .exec-leaders-grid { grid-template-columns: 1fr 1fr !important; }
          .exec-coord-grid { grid-template-columns: 1fr 1fr !important; }
          .exec-open-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin-left: auto !important; margin-right: auto !important; }
        }
        @media (max-width: 560px) {
          .exec-leaders-grid { grid-template-columns: 1fr !important; max-width: 380px !important; margin-left: auto !important; margin-right: auto !important; }
          .exec-coord-grid { grid-template-columns: 1fr !important; max-width: 380px !important; margin-left: auto !important; margin-right: auto !important; }
          .exec-container { padding: 40px 20px !important; }
          .exec-title { font-size: 28px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const sectionLabel = (bg, fg) => ({
        display: 'inline-block', backgroundColor: bg, color: fg,
        fontSize: '13px', fontWeight: '700', textTransform: 'uppercase',
        letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '14px',
    });

    const ExecCard = ({ member }) => {
        const [expanded, setExpanded] = React.useState(false);
        const [hovered, setHovered] = React.useState(false);
        return (
            <div
                style={{
                    backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '28px 20px',
                    textAlign: 'center', border: '1px solid #DEE2E6',
                    boxShadow: hovered ? `0 10px 32px ${member.color}28` : '0 4px 16px rgba(0,0,0,0.06)',
                    transform: hovered ? 'translateY(-4px)' : 'none',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                    display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img src={member.photo} alt={member.name} style={{
                    width: '130px', height: '130px', borderRadius: '50%',
                    objectFit: 'cover', objectPosition: 'top',
                    margin: '0 auto 14px auto', display: 'block',
                    border: `3px solid ${member.color}`,
                    boxShadow: `0 4px 14px ${member.color}44`,
                }} />
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1A1A1A', marginBottom: '3px' }}>{member.name}</div>
                <div style={{ fontSize: '12px', color: member.color, fontWeight: '700', marginBottom: '14px', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{member.role}</div>

                <div style={{ fontSize: '13px', color: '#6C757D', lineHeight: '1.65', marginBottom: '12px', textAlign: 'left' }}>
                    {expanded
                        ? member.fullBio.map((p, i) => <p key={i} style={{ margin: i < member.fullBio.length - 1 ? '0 0 10px 0' : 0 }}>{p}</p>)
                        : <p style={{ margin: 0 }}>{member.shortBio}</p>
                    }
                </div>

                <button
                    onClick={() => setExpanded(!expanded)}
                    style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontSize: '12px', color: member.color, fontWeight: '700',
                        padding: '2px 0', marginBottom: '14px', textAlign: 'left',
                    }}
                >
                    {expanded ? '↑ Show less' : '↓ Read full bio'}
                </button>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            padding: '6px 12px', borderRadius: '6px',
                            backgroundColor: '#EBF5FA', color: '#0A66C2',
                            fontSize: '12px', fontWeight: '600', textDecoration: 'none',
                        }}>
                            <LinkedInIcon /> LinkedIn
                        </a>
                    )}
                    {member.email && (
                        <a href={`mailto:${member.email}`} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            padding: '6px 12px', borderRadius: '6px',
                            backgroundColor: '#F0F5E0', color: '#85991E',
                            fontSize: '12px', fontWeight: '600', textDecoration: 'none',
                        }}>
                            ✉ Email
                        </a>
                    )}
                </div>
            </div>
        );
    };

    const CoordCard = ({ member }) => {
        const [hovered, setHovered] = React.useState(false);
        const [expanded, setExpanded] = React.useState(false);
        const BIO_LIMIT = 100;
        const isLong = member.bio.length > BIO_LIMIT;
        const displayBio = expanded || !isLong ? member.bio : member.bio.slice(0, BIO_LIMIT).trimEnd() + '…';
        return (
            <div
                style={{
                    backgroundColor: '#FFFFFF', borderRadius: '18px', padding: '24px 20px',
                    textAlign: 'center', border: '1px solid #DEE2E6',
                    boxShadow: hovered ? `0 8px 24px ${member.color}22` : '0 2px 10px rgba(0,0,0,0.05)',
                    transform: hovered ? 'translateY(-3px)' : 'none',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                    display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img src={member.photo} alt={member.name} style={{
                    width: '100px', height: '100px', borderRadius: '50%',
                    objectFit: 'cover', objectPosition: 'top',
                    margin: '0 auto 12px auto', display: 'block',
                    border: `3px solid ${member.color}`,
                }} />
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A1A', marginBottom: '3px' }}>{member.name}</div>
                <div style={{ fontSize: '12px', color: member.color, fontWeight: '600', marginBottom: '10px', lineHeight: '1.4' }}>{member.role}</div>
                <p style={{ fontSize: '13px', color: '#6C757D', lineHeight: '1.5', marginBottom: '4px', textAlign: 'left' }}>{displayBio}</p>
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: '12px', color: member.color, fontWeight: '700',
                            padding: '2px 0', marginBottom: '10px', textAlign: 'left',
                        }}
                    >
                        {expanded ? '↑ Show less' : '↓ Read more'}
                    </button>
                )}
                {!isLong && <div style={{ marginBottom: '10px' }} />}
                {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '5px 10px', borderRadius: '6px',
                        backgroundColor: '#EBF5FA', color: '#0A66C2',
                        fontSize: '12px', fontWeight: '600', textDecoration: 'none',
                        marginTop: 'auto',
                    }}>
                        <LinkedInIcon /> LinkedIn
                    </a>
                )}
            </div>
        );
    };

    const OpenRoleCard = ({ role }) => {
        const [hovered, setHovered] = React.useState(false);
        return (
            <div
                style={{
                    borderRadius: '18px', padding: '32px 24px', textAlign: 'center',
                    border: `2px dashed ${role.color}66`,
                    background: `linear-gradient(135deg, ${role.color}08, ${role.color}18)`,
                    boxShadow: hovered ? `0 8px 24px ${role.color}20` : 'none',
                    transform: hovered ? 'translateY(-3px)' : 'none',
                    transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: `${role.color}22`, border: `2px dashed ${role.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 14px auto', fontSize: '24px',
                }}>🔍</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A1A', marginBottom: '6px' }}>{role.role}</div>
                <div style={{
                    display: 'inline-block', backgroundColor: `${role.color}22`, color: role.color,
                    fontSize: '11px', fontWeight: '700', padding: '3px 10px',
                    borderRadius: '50px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px',
                }}>We're Hiring</div>
                <p style={{ fontSize: '13px', color: '#6C757D', lineHeight: '1.6', marginBottom: '18px' }}>{role.desc}</p>
                <a
                    href="mailto:buddyrideinc@gmail.com?subject=Application – Coordinator Role"
                    style={{
                        display: 'inline-block', padding: '9px 20px', borderRadius: '8px',
                        backgroundColor: role.color, color: '#FFFFFF',
                        fontSize: '13px', fontWeight: '600', textDecoration: 'none',
                    }}
                >
                    Apply Now →
                </a>
            </div>
        );
    };

    return (
        <div className="exec-container" style={{ padding: '60px 24px', maxWidth: '1040px', margin: '0 auto' }}>
            {/* Header */}
            <FadeIn>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏅</div>
                    <h1 className="exec-title" style={{ fontSize: '36px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>Meet the Team</h1>
                    <p style={{ fontSize: '17px', color: '#6C757D', lineHeight: '1.6', maxWidth: '580px', margin: '0 auto' }}>
                        Behind every safe arrival is a dedicated team of student leaders who believe in the power of community.
                    </p>
                </div>
            </FadeIn>

            {/* Executive Leadership */}
            <FadeIn delay="0.05s">
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={sectionLabel('#F0F5E0', '#9DB637')}>Executive Leadership</div>
                    <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1A1A1A', marginBottom: '0' }}>The people behind the rides</h2>
                </div>
            </FadeIn>
            <div className="exec-leaders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '24px', marginBottom: '72px' }}>
                {executives.map((member, i) => (
                    <FadeIn key={i} delay={`${0.1 + i * 0.08}s`}>
                        <ExecCard member={member} />
                    </FadeIn>
                ))}
            </div>

            <div style={{ height: '1px', backgroundColor: '#DEE2E6', margin: '0 0 56px 0' }}></div>

            {/* Coordinating Team */}
            <FadeIn delay="0.05s">
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={sectionLabel('#EBF5FA', '#5CB1D8')}>Coordinating Team</div>
                    <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1A1A1A', marginBottom: '0' }}>The hands that make it all work</h2>
                </div>
            </FadeIn>
            <div className="exec-coord-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '72px' }}>
                {coordinators.map((member, i) => (
                    <FadeIn key={i} delay={`${0.1 + i * 0.07}s`}>
                        <CoordCard member={member} />
                    </FadeIn>
                ))}
            </div>

            <div style={{ height: '1px', backgroundColor: '#DEE2E6', margin: '0 0 56px 0' }}></div>

            {/* Volunteers */}
            <FadeIn delay="0.05s">
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={sectionLabel('#F0F5E0', '#9DB637')}>Volunteers</div>
                    <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1A1A1A', marginBottom: '0' }}>The people who show up</h2>
                </div>
            </FadeIn>
            <div className="exec-coord-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '72px' }}>
                {volunteers.map((member, i) => (
                    <FadeIn key={i} delay={`${0.1 + i * 0.07}s`}>
                        <CoordCard member={member} />
                    </FadeIn>
                ))}
            </div>

            <div style={{ height: '1px', backgroundColor: '#DEE2E6', margin: '0 0 56px 0' }}></div>

            {/* Open Roles */}
            <FadeIn delay="0.05s">
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <div style={sectionLabel('#FFF3CD', '#856404')}>Join the Team</div>
                    <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#1A1A1A', marginBottom: '8px' }}>Open Positions</h2>
                    <p style={{ fontSize: '15px', color: '#6C757D' }}>We're growing and looking for passionate coordinators to join our mission.</p>
                </div>
            </FadeIn>
            <div className="exec-open-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '64px' }}>
                {openRoles.map((role, i) => (
                    <FadeIn key={i} delay={`${0.1 + i * 0.1}s`}>
                        <OpenRoleCard role={role} />
                    </FadeIn>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <Button variant="outline" onClick={() => setCurrentPage(ROUTES.ABOUT)}>← Back to About Us</Button>
            </div>
        </div>
    );
};

export default Executives;
