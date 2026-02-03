import React from 'react';
import Card from '../shared/Card';

const Testimonials = () => {
    React.useEffect(() => {
        const styleId = 'testimonials-responsive';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin: 0 auto !important; }
          .testimonials-section-title { font-size: 28px !important; }
        }
      `;
            document.head.appendChild(styleEl);
        }
    }, []);

    const testimonials = [
        {
            name: 'Amina K.',
            country: 'Nigeria',
            university: 'University of Toronto',
            text: 'I was so nervous about arriving in Canada alone. My Buddy, Sarah, was waiting right at arrivals with a sign. She helped me with my luggage, drove me to my dorm, and even showed me where the nearest grocery store was. I felt safe from the very first minute.',
            avatar: 'AK',
            avatarColor: '#5CB1D8',
        },
        {
            name: 'Liang W.',
            country: 'China',
            university: 'McGill University',
            text: 'I didn\'t even know how to read the signs at the airport. My Buddy spoke a little Mandarin and that made all the difference. BuddyRide turned what could have been the most stressful day into something really warm and welcoming.',
            avatar: 'LW',
            avatarColor: '#9DB637',
        },
        {
            name: 'Priya M.',
            country: 'India',
            university: 'Concordia University',
            text: 'As a Buddy volunteer, I get to be the first friendly face someone sees in a new country. There\'s no better feeling. I remember how lost I was when I first arrived, and now I get to make sure others don\'t have to feel that way.',
            avatar: 'PM',
            avatarColor: '#4A95BF',
        },
    ];

    const sectionStyle = {
        padding: '80px 24px',
        backgroundColor: '#F8F9FA',
    };

    const containerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        display: 'inline-block',
        backgroundColor: '#F0F5E0',
        color: '#9DB637',
        fontSize: '13px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        padding: '6px 16px',
        borderRadius: '50px',
        marginBottom: '16px',
    };

    const titleStyle = {
        fontSize: '36px',
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: '12px',
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#6C757D',
        maxWidth: '560px',
        margin: '0 auto 56px auto',
        lineHeight: '1.6',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '24px',
    };

    const quoteStyle = {
        fontSize: '15px',
        color: '#6C757D',
        lineHeight: '1.7',
        textAlign: 'left',
        fontStyle: 'italic',
        marginBottom: '24px',
    };

    const authorRowStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textAlign: 'left',
    };

    const avatarStyle = (color) => ({
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: color,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        fontWeight: '700',
        flexShrink: 0,
    });

    const authorNameStyle = {
        fontSize: '15px',
        fontWeight: '700',
        color: '#1A1A1A',
    };

    const authorMetaStyle = {
        fontSize: '13px',
        color: '#ADB5BD',
    };

    const starsStyle = {
        color: '#FFC107',
        fontSize: '16px',
        marginBottom: '12px',
        textAlign: 'left',
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={labelStyle}>Testimonials</div>
                <h2 className="testimonials-section-title" style={titleStyle}>Stories from the community</h2>
                <p style={subtitleStyle}>
                    Real experiences from students and volunteers who have been part of the BuddyRide family.
                </p>

                <div className="testimonials-grid" style={gridStyle}>
                    {testimonials.map((t, index) => (
                        <Card key={index} hoverEffect={true}>
                            <div style={starsStyle}>★★★★★</div>
                            <p style={quoteStyle}>"{t.text}"</p>
                            <div style={authorRowStyle}>
                                <div style={avatarStyle(t.avatarColor)}>{t.avatar}</div>
                                <div>
                                    <div style={authorNameStyle}>{t.name}</div>
                                    <div style={authorMetaStyle}>{t.country} · {t.university}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;