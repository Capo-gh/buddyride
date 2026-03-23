import React from 'react';
import Card from '../shared/Card';
import RayPhoto from '../../assets/team/Ray.jpeg';
import OluwafemiPhoto from '../../assets/team/Oluwafemi .jpeg';
import ChigoziePhoto from '../../assets/team/Chigozie Aniche.jpeg';
import AddisonPhoto from '../../assets/team/Addison.jpeg';
import IvyPhoto from '../../assets/team/Ivy.jpeg';
import JustinaPhoto from '../../assets/team/Justina.jpeg';

const testimonials = [
    {
        name: 'Ray Johnson',
        subtitle: 'Ghana · McGill University',
        text: 'I joined BuddyRide because I believe no student should feel alone when arriving in a new country. I am excited to help new students feel connected and at home from the very beginning.',
        photo: RayPhoto,
    },
    {
        name: 'Oluwafemi Oke',
        subtitle: 'Nigeria · McGill University',
        text: "I joined BuddyRide because it stands for everything I value: kindness, community, and meaningful impact. Students arriving in a new country often face excitement mixed with uncertainty and vulnerability, and BuddyRide turns that moment into one of guidance, support, and belonging. I'm proud to help create a welcoming start that builds confidence and makes their journey brighter from day one.",
        photo: OluwafemiPhoto,
    },
    {
        name: 'Chigozie Aniche',
        subtitle: 'Volunteer',
        text: 'Joining BuddyRide as a volunteer has been an incredible decision. I found a dedicated team committed to service, empathy, integrity, and trust — values that shape everything they build. International students often arrive carrying anxiety and uncertainty, especially when they have no familiar faces waiting for them. BuddyRide solves this. It ensures you feel secure, supported, and confident from the moment you land.',
        photo: ChigoziePhoto,
    },
    {
        name: 'Addison',
        subtitle: 'Ghana · University of Wisconsin-Madison',
        text: 'My decision to volunteer with BuddyRide comes from a deep desire to give back and pay forward the kindness I once received. When I first arrived in the United States, someone generously offered me a ride that helped me settle in during those early days. That simple act made a lasting impact. By volunteering as a driver, I hope to provide the same welcoming experience to new students.',
        photo: AddisonPhoto,
    },
    {
        name: 'Ivy',
        subtitle: 'Ghana · McGill University',
        text: 'I joined BuddyRide as a volunteer because I was inspired by three amazing individuals I know who are part of the initiative. Their leadership, dedication, and the way they carry out their work genuinely impressed me. I appreciate the purpose of BuddyRide in making transportation more accessible for people — being part of something that supports others in such a practical way is very meaningful.',
        photo: IvyPhoto,
    },
    {
        name: 'Justina',
        subtitle: 'Ghana · McGill University',
        text: 'My decision to join BuddyRide comes from deep gratitude and a desire to give back the support I once received. Moving to a new country and academic environment can be overwhelming, but guidance from upper-year scholars helped me navigate the transition. By joining BuddyRide, I hope to extend that same support to incoming students, ensuring they feel welcomed, guided, and empowered from the start.',
        photo: JustinaPhoto,
    },
];

