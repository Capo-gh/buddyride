import React from 'react';
import Card from '../shared/Card';

const testimonials = [
    {
        name: 'Ray Johnson',
        country: 'Ghana',
        university: 'McGill University',
        text: 'I joined BuddyRide because I believe no student should feel alone when arriving in a new country. I am excited to help new students feel connected and at home from the very beginning.',
        avatar: 'RJ',
        avatarColor: '#5CB1D8',
    },
    {
        name: 'Oluwafemi Oke',
        country: 'Nigeria',
        university: 'McGill University',
        text: "I joined BuddyRide because it stands for everything I value: kindness, community, and meaningful impact. Students arriving in a new country often face excitement mixed with uncertainty and vulnerability, and BuddyRide turns that moment into one of guidance, support, and belonging. I'm proud to help create a welcoming start that builds confidence and makes their journey brighter from day one.",
        avatar: 'OO',
        avatarColor: '#9DB637',
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

    const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' };

    const quoteStyle = {
        fontSize: '15px', color: '#6C757D', lineHeight: '1.7',
        textAlign: 'left', fontStyle: 'italic', marginBottom: '24px',
    };

    const authorRowStyle = { display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' };

    const avatarStyle = (color) => ({
        width: '44px', height: '44px', borderRadius: '50%',
        backgroundColor: color, color: '#FFFFFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '15px', fontWeight: '700', flexShrink: 0,
    });

    const starsStyle = { color: '#FFC107', fontSize: '16px', marginBottom: '12px', textAlign: 'left' };

    const TestimonialContent = ({ t }) => (
        <>
            <div style={starsStyle}>★★★★★</div>
            <p style={quoteStyle}>"{t.text}"</p>
            <div style={authorRowStyle}>
                <div style={avatarStyle(t.avatarColor)}>{t.avatar}</div>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#1A1A1A' }}>{t.name}</div>
                    <div style={{ fontSize: '13px', color: '#ADB5BD' }}>{t.country} · {t.university}</div>
                </div>
            </div>
        </>
    );

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
                        <Card key={index} hoverEffect={true}>
                            <TestimonialContent t={t} />
                        </Card>
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