const Testimonials = () => {
    const [current, setCurrent] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    const timerRef = React.useRef(null);

    // Detect mobile/tablet
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Auto-advance carousel on mobile
    React.useEffect(() => {
        if (!isMobile) return;
        timerRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 4500);
        return () => clearInterval(timerRef.current);
    }, [isMobile]);

    const goTo = (index) => {
        clearInterval(timerRef.current);
        setCurrent(index);
        // Restart auto-advance after manual nav
        timerRef.current = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 4500);
    };

    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((current + 1) % testimonials.length);

    React.useEffect(() => {
        const styleId = 'testimonials-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .testimonials-grid { display: none !important; }
          .testimonials-carousel { display: block !important; }
          .testimonials-section-title { font-size: 28px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 769px) {
          .testimonials-carousel { display: none !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const sectionStyle = { padding: '80px 24px', backgroundColor: '#F8F9FA' };
    const containerStyle = { maxWidth: '1000px', margin: '0 auto', textAlign: 'center' };

    const labelStyle = {
        display: 'inline-block', backgroundColor: '#F0F5E0', color: '#9DB637',
        fontSize: '13px', fontWeight: '700', textTransform: 'uppercase',
        letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px',
    };

    const titleStyle = { fontSize: '36px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' };

    const subtitleStyle = {
        fontSize: '16px', color: '#6C757D', maxWidth: '560px',
        margin: '0 auto 56px auto', lineHeight: '1.6',
    };

    const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto' };

    const quoteStyle = {
        fontSize: '15px', color: '#6C757D', lineHeight: '1.7',
        textAlign: 'left', fontStyle: 'italic', marginBottom: '24px',
    };

    const authorRowStyle = { display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' };

    const avatarStyle = {
        width: '44px', height: '44px', borderRadius: '50%',
        objectFit: 'cover', objectPosition: 'top', flexShrink: 0,
        border: '2px solid #DEE2E6',
    };

    const starsStyle = { color: '#FFC107', fontSize: '16px', marginBottom: '12px', textAlign: 'left' };

    const TEXT_LIMIT = 160;

    const TestimonialContent = ({ t }) => {
        const [expanded, setExpanded] = React.useState(false);
        const isLong = t.text.length > TEXT_LIMIT;
        const displayText = expanded || !isLong ? t.text : t.text.slice(0, TEXT_LIMIT).trimEnd() + '…';
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={starsStyle}>★★★★★</div>
                <p style={{ ...quoteStyle, flexGrow: 1 }}>"{displayText}"</p>
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: '12px', color: '#5CB1D8', fontWeight: '700',
                            padding: '0 0 12px 0', textAlign: 'left',
                        }}
                    >
                        {expanded ? '↑ Show less' : '↓ Read more'}
                    </button>
                )}
                <div style={authorRowStyle}>
                    <img src={t.photo} alt={t.name} style={avatarStyle} />
                    <div>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A1A' }}>{t.name}</div>
                        <div style={{ fontSize: '13px', color: '#ADB5BD' }}>{t.subtitle}</div>
                    </div>
                </div>
            </div>
        );
    };

    const t = testimonials[current];

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={labelStyle}>Testimonials</div>
                <h2 className="testimonials-section-title" style={titleStyle}>Stories from the community</h2>
                <p style={subtitleStyle}>
                    Real experiences from students and volunteers who have been part of the BuddyRide family.
                </p>

                {/* Desktop: 3-column grid */}
                <div className="testimonials-grid" style={gridStyle}>
                    {testimonials.map((t, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            <Card hoverEffect={true}>
                                <TestimonialContent t={t} />
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Mobile/tablet: carousel */}
                <div className="testimonials-carousel" style={{ display: 'none' }}>
                    {/* Card with slide transition */}
                    <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '24px' }}>
                        <div
                            style={{
                                display: 'flex',
                                transform: `translateX(-${current * 100}%)`,
                                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} style={{ minWidth: '100%', boxSizing: 'border-box', padding: '4px' }}>
                                    <div style={{
                                        backgroundColor: '#FFFFFF', borderRadius: '16px',
                                        padding: '28px 24px', border: '1px solid #DEE2E6',
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.07)', textAlign: 'left',
                                    }}>
                                        <TestimonialContent t={t} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                        {/* Prev */}
                        <button onClick={prev} style={{
                            width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #DEE2E6',
                            backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                        }}>‹</button>

                        {/* Dots */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    style={{
                                        width: i === current ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '50px',
                                        border: 'none', cursor: 'pointer',
                                        backgroundColor: i === current ? '#5CB1D8' : '#DEE2E6',
                                        transition: 'width 0.3s ease, background-color 0.3s ease',
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Next */}
                        <button onClick={next} style={{
                            width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #DEE2E6',
                            backgroundColor: '#FFFFFF', cursor: 'pointer', fontSize: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                        }}>›</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
